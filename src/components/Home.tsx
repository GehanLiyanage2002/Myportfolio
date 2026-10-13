import React, { useRef, useState, useEffect } from 'react';
import { 
  SOCIAL_LINKS, 
  GALLERY_IMAGES, 
  ARTICLES_LIST_DATA, 
  EDUCATION_DATA, 
  DownloadIcon, 
  BriefcaseIcon 
} from '../constants';
import type { SocialLink, ArticleListItem, Education, SectionType } from '../types';
import mainImage from '../images/main.png';
import cv from '../images/Cv.pdf';
import DevOpsTerminal from './DevOpsTerminal';
import { 
  ArrowUpRight, 
  Sparkles, 
  Copy, 
  Check, 
  Terminal, 
  FolderGit2, 
  GraduationCap, 
  BookOpen, 
  Award,
  ChevronRight
} from 'lucide-react';

interface HomeProps {
  onNavigate?: (section: SectionType) => void;
  onShowToast?: (message: string) => void;
}

const ArticleItem: React.FC<{ item: ArticleListItem }> = ({ item }) => (
  <div className="py-4 first:pt-0 last:pb-0 group">
    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1.5">
      <span>{item.date}</span>
      {item.readTime && (
        <>
          <span>•</span>
          <span className="text-violet-500 font-medium">{item.readTime}</span>
        </>
      )}
    </div>
    <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-2 transition-colors duration-200 group-hover:text-violet-600 dark:group-hover:text-violet-400">
      <a href={item.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5">
        {item.title}
        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-violet-500" />
      </a>
    </h3>
    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mb-3 leading-relaxed">
      {item.description}
    </p>
    <a 
      href={item.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-xs font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 inline-flex items-center gap-1"
    >
      Read full article &rarr;
    </a>
  </div>
);

const EducationItem: React.FC<{ item: Education }> = ({ item }) => (
  <div className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
    <div className="w-11 h-11 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center p-1.5 shadow-sm border border-slate-200 dark:border-slate-700 flex-shrink-0">
      {item.icon}
    </div>
    <div className="flex-1">
      <h4 className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base leading-snug">
        {item.institution}
      </h4>
      <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mt-0.5">
        {item.degree}
      </p>
      <span className="inline-block mt-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60">
        {item.period}
      </span>
    </div>
  </div>
);

const ROLES = [
  'DevOps & Cloud Engineer',
  'Kubernetes & CI/CD Practitioner',
  'Linux & Bash Automation Builder',
  'Computer Science Undergraduate',
];

export const Home: React.FC<HomeProps> = ({ onNavigate, onShowToast }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showTerminal, setShowTerminal] = useState(true);

  // Role rotating effect
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const copyEmail = () => {
    const email = 'gahenliyanage@gmail.com';
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    onShowToast?.(`Copied ${email} to clipboard!`);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="space-y-16 py-4 animate-in fade-in duration-500">
      {/* Hero Header */}
      <section className="relative overflow-hidden pt-2 pb-6">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-violet-500/10 dark:bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 relative z-10">
          
          {/* Avatar with Status badge */}
          <div className="relative flex-shrink-0">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl p-1.5 bg-gradient-to-tr from-violet-600 to-indigo-500 shadow-xl shadow-violet-500/20">
              <img
                src={mainImage}
                alt="Gehan Chamikara Liyanage"
                className="w-full h-full object-cover rounded-2xl bg-white dark:bg-slate-900"
                loading="eager"
              />
            </div>
            {/* Live Status indicator badge */}
            <div className="absolute -bottom-2 -right-2 px-3 py-1 bg-white dark:bg-slate-900 rounded-full shadow-md border border-slate-200 dark:border-slate-700 flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-200">Open to Work</span>
            </div>
          </div>

          {/* Hero Details */}
          <div className="text-center lg:text-left flex-1 space-y-4">
            
            {/* Greeting & Specialty Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100/80 dark:bg-violet-950/60 border border-violet-200 dark:border-violet-800 text-violet-700 dark:text-violet-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
              <span>DevOps Enthusiast • Microsoft Student Club Webmaster</span>
            </div>

            {/* Name & Dynamic Tagline */}
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Gehan Liyanage
              </h1>
              <p className="h-8 mt-2 text-base sm:text-xl font-medium text-violet-600 dark:text-violet-400 transition-all duration-300">
                {ROLES[roleIndex]}
              </p>
            </div>

            {/* Comprehensive Bio */}
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Hi, I’m <span className="font-semibold text-slate-900 dark:text-white">Gehan Chamikara Liyanage</span>. 
              I specialize in <span className="text-violet-600 dark:text-violet-400 font-medium">DevOps, Kubernetes orchestration, and cloud infrastructure</span>. 
              Currently pursuing a B.Sc. (Hons) in Industrial Information Technology at <span className="font-medium text-slate-900 dark:text-white">Uva Wellassa University</span>, 
              I build resilient CI/CD pipelines, automate distributed systems on Linux, and actively empower the developer community as Webmaster of the Microsoft Student Club and tech writer on Medium.
            </p>

            {/* Interactive Action Hub */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={() => onNavigate?.('Projects')}
                className="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-violet-500/25 transition-all flex items-center gap-2 active:scale-95"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>Explore Projects</span>
              </button>

              <a
                href={cv}
                download="Gehan_Liyanage_CV.pdf"
                className="px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 text-slate-900 dark:text-white font-semibold text-xs sm:text-sm border border-slate-200 dark:border-slate-700 shadow-sm transition-all flex items-center gap-2 active:scale-95"
              >
                <span>Download CV</span>
                <DownloadIcon className="h-4 w-4 ml-0" />
              </a>

              <button
                onClick={copyEmail}
                className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/60 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-medium border border-slate-200/60 dark:border-slate-700 transition-all flex items-center gap-1.5 active:scale-95"
                title="Copy email address"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                <span>{copiedEmail ? 'Email Copied!' : 'Copy Email'}</span>
              </button>

              <button
                onClick={() => setShowTerminal(!showTerminal)}
                className="px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 text-emerald-400 hover:text-emerald-300 text-xs sm:text-sm font-mono border border-emerald-500/30 transition-all flex items-center gap-1.5 active:scale-95"
                title="Toggle Interactive DevOps Terminal"
              >
                <Terminal className="w-4 h-4" />
                <span>{showTerminal ? 'Shell Active' : 'Open Shell'}</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-3">
              <span className="text-xs text-slate-400 font-medium mr-1">Find me on:</span>
              {SOCIAL_LINKS.map((link: SocialLink) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-slate-200/70 dark:hover:bg-slate-700 border border-slate-200/60 dark:border-slate-700/60 transition-all"
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Metrics / Highlights Grid */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Published Articles', value: '3+', icon: <BookOpen className="w-5 h-5 text-violet-500" />, desc: 'Medium tech stories' },
          { label: 'Tools & Technologies', value: '15+', icon: <Terminal className="w-5 h-5 text-indigo-500" />, desc: 'K8s, Docker, Azure' },
          { label: 'Community Leadership', value: 'Webmaster', icon: <Award className="w-5 h-5 text-emerald-500" />, desc: 'Microsoft Student Club' },
          { label: 'Academic Standing', value: 'B.Sc.(Hons)', icon: <GraduationCap className="w-5 h-5 text-amber-500" />, desc: 'Industrial IT at UWU' },
        ].map((stat, i) => (
          <div 
            key={i}
            className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:border-violet-500/50 transition-all duration-200 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {stat.value}
              </span>
              <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-700/50">
                {stat.icon}
              </div>
            </div>
            <div>
              <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">{stat.label}</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">{stat.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Interactive DevOps Terminal Shell Widget */}
      {showTerminal && (
        <section className="pt-2">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-500">
                <Terminal className="w-4 h-4" />
              </div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Interactive Cloud Terminal
              </h2>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Try running <code className="text-violet-500 font-mono">skills</code> or <code className="text-violet-500 font-mono">projects</code>
            </span>
          </div>
          <DevOpsTerminal onNavigate={onNavigate} />
        </section>
      )}

      {/* GPU-Accelerated Infinite Gallery Scroller (Zero Stutter / Lag) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span>Life & Community Moments</span>
          </h2>
          <span className="text-xs text-slate-500 dark:text-slate-400">Hover to pause</span>
        </div>

        <div 
          className="group w-full overflow-hidden rounded-2xl py-2"
          style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)' }}
        >
          <div className="flex w-max animate-infinite-scroll group-hover:[animation-play-state:paused] infinite-scroll-track">
            {/* Seamless 2x loop */}
            {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((src, index) => (
              <div key={index} className="flex-shrink-0 px-2 sm:px-3">
                <img
                  src={src}
                  alt={`Community activity ${index + 1}`}
                  className="rounded-2xl w-44 sm:w-56 h-60 sm:h-72 object-cover shadow-md border border-slate-200 dark:border-slate-800 hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Grid: Latest Articles & Education */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pt-4">
        
        {/* Left Column: Latest Articles */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-violet-500" />
              Latest Articles
            </h2>
            <button
              onClick={() => onNavigate?.('Articles')}
              className="text-xs font-semibold text-violet-600 dark:text-violet-400 hover:underline flex items-center gap-1"
            >
              <span>View all</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 rounded-2xl p-6 divide-y divide-slate-100 dark:divide-slate-700/60 shadow-sm">
            {ARTICLES_LIST_DATA.map((article, index) => (
              <ArticleItem key={index} item={article} />
            ))}
          </div>
        </div>

        {/* Right Column: Education & CV */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-indigo-500" />
              Education & Journey
            </h2>
            <button
              onClick={() => onNavigate?.('Experience')}
              className="text-xs font-semibold text-violet-600 dark:text-violet-400 hover:underline flex items-center gap-1"
            >
              <span>More details</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 rounded-2xl p-6 divide-y divide-slate-100 dark:divide-slate-700/60 shadow-sm">
              {EDUCATION_DATA.map((edu, index) => (
                <EducationItem key={index} item={edu} />
              ))}
            </div>

            <a 
              href={cv}
              download="Gehan_Liyanage_CV.pdf"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <span>Download Official Resume</span>
              <DownloadIcon className="h-4 w-4 ml-0 text-violet-400" />
            </a>
          </div>
        </div>

      </section>

    </div>
  );
};

export default Home;