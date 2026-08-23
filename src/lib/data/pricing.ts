import type { PricingTier, FaqItem } from "@/lib/types";

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$4,500",
    period: "starting price / project",
    description: "For a focused MVP, landing site, or single-feature build.",
    features: [
      "Dedicated 2-person project team",
      "Discovery & scoping included",
      "Up to 6 weeks of active development",
      "2 rounds of design revisions",
      "30 days of post-launch support",
    ],
    ctaLabel: "Start a Project",
  },
  {
    name: "Growth",
    price: "$12,000",
    period: "starting price / month",
    description: "For ongoing product development with a dedicated squad.",
    features: [
      "Dedicated 4-person cross-functional team",
      "Weekly sprint demos & roadmap planning",
      "Design, engineering & QA included",
      "AI/ML or SEO specialist available on request",
      "90 days of post-launch support",
    ],
    highlighted: true,
    ctaLabel: "Talk to Sales",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "quote-based",
    description: "For large-scale platforms, migrations, or multi-team engagements.",
    features: [
      "Custom team size & composition",
      "Dedicated technical account manager",
      "SLA-backed uptime & response commitments",
      "Security & compliance reviews (SOC 2, HIPAA)",
      "Priority roadmap & embedded engineers",
    ],
    ctaLabel: "Request a Quote",
  },
];

export const pricingFaqs: FaqItem[] = [
  {
    question: "Do you offer fixed-price or time-and-materials contracts?",
    answer:
      "Both. Well-scoped projects (like our Starter tier) are typically fixed-price. Ongoing product work is billed time-and-materials with a monthly not-to-exceed cap, so costs stay predictable.",
  },
  {
    question: "What's included in ongoing support?",
    answer:
      "Support retainers cover monitoring, dependency & security patching, bug fixes, and a set number of hours for small enhancements each month, with SLA-backed response times.",
  },
  {
    question: "Can we start with a smaller engagement before committing further?",
    answer:
      "Yes — most clients start with a paid discovery sprint (1-2 weeks) to validate scope and architecture before committing to a full build.",
  },
  {
    question: "Do you work with early-stage startups?",
    answer:
      "We do, primarily through the Starter tier or equity-friendly custom arrangements evaluated case by case — reach out and we'll be straightforward about fit.",
  },
];
