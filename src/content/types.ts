export type LinkSet = {
  demo?: string;
  repo?: string;
};

export type Project = {
  title: string;
  slug: string;
  stack: string[];
  summary: string;
  bullets: string[];
  links: LinkSet;
  image?: string;
};

export type Experience = {
  company: string;
  role: string;
  start: string; // e.g., "June 2025"
  end: string; // e.g., "Present" or "Dec. 2024"
  location: string;
  bullets: string[];
};

export type Education = {
  school: string;
  degree: string;
  focus?: string;
  gpa?: string;
  graduation: string;
  courses: string[];
  location: string;
};

export type Award = {
  title: string;
  org: string;
  summary?: string;
};

export type Skills = {
  languages: string[];
  tools: string[];
};

export type Profile = {
  name: string;
  headline: string;
  phone?: string;
  email: string;
  location: string;
  links: {
    linkedin?: string;
    github?: string;
    website?: string;
  };
};

export type SiteContent = {
  profile: Profile;
  education: Education;
  experience: Experience[];
  projects: Project[];
  awards: Award[];
  skills: Skills;
};
