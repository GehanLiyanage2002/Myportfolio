import React from 'react';
import type { 
  NavLink, 
  SocialLink, 
  Article, 
  ArticleListItem, 
  Education, 
  ExperienceItem,
  DetailedProject, 
  ContactInfo,
  SkillCategory 
} from './types';

import aquinasLogo from './images/aquinas.png';
import sclLogo from './images/scl.png';
import uwuLogo from './images/uwu.jpg';
import at1 from './images/at1.png';
import at2 from './images/at2.png';
import at3 from './images/at3.png';
import project1 from './images/project1.png';
import pj1 from './images/pj1.png';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img6 from './images/img6.jpg';
import img7 from './images/img7.jpg';

// Generic Icon component props
interface IconProps {
  className?: string;
}

// SVG Icons
export const GithubIcon: React.FC<IconProps> = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

export const LinkedinIcon: React.FC<IconProps> = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
  </svg>
);

export const FacebookIcon: React.FC<IconProps> = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.675 0h-21.35C.59 0 0 .59 0 1.325v21.351C0 23.41.59 24 1.325 24H12.82V14.706h-3.34V11.01h3.34V8.41c0-3.309 1.984-5.158 5.022-5.158 1.42 0 2.934.264 2.934.264v3.106h-1.583c-1.636 0-2.144.996-2.144 2.068v2.453h3.59l-.587 3.696h-3.003V24h5.633c.734 0 1.325-.59 1.325-1.325V1.325C24 .59 23.409 0 22.675 0z" />
  </svg>
);

export const InstagramIcon: React.FC<IconProps> = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/>
  </svg>
);

export const YoutubeIcon: React.FC<IconProps> = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export const MediumIcon: React.FC<IconProps> = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
);

