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
  | "WordPress"
  | "SEO & Growth";

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "Web Development",
  "Mobile Apps",
  "AI & ML",
  "E-Commerce",
  "WordPress",
  "SEO & Growth",
];

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectGalleryItem {
  url: string;
  caption?: string;
}

export interface ProjectTestimonial {
  quote: string;
  name: string;
  role: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: ProjectCategory;
  industry: string;
  tags: string[];
  techStack: string[];
  summary: string;
  overview: string;
  challenge: string;
  solution: string;
  approach: string[];
  results: string[];
  metrics: ProjectMetric[];
  year: string;
  duration: string;
  teamSize: string;
  liveUrl?: string;
  coverImage: string;
  gallery: ProjectGalleryItem[];
  featured: boolean;
  published: boolean;
  testimonial?: ProjectTestimonial;
  createdAt?: string;
  updatedAt?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  published: boolean;
  sortOrder: number;
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
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  niceToHave: string[];
  published: boolean;
  createdAt?: string;
}

export interface JobApplication {
  id: string;
  jobId?: string;
  jobTitle: string;
  name: string;
  email: string;
  phone?: string;
  linkedin?: string;
  resumeUrl?: string;
  coverLetter?: string;
  status: ApplicationStatus;
  createdAt: string;
}

export type ApplicationStatus = "new" | "reviewing" | "interview" | "hired" | "rejected";
export type InquiryStatus = "new" | "contacted" | "closed";

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  company?: string;
  budget?: string;
  message: string;
  source: "contact" | "newsletter";
  status: InquiryStatus;
  createdAt: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  coverImage: string;
  author: { name: string; role: string };
  content: string[];
  published: boolean;
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

export interface DashboardStats {
  projects: number;
  publishedProjects: number;
  jobs: number;
  applications: number;
  newApplications: number;
  inquiries: number;
  newInquiries: number;
  posts: number;
}
