import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ArrowRight, Code2, Layers, CheckCircle, Target, Sparkles } from 'lucide-react';
import type { Project } from '../data/portfolioData';
import { portfolioData } from '../data/portfolioData';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (proj: Project) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose, onSelectProject }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentIndex = portfolioData.projects.findIndex((p) => p.id === project.id);
  const prevProject = portfolioData.projects[(currentIndex - 1 + portfolioData.projects.length) % portfolioData.projects.length];
  const nextProject = portfolioData.projects[(currentIndex + 1) % portfolioData.projects.length];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/90 backdrop-blur-2xl">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.96 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full min-h-screen bg-[#0A0A0A] text-white flex flex-col"
        >
          {/* Top Sticky Bar */}
          <header className="sticky top-0 z-50 glass-nav px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#D4FF00] text-black">
                {project.number}
              </span>
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest hidden sm:inline">
                {project.category}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={onClose}
                className="group flex items-center gap-2 px-4 py-2 rounded-full glass-card hover:bg-white/10 border border-white/15 text-xs font-mono tracking-widest text-gray-300 hover:text-white transition-colors"
                data-cursor="pointer"
              >
                <span>CLOSE</span>
                <X className="w-4 h-4 group-hover:rotate-90 transition-transform" />
              </button>
            </div>
          </header>

          {/* Main Case Study Scroll Body */}
          <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 flex-1 w-full space-y-16">
            {/* Case Study Header */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4FF00]/10 border border-[#D4FF00]/30 text-[#D4FF00] text-xs font-mono uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CASE STUDY BREAKDOWN</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight uppercase leading-tight">
                {project.title}
              </h1>

              <p className="text-lg md:text-xl text-gray-300 font-sans font-light leading-relaxed max-w-3xl">
                {project.shortDescription}
              </p>

              {/* Meta Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl glass-card border border-white/10">
                <div>
                  <div className="text-[11px] font-mono text-gray-400 uppercase">ROLE</div>
                  <div className="text-sm font-heading font-semibold text-white mt-1">{project.caseStudy.role}</div>
                </div>
                <div>
                  <div className="text-[11px] font-mono text-gray-400 uppercase">TIMELINE</div>
                  <div className="text-sm font-heading font-semibold text-white mt-1">{project.caseStudy.timeline}</div>
                </div>
                <div>
                  <div className="text-[11px] font-mono text-gray-400 uppercase">CATEGORY</div>
                  <div className="text-sm font-heading font-semibold text-[#D4FF00] mt-1">{project.category}</div>
                </div>
                <div>
                  <div className="text-[11px] font-mono text-gray-400 uppercase">TOOLS</div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {project.tools.map((tool) => (
                      <span key={tool} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-gray-300">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Hero Image Banner Placeholder */}
            <div className={`w-full aspect-[16/9] rounded-3xl overflow-hidden border border-white/10 relative bg-gradient-to-br ${project.gradientStyle} p-8 flex flex-col items-center justify-center text-center`}>
              <div className="w-20 h-20 rounded-full border border-[#D4FF00]/40 flex items-center justify-center bg-black/40 mb-4 backdrop-blur-md">
                <Layers className="w-8 h-8 text-[#D4FF00]" />
              </div>
              <span className="text-xs font-mono tracking-widest text-[#D4FF00] uppercase font-semibold mb-2">
                [ HIGH-RESOLUTION PROJECT VISUAL PLACEHOLDER ]
              </span>
              <p className="text-xs text-gray-400 max-w-md">
                Replace with actual project mockup image or demo video inside <code className="text-white">portfolioData.ts</code>.
              </p>
            </div>

            {/* Metrics Showcase */}
            {project.caseStudy.metrics && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.caseStudy.metrics.map((m, idx) => (
                  <div key={idx} className="p-6 rounded-2xl glass-card border border-white/10 text-center">
                    <div className="text-3xl font-heading font-bold text-[#D4FF00]">{m.value}</div>
                    <div className="text-xs font-mono text-gray-400 uppercase mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Section 1: Overview & Problem */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl glass-card border border-white/10 space-y-4">
                <div className="flex items-center gap-2 text-[#D4FF00]">
                  <Target className="w-5 h-5" />
                  <h3 className="text-lg font-heading font-bold uppercase">OVERVIEW</h3>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed font-sans font-light">
                  {project.caseStudy.overview}
                </p>
              </div>

              <div className="p-8 rounded-2xl glass-card border border-white/10 space-y-4">
                <div className="flex items-center gap-2 text-rose-400">
                  <X className="w-5 h-5" />
                  <h3 className="text-lg font-heading font-bold uppercase">THE PROBLEM</h3>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed font-sans font-light">
                  {project.caseStudy.problem}
                </p>
              </div>
            </div>

            {/* Section 2: Research & Insights */}
            <div className="space-y-6">
              <h3 className="text-xl font-heading font-extrabold uppercase text-white tracking-wider">
                RESEARCH & DISCOVERY
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.caseStudy.research.map((item, idx) => (
                  <div key={idx} className="p-6 rounded-2xl glass-card border border-white/10 space-y-3">
                    <span className="text-xs font-mono font-bold text-[#D4FF00]">0{idx + 1} // FINDING</span>
                    <p className="text-xs text-gray-300 leading-relaxed font-sans">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Design Process & UI Highlights */}
            <div className="space-y-6">
              <h3 className="text-xl font-heading font-extrabold uppercase text-white tracking-wider">
                DESIGN PROCESS & UI HIGHLIGHTS
              </h3>
              <div className="p-8 rounded-2xl glass-card border border-white/10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-heading font-bold text-[#D4FF00] uppercase mb-3">Process Workflow</h4>
                    <ul className="space-y-2">
                      {project.caseStudy.designProcess.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                          <CheckCircle className="w-4 h-4 text-[#D4FF00] shrink-0 mt-0.5" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-heading font-bold text-[#D4FF00] uppercase mb-3">UI Craft Keypoints</h4>
                    <ul className="space-y-2">
                      {project.caseStudy.uiHighlights.map((hl, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] shrink-0 mt-1.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: Development & Engineering */}
            <div className="space-y-6">
              <h3 className="text-xl font-heading font-extrabold uppercase text-white tracking-wider">
                ENGINEERING & CODE ARCHITECTURE
              </h3>
              <div className="p-8 rounded-2xl glass-card border border-white/10 space-y-4">
                <div className="flex items-center gap-2 text-[#D4FF00]">
                  <Code2 className="w-5 h-5" />
                  <h4 className="text-sm font-heading font-bold uppercase">Technical Implementation</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.caseStudy.techStackDetails.map((tech, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300 font-mono">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 5: Outcome & Key Learnings */}
            <div className="p-8 rounded-3xl bg-gradient-to-r from-zinc-900 to-black border border-[#D4FF00]/30 space-y-6">
              <h3 className="text-xl font-heading font-extrabold uppercase text-[#D4FF00]">
                FINAL RESULT & IMPACT
              </h3>
              <p className="text-base text-gray-200 font-sans leading-relaxed">
                {project.caseStudy.finalResult}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
                <div>
                  <h4 className="text-xs font-mono text-gray-400 uppercase mb-2">KEY LEARNINGS</h4>
                  <ul className="space-y-1.5">
                    {project.caseStudy.keyLearnings.map((kl, idx) => (
                      <li key={idx} className="text-xs text-gray-300 flex items-start gap-2">
                        <span className="text-[#D4FF00]">•</span>
                        <span>{kl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-gray-400 uppercase mb-2">NEXT STEPS</h4>
                  <ul className="space-y-1.5">
                    {project.caseStudy.nextSteps.map((ns, idx) => (
                      <li key={idx} className="text-xs text-gray-300 flex items-start gap-2">
                        <span className="text-[#D4FF00]">→</span
                        ><span>{ns}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Prev / Next Navigation Footer */}
            <div className="pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <button
                onClick={() => onSelectProject(prevProject)}
                className="group flex items-center gap-4 text-left p-4 rounded-2xl glass-card border border-white/10 hover:border-[#D4FF00]/50 transition-all w-full sm:w-auto"
                data-cursor="pointer"
              >
                <ArrowLeft className="w-5 h-5 text-[#D4FF00] group-hover:-translate-x-1 transition-transform" />
                <div>
                  <div className="text-[10px] font-mono text-gray-400 uppercase">PREVIOUS PROJECT</div>
                  <div className="text-sm font-heading font-bold text-white group-hover:text-[#D4FF00] transition-colors">
                    {prevProject.title}
                  </div>
                </div>
              </button>

              <button
                onClick={() => onSelectProject(nextProject)}
                className="group flex items-center gap-4 text-right p-4 rounded-2xl glass-card border border-white/10 hover:border-[#D4FF00]/50 transition-all w-full sm:w-auto justify-end"
                data-cursor="pointer"
              >
                <div>
                  <div className="text-[10px] font-mono text-gray-400 uppercase">NEXT PROJECT</div>
                  <div className="text-sm font-heading font-bold text-white group-hover:text-[#D4FF00] transition-colors">
                    {nextProject.title}
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-[#D4FF00] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