export const BriefcaseIcon: React.FC<IconProps> = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export const DownloadIcon: React.FC<IconProps> = ({ className = "h-5 w-5 ml-2" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

export const ExternalLinkIcon: React.FC<IconProps> = ({ className = "h-4 w-4 ml-1.5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

export const MailIcon: React.FC<IconProps> = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export const MoonIcon: React.FC<IconProps> = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

export const SunIcon: React.FC<IconProps> = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

// Navigation Links
export const NAV_LINKS: NavLink[] = [
  { name: 'About', label: 'About' },
  { name: 'Projects', label: 'Projects' },
  { name: 'Skills', label: 'Tech Stack' },
  { name: 'Articles', label: 'Articles' },
  { name: 'Experience', label: 'Education & Leadership' },
  { name: 'Contact', label: 'Contact' },
];

// Social Links
export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'LinkedIn', icon: <LinkedinIcon />, url: 'https://www.linkedin.com/in/gehan-liyanage', handle: 'gehan-liyanage', color: '#0A66C2' },
  { name: 'GitHub', icon: <GithubIcon />, url: 'https://github.com/GehanLiyanage2002', handle: 'GehanLiyanage2002', color: '#333333' },
  { name: 'Medium', icon: <MediumIcon />, url: 'https://medium.com/@gehanliyanage', handle: '@gehanliyanage', color: '#00ab6c' },
  { name: 'Facebook', icon: <FacebookIcon />, url: 'https://www.facebook.com/luwisnickman', handle: 'luwisnickman', color: '#1877F2' },
  { name: 'Instagram', icon: <InstagramIcon />, url: 'https://www.instagram.com/gehan_liyanage', handle: '@gehan_liyanage', color: '#E4405F' },
  { name: 'YouTube', icon: <YoutubeIcon />, url: 'https://www.youtube.com/@CloudGen0815', handle: '@CloudGen0815', color: '#FF0000' },
];

export const CONTACT_PAGE_LINKS: SocialLink[] = [
  { name: 'Email', icon: <MailIcon />, url: 'mailto:gahenliyanage@gmail.com', handle: 'gahenliyanage@gmail.com' },
  { name: 'LinkedIn', icon: <LinkedinIcon />, url: 'https://www.linkedin.com/in/gehan-liyanage', handle: 'in/gehan-liyanage' },
  { name: 'GitHub', icon: <GithubIcon />, url: 'https://github.com/GehanLiyanage2002', handle: 'github.com/GehanLiyanage2002' },
  { name: 'Medium', icon: <MediumIcon />, url: 'https://medium.com/@gehanliyanage', handle: 'medium.com/@gehanliyanage' },
  { name: 'Facebook', icon: <FacebookIcon />, url: 'https://www.facebook.com/luwisnickman', handle: 'luwisnickman' },
  { name: 'YouTube', icon: <YoutubeIcon />, url: 'https://www.youtube.com/@CloudGen0815', handle: '@CloudGen0815' },
];

// Gallery Images
export const GALLERY_IMAGES: string[] = [
  img7,
  img1,
  img2,
  img3,
  img4,
  img6,
];

// Articles List Data
export const ARTICLES_LIST_DATA: ArticleListItem[] = [
  {
    date: 'October 26, 2025',
    title: 'Understanding Kubernetes Control Plane: A Clear Guide for Beginners',
    description: 'A beginner-friendly guide to understanding the Kubernetes Control Plane, explaining its components (kube-apiserver, etcd, kube-scheduler, kube-controller-manager) and how it orchestrates cluster operations.',
    url: 'https://medium.com/@gehanliyanage/understanding-kubernetes-control-plane-a-clear-guide-for-beginners-457b535ed1ed',
    tags: ['Kubernetes', 'Docker', 'Cloud Native'],
    readTime: '5 min read',
  },
  {
    date: 'October 18, 2024',
    title: 'Exploring Microsoft: Empowering People and Organizations with Technology',
    description: 'An insightful exploration of how Microsoft empowers people and organizations worldwide through Azure cloud infrastructure, AI services, and enterprise digital transformation.',
    url: 'https://medium.com/@gehanliyanage/exploring-microsoft-empowering-people-and-organizations-with-technology-16aedd64799f',
    tags: ['Microsoft Azure', 'Cloud Computing', 'AI & Innovation'],
    readTime: '4 min read',
  },
  {
    date: 'July 24, 2024',
    title: 'Backup and Restore the SQL Database (Using Ubuntu)',
    description: 'A practical, step-by-step operational guide to backing up and restoring SQL databases on Ubuntu Linux, implementing automated mysqldump scripts, cron scheduling, and data recovery verification.',
    url: 'https://medium.com/@gehanliyanage/backup-and-restore-the-sql-database-using-ubuntu-8d5aef32db71',
    tags: ['MySQL', 'Ubuntu Linux', 'Database Admin'],
    readTime: '6 min read',
  },
];

export const ARTICLES_DATA: Article[] = [
  {
    image: at1,
    title: 'Understanding Kubernetes Control Plane: A Clear Guide for Beginners',
    description: 'Master the core architectural components of Kubernetes: kube-apiserver, etcd, scheduler, and controller manager, and discover how container orchestration works in production.',
    url: 'https://medium.com/@gehanliyanage/understanding-kubernetes-control-plane-a-clear-guide-for-beginners-457b535ed1ed',
    tags: ['Kubernetes', 'Docker', 'Cloud Native', 'DevOps'],
    date: 'October 26, 2025',
    readTime: '5 min read',
  },
  {
    image: at2,
    title: 'Exploring Microsoft: Empowering People and Organizations with Technology',
    description: 'An in-depth perspective on modern enterprise technology, cloud innovation, Azure infrastructure capabilities, and Microsoft developer community ecosystem.',
    url: 'https://medium.com/@gehanliyanage/exploring-microsoft-empowering-people-and-organizations-with-technology-16aedd64799f',
    tags: ['Microsoft Azure', 'Cloud Ecosystem', 'AI & Innovation'],
    date: 'October 18, 2024',
    readTime: '4 min read',
  },
  {
    image: at3,
    title: 'Backup and Restore the SQL Database (Using Ubuntu)',
    description: 'Practical engineering walkthrough on securing relational databases on Linux servers with automated cron dumps, secure storage rotation, and zero-downtime restore playbooks.',
    url: 'https://medium.com/@gehanliyanage/backup-and-restore-the-sql-database-using-ubuntu-8d5aef32db71',
    tags: ['MySQL', 'Ubuntu Linux', 'Bash Automation', 'Reliability'],
    date: 'July 24, 2024',
    readTime: '6 min read',
  }
];

// Education Data
export const EDUCATION_DATA: Education[] = [
  {
    icon: <img src={uwuLogo} alt="Uva Wellassa University logo" className="h-8 w-8 object-contain rounded-md" />,
    institution: 'Uva Wellassa University of Sri Lanka',
    degree: 'B.Sc. (Hons) in Industrial Information Technology',
    period: '2023 - Present',
    details: [
      'Focusing on Computer Science, Distributed Systems, Cloud Computing, and Software Engineering.',
      'Active leadership in student technology communities and peer mentoring.',
    ],
  },
  {
    icon: <img src={aquinasLogo} alt="Aquinas College logo" className="h-8 w-8 object-contain rounded-md" />,
    institution: 'Aquinas College of Higher Education',
    degree: 'Diploma in English Language & Literature',
    period: '2018 - 2023',
    details: [
      'Advanced professional English communication, technical writing, and public speaking skills.',
    ],
  },
  {
    icon: <img src={sclLogo} alt="Nalanda College logo" className="h-8 w-8 object-contain rounded-md" />,
    institution: 'Nalanda College, Colombo',
    degree: 'G.C.E. Advanced Level - Technology Stream',
    period: '2018 - 2022',
    details: [
      'Information & Communication Technology, Engineering Technology, and Science for Technology.',
    ],
  },
];

// Leadership & Volunteer Experience
export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    icon: <BriefcaseIcon className="h-5 w-5 text-violet-500" />,
    role: 'Webmaster & Technical Lead',
    organization: 'Microsoft Student Club - UWU',
    period: '2024 - Present',
    description: 'Leading web infrastructure, overseeing technical workshops on Microsoft Azure & cloud tooling, and driving community engagement for 400+ student developers.',
    skills: ['Azure Cloud', 'Community Leadership', 'Web Development', 'Technical Workshops'],
  },
  {
    icon: <BriefcaseIcon className="h-5 w-5 text-indigo-500" />,
    role: 'Student Ambassador',
    organization: 'Microsoft Learn Student Ambassador (MSA)',
    period: '2024 - Present',
    description: 'Championing Microsoft technologies, organizing cloud labs, mentoring university peers in cloud certifications, and contributing to community open-source knowledge.',
    skills: ['Microsoft Azure', 'Public Speaking', 'Cloud Computing', 'Mentorship'],
  },
  {
    icon: <MediumIcon className="h-5 w-5 text-emerald-500" />,
    role: 'Technical Writer',
    organization: 'Medium Publication (Self-Published)',
    period: '2024 - Present',
    description: 'Publishing actionable, in-depth architectural guides on Kubernetes, Linux system administration, database reliability, and cloud automation.',
    skills: ['Technical Writing', 'DevOps Architecture', 'Kubernetes', 'Linux Administration'],
  },
];

