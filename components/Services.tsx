import React, { useRef, useState, useEffect } from 'react';
import { ARTICLES_DATA } from '../constants';
import type { Article } from '../types';

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => (
    <a 
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-surface dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden group transition-transform duration-300 hover:-translate-y-2 border border-border-color dark:border-violet-800"
    >
        <div className="overflow-hidden">
             <img src={article.image} alt={article.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
        </div>
        <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-3">
                {article.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold bg-border-color dark:bg-slate-700 text-text-secondary dark:text-slate-300 px-2 py-1 rounded-full">{tag}</span>
                ))}
            </div>
            <h3 className="text-xl font-semibold text-text-primary dark:text-slate-50 mb-2 group-hover:text-primary transition-colors">{article.title}</h3>
            <p className="text-text-secondary dark:text-slate-400 text-sm">{article.description}</p>
        </div>
    </a>
);

const Articles: React.FC = () => {
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
            id="articles" 
            className={`min-h-[calc(100vh-10rem)] py-10 transition-opacity duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <div className="text-left mb-12">
                <h1 className="text-4xl lg:text-5xl font-bold text-text-primary dark:text-slate-50">Articles</h1>
                <p className="text-text-secondary dark:text-slate-400 mt-2">My recent writings and publications.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ARTICLES_DATA.map((article, index) => (
                    <ArticleCard key={index} article={article} />
                ))}
            </div>
        </section>
    );
};

export default Articles;