import React, { useState } from 'react';
import { SKILLS_CATEGORIES } from '../constants';
import { 
  Cpu, 
  Cloud, 
  Terminal, 
  Code, 
  Database, 
  GitBranch, 
  CheckCircle2, 
  Sparkles,
  Server,
  Workflow,
  ArrowRight
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cloud':
        return <Cloud className="w-4 h-4 text-sky-500" />;
      case 'Terminal':
        return <Terminal className="w-4 h-4 text-emerald-500" />;
      case 'Code':
        return <Code className="w-4 h-4 text-violet-500" />;
      case 'Database':
        return <Database className="w-4 h-4 text-amber-500" />;
      default:
        return <Cpu className="w-4 h-4 text-violet-500" />;
    }
  };

  const devopsPipelineStages = [
    { title: 'Code & Version', tool: 'Git & GitHub', desc: 'Feature branches, PR reviews' },
    { title: 'Containerize', tool: 'Docker & Multi-Stage', desc: 'Optimized minimal image layers' },
    { title: 'Automate CI/CD', tool: 'GitHub Actions', desc: 'Automated test suites & builds' },
    { title: 'Orchestrate', tool: 'Kubernetes & AKS', desc: 'Deployments, Ingress, Pods' },
    { title: 'Serve & Proxy', tool: 'Nginx & Linux', desc: 'Reverse proxying & SSL termination' },
  ];

  return (
    <section className="py-6 space-y-12 animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-950/60 border border-violet-200 dark:border-violet-800 text-violet-700 dark:text-violet-300 text-xs font-semibold">
          <Cpu className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
          <span>Technical Toolkit & Mastery</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Cloud, DevOps & Software Stack
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          The technologies, cloud platforms, and developer tooling I rely on to build scalable, automated, and reliable distributed systems.
        </p>
      </div>

      {/* Interactive DevOps Pipeline Visualizer */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-xl border border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex items-center justify-between mb-6 relative z-10">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-violet-500/20 text-violet-400">
              <Workflow className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white">DevOps Delivery Pipeline Workflow</h2>
              <p className="text-xs text-slate-400">How I take code from commit to production Kubernetes cluster</p>
            </div>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            End-to-End Automated
          </span>
        </div>

        {/* Pipeline Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
          {devopsPipelineStages.map((stage, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-violet-500 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono text-violet-400 font-bold uppercase tracking-wider">
                  0{idx + 1} • {stage.title}
                </span>
                <h4 className="font-bold text-white text-sm group-hover:text-violet-300 transition-colors">
                  {stage.tool}
                </h4>
                <p className="text-xs text-slate-400 leading-snug">
                  {stage.desc}
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-700/50 flex items-center justify-between text-[11px] text-emerald-400">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified
                </span>
                {idx < devopsPipelineStages.length - 1 && (
                  <ArrowRight className="w-3 h-3 text-slate-500 group-hover:text-violet-400 hidden lg:block" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categorized Skills Showcase */}
      <div className="space-y-6">
        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {SKILLS_CATEGORIES.map((cat, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={cat.title}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 flex-shrink-0 ${
                  isActive
                    ? 'bg-violet-600 text-white shadow-md shadow-violet-500/25'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {getCategoryIcon(cat.icon)}
                <span>{cat.title}</span>
                <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] bg-black/10 dark:bg-white/10">
                  {cat.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS_CATEGORIES[activeTab].skills.map((skill) => (
            <div
              key={skill.name}
              className={`p-5 rounded-2xl bg-white dark:bg-slate-800/80 border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between ${
                skill.highlight
                  ? 'border-violet-500/40 dark:border-violet-500/40 shadow-sm'
                  : 'border-slate-200 dark:border-slate-700/80'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    {skill.name}
                  </h3>
                  <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                    skill.level === 'Advanced'
                      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300'
                      : skill.level === 'Proficient'
                      ? 'bg-violet-100 text-violet-800 dark:bg-violet-950/70 dark:text-violet-300'
                      : 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300'
                  }`}>
                    {skill.level}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {skill.highlight && (
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center gap-1.5 text-[11px] font-medium text-violet-600 dark:text-violet-400">
                  <Sparkles className="w-3 h-3" />
                  <span>Production & Active Project Focus</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Skills;