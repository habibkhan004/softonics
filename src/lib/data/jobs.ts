import type { JobOpening } from "@/lib/types";

export const jobs: JobOpening[] = [
  {
    id: "job-0001-0000-4000-8000-000000000001",
    slug: "senior-full-stack-engineer",
    title: "Senior Full-Stack Engineer (Next.js/Node)",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "You'll own features end-to-end across Next.js front-ends and Node services — from the first sketch in a client workshop to production telemetry. We look for people who can design a data model, write the UI, and still care about Core Web Vitals.",
    requirements: [
      "5+ years building production web applications",
      "Strong TypeScript, React, and Node.js",
      "Comfortable with Postgres and designing APIs",
      "Experience shipping in a client-facing or consulting environment",
    ],
    niceToHave: ["Next.js App Router", "Supabase or similar BaaS", "Design-system work"],
    published: true,
  },
  {
    id: "job-0002-0000-4000-8000-000000000002",
    slug: "machine-learning-engineer",
    title: "Machine Learning Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "You'll design, train, and productionize models for client products — retrieval pipelines, ranking, and the unglamorous evaluation harness that makes the demo survive contact with real users.",
    requirements: [
      "3+ years shipping ML systems past the notebook",
      "Python, PyTorch or similar, and a retrieval stack you've operated",
      "Clear written communication with non-ML stakeholders",
    ],
    niceToHave: ["RAG in production", "SageMaker or Vertex", "Eval-driven development"],
    published: true,
  },
  {
    id: "job-0003-0000-4000-8000-000000000003",
    slug: "wordpress-developer",
    title: "WordPress Developer",
    department: "Engineering",
    location: "Remote (US/EU)",
    type: "Full-time",
    description:
      "You'll own custom WordPress themes, plugins, and WooCommerce builds — plus the performance and security work that keeps them production-grade.",
    requirements: [
      "3+ years shipping custom WordPress themes and plugins",
      "PHP, Gutenberg, and Advanced Custom Fields in production",
      "Comfortable with WooCommerce or headless WordPress",
    ],
    niceToHave: ["Next.js + WPGraphQL", "WooCommerce subscriptions", "WordPress VIP / Bedrock"],
    published: true,
  },
  {
    id: "job-0004-0000-4000-8000-000000000004",
    slug: "product-designer-ui-ux",
    title: "Product Designer (UI/UX)",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description:
      "You'll design product surfaces for complex B2B tools — dashboards, flows, and the marketing site when the story needs to match the software.",
    requirements: [
      "Portfolio of shipped product design, not just concept work",
      "Figma fluency and a point of view on design systems",
      "Comfort pairing with engineers in weekly demos",
    ],
    niceToHave: ["Motion/prototype work", "B2B SaaS", "Writing UI copy"],
    published: true,
  },
  {
    id: "job-0005-0000-4000-8000-000000000005",
    slug: "technical-seo-specialist",
    title: "Technical SEO Specialist",
    department: "Growth",
    location: "Remote",
    type: "Contract",
    description:
      "You'll diagnose indexation, CWV, and information architecture issues, then sit with engineering until the fix is actually in production.",
    requirements: [
      "Track record of technical SEO on large sites",
      "Can read a Next.js route and a crawl log",
      "Clear reporting that executives will actually open",
    ],
    niceToHave: ["Programmatic SEO", "Looker / BigQuery", "Content ops"],
    published: true,
  },
  {
    id: "job-0006-0000-4000-8000-000000000006",
    slug: "engagement-manager",
    title: "Engagement Manager",
    department: "Operations",
    location: "Hybrid — New York, NY",
    type: "Full-time",
    description:
      "You'll run client engagements: scope, staffing, weekly demos, and the hard conversations when a timeline needs to move. Senior enough to push back, kind enough that clients stay.",
    requirements: [
      "5+ years in consulting, agencies, or in-house product ops",
      "You've owned a P&L or a book of work, not just a standup",
      "Excellent writing — status emails are the product",
    ],
    niceToHave: ["Software delivery background", "NYC hybrid availability"],
    published: true,
  },
];
