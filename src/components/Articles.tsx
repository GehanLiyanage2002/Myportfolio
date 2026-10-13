import React from 'react';
import { ARTICLES_DATA } from '../constants';
import type { Article } from '../types';
import { BookOpen, ArrowUpRight, Clock, Calendar, Sparkles } from 'lucide-react';

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => (
  <a 
    href={article.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group block bg-white dark:bg-slate-800/90 rounded-2xl shadow-sm hover:shadow-xl border border-slate-200 dark:border-slate-700/80 overflow-hidden transition-all duration-300 hover:-translate-y-1"
  >
    <div className="flex flex-col md:flex-row h-full">
      {/* Thumbnail */}
      <div className="md:w-2/5 lg:w-1/3 flex-shrink-0 relative overflow-hidden bg-slate-900">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-52 md:h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-4">
        <div className="space-y-3">
          {/* Metadata: Date & Read Time */}
          <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-violet-500" />
              {article.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-violet-600 dark:text-violet-400 font-medium">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors flex items-start justify-between gap-2">
            <span>{article.title}</span>
            <ArrowUpRight className="w-5 h-5 text-violet-500 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>

          {/* Description */}
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
            {article.description}
          </p>
        </div>

        {/* Tags & Action */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {article.tags.map((tag) => (
              <span 
                key={tag} 
                className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-600/60"
              >
                {tag}
              </span>
            ))}
          </div>

          <span className="text-xs font-semibold text-violet-600 dark:text-violet-400 group-hover:underline flex items-center gap-1">
            Read on Medium &rarr;
          </span>
        </div>

      </div>
    </div>
  </a>
);

export const Articles: React.FC = () => {
  return (
    <section className="py-6 space-y-10 animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-950/60 border border-violet-200 dark:border-violet-800 text-violet-700 dark:text-violet-300 text-xs font-semibold">
          <BookOpen className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
          <span>Technical Publications & Guides</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Tech Stories & Articles
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          In-depth technical guides written to simplify Kubernetes architecture, database disaster recovery, and cloud computing for thousands of engineers on Medium.
        </p>
      </div>

      {/* Publication Banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-violet-900/40 to-indigo-900/40 border border-violet-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-violet-600 text-white shadow-md">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
              Published Author on Medium
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Read by hundreds of cloud enthusiasts, engineers, and students worldwide.
            </p>
          </div>
        </div>

        <a
          href="https://medium.com/@gehanliyanage"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs font-semibold shadow-sm transition-all"
        >
          Visit Medium Profile &rarr;
        </a>
      </div>

      {/* Articles Cards Grid */}
      <div className="space-y-6">
        {ARTICLES_DATA.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>

    </section>
  );
};

export default Articles;
