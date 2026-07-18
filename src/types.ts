export interface Profile {
  name: string;
  titles: string[];
  bio: string;
  aboutText: string;
  resumeUrl: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  leetcode: string;
  liveProject: string;
  avatarUrl: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  iconName: string; // corresponding Lucide icon
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  category: "all" | "web" | "uiux" | "embedded" | "other";
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: string;
  features?: string[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
  university?: string;
  year: string;
  cgpaOrPercentage: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface Achievement {
  title: string;
  description: string;
  date: string;
  type: "contest" | "hackathon" | "award" | "publication";
  link?: string;
}
