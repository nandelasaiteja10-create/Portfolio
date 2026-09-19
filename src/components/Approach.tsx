import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Layers, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Approach: React.FC = () => {
  return (
    <section className="py-28 relative bg-black overflow-hidden border-t border-[#1F1F1F]">
      {/* Background Lighting Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] bg-gradient-to-r from-[#D4FF00]/10 via-blue-500/5 to-purple-500/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center relative z-10 space-y-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-[#D4FF00]/40 text-[#D4FF00] text-xs font-mono tracking-widest uppercase"
        >
          <Sparkles className="w-4 h-4" />
          <span>PRODUCT MINDSET</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-white uppercase tracking-tight leading-none max-w-4xl mx-auto"
        >
          "{portfolioData.personal.approachBold}"
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-2xl text-gray-300 font-sans font-light leading-relaxed max-w-3xl mx-auto"
        >
          {portfolioData.personal.approachText}
        </motion.p>

        {/* Dynamic Dual Badge Visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="pt-6 flex flex-wrap items-center justify-center gap-6"
        >
          <div className="flex items-center gap-3 px-6 py-3 rounded-2xl glass-card border border-white/10">
            <Layers className="w-5 h-5 text-[#D4FF00]" />
            <span className="text-xs font-heading font-bold text-white tracking-widest uppercase">
              100% DESIGN PRECISION
            </span>
          </div>

          <span className="text-gray-600 font-mono text-xl">+</span>

          <div className="flex items-center gap-3 px-6 py-3 rounded-2xl glass-card border border-white/10">
            <Terminal className="w-5 h-5 text-[#D4FF00]" />
            <span className="text-xs font-heading font-bold text-white tracking-widest uppercase">
              100% CODE CRAFT
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