// Detailed Projects Data
export const DETAILED_PROJECTS_DATA: DetailedProject[] = [
  {
    id: 'todo-devops',
    image: project1,
    title: 'Full-Stack Todo App with Complete DevOps Pipeline',
    category: 'DevOps & Cloud',
    description: 'Production-ready full-stack application built with React & Flask, containerized with Docker, automated via GitHub Actions CI/CD, and deployed to Azure Kubernetes Service (AKS).',
    detailedDescription: 'Engineered a scalable multi-container architecture from scratch. Configured automated linting, test suites, and Docker image builds with multi-stage caching pushed to container registries. Implemented Kubernetes manifests with rolling updates, service discovery, Nginx reverse proxy, and health probes.',
    tags: ['React', 'Flask', 'Docker', 'Kubernetes (AKS)', 'GitHub Actions', 'Nginx Reverse Proxy', 'Azure'],
    githubUrl: 'https://github.com/GehanLiyanage2002/TodoApp',
    featured: true,
    architecture: {
      problem: 'Manual deployment processes were error-prone and caused downtime during software rollouts.',
      solution: 'Automated end-to-end CI/CD workflow deploying multi-container services into a managed Kubernetes cluster with zero-downtime rolling updates.',
      devopsHighlights: [
        'Multi-stage Dockerfile optimization reducing container image size by over 60%',
        'Automated CI/CD workflow triggering lint, build, test, and container packaging on every commit',
        'Kubernetes deployments with ConfigMaps, Secrets, liveness/readiness probes, and ClusterIP routing',
        'Nginx ingress reverse proxy handling CORS, API proxying, and client static routing',
      ]
    }
  },
  {
    id: 'db-backup-engine',
    image: at3,
    title: 'Automated Linux SQL Backup & Disaster Recovery Engine',
    category: 'Automation',
    description: 'Automated disaster recovery and database maintenance system built for Ubuntu Linux servers, incorporating cron automation, checksum verification, and log rotation.',
    detailedDescription: 'Developed robust Bash automation scripts to orchestrate daily and hourly SQL database backups. Features gzip compression, md5 checksum verification, automated retention cleanup (purging backups older than 30 days), and automated alert notifications on failure.',
    tags: ['Ubuntu Linux', 'MySQL', 'Bash Scripting', 'Cron Automation', 'Security & Backup'],
    githubUrl: 'https://github.com/GehanLiyanage2002',
    featured: true,
    architecture: {
      problem: 'Unscheduled server outages risked losing critical transactional data without verifiable automated backups.',
      solution: 'Created an idempotent Bash automation daemon with scheduled cron jobs and safe restoration dry-run scripts.',
      devopsHighlights: [
        'Non-blocking mysqldump execution with gzip compression',
        'Automatic timestamped archives and retention policies saving disk space',
        'Integrity checksum verification preventing corrupted backup retention',
        'Step-by-step restoration verification playbook tested against real failover scenarios',
      ]
    }
  },
  {
    id: 'msc-platform',
    image: pj1,
    title: 'Microsoft Student Club Community & Event Platform',
    category: 'Full-Stack',
    description: 'Modern, interactive web platform developed for the Microsoft Student Club at UWU, featuring event registrations, technology workshops hub, and resource showcases.',
    detailedDescription: 'Architected a responsive single-page application with modern UI/UX design patterns, dark/light theme switching, and real-time interaction for hundreds of campus developers.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Azure Hosting'],
    githubUrl: 'https://github.com/GehanLiyanage2002',
    featured: false,
    architecture: {
      problem: 'Campus developers lacked a centralized, modern portal for student club activities and Azure workshops.',
      solution: 'Developed a high-performance web application deployed with continuous delivery and modern responsive UI.',
      devopsHighlights: [
        'Single-command production build with optimized asset bundling via Vite',
        'Full responsive design ensuring mobile and desktop compatibility',
        'Integrated with cloud hosting and modern web analytics',
      ]
    }
  },
  {
    id: 'k8s-cluster-mesh',
    image: at1,
    title: 'Kubernetes Cluster Architecture & Control Plane Exploration',
    category: 'DevOps & Cloud',
    description: 'Hands-on architectural setup and diagnostic experiments testing Kubernetes control plane components, pod scheduling, and resilient networking.',
    detailedDescription: 'Explored deep internals of kube-apiserver, etcd key-value store consistency, kube-scheduler placement algorithms, and node-level kubelet orchestration in distributed topologies.',
    tags: ['Kubernetes', 'Docker', 'Control Plane', 'Cluster Networking', 'etcd'],
    githubUrl: 'https://github.com/GehanLiyanage2002',
    featured: false,
    architecture: {
      problem: 'Understanding failure modes in production Kubernetes control planes requires active hands-on simulation.',
      solution: 'Documented and deployed test clusters simulating worker node node-loss and scheduler self-healing.',
      devopsHighlights: [
        'Deep dive into etcd high availability and consensus mechanisms',
        'Custom YAML manifests for ReplicaSets, Services, and horizontal autoscaling',
        'Documented in an acclaimed Medium publication for the engineering community',
      ]
    }
  }
];

