import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorVariant, setCursorVariant] = useState<'default' | 'pointer' | 'project' | 'hidden'>('default');
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) {
      setCursorVariant('hidden');
      return;
    }

    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]');
      const cursorTextTarget = target.closest('[data-cursor-text]');
      const isClickable = target.closest('a, button, input, textarea, select, [role="button"]');

      if (cursorTextTarget) {
        const text = cursorTextTarget.getAttribute('data-cursor-text') || 'VIEW';
        setCursorText(text);
        setCursorVariant('project');
      } else if (cursorTarget) {
        const variant = cursorTarget.getAttribute('data-cursor') || 'pointer';
        if (variant === 'view') {
          setCursorText('VIEW');
          setCursorVariant('project');
        } else {
          setCursorVariant('pointer');
          setCursorText('');
        }
      } else if (isClickable) {
        setCursorVariant('pointer');
        setCursorText('');
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (cursorVariant === 'hidden' || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full flex items-center justify-center border border-[#D4FF00]/80 shadow-[0_0_15px_rgba(212,255,0,0.3)] transition-colors duration-150"
        animate={{
          x: mousePosition.x - (cursorVariant === 'project' ? 36 : cursorVariant === 'pointer' ? 24 : 16),
          y: mousePosition.y - (cursorVariant === 'project' ? 36 : cursorVariant === 'pointer' ? 24 : 16),
          width: cursorVariant === 'project' ? 72 : cursorVariant === 'pointer' ? 48 : 32,
          height: cursorVariant === 'project' ? 72 : cursorVariant === 'pointer' ? 48 : 32,
          backgroundColor: cursorVariant === 'project' ? 'rgba(212, 255, 0, 0.95)' : cursorVariant === 'pointer' ? 'rgba(212, 255, 0, 0.15)' : 'rgba(212, 255, 0, 0.05)',
          scale: cursorVariant === 'pointer' ? 1.1 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 350,
          mass: 0.2,
        }}
      >
        {cursorVariant === 'project' && (
          <span className="text-black font-heading font-bold text-xs tracking-wider uppercase">
            {cursorText || 'VIEW'}
          </span>
        )}
      </motion.div>

      {/* Inner Dot */}
      {cursorVariant !== 'project' && (
        <motion.div
          className="fixed top-0 left-0 w-2 h-2 bg-[#D4FF00] rounded-full shadow-[0_0_8px_#D4FF00]"
          animate={{
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            scale: cursorVariant === 'pointer' ? 0.5 : 1,
          }}
          transition={{
            type: 'spring',
            damping: 40,
            stiffness: 800,
            mass: 0.05,
          }}
        />
      )}
    </div>
  );
};
