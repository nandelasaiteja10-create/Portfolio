import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowDownRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { HeroCanvas } from './HeroCanvas';

export const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-noise">
      {/* Background ambient lighting glows */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[#D4FF00]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-blue-500/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Grid line background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f15_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Hero Content */}
        <motion.div
          className="lg:col-span-7 flex flex-col justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-white/10 w-fit mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4FF00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4FF00]"></span>
            </span>
            <span className="text-xs font-mono tracking-widest text-gray-300 uppercase">AVAILABLE FOR NEW PROJECTS</span>
          </motion.div>

          {/* Name & Titles */}
          <motion.div variants={itemVariants} className="space-y-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-heading font-extrabold tracking-tight uppercase leading-[0.95] text-white">
              {portfolioData.personal.name}
            </h1>
            <div className="text-3xl sm:text-5xl lg:text-6xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF00] via-white to-gray-400 py-1">
              "{portfolioData.personal.taglineLine1} <br className="hidden sm:block" />
              {portfolioData.personal.taglineLine2}"
            </div>
          </motion.div>

          {/* Role Subtitle */}
          <motion.div variants={itemVariants} className="mt-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#D4FF00]"></span>
            <span className="text-xs md:text-sm font-mono tracking-[0.2em] text-[#D4FF00] font-semibold uppercase">
              {portfolioData.personal.role}
            </span>
          </motion.div>

          {/* Core Personal Statement */}
          <motion.div variants={itemVariants} className="mt-8 relative pl-6 border-l-2 border-[#D4FF00]/60 max-w-2xl">
            <p className="text-base sm:text-lg text-gray-300 font-sans leading-relaxed italic font-light">
              "{portfolioData.personal.statement}"
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, '#projects')}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#D4FF00] text-black font-heading font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-[#c4ed00] accent-glow"
              data-cursor="pointer"
            >
              <span>VIEW PROJECTS</span>
              <ArrowDownRight className="w-5 h-5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </a>

            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full glass-card text-white font-heading font-medium text-sm tracking-wider uppercase border border-white/15 hover:border-[#D4FF00]/50 hover:text-[#D4FF00] transition-all duration-300"
              data-cursor="pointer"
            >
              <Sparkles className="w-4 h-4 text-[#D4FF00]" />
              <span>LET'S WORK TOGETHER</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Hero Interactive 3D Visual */}
        <motion.div
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <HeroCanvas />
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">SCROLL DOWN</span>
        <div className="w-5 h-9 rounded-full border-2 border-white/20 p-1 flex justify-center">
          <motion.div
            className="w-1 h-2 bg-[#D4FF00] rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </section>
  );
};
