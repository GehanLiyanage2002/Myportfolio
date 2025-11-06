import React, { useRef, useState, useEffect } from 'react';
import { DETAILED_PROJECTS_DATA, GithubIcon, ExternalLinkIcon } from '../constants';
import type { DetailedProject } from '../types';

const ProjectCard: React.FC<{ project: DetailedProject }> = ({ project }) => (
    <div className="bg-surface dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden flex flex-col lg:flex-row mb-12 last:mb-0 border border-border-color dark:border-violet-800">
        <div className="lg:w-2/5">
            <img src={project.image} alt={project.title} className="w-full h-64 lg:h-full object-cover" />
        </div>
        <div className="lg:w-3/5 p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-text-primary dark:text-slate-50 mb-3">{project.title}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold bg-border-color dark:bg-slate-700 text-text-secondary dark:text-slate-300 px-3 py-1 rounded-full">{tag}</span>
                ))}
            </div>
            <p className="text-text-secondary dark:text-slate-400 mb-6 flex-grow">{project.description}</p>
            <div className="flex items-center gap-4 flex-wrap">
                <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-text-primary text-background font-semibold rounded-full transition-colors duration-200 hover:bg-gray-700 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-white"
                >
                    <GithubIcon className="h-5 w-5 mr-2" />
                    GitHub
                </a>
                {project.liveUrl && (
                    <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-bold rounded-full transition-transform duration-200 hover:scale-105 shadow-lg"
                    >
                        Live Demo
                        <ExternalLinkIcon />
                    </a>
                )}
            </div>
        </div>
    </div>
);

const Projects: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <section 
            ref={sectionRef}
            id="projects" 
            className={`min-h-[calc(100vh-10rem)] py-10 transition-opacity duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <div className="text-left mb-12">
                <h1 className="text-4xl lg:text-5xl font-bold text-text-primary dark:text-slate-50">Projects</h1>
                <p className="text-text-secondary dark:text-slate-400 mt-2">A selection of my work.</p>
            </div>
            <div>
                {DETAILED_PROJECTS_DATA.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;