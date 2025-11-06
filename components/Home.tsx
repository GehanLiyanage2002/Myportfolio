import React, { useRef, useState, useEffect } from 'react';
import { SOCIAL_LINKS, GALLERY_IMAGES, ARTICLES_LIST_DATA, EDUCATION_DATA, DownloadIcon, BriefcaseIcon } from '../constants';
import type { SocialLink, ArticleListItem, Education } from '../types';

const ArticleItem: React.FC<{ item: ArticleListItem }> = ({ item }) => (
    <div className="py-4 first:pt-0 last:pb-0">
        <p className="text-sm text-text-secondary dark:text-slate-400 mb-2">{item.date}</p>
        <h3 className="text-xl font-semibold text-text-primary dark:text-slate-50 mb-2 transition-colors duration-300 hover:text-primary">{item.title}</h3>
        <p className="text-text-secondary dark:text-slate-400 mb-4">{item.description}</p>
        <a href={item.url} className="text-primary font-semibold hover:underline">
            Read article &rarr;
        </a>
    </div>
);

const EducationItem: React.FC<{ item: Education }> = ({ item }) => (
    <div className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
        <div className="w-10 h-10 bg-background dark:bg-slate-800 rounded-full flex items-center justify-center text-text-secondary dark:text-slate-400 flex-shrink-0 border border-border-color dark:border-violet-800">
            {React.cloneElement(item.icon, { className: 'h-5 w-5' })}
        </div>
        <div>
            <h4 className="font-semibold text-text-primary dark:text-slate-50">{item.institution}</h4>
            <p className="text-text-secondary dark:text-slate-400 text-sm">{item.degree}</p>
            <p className="text-text-secondary dark:text-slate-400 text-xs mt-1">{item.period}</p>
        </div>
    </div>
);

const Home: React.FC = () => {
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
            id="about" 
            className={`py-10 transition-opacity duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            {/* Top Intro Section */}
            <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
                <img
                    src="https://i.imgur.com/O44hL8x.png"
                    alt="Abishek Haththakage"
                    className="rounded-full w-32 h-32 md:w-40 md:h-40 shadow-lg border-2 border-border-color dark:border-violet-800 flex-shrink-0"
                />
                <div className="text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-text-primary dark:text-slate-50">
                        Abishek Haththakage
                    </h1>
                    <p className="text-text-secondary dark:text-slate-400 mt-2 text-lg">
                        DevOps Enthusiastic | Gold MLSA | BICT Undergraduate
                    </p>
                    <p className="text-text-secondary dark:text-slate-400 mt-4 max-w-2xl">
                        Hi, I'm Abishek, a passionate DevOps-focused undergraduate with a keen interest in building scalable, efficient systems. I'm dedicated to automating processes, improving workflows, and leveraging cloud technologies to drive operational excellence. As someone who loves learning and applying best practices, I've worked on several projects that incorporate CI/CD pipelines, containerization, and cloud-based solutions. I'm always looking to connect with like-minded professionals and contribute to the development of efficient, reliable, and automated systems.
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-4 mt-6">
                        {SOCIAL_LINKS.map((link: SocialLink) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.name}
                                className="text-text-secondary dark:text-slate-400 hover:text-primary transition-colors"
                            >
                                {React.cloneElement(link.icon, { className: 'h-6 w-6' })}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Gallery Section - Infinite Scroller */}
            <div className="group w-full overflow-x-hidden mb-16"
                style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' }}>
                <div className="flex w-max animate-infinite-scroll group-hover:[animation-play-state:paused]">
                    {/* Render images twice for seamless loop */}
                    {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((src, index) => (
                        <div key={index} className="flex-shrink-0 px-2">
                            <img
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                className="rounded-2xl w-48 h-64 object-cover shadow-md border border-border-color dark:border-violet-800"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column: Articles */}
                    <div>
                        <h2 className="text-3xl font-bold text-text-primary dark:text-slate-50 mb-8">Latest Articles</h2>
                        <div className="bg-surface dark:bg-slate-800 border border-border-color dark:border-violet-800 rounded-2xl p-6 divide-y divide-border-color dark:divide-violet-800">
                            {ARTICLES_LIST_DATA.map((article, index) => (
                                <ArticleItem key={index} item={article} />
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Education & Resume */}
                    <div>
                        <h2 className="text-3xl font-bold text-text-primary dark:text-slate-50 mb-8">Work & Education</h2>
                        <div className="space-y-6">
                            <div className="bg-surface dark:bg-slate-800 border border-border-color dark:border-violet-800 rounded-2xl p-6">
                                <h3 className="text-lg font-semibold text-text-primary dark:text-slate-50 flex items-center gap-2 mb-2">
                                    <BriefcaseIcon className="h-5 w-5 text-text-secondary dark:text-slate-400" /> Education
                                </h3>
                                <div className="divide-y divide-border-color dark:divide-violet-800">
                                    {EDUCATION_DATA.map((edu, index) => (
                                        <EducationItem key={index} item={edu} />
                                    ))}
                                </div>
                            </div>
                            <a 
                                href="#" 
                                className="w-full inline-flex items-center justify-center px-6 py-4 bg-surface dark:bg-slate-800 border border-border-color dark:border-violet-800 text-text-primary dark:text-slate-50 font-semibold rounded-lg transition-colors duration-200 hover:bg-border-color dark:hover:bg-slate-700"
                            >
                                Download Resume
                                <DownloadIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;