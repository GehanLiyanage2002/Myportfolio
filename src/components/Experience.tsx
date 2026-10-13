import React, { useState } from 'react';
import { EDUCATION_DATA, EXPERIENCE_DATA, DownloadIcon } from '../constants';
import type { Education, ExperienceItem } from '../types';
import cv from '../images/Cv.pdf';
import { GraduationCap, Award, Calendar, CheckCircle2, Briefcase } from 'lucide-react';

export const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'leadership'>('education');

  return (
    <section className="py-6 space-y-10 animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-950/60 border border-violet-200 dark:border-violet-800 text-violet-700 dark:text-violet-300 text-xs font-semibold">
          <GraduationCap className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
          <span>Academic Background & Community Leadership</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Education & Experience
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          My academic qualifications at Uva Wellassa University, English literature diploma at Aquinas, and leadership in global student developer programs.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('education')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'education'
                ? 'bg-violet-600 text-white shadow-md shadow-violet-500/25'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Academic Qualifications</span>
          </button>

          <button
            onClick={() => setActiveTab('leadership')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'leadership'
                ? 'bg-violet-600 text-white shadow-md shadow-violet-500/25'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Community Leadership</span>
          </button>
        </div>

        <a
          href={cv}
          download="Gehan_Liyanage_CV.pdf"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 dark:bg-slate-700 text-white shadow-sm transition-all"
        >
          <span>Download CV (PDF)</span>
          <DownloadIcon className="h-4 w-4 ml-0 text-violet-400" />
        </a>
      </div>

      {/* Timeline Content */}
      <div className="space-y-6">
        {activeTab === 'education' ? (
          <div className="space-y-6">
            {EDUCATION_DATA.map((edu: Education, idx: number) => (
              <div 
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row items-start gap-5"
              >
                <div className="w-14 h-14 bg-white dark:bg-slate-700/80 rounded-2xl flex items-center justify-center p-2 shadow-sm border border-slate-200 dark:border-slate-600 flex-shrink-0">
                  {edu.icon}
                </div>

                <div className="flex-1 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {edu.institution}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 w-fit">
                      <Calendar className="w-3.5 h-3.5 text-violet-500" />
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-violet-600 dark:text-violet-400">
                    {edu.degree}
                  </p>

                  {edu.details && (
                    <ul className="space-y-1.5 pt-2">
                      {edu.details.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {EXPERIENCE_DATA.map((exp: ExperienceItem, idx: number) => (
              <div 
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row items-start gap-5"
              >
                <div className="w-12 h-12 bg-violet-100 dark:bg-violet-950/60 rounded-2xl flex items-center justify-center shadow-sm border border-violet-200 dark:border-violet-800 flex-shrink-0">
                  {exp.icon}
                </div>

                <div className="flex-1 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold text-violet-600 dark:text-violet-400">
                        {exp.organization}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 w-fit">
                      <Calendar className="w-3.5 h-3.5 text-violet-500" />
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {exp.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-600/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </section>
  );
};

export default Experience;
