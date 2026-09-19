import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Compass } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import profileImg from '../assets/profile.jpg';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-[#0B0B0B] border-t border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-[#D4FF00]"></span>
          <span className="text-xs font-mono tracking-widest text-[#D4FF00] uppercase font-semibold">01 // ABOUT ME</span>
        </div>

        {/* Large Statement */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight uppercase leading-tight mb-16 max-w-4xl">
          Designing the interface. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF00] to-gray-400">
            Building the experience.
          </span>
        </h2>

        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Premium Featured Profile Photograph */}
          <div className="lg:col-span-5 relative group">
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:max-w-none rounded-3xl glass-card overflow-hidden border border-white/15 p-3 accent-border-glow transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              {/* Background Ambient Aura Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#D4FF00]/10 blur-[80px] pointer-events-none group-hover:bg-[#D4FF00]/20 transition-colors duration-500" />
              
              {/* Portrait Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={profileImg}
                  alt="Nandela Sai Teja - UI/UX Designer & Full Stack Developer"
                  className="w-full h-full object-cover object-top scale-[1.01] group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle Gradient Overlays for High-End Cinematic Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-card border border-white/15 backdrop-blur-md flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-heading font-bold text-white uppercase tracking-wider">
                      {portfolioData.personal.name}
                    </h3>
                    <p className="text-[11px] font-mono text-[#D4FF00] uppercase mt-0.5">
                      {portfolioData.personal.role}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#D4FF00] text-black text-[10px] font-mono font-extrabold uppercase">
                    <span>VERIFIED</span>
                  </div>
                </div>
              </div>

              {/* Badges Below Frame */}
              <div className="mt-3 py-2 flex flex-wrap items-center justify-center gap-2">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-gray-300">
                  📍 {portfolioData.personal.shortLocation}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-gray-300">
                  🎓 VIIT Engineering Graduate
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Biography */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="space-y-6 text-gray-300 text-lg sm:text-xl leading-relaxed font-sans font-light">
              {portfolioData.personal.bio.map((paragraph, idx) => (
                <p key={idx} className="relative pl-5 border-l-2 border-[#D4FF00]/50">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quick Highlights / Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="flex items-start gap-3 p-4 rounded-2xl glass-card border border-white/5 hover:border-[#D4FF00]/30 transition-colors">
                <div className="p-2.5 rounded-xl bg-[#D4FF00]/10 text-[#D4FF00]">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-heading font-semibold text-white uppercase">Avid Reader</h4>
                  <p className="text-xs text-gray-400 mt-1">Continuous learner exploring tech & design literature.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl glass-card border border-white/5 hover:border-[#D4FF00]/30 transition-colors">
                <div className="p-2.5 rounded-xl bg-[#D4FF00]/10 text-[#D4FF00]">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-heading font-semibold text-white uppercase">Creator at Heart</h4>
                  <p className="text-xs text-gray-400 mt-1">Transforming abstract ideas into real-world tools.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.quickStats.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="glass-card p-6 rounded-2xl border border-white/10 relative overflow-hidden group hover:border-[#D4FF00]/40 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4FF00]/5 rounded-bl-full pointer-events-none group-hover:bg-[#D4FF00]/10 transition-colors" />
              <div className="text-4xl lg:text-5xl font-heading font-extrabold text-[#D4FF00] mb-2 tracking-tight">
                {stat.number}
              </div>
              <div className="text-xs font-mono font-bold tracking-widest text-white uppercase mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-gray-400 font-sans">
                {stat.subtext}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
