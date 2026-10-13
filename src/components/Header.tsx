import React, { useState } from 'react';
import { NAV_LINKS, MoonIcon, SunIcon, SOCIAL_LINKS } from '../constants';
import type { NavLink, SectionType } from '../types';
import mainImage from '../images/main.png';
import { Menu, X, Sparkles, Send } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: SectionType) => void;
  theme: string;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  activeSection, 
  setActiveSection, 
  theme, 
  toggleTheme 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionName: SectionType) => {
    setActiveSection(sectionName);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/85 dark:bg-[#0b0f19]/85 border-b border-slate-200/70 dark:border-slate-800/70 transition-all duration-300">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-3 flex items-center justify-between">
        
        {/* Profile Branding */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => handleNavClick('About')}
        >
          <div className="relative">
            <img
              src={mainImage}
              alt="Gehan Liyanage"
              className="rounded-full w-10 h-10 object-cover border-2 border-violet-500 shadow-sm transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-slate-900" title="Available for opportunities" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-1 group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors">
              Gehan Liyanage
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:inline-block">
              DevOps & Cloud Engineer
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-800/70 p-1.5 rounded-full border border-slate-200 dark:border-slate-700/60 shadow-sm backdrop-blur-md">
          {NAV_LINKS.map((link: NavLink) => {
            const isActive = activeSection === link.name;
            return (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.name)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 relative ${
                  isActive
                    ? 'bg-violet-600 text-white shadow-md shadow-violet-500/25'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-700/50'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Icons: Theme Toggle & CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme}
            className="p-2 sm:p-2.5 rounded-full bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-violet-400 border border-slate-200 dark:border-slate-700/60 transition-all duration-200 active:scale-95 shadow-sm" 
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {theme === 'light' ? (
              <MoonIcon className="h-4 w-4 text-slate-700" />
            ) : (
              <SunIcon className="h-4 w-4 text-amber-400" />
            )}
          </button>

          {/* Quick Contact CTA (Desktop) */}
          <button
            onClick={() => handleNavClick('Contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-violet-600 hover:bg-violet-700 text-white shadow-sm hover:shadow-violet-500/25 transition-all duration-200 active:scale-95"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation (Fixed Missing Mobile Nav Bug) */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#0b0f19]/95 backdrop-blur-xl px-4 py-4 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200 shadow-xl">
          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((link: NavLink) => {
              const isActive = activeSection === link.name;
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.name)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-violet-600 text-white'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-violet-500" />
              Connect with Gehan:
            </span>
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.slice(0, 3).map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-violet-500 dark:hover:text-violet-400"
                  aria-label={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;