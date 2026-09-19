import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Code, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative bg-[#080808] border-t border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-[#D4FF00]"></span>
          <span className="text-xs font-mono tracking-widest text-[#D4FF00] uppercase font-semibold">04 // SKILLS & EXPERTISE</span>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl sm:text-6xl font-heading font-extrabold text-white tracking-tight uppercase leading-none">
            SKILLS & CAPABILITIES
          </h2>
          <p className="text-base text-gray-400 font-sans mt-3">
            Full-spectrum capabilities covering user experience design and software engineering.
          </p>
        </div>

        {/* Dual Pillar Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Pillar 1: UI/UX & Design Capabilities */}
          <motion.div
            whileHover={{ y: -4 }}
            className="p-8 rounded-3xl glass-card border border-white/10 relative overflow-hidden group accent-border-glow transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-2xl bg-[#D4FF00]/10 text-[#D4FF00] border border-[#D4FF00]/30">
                <Palette className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-extrabold text-white uppercase tracking-tight">
                  UI/UX & CREATIVE DESIGN
                </h3>
                <span className="text-xs font-mono text-gray-400 uppercase">PRODUCT EXPERIENCE & CRAFT</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {portfolioData.skills.design.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3 hover:border-[#D4FF00]/40 hover:bg-white/10 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#D4FF00] shrink-0" />
                  <span className="text-xs font-sans text-gray-200 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pillar 2: Full Stack Development Capabilities */}
          <motion.div
            whileHover={{ y: -4 }}
            className="p-8 rounded-3xl glass-card border border-white/10 relative overflow-hidden group accent-border-glow transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-2xl bg-[#D4FF00]/10 text-[#D4FF00] border border-[#D4FF00]/30">
                <Code className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-extrabold text-white uppercase tracking-tight">
                  FULL STACK ENGINEERING
                </h3>
                <span className="text-xs font-mono text-gray-400 uppercase">FRONT-END, BACK-END & ARCHITECTURE</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {portfolioData.skills.development.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3 hover:border-[#D4FF00]/40 hover:bg-white/10 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#D4FF00] shrink-0" />
                  <span className="text-xs font-sans text-gray-200 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
