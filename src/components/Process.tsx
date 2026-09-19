import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export const Process: React.FC = () => {
  return (
    <section className="py-24 relative bg-[#0B0B0B] border-t border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-[#D4FF00]"></span>
          <span className="text-xs font-mono tracking-widest text-[#D4FF00] uppercase font-semibold">07 // CREATIVE PROCESS</span>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl sm:text-6xl font-heading font-extrabold text-white tracking-tight uppercase leading-none">
            HOW I WORK
          </h2>
          <p className="text-base text-gray-400 font-sans mt-3">
            A battle-tested 5-step methodology ensuring clarity, speed, and design rigor.
          </p>
        </div>

        {/* 5-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {portfolioData.process.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-6 rounded-3xl glass-card border border-white/10 flex flex-col justify-between hover:border-[#D4FF00]/40 transition-all duration-300 relative group"
            >
              <div>
                <span className="text-3xl font-heading font-extrabold text-[#D4FF00] mb-4 block group-hover:scale-110 transition-transform origin-left">
                  {step.number}
                </span>
                <h3 className="text-lg font-heading font-extrabold text-white uppercase tracking-tight mb-2">
                  {step.title}
                </h3>
              </div>

              <p className="text-xs text-gray-400 font-sans leading-relaxed mt-4">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
