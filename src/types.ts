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
}

export type StatAccent = "violet" | "cyan" | "orange" | "green";

export interface AboutStat {
  accent: StatAccent;
  headline: string;
  description: string;
}

export interface WorkEvidenceTile {
  label: string;
}

export type SkillAccent = "violet" | "cyan" | "orange" | "green";

export interface EvidenceTile {
  chip: string;
  caption: string;
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
  tiles: EvidenceTile[];
  tags: string[];
  stats: ProjectStat[];
}

export interface JobEntryData {
  role: string;
  dates: string;
  metaCompany: string;
  metaLocation: string;
  /** Legacy bullet-list format (used by roles not yet converted to featured-project cards). */
  bullets?: string[];
  workEvidence?: {
    eyebrow: string;
    title: string;
    tiles: WorkEvidenceTile[];
  };
  /** Featured-project-card format (used for roles with distinct, showcase-worthy projects). */
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
