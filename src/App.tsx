import { useState, useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Philosophy } from './components/Philosophy';
import { Projects } from './components/Projects';
import { CaseStudyModal } from './components/CaseStudyModal';
import { Skills } from './components/Skills';
import { ToolsGrid } from './components/ToolsGrid';
import { Experience } from './components/Experience';
import { Process } from './components/Process';
import { Approach } from './components/Approach';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import type { Project } from './data/portfolioData';

export function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans selection:bg-[#D4FF00] selection:text-black">
      {/* Custom Desktop Cursor */}
      <CustomCursor />

      {/* Floating Glass Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Page Layout */}
      <main>
        <Hero />
        <About />
        <Philosophy />
        <Projects onOpenCaseStudy={(proj) => setActiveCaseStudy(proj)} />
        <Skills />
        <ToolsGrid />
        <Experience />
        <Process />
        <Approach />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Case Study Detail Modal */}
      <CaseStudyModal
        project={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
        onSelectProject={(proj) => setActiveCaseStudy(proj)}
      />
    </div>
  );
}

export default App;
