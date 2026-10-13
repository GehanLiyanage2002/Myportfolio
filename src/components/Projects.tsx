import React, { useState } from 'react';
import { DETAILED_PROJECTS_DATA, GithubIcon, ExternalLinkIcon } from '../constants';
import type { DetailedProject } from '../types';
import { 
  FolderGit2, 
  Layers, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  Search,
  Server
} from 'lucide-react';

const ProjectCard: React.FC<{ project: DetailedProject }> = ({ project }) => {
  const [showArchitecture, setShowArchitecture] = useState(false);

  return (
    <div className="bg-white dark:bg-slate-800/90 rounded-2xl shadow-sm hover:shadow-xl border border-slate-200 dark:border-slate-700/80 overflow-hidden transition-all duration-300 flex flex-col group">
      
      {/* Project Image Banner */}
      <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-900">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" 
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/80 backdrop-blur-md text-violet-300 border border-violet-500/30 shadow-md">
            {project.category}
          </span>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/90 text-white shadow-md">
              <Sparkles className="w-3 h-3" />
              Featured
            </span>
          </div>
        )}

        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Project Body */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 space-y-4">
        
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map(tag => (
            <span 
              key={tag} 
              className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700/70 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-600/60"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
          {project.detailedDescription || project.description}
        </p>

        {/* Expandable DevOps Architecture Highlights */}
        {project.architecture && (
          <div className="pt-2">
            <button
              onClick={() => setShowArchitecture(!showArchitecture)}
              className="text-xs font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 inline-flex items-center gap-1.5 transition-colors py-1"
            >
              <Server className="w-3.5 h-3.5" />
              <span>{showArchitecture ? 'Hide Architecture Breakdown' : 'View Architecture Breakdown'}</span>
              {showArchitecture ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

            {showArchitecture && (
              <div className="mt-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/60 text-xs space-y-3 animate-in fade-in duration-200">
                <div>
                  <span className="font-semibold text-slate-800 dark:text-slate-200 block mb-0.5">The Challenge:</span>
                  <p className="text-slate-600 dark:text-slate-400">{project.architecture.problem}</p>
                </div>

                <div>
                  <span className="font-semibold text-slate-800 dark:text-slate-200 block mb-0.5">The Solution:</span>
                  <p className="text-slate-600 dark:text-slate-400">{project.architecture.solution}</p>
                </div>

                <div>
                  <span className="font-semibold text-slate-800 dark:text-slate-200 block mb-1">Key DevOps Implementations:</span>
                  <ul className="space-y-1.5 pl-1">
                    {project.architecture.devopsHighlights.map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="pt-4 mt-auto border-t border-slate-100 dark:border-slate-700/50 flex items-center gap-3">
          <a 
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 bg-slate-900 hover:bg-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 text-white text-xs font-semibold rounded-xl transition-all shadow-sm active:scale-95"
          >
            <GithubIcon className="h-4 w-4 mr-1.5" />
            Source Code
          </a>

          {project.liveUrl && (
            <a 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white text-xs font-semibold rounded-xl transition-all shadow-sm active:scale-95"
            >
              <span>Live Deployment</span>
              <ExternalLinkIcon />
            </a>
          )}
        </div>

      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'DevOps & Cloud', 'Full-Stack', 'Automation'];

  const filteredProjects = DETAILED_PROJECTS_DATA.filter((proj) => {
    const matchesCategory = selectedCategory === 'All' || proj.category === selectedCategory;
    const matchesSearch = 
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-6 space-y-10 animate-in fade-in duration-500">
      
      {/* Section Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-950/60 border border-violet-200 dark:border-violet-800 text-violet-700 dark:text-violet-300 text-xs font-semibold">
          <FolderGit2 className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
          <span>Portfolio & Deployments</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Featured Engineering Projects
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          Real-world cloud architectures, multi-container deployments, and CI/CD pipelines engineered with industry best practices.
        </p>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex-shrink-0 ${
                selectedCategory === cat
                  ? 'bg-violet-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search by tech or name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-1.5 rounded-xl text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>
      </div>

      {/* Project Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700">
          <Layers className="w-10 h-10 mx-auto text-slate-400 mb-2" />
          <p className="text-slate-700 dark:text-slate-300 font-semibold text-sm">No projects matched your search.</p>
          <p className="text-slate-500 text-xs mt-1">Try resetting the filter or search query.</p>
          <button
            onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
            className="mt-4 px-4 py-2 rounded-xl text-xs bg-violet-600 text-white font-medium"
          >
            Reset Filters
          </button>
        </div>
      )}

    </section>
  );
};

export default Projects;
