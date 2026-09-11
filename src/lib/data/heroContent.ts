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
  eyebrow: "Software · Web · Mobile · SEO",
  // Line breaks are intentional — the display type is not meant to auto-wrap on desktop,
  // so lines are kept short enough to hold on one line at the largest size.
  headline: [
    { text: "Software built" },
    { text: "around how", accent: true },
    { text: "you work." },
  ],
  subtitle:
    "Desynt designs and builds custom software, web platforms, mobile apps and WordPress sites — then tunes them for search and keeps them running. Small senior team, scopes we can defend, no handoffs to juniors.",
  ctaLabel: "Start a Project",
  ctaHref: "/contact",
};
