function unsplash(id: string, width = 1920) {
  return `https://images.unsplash.com/photo-${id}?q=80&w=${width}&auto=format&fit=crop`;
}

export interface HeroSlide {
  eyebrow: string;
  title: string;
  gradientWord: string;
  subtitle: string;
  highlights: string[];
  ctaLabel: string;
  ctaHref: string;
  image: string;
}

export const heroSlides: HeroSlide[] = [
  {
    eyebrow: "Full-Service Software Agency",
    title: "We build software that moves your business forward",
    gradientWord: "moves your business forward",
    subtitle:
      "Custom software, web & mobile apps, AI/ML systems, and SEO-driven growth — engineered by senior teams who ship, not just plan. We scope honestly, staff senior engineers only, and stay accountable long after launch day.",
    highlights: ["Senior engineers only", "Fixed-scope delivery", "Direct access to your team"],
    ctaLabel: "Start a Project",
    ctaHref: "/contact",
    image: unsplash("1461749280684-dccba630e2f6"),
  },
  {
    eyebrow: "AI & Machine Learning",
    title: "Ship AI features your competitors can't copy overnight",
    gradientWord: "competitors can't copy overnight",
    subtitle:
      "Custom LLM applications, RAG pipelines, and predictive models — built on real MLOps foundations, not API wrappers. From data pipeline to production monitoring, we own the full lifecycle.",
    highlights: ["RAG & LLM pipelines", "Production MLOps", "Model monitoring included"],
    ctaLabel: "Explore AI Solutions",
    ctaHref: "/services/ai-machine-learning",
    image: unsplash("1550439062-609e1531270e"),
  },
  {
    eyebrow: "Web & Mobile Development",
    title: "Fast, accessible apps that feel native on every screen",
    gradientWord: "feel native on every screen",
    subtitle:
      "Next.js web platforms and React Native mobile apps built for Core Web Vitals, accessibility, and long-term maintainability. One codebase, iOS and Android, without compromising on feel.",
    highlights: ["Next.js & React Native", "WCAG 2.1 AA accessible", "Built to scale with you"],
    ctaLabel: "See Our Work",
    ctaHref: "/projects",
    image: unsplash("1498050108023-c5249f4df085"),
  },
  {
    eyebrow: "SEO & Digital Growth",
    title: "Organic growth engineered, not guessed at",
    gradientWord: "engineered, not guessed at",
    subtitle:
      "Technical SEO, programmatic content systems, and Core Web Vitals optimization that compound traffic long after launch. We treat SEO as an engineering discipline, not a checklist.",
    highlights: ["Programmatic SEO systems", "Core Web Vitals audits", "Structured data & schema"],
    ctaLabel: "Grow Your Traffic",
    ctaHref: "/services/seo-digital-growth",
    image: unsplash("1487058792275-0ad4aaf24ca7"),
  },
  {
    eyebrow: "Cloud & DevOps",
    title: "Infrastructure that scales quietly in the background",
    gradientWord: "scales quietly in the background",
    subtitle:
      "AWS, Kubernetes, and Infrastructure-as-Code pipelines built so releases stay boring and outages stay rare. We design for the traffic spike you haven't hit yet.",
    highlights: ["Infrastructure as Code", "Zero-downtime deploys", "24/7 monitoring & alerts"],
    ctaLabel: "Talk Infrastructure",
    ctaHref: "/services/cloud-devops",
    image: unsplash("1519241047957-be31d7379a5d"),
  },
];
