import React from 'react';
import { NAV_LINKS, MoonIcon, SunIcon } from '../constants';
import type { NavLink } from '../types';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  theme: string;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection, theme, toggleTheme }) => {
  const handleNavClick = (sectionName: string) => {
    setActiveSection(sectionName);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 dark:bg-black/80">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-4 flex items-center justify-between">
        {/* Profile Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handleNavClick('About')}
        >
          <img
            src="/images/main.png"
            alt="Profile"
            className="rounded-full w-10 h-10 border-2 border-primary"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center bg-surface dark:bg-slate-800 p-1 rounded-full shadow-lg border border-border-color dark:border-violet-800">
          {NAV_LINKS.map((link: NavLink) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.name)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeSection === link.name
                  ? 'bg-primary text-white'
                  : 'text-text-secondary dark:text-slate-400 hover:text-text-primary dark:hover:text-slate-50'
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Theme Toggle */}
        <button 
            onClick={toggleTheme}
            className="h-10 w-10 bg-surface dark:bg-slate-800 rounded-full flex items-center justify-center text-primary shadow-lg border border-border-color dark:border-violet-800" 
            aria-label="Toggle theme"
        >
          {theme === 'light' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
        </button>
      </div>
    </header>
  );
};

export default Header;