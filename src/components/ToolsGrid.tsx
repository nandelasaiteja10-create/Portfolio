import React from 'react';
import { motion } from 'framer-motion';
import {
  Image, PenTool, Film, Video, Box, Code, GitBranch,
  FileCode, Palette, Terminal, Atom, Server, Cpu, Coffee, Binary, Database, Wrench
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Custom SVG for Figma & GitHub for zero dependency risk
const FigmaIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3zm-6 6c0-1.657 1.343-3 3-3h3v3c0 1.657-1.343 3-3 3s-3-1.343-3-3zm0-6c0-1.657 1.343-3 3-3h3v6H9c-1.657 0-3-1.343-3-3zm0-6c0-1.657 1.343-3 3-3h3v6H9c-1.657 0-3-1.343-3-3zm6-3h3c1.657 0 3 1.343 3 3s-1.343 3-3 3h-3V3z" />
  </svg>
);

const GithubIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const iconMap: Record<string, React.ReactNode> = {
  Figma: <FigmaIcon />,
  Image: <Image className="w-6 h-6" />,
  PenTool: <PenTool className="w-6 h-6" />,
  Film: <Film className="w-6 h-6" />,
  Video: <Video className="w-6 h-6" />,
  Box: <Box className="w-6 h-6" />,
  Code: <Code className="w-6 h-6" />,
  GitBranch: <GitBranch className="w-6 h-6" />,
  Github: <GithubIcon />,
  FileCode: <FileCode className="w-6 h-6" />,
  Palette: <Palette className="w-6 h-6" />,
  Terminal: <Terminal className="w-6 h-6" />,
  Atom: <Atom className="w-6 h-6" />,
  Server: <Server className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  Coffee: <Coffee className="w-6 h-6" />,
  Binary: <Binary className="w-6 h-6" />,
  Database: <Database className="w-6 h-6" />,
};

export const ToolsGrid: React.FC = () => {
  return (
    <section className="py-24 relative bg-[#0B0B0B] border-t border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-[#D4FF00]"></span>
          <span className="text-xs font-mono tracking-widest text-[#D4FF00] uppercase font-semibold">05 // STACK & TOOLKITS</span>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl sm:text-6xl font-heading font-extrabold text-white tracking-tight uppercase leading-none">
            TOOLS & TECHNOLOGIES
          </h2>
          <p className="text-base text-gray-400 font-sans mt-3">
            Industry-standard software, languages, and frameworks used in my daily workflow.
          </p>
        </div>

        {/* Tools Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {portfolioData.tools.map((tool, idx) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
              whileHover={{ y: -6, scale: 1.04 }}
              className="group p-5 rounded-2xl glass-card border border-white/10 flex flex-col items-center justify-center text-center hover:border-[#D4FF00]/50 hover:bg-[#121212] transition-all duration-300 relative accent-glow-sm"
              data-cursor="pointer"
            >
              {/* Category indicator pill */}
              <span className={`absolute top-2 right-2 w-1.5 h-1.5 rounded-full ${tool.category === 'design' ? 'bg-[#D4FF00]' : 'bg-cyan-400'}`} />

              <div className="p-3 rounded-xl bg-white/5 group-hover:bg-[#D4FF00]/10 text-gray-300 group-hover:text-[#D4FF00] transition-colors mb-3 group-hover:scale-110">
                {iconMap[tool.iconName] || <Wrench className="w-6 h-6" />}
              </div>

              <h4 className="text-sm font-heading font-bold text-white group-hover:text-[#D4FF00] transition-colors">
                {tool.name}
              </h4>

              <span className="text-[10px] text-gray-400 font-sans mt-1 line-clamp-1 opacity-80 group-hover:opacity-100">
                {tool.description}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