// Categorized Skills Data
export const SKILLS_CATEGORIES: SkillCategory[] = [
  {
    title: 'Cloud & Infrastructure',
    icon: 'Cloud',
    skills: [
      { name: 'Microsoft Azure', level: 'Proficient', description: 'AKS, App Services, VMs, Blob Storage, Resource Groups', highlight: true },
      { name: 'Linux / Ubuntu Server', level: 'Proficient', description: 'System administration, SSH, systemd, bash automation, permissions', highlight: true },
      { name: 'Cloud Architecture', level: 'Intermediate', description: 'High availability, load balancing, virtual networks, DNS management' },
      { name: 'AWS Basics', level: 'Familiar', description: 'EC2, S3, IAM fundamental principles' },
    ]
  },
  {
    title: 'DevOps & Containers',
    icon: 'Terminal',
    skills: [
      { name: 'Docker & Docker Compose', level: 'Proficient', description: 'Multi-stage builds, container optimization, networking, volumes', highlight: true },
      { name: 'Kubernetes (K8s) & AKS', level: 'Proficient', description: 'Deployments, Services, Ingress, ConfigMaps, Secrets, Control Plane', highlight: true },
      { name: 'GitHub Actions (CI/CD)', level: 'Proficient', description: 'Automated test runners, docker build & push, automated deployment workflows', highlight: true },
      { name: 'Nginx Reverse Proxy', level: 'Proficient', description: 'Reverse proxying, load distribution, SSL/TLS, custom headers' },
      { name: 'Bash Scripting', level: 'Proficient', description: 'Automated backup scripts, cron jobs, log analyzers, environment setup', highlight: true },
    ]
  },
  {
    title: 'Languages & Web Development',
    icon: 'Code',
    skills: [
      { name: 'Python', level: 'Proficient', description: 'Backend APIs (Flask), automation scripts, data handling', highlight: true },
      { name: 'React.js', level: 'Proficient', description: 'Component architecture, hooks, state management, SPA routing', highlight: true },
      { name: 'TypeScript & JavaScript', level: 'Proficient', description: 'Type-safe frontend development, modern ES6+ paradigms', highlight: true },
      { name: 'Flask', level: 'Proficient', description: 'Lightweight RESTful API services, JWT authentication, database ORM' },
      { name: 'Tailwind CSS', level: 'Advanced', description: 'Modern responsive design, custom design tokens, dark mode systems', highlight: true },
      { name: 'HTML5 & CSS3', level: 'Advanced', description: 'Semantic markup, accessibility, CSS Grid, Flexbox, animations' },
    ]
  },
  {
    title: 'Databases & Developer Tools',
    icon: 'Database',
    skills: [
      { name: 'MySQL', level: 'Proficient', description: 'Relational schemas, indexing, query optimization, backup/restore playbooks', highlight: true },
      { name: 'Git & GitHub', level: 'Proficient', description: 'Branching strategies, PR reviews, release tagging, GitHub workflows', highlight: true },
      { name: 'Postman', level: 'Proficient', description: 'REST API testing, collection runs, environment mockups' },
      { name: 'VS Code & CLI Tools', level: 'Advanced', description: 'Container development extensions, remote SSH debugging, terminal tooling' },
    ]
  }
];

// Contact Info
export const CONTACT_INFO: ContactInfo[] = [
  { icon: <MailIcon />, label: 'Email', value: 'gahenliyanage@gmail.com', href: 'mailto:gahenliyanage@gmail.com' },
];