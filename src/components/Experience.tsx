import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-[#080808] border-t border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-[#D4FF00]"></span>
          <span className="text-xs font-mono tracking-widest text-[#D4FF00] uppercase font-semibold">06 // EDUCATION & BACKGROUND</span>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl sm:text-6xl font-heading font-extrabold text-white tracking-tight uppercase leading-none">
            ACADEMIC FOUNDATION
          </h2>
          <p className="text-base text-gray-400 font-sans mt-3">
            Educational milestones that shaped my engineering mindset and problem-solving discipline.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-10 border-l-2 border-white/10 space-y-12">
          {portfolioData.education.map((edu, idx) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Dot Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#080808] border-2 border-[#D4FF00] flex items-center justify-center group-hover:scale-125 group-hover:bg-[#D4FF00] transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-[#D4FF00] group-hover:bg-black" />
              </div>

              {/* Content Card */}
              <div className="p-8 rounded-3xl glass-card border border-white/10 hover:border-[#D4FF00]/40 transition-all duration-300 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <span className="text-xs font-mono text-[#D4FF00] uppercase font-bold tracking-widest">
                      {edu.degree}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white uppercase tracking-tight mt-1">
                      {edu.institution}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                    <MapPin className="w-3.5 h-3.5 text-[#D4FF00]" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-300 font-sans leading-relaxed font-light">
                  {edu.description}
                </p>

                {edu.highlights && (
                  <div className="pt-2 flex flex-wrap gap-2">
                    {edu.highlights.map((item, hIdx) => (
                      <span key={hIdx} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-sans text-gray-300">
                        <CheckCircle className="w-3 h-3 text-[#D4FF00]" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
