import React from 'react';
import { NAV_LINKS, SOCIAL_LINKS } from '../constants';
import type { NavLink, SectionType } from '../types';
import mainImage from '../images/main.png';
import { ArrowUp, Heart, Terminal } from 'lucide-react';

interface FooterProps {
  setActiveSection: (section: SectionType) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveSection }) => {
  const handleNavClick = (sectionName: SectionType) => {
    setActiveSection(sectionName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-slate-950/50 backdrop-blur-md mt-20 transition-colors">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 space-y-8">
        
        {/* Top Footer Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img
              src={mainImage}
              alt="Gehan Liyanage"
              className="w-10 h-10 rounded-full border border-violet-500 object-cover"
            />
            <div>
              <p className="font-bold text-slate-900 dark:text-white text-sm">Gehan Liyanage</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">DevOps Enthusiast & CS Undergraduate</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-600 dark:text-slate-300">
            {NAV_LINKS.map((link: NavLink) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.name)}
                className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-violet-600 hover:text-white text-xs font-semibold transition-all border border-slate-200 dark:border-slate-700"
            title="Scroll to Top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Footer Section */}
        <div className="pt-6 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Gehan Liyanage. Built with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>for Cloud & DevOps.</span>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-violet-500 transition-colors"
                aria-label={s.name}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;