export interface Profile {
  name: string;
  title: string;
  summary: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  website: string;
}

export interface Experience {
  position: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

export interface Skills {
  technical: string[];
  software: string[];
  soft: { title: string; description: string }[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  specialization?: string;
  thesis?: string;
  supervisor?: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  highlights: string[];
  status: string;
}

export interface Achievement {
  title: string;
  description:string;
  year: string;
  value?: string;
  prize?: string;
  citation?: string;
  committee?: string;
  doi?: string;
} 