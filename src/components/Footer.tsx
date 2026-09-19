import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] text-white pt-20 pb-12 border-t border-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Left Brand Col */}
          <div className="md:col-span-6 space-y-4">
            <a href="#home" onClick={scrollToTop} className="inline-flex items-center gap-2 font-heading font-extrabold text-2xl tracking-tight uppercase">
              <span className="w-3 h-3 rounded-full bg-[#D4FF00]"></span>
              <span>{portfolioData.personal.name}</span>
            </a>
            <p className="text-xl font-heading font-bold text-[#D4FF00]">
              "{portfolioData.personal.taglineLine1} {portfolioData.personal.taglineLine2}"
            </p>
            <p className="text-xs text-gray-400 font-sans max-w-md leading-relaxed">
              {portfolioData.personal.role} · Based in {portfolioData.personal.shortLocation}
            </p>
          </div>

          {/* Center Links Col */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest">NAVIGATION</h4>
            <ul className="space-y-2 text-xs font-mono text-gray-300">
              <li><a href="#home" className="hover:text-[#D4FF00] transition-colors">HOME</a></li>
              <li><a href="#about" className="hover:text-[#D4FF00] transition-colors">ABOUT ME</a></li>
              <li><a href="#projects" className="hover:text-[#D4FF00] transition-colors">SELECTED WORK</a></li>
              <li><a href="#skills" className="hover:text-[#D4FF00] transition-colors">SKILLS & TOOLS</a></li>
              <li><a href="#experience" className="hover:text-[#D4FF00] transition-colors">EXPERIENCE</a></li>
              <li><a href="#contact" className="hover:text-[#D4FF00] transition-colors">CONTACT</a></li>
            </ul>
          </div>

          {/* Right Socials Col */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest">CONNECT</h4>
            <ul className="space-y-2 text-xs font-mono text-gray-300">
              {portfolioData.socials.map((soc) => (
                <li key={soc.name}>
                  <a
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#D4FF00] transition-colors flex items-center gap-1.5"
                    data-cursor="pointer"
                  >
                    <span>{soc.name}</span>
                    <span className="text-[10px] text-gray-500">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400">
          <div>
            © 2026 {portfolioData.personal.name}. ALL RIGHTS RESERVED.
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full glass-card hover:border-[#D4FF00]/50 hover:text-[#D4FF00] transition-colors"
            data-cursor="pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
