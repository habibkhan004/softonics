import type { LucideIcon } from "lucide-react";

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
}

export type ProjectCategory =
  | "Web Development"
  | "Mobile Apps"
  | "AI & ML"
  | "E-Commerce"
  | "Cloud & DevOps"
  | "SEO & Growth";

export interface Project {
  slug: string;
  title: string;
  client: string;
  category: ProjectCategory;
  tags: string[];
  summary: string;
  results: string[];
  year: string;
  icon: LucideIcon;
  challenge: string;
  solution: string;
  approach: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface TechCategory {
  category: string;
  icon: LucideIcon;
  items: string[];
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaLabel: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface JobOpening {
  title: string;
  department: string;
  location: string;
  type: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  icon: LucideIcon;
  author: { name: string; role: string };
  content: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  initials: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterLinkColumn {
  title: string;
  links: NavLink[];
}
