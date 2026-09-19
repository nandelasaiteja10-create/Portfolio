import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Philosophy: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="philosophy" className="py-24 relative bg-[#080808] overflow-hidden border-t border-[#1F1F1F]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4FF00]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-[#D4FF00]"></span>
          <span className="text-xs font-mono tracking-widest text-[#D4FF00] uppercase font-semibold">02 // DESIGN PHILOSOPHY</span>
        </div>

        {/* Heading & Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-20">
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight uppercase leading-tight">
              UNDERSTAND <br />
              <span className="text-[#D4FF00]">→ DESIGN → BUILD → SHIP</span>
            </h2>
          </div>

          <div className="lg:col-span-6">
            <blockquote className="text-lg md:text-xl text-gray-300 font-sans italic font-light pl-6 border-l-2 border-[#D4FF00] leading-relaxed">
              "{portfolioData.personal.philosophyQuote}"
            </blockquote>
          </div>
        </div>

        {/* Interactive 5-Step Process Timeline Stepper */}
        <div className="relative pt-8">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-[52px] left-0 right-0 h-0.5 bg-white/10 z-0">
            <motion.div
              className="h-full bg-[#D4FF00] transition-all duration-500"
              style={{ width: `${(activeStep / (portfolioData.philosophyStages.length - 1)) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {portfolioData.philosophyStages.map((stage, idx) => {
              const isActive = idx <= activeStep;
              const isCurrent = idx === activeStep;

              return (
                <div
                  key={stage.step}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer p-6 rounded-2xl transition-all duration-300 ${
                    isCurrent
                      ? 'glass-card border-2 border-[#D4FF00] shadow-[0_0_25px_rgba(212,255,0,0.15)] bg-[#121212]'
                      : isActive
                      ? 'glass-card border border-white/20 bg-[#0E0E0E]'
                      : 'glass-card border border-white/5 opacity-60 hover:opacity-100 hover:border-white/20'
                  }`}
                >
                  {/* Step Node Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`text-xs font-mono font-bold tracking-widest px-2.5 py-1 rounded-md ${
                        isCurrent
                          ? 'bg-[#D4FF00] text-black'
                          : 'bg-white/10 text-gray-300'
                      }`}
                    >
                      {stage.step}
                    </span>
                    {isActive ? (
                      <CheckCircle2 className="w-5 h-5 text-[#D4FF00]" />
                    ) : (
                      <ArrowRight className="w-4 h-4 text-gray-600" />
                    )}
                  </div>

                  <h3 className={`text-xl font-heading font-extrabold uppercase mb-2 ${isCurrent ? 'text-[#D4FF00]' : 'text-white'}`}>
                    {stage.name}
                  </h3>

                  <p className="text-xs text-gray-400 font-sans leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
