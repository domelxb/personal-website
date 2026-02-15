export type Language = 'en' | 'zh';

export interface TimelineItem {
  id: string;
  role: string;
  institution: string;
  period: string;
  description?: string;
  supervisor?: string;
  affiliation?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: string;
  status?: string; // e.g., "Under review", "Pending submission"
  abstract?: string;
  imageUrl?: string;
  coverUrl?: string;
  doi?: string;
}

export interface Patent {
  id: string;
  title: string;
  authors: string;
  type: string;
  year: string;
  number: string;
  status?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Award {
  id: string;
  title: string;
  year?: string;
}

export interface Project {
  id: string;
  title: string;
  code?: string;
}

export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  relatedPublicationIds: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  coverUrl: string;
  date?: string;
  description?: string;
  images: string[];
}

export interface SocialLinks {
  email: string;
  phone?: string;
  wechat?: string;
  x?: string;
  linkedin?: string;
  instagram?: string;
  researchGate?: string;
}

export interface LocalizedContent {
  nav: {
    home: string;
    experience: string;
    publications: string;
    patents: string;
    awards: string;
    skills: string;
    gallery: string;
    contact: string;
  };
  hero: {
    role: string;
    labName?: string;
    labUrl?: string;
    labConnector?: string;
    intro: string;
    downloadCv: string;
    aboutTitle: string;
    aboutDesc: string;
    researchAreasTitle: string;
    backToHome: string;
  };
  sectionTitles: {
    education: string;
    experience: string;
    publications: string;
    awards: string;
    patents: string;
    skills: string;
    projects: string;
    gallery: string;
  };
  researchAreas: ResearchArea[];
}