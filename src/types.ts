export interface NavLink {
  label: string;
  navLabel?: string;
  href: string;
}

export interface SocialLink {
  label: string;
  shortLabel: string;
  icon: string;
  href: string;
}

export interface AboutDetail {
  icon: string;
  title: string;
  lines: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  letterUrl?: string;
}

export type StatAccent = "violet" | "cyan" | "orange" | "green";

export interface AboutStat {
  accent: StatAccent;
  headline: string;
  description: string;
}

export interface WorkProofTile {
  label: string;
  image?: string;
}

export type SkillAccent = "violet" | "cyan" | "orange" | "green";

export interface ProofTile {
  chip: string;
  caption: string;
  image?: string;
}

export interface OpenProof {
  label: string;
  image?: string;
}

export interface ProjectStat {
  label: string;
  description: string;
}

export interface FeaturedProject {
  title: string;
  badge: string;
  badgeAccent: SkillAccent;
  meta: string;
  description: string;
  tiles: ProofTile[];
  tags: string[];
  stats: ProjectStat[];
}

export interface JobEntryData {
  role: string;
  dates: string;
  metaCompany: string;
  companyUrl?: string;
  metaLocation: string;
  accent: SkillAccent;
  bullets?: string[];
  workProof?: {
    eyebrow: string;
    title: string;
    tiles: WorkProofTile[];
  };
  
  projects?: FeaturedProject[];
}

export interface SkillCategory {
  title: string;
  accent: SkillAccent;
  items: string[];
}

export interface ProjectButton {
  label: string;
  href: string;
}

export interface ProjectCard {
  image: string;
  alt: string;
  title: string;
  buttons: ProjectButton[];
}

export interface Publication {
  image: string;
  alt: string;
  title: string;
  journal: string;
  doi: string;
  doiHref: string;
  date: string;
  buttons: ProjectButton[];
}

export interface Highlight {
  icon: "trophy" | "medal" | "star" | "cloud" | "cap";
  accent: SkillAccent;
  title: string;
  description: string;
  featured?: boolean;
}

export interface ContactLink {
  icon: string;
  label: string;
  href: string;
}
