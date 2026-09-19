import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Layers } from 'lucide-react';
import type { Project } from '../data/portfolioData';
import { portfolioData } from '../data/portfolioData';

interface ProjectsProps {
  onOpenCaseStudy: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenCaseStudy }) => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const categories = ['ALL', 'UI/UX DESIGN', 'FULL STACK', 'WEB DEVELOPMENT', 'AI / ML', 'BRANDING'];

  const filteredProjects = selectedCategory === 'ALL'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category.includes(selectedCategory));

  return (
    <section id="projects" className="py-28 relative bg-[#090909] border-t border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-[#D4FF00]"></span>
          <span className="text-xs font-mono tracking-widest text-[#D4FF00] uppercase font-semibold">03 // SELECTED WORK</span>
        </div>

        {/* Section Heading & Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-4xl sm:text-6xl font-heading font-extrabold text-white tracking-tight uppercase leading-none">
              SELECTED WORK
            </h2>
            <p className="text-base text-gray-400 font-sans mt-3">
              Projects where design meets engineering.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#D4FF00] text-black font-bold shadow-[0_0_15px_rgba(212,255,0,0.3)]'
                    : 'glass-card text-gray-400 hover:text-white border border-white/10'
                }`}
                data-cursor="pointer"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => onOpenCaseStudy(project)}
              className="group cursor-pointer flex flex-col justify-between rounded-3xl glass-card border border-white/10 p-6 md:p-8 hover:border-[#D4FF00]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(212,255,0,0.15)] overflow-hidden relative"
              data-cursor-text="VIEW"
            >
              {/* Background ambient card glow on hover */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4FF00]/5 rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card Header Top */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white/10 text-[#D4FF00] border border-white/10">
                  PROJECT {project.number}
                </span>
                <span className="text-[11px] font-mono text-gray-400 uppercase tracking-widest">
                  {project.category}
                </span>
              </div>

              {/* Visual Image / Mockup Canvas Placeholder */}
              <div className={`w-full ${project.aspectRatio} rounded-2xl overflow-hidden relative bg-gradient-to-br ${project.gradientStyle} p-6 flex flex-col items-center justify-center text-center mb-6 group-hover:scale-[1.02] transition-transform duration-500 border border-white/10`}>
                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center bg-black/40 mb-3 backdrop-blur-md group-hover:border-[#D4FF00] group-hover:scale-110 transition-all">
                  <Layers className="w-6 h-6 text-[#D4FF00]" />
                </div>
                <span className="text-[11px] font-mono tracking-widest text-gray-300 uppercase font-medium">
                  {project.title}
                </span>
                <span className="text-[10px] text-gray-400 mt-1 font-sans">
                  Click to open case study breakdown
                </span>
              </div>

              {/* Card Body */}
              <div className="space-y-4">
                <h3 className="text-2xl lg:text-3xl font-heading font-extrabold text-white uppercase tracking-tight group-hover:text-[#D4FF00] transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-300 font-sans font-light leading-relaxed line-clamp-2">
                  {project.shortDescription}
                </p>

                {/* Tool Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-gray-400"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card CTA Footer */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-heading font-semibold text-[#D4FF00] uppercase tracking-wider group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  <span>VIEW CASE STUDY</span>
                  <ArrowUpRight className="w-4 h-4" />
                </span>
                <span className="text-xs font-mono text-gray-500 group-hover:text-white transition-colors">
                  [ READ MORE ]
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
