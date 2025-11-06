import React from 'react';
import type { NavLink, SocialLink, Article, ArticleListItem, Education, DetailedProject, ContactInfo } from './types';

// Generic Icon component props
interface IconProps {
  className?: string;
}

// SVG Icons
export const GithubIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

export const LinkedinIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
  </svg>
);

export const FacebookIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.675 0h-21.35C.59 0 0 .59 0 1.325v21.351C0 23.41.59 24 1.325 24H12.82V14.706h-3.34V11.01h3.34V8.41c0-3.309 1.984-5.158 5.022-5.158 1.42 0 2.934.264 2.934.264v3.106h-1.583c-1.636 0-2.144.996-2.144 2.068v2.453h3.59l-.587 3.696h-3.003V24h5.633c.734 0 1.325-.59 1.325-1.325V1.325C24 .59 23.409 0 22.675 0z" />
    </svg>
);

export const InstagramIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/>
    </svg>
);

export const TwitterIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

export const YoutubeIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
);

export const BriefcaseIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

export const DownloadIcon: React.FC<IconProps> = ({ className = "h-5 w-5 ml-2" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);


export const ExternalLinkIcon: React.FC<IconProps> = ({ className = "h-5 w-5 ml-2" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
);

export const MailIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);


export const MoonIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

export const SunIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

// Data
export const NAV_LINKS: NavLink[] = [
  { name: 'About' },
  { name: 'Articles' },
  { name: 'Projects' },
  { name: 'Contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'LinkedIn', icon: <LinkedinIcon />, url: 'https://www.linkedin.com/in/gehan-liyanage' },
  { name: 'GitHub', icon: <GithubIcon />, url: 'https://github.com/GehanLiyanage2002' },
  { name: 'Facebook', icon: <FacebookIcon />, url: 'https://www.facebook.com/luwisnickman' },
  { name: 'Instagram', icon: <InstagramIcon />, url: 'https://www.instagram.com/gehan_liyanage' },
//   { name: 'Twitter', icon: <TwitterIcon />, url: 'https://twitter.com' },
];

export const CONTACT_PAGE_LINKS: SocialLink[] = [
    { name: 'Email', icon: <MailIcon />, url: 'mailto:gahenliyanage@gmail.com' },
    { name: 'LinkedIn', icon: <LinkedinIcon />, url: 'https://www.linkedin.com/in/gehan-liyanage' },
    { name: 'GitHub', icon: <GithubIcon />, url: 'https://github.com/GehanLiyanage2002' },
    { name: 'Facebook', icon: <FacebookIcon />, url: 'https://www.facebook.com/luwisnickman' },
    { name: 'Instagram', icon: <InstagramIcon />, url: 'https://www.instagram.com/gehan_liyanage' },
    { name: 'YouTube', icon: <YoutubeIcon />, url: 'https://www.youtube.com/@CloudGen0815' },
];

export const GALLERY_IMAGES: string[] = [
    '/images/img7.jpg',
    '/images/img2.jpg',
    '/images/img3.jpg',
    '/images/img4.jpg',
    '/images/img6.jpg'
];

export const ARTICLES_LIST_DATA: ArticleListItem[] = [
    {
        date: 'Octomber 26, 2025',
        title: 'Understanding Kubernetes Control Plane: A Clear Guide for Beginners',
        description: 'A beginner-friendly guide to understanding the Kubernetes Control Plane, explaining its components, functions, and how it manages cluster operations effectively.',
        url: 'https://medium.com/@gehanliyanage/understanding-kubernetes-control-plane-a-clear-guide-for-beginners-457b535ed1ed',
    },
    {
        date: 'Octomber 18, 2024',
        title: 'Exploring Microsoft: Empowering People and Organizations with Technology',
        description: 'An insightful exploration of how Microsoft empowers people and organizations worldwide through innovation, cloud technology, and digital transformation.',
        url: 'https://medium.com/@gehanliyanage/exploring-microsoft-empowering-people-and-organizations-with-technology-16aedd64799f',
    },
    {
        date: 'July 24, 2024',
        title: 'Backup and Restore the SQL Database (Using Ubuntu)',
        description: 'A practical guide to backing up and restoring SQL databases on Ubuntu, ensuring data safety, reliability, and seamless recovery processes.',
        url: 'https://medium.com/@gehanliyanage/backup-and-restore-the-sql-database-using-ubuntu-8d5aef32db71',
    },
];

export const EDUCATION_DATA: Education[] = [
    {
        icon: <img src="/images/uwu.jpg" alt="Uva Wellassa University logo" className="h-10 w-auto" />,
        institution: 'Uva Wellassa University of Sri Lanka',
        degree: 'BSc.(Hons) in Industrial Information Technology',
        period: '2023 - Present',
    },
    {
        icon: <img src="/images/aquinas.png" alt="Aquinas College logo" className="h-10 w-auto" />,
        institution: 'Aquinas College of Higher Education',
        degree: 'Diploma in English Language & Literature',
        period: '2018 - 2023',
    },
    {
        icon: <img src="/images/scl.png" alt="Nalanda College logo" className="h-10 w-auto" />,
        institution: 'Nalanda College, Colombo',
        degree: 'Advanced Level in Technology Stream',
        period: '2018 - 2022',
    },
];

export const ARTICLES_DATA: Article[] = [
    {
        image: '/images/at1.png',
        title: 'Understanding Kubernetes Control Plane: A Clear Guide for Beginners',
        description: 'A beginner-friendly guide to understanding the Kubernetes Control Plane, explaining its components, functions, and how it manages cluster operations effectively.',
        url: 'https://medium.com/@gehanliyanage/understanding-kubernetes-control-plane-a-clear-guide-for-beginners-457b535ed1ed',
        tags: ['Kubernetes', 'Docker', 'Cloud Computing'],
    },
    {
        image: '/images/at2.png',
        title: 'Exploring Microsoft: Empowering People and Organizations with Technology',
        description: 'An insightful exploration of how Microsoft empowers people and organizations worldwide through innovation, cloud technology, and digital transformation.',
        url: 'https://medium.com/@gehanliyanage/exploring-microsoft-empowering-people-and-organizations-with-technology-16aedd64799f',
        tags: ['Microsoft Azure', 'Cloud Services', 'AI & Innovation'],
    },
    {
        image: '/images/at3.png',
        title: 'Backup and Restore the SQL Database (Using Ubuntu)',
        description: 'A practical guide to backing up and restoring SQL databases on Ubuntu, ensuring data safety, reliability, and seamless recovery processes.',
        url: 'https://medium.com/@gehanliyanage/backup-and-restore-the-sql-database-using-ubuntu-8d5aef32db71',
        tags: ['MySQL', 'Ubuntu', 'Database Administration'],
    }
];

export const DETAILED_PROJECTS_DATA: DetailedProject[] = [
    {
        image: '/images/project1.png',
        title: 'Todo App with Full DevOps Pipeline',
        description: 'Developed a full-stack Todo App using React and Flask, emphasizing DevOps practices with Docker, CI/CD automation via GitHub Actions, and deployment to Azure Kubernetes Service (AKS). Gained hands-on experience in container orchestration, load balancing, and cloud-native automation.',
        tags: ['React', 'Docker', 'Kubernetes', 'Azure Kubernetes Service (AKS)', 'Nginx'],
        githubUrl: 'https://github.com/GehanLiyanage2002/TodoApp',
        
    },
    // {
    //     image: 'https://picsum.photos/seed/project2/800/600',
    //     title: 'Project Two: Blog Platform',
    //     description: 'A responsive and modern blogging platform with a markdown editor, comments, and social sharing features. Built using Next.js for optimal performance and SEO.',
    //     tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    //     githubUrl: 'https://github.com',
    // },
    // {
    //     image: 'https://picsum.photos/seed/project3/800/600',
    //     title: 'Project Three: Data Visualization Dashboard',
    //     description: 'An interactive dashboard for visualizing complex datasets. Features dynamic charts, graphs, and filters, created with D3.js and React to provide insightful data analysis.',
    //     tags: ['React', 'D3.js', 'Firebase', 'Data Viz'],
    //     githubUrl: 'https://github.com',
    //     liveUrl: '#',
    // },
];

export const CONTACT_INFO: ContactInfo[] = [
    { icon: <MailIcon />, label: 'Email', value: 'aloka.abishek9@gmail.com', href: 'mailto:aloka.abishek9@gmail.com' },
];