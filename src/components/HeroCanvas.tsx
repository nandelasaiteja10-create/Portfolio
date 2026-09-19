import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const HeroCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group to hold all objects for parallax mouse tilt
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Outer Wireframe Sphere / Dodecahedron
    const outerGeo = new THREE.IcosahedronGeometry(2.2, 1);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0xD4FF00,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    mainGroup.add(outerMesh);

    // 2. Inner Solid Tech Cube / Core
    const innerGeo = new THREE.OctahedronGeometry(1.2, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerMesh);

    // 3. Glowing Core Node Point Light
    const lightGeo = new THREE.SphereGeometry(0.3, 16, 16);
    const lightMat = new THREE.MeshBasicMaterial({
      color: 0xD4FF00,
      transparent: true,
      opacity: 0.8,
    });
    const lightMesh = new THREE.Mesh(lightGeo, lightMat);
    mainGroup.add(lightMesh);

    // 4. Orbiting Rings (UI & Code Rings)
    const createRing = (radius: number, color: number, rotationX: number, rotationY: number) => {
      const ringGeo = new THREE.TorusGeometry(radius, 0.012, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.4 });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = rotationX;
      ringMesh.rotation.y = rotationY;
      return ringMesh;
    };

    const ring1 = createRing(2.8, 0xD4FF00, Math.PI / 3, Math.PI / 6);
    const ring2 = createRing(3.2, 0x444444, -Math.PI / 4, Math.PI / 3);
    const ring3 = createRing(3.6, 0x222222, Math.PI / 2, 0);
    mainGroup.add(ring1, ring2, ring3);

    // 5. Floating Particle Nodes
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const primaryColor = new THREE.Color(0xD4FF00);
    const secColor = new THREE.Color(0x888888);

    for (let i = 0; i < particleCount; i++) {
      const r = 2.5 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI * 2;

      positions[i * 3] = r * Math.sin(theta) * Math.cos(phi);
      positions[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = r * Math.cos(theta);

      const mix = Math.random();
      const c = mix > 0.5 ? primaryColor : secColor;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particles);

    // Mouse Parallax Logic
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Slow Rotations
      outerMesh.rotation.x = elapsedTime * 0.15;
      outerMesh.rotation.y = elapsedTime * 0.2;

      innerMesh.rotation.x = -elapsedTime * 0.3;
      innerMesh.rotation.y = elapsedTime * 0.25;

      ring1.rotation.z = elapsedTime * 0.1;
      ring2.rotation.z = -elapsedTime * 0.12;
      ring3.rotation.z = elapsedTime * 0.08;

      particles.rotation.y = elapsedTime * 0.05;

      // Mouse Parallax Smooth Lerp
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      mainGroup.rotation.y = targetX * 0.6;
      mainGroup.rotation.x = -targetY * 0.4;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] lg:h-[550px] flex items-center justify-center">
      {/* Three.js canvas container */}
      <div ref={mountRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating UI panel overlays to enhance DESIGN + CODE + ENGINEERING theme */}
      <div className="absolute top-6 left-4 md:left-10 glass-card px-3 py-2 rounded-lg text-[11px] font-mono text-[#D4FF00] flex items-center gap-2 border border-[#D4FF00]/30 shadow-lg pointer-events-none animate-pulse">
        <span className="w-2 h-2 rounded-full bg-[#D4FF00]"></span>
        <span>DESIGN // WIREFRAME.SYS</span>
      </div>

      <div className="absolute bottom-10 right-4 md:right-10 glass-card px-3.5 py-2.5 rounded-xl text-xs font-mono text-gray-300 flex flex-col gap-1 border border-white/10 pointer-events-none shadow-2xl">
        <div className="flex items-center justify-between gap-4">
          <span className="text-gray-400">STACK</span>
          <span className="text-[#D4FF00] font-semibold">REACT + THREE.JS</span>
        </div>
        <div className="w-36 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div className="w-3/4 h-full bg-[#D4FF00] rounded-full"></div>
        </div>
      </div>

      <div className="absolute bottom-24 left-6 hidden md:flex glass-card px-3 py-1.5 rounded-md text-[10px] font-mono text-gray-400 gap-2 border border-white/10 pointer-events-none">
        <span className="text-white">STATUS:</span>
        <span className="text-emerald-400">BUILD_READY</span>
      </div>
    </div>
  );
};
