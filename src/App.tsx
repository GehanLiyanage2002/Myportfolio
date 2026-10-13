import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Articles from './components/Articles';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Toast from './components/Toast';
import type { SectionType } from './types';
import { ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionType>('About');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showFloatingTop, setShowFloatingTop] = useState(false);

  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTheme = window.localStorage.getItem('theme');
      if (storedTheme) {
        return storedTheme;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark'; // modern dark default
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Track window scroll progress for scroll indicator and floating button
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
      setShowFloatingTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'About':
        return <Home onNavigate={setActiveSection} onShowToast={showToast} />;
      case 'Projects':
        return <Projects />;
      case 'Skills':
        return <Skills />;
      case 'Articles':
        return <Articles />;
      case 'Experience':
        return <Experience />;
      case 'Contact':
        return <Contact onShowToast={showToast} />;
      default:
        return <Home onNavigate={setActiveSection} onShowToast={showToast} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-[#0b0f19] text-slate-900 dark:text-slate-100 transition-colors duration-300 relative selection:bg-violet-600 selection:text-white">
      
      {/* Top Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 via-indigo-500 to-emerald-400 z-50 origin-left transition-all duration-100"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      <Header 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6">
        {renderSection()}
      </main>

      <Footer setActiveSection={setActiveSection} />

      {/* Floating Scroll to Top Button */}
      {showFloatingTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 left-6 z-40 p-3 rounded-full bg-slate-900/90 dark:bg-violet-600/90 text-white shadow-xl hover:scale-110 active:scale-95 transition-all backdrop-blur-md border border-white/20"
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Global Toast Notification */}
      <Toast 
        message={toastMessage} 
        onClose={() => setToastMessage(null)} 
      />
    </div>
  );
};

export default App;