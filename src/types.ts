import type { ReactElement } from 'react';

export type SectionType = 'About' | 'Projects' | 'Skills' | 'Articles' | 'Experience' | 'Contact';

export interface NavLink {
  name: SectionType;
  label: string;
}

export interface SocialLink {
  name: string;
  icon: ReactElement;
  url: string;
  handle?: string;
  color?: string;
}

export interface Article {
  image: string;
  title: string;
  description: string;
  url: string;
  tags: string[];
  date: string;
  readTime: string;
}

export interface ArticleListItem {
  date: string;
  title: string;
  description: string;
  url: string;
  tags?: string[];
  readTime?: string;
}

export interface ProjectArchitecture {
  problem: string;
  solution: string;
  devopsHighlights: string[];
}

export interface DetailedProject {
  id: string;
  image: string;
  title: string;
  category: 'DevOps & Cloud' | 'Full-Stack' | 'Automation';
  description: string;
  detailedDescription?: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  architecture?: ProjectArchitecture;
}

export interface SkillItem {
  name: string;
  level: string; // e.g. "Advanced", "Proficient", "Familiar"
  iconName?: string;
  description: string;
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: SkillItem[];
}

export interface ContactInfo {
  icon: ReactElement;
  label: string;
  value: string;
  href: string;
}

export interface Education {
  icon: ReactElement;
  institution: string;
  degree: string;
  period: string;
  details?: string[];
}

export interface ExperienceItem {
  icon: ReactElement;
  role: string;
  organization: string;
  period: string;
  description: string;
  skills: string[];
}
