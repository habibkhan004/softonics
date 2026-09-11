export interface HeroHeadlineLine {
  text: string;
  /** Renders the line in the brand accent green. */
  accent?: boolean;
}

export const heroContent: {
  eyebrow: string;
  headline: HeroHeadlineLine[];
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
} = {
  eyebrow: "Full-Service Software Agency",
  // Line breaks are intentional — the display type is not meant to auto-wrap on desktop,
  // so lines are kept short enough to hold on one line at the largest size.
  headline: [
    { text: "Software that" },
    { text: "moves your", accent: true },
    { text: "business." },
  ],
  subtitle:
    "We build custom software, web and mobile apps, AI/ML systems and SEO-driven growth for companies that can't afford a slow, mediocre team. You talk directly to the senior engineers writing your code.",
  ctaLabel: "Start a Project",
  ctaHref: "/contact",
};
