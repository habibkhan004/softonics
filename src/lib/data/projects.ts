import type { Project } from "@/lib/types";
import { projectGalleries, projectImages } from "@/lib/images";

export const projects: Project[] = [
  {
    id: "11111111-1111-4111-8111-111111111111",
    slug: "vantage-retail-headless-commerce",
    title: "Headless Commerce Replatform",
    client: "Vantage Retail Group",
    category: "E-Commerce",
    industry: "Retail",
    tags: ["Next.js", "Shopify Plus", "AI Search"],
    techStack: ["Next.js", "Shopify Plus", "Algolia + embeddings", "Vercel", "Segment"],
    summary:
      "Migrated a legacy monolithic storefront to a headless Next.js front-end over Shopify Plus, with an AI-powered semantic search replacing basic keyword matching.",
    overview:
      "Vantage Retail is a multi-brand group whose holiday traffic routinely 4x's weekday volume. Their Magento storefront was the bottleneck: slow mobile LCP, a search experience that missed intent, and a merchandising team that couldn't ship a campaign without an engineering ticket. We replatformed the customer-facing experience without freezing the catalog mid-season.",
    challenge:
      "Vantage Retail's monolithic Magento storefront couldn't keep up with traffic spikes during seasonal sales, and keyword-only search was surfacing irrelevant results for over 30% of queries — directly hurting conversion on mobile, where most of their traffic originated.",
    solution:
      "We replatformed the storefront to a headless Next.js front-end backed by Shopify Plus, with incremental static regeneration for product pages and an embeddings-based semantic search layer that understands intent, not just keywords.",
    approach: [
      "Audited the existing Magento data model and mapped it to Shopify Plus schemas",
      "Built a headless Next.js storefront with ISR for product and collection pages",
      "Implemented vector-embedding semantic search with a keyword fallback",
      "Ran a phased traffic cutover with feature-flagged rollback",
    ],
    results: [
      "38% increase in mobile conversion rate",
      "1.8s → 0.4s Largest Contentful Paint",
      "22% lift in search-to-purchase rate",
    ],
    metrics: [
      { value: "38%", label: "Mobile conversion lift" },
      { value: "0.4s", label: "LCP after launch" },
      { value: "22%", label: "Search-to-purchase lift" },
      { value: "4 brands", label: "Rolled out in one season" },
    ],
    year: "2025",
    duration: "16 weeks",
    teamSize: "6 people",
    liveUrl: "https://desynt.com/projects/vantage-retail-headless-commerce",
    coverImage: projectImages["vantage-retail-headless-commerce"],
    gallery: projectGalleries["vantage-retail-headless-commerce"],
    featured: true,
    published: true,
    testimonial: {
      quote:
        "Desynt rebuilt our checkout flow in six weeks and cut cart abandonment by 22%. They communicated like an in-house team, not a vendor.",
      name: "Elena Marsh",
      role: "VP of Engineering",
    },
  },
  {
    id: "22222222-2222-4222-8222-222222222222",
    slug: "helios-robotics-fleet-dashboard",
    title: "Real-Time Fleet Monitoring Dashboard",
    client: "Helios Robotics",
    category: "Web Development",
    industry: "Robotics",
    tags: ["React", "WebSockets", "Node.js", "TimescaleDB"],
    techStack: ["React", "Node.js", "WebSockets", "TimescaleDB", "Redis", "Grafana"],
    summary:
      "Built a real-time operations dashboard streaming telemetry from 400+ autonomous units, with anomaly alerts and historical playback for the ops team.",
    overview:
      "Helios runs autonomous units across warehouses and outdoor yards. Operators were stitching together CSV exports and a 30-second polling UI — too slow to catch a unit drifting off-path. They needed a live picture of the fleet, plus a way to rewind an incident without a data-science ticket.",
    challenge:
      "Helios's ops team was monitoring a fleet of 400+ autonomous units through a patchwork of spreadsheets and a legacy polling-based UI that refreshed every 30 seconds — far too slow to catch developing incidents before they became costly downtime.",
    solution:
      "We built a real-time dashboard on WebSockets streaming telemetry directly from the fleet's edge gateways into a TimescaleDB time-series store, with configurable anomaly-detection rules and full historical playback for post-incident review.",
    approach: [
      "Designed a WebSocket ingestion layer handling 12k events/second",
      "Modeled telemetry in TimescaleDB with continuous aggregates for fast queries",
      "Built configurable rule-based anomaly alerts with Slack/PagerDuty integration",
      "Shipped a historical playback mode for post-incident analysis",
    ],
    results: [
      "Reduced incident response time by 61%",
      "Handles 12k telemetry events/second",
      "Deployed across 3 regional operations centers",
    ],
    metrics: [
      { value: "61%", label: "Faster incident response" },
      { value: "12k/s", label: "Telemetry throughput" },
      { value: "400+", label: "Units on the live map" },
      { value: "3", label: "Regional ops centers" },
    ],
    year: "2025",
    duration: "20 weeks",
    teamSize: "7 people",
    coverImage: projectImages["helios-robotics-fleet-dashboard"],
    gallery: projectGalleries["helios-robotics-fleet-dashboard"],
    featured: true,
    published: true,
    testimonial: {
      quote:
        "We came to them with a fleet of robots and a spreadsheet. We left with a real-time dashboard our ops team actually loves using every day.",
      name: "Daniel Osei",
      role: "Co-Founder & CTO",
    },
  },
  {
    id: "33333333-3333-4333-8333-333333333333",
    slug: "northwind-analytics-loan-decisioning",
    title: "AI-Assisted Loan Decisioning Engine",
    client: "Northwind Analytics",
    category: "AI & ML",
    industry: "Fintech",
    tags: ["Python", "PyTorch", "RAG", "AWS SageMaker"],
    techStack: ["Python", "PyTorch", "AWS SageMaker", "pgvector", "FastAPI", "React"],
    summary:
      "Designed a hybrid rules + ML underwriting pipeline with a retrieval-augmented documentation assistant to help analysts explain model decisions to auditors.",
    overview:
      "Northwind's credit team was stuck between a brittle rules engine and a growing backlog of edge cases. Auditors wanted a paper trail; analysts wanted a model that could adapt. We built a hybrid pipeline that scores risk, explains itself, and cites the policy it used.",
    challenge:
      "Northwind's underwriting team relied on a rigid rules engine that couldn't adapt to new risk patterns, while manual reviews created a decision backlog. Auditors also struggled to get consistent, defensible explanations for edge-case decisions.",
    solution:
      "We built a hybrid pipeline combining the existing rules engine with a PyTorch risk model, deployed on SageMaker, plus a retrieval-augmented assistant that lets analysts query underlying policy documents to generate audit-ready explanations.",
    approach: [
      "Trained and validated a risk-scoring model against 5 years of historical outcomes",
      "Deployed the model on AWS SageMaker with automated retraining pipelines",
      "Built a RAG assistant over internal policy documentation for analysts",
      "Established a full audit trail linking each decision to its contributing factors",
    ],
    results: [
      "43% faster average decision turnaround",
      "99.2% model uptime over 12 months",
      "Full audit-trail compliance achieved",
    ],
    metrics: [
      { value: "43%", label: "Faster decisions" },
      { value: "99.2%", label: "Model uptime" },
      { value: "5 yrs", label: "Outcomes in training set" },
      { value: "100%", label: "Decisions with an audit trail" },
    ],
    year: "2024",
    duration: "24 weeks",
    teamSize: "8 people",
    coverImage: projectImages["northwind-analytics-loan-decisioning"],
    gallery: projectGalleries["northwind-analytics-loan-decisioning"],
    featured: true,
    published: true,
    testimonial: {
      quote:
        "The RAG-based decisioning assistant they built has become the single most-used internal tool at our company. Auditors love the transparency.",
      name: "Priya Nataraj",
      role: "Head of Data Science",
    },
  },
  {
    id: "44444444-4444-4444-8444-444444444444",
    slug: "meridian-health-patient-portal",
    title: "Patient Portal & Telehealth Platform",
    client: "Meridian Health Partners",
    category: "Mobile Apps",
    industry: "Healthcare",
    tags: ["React Native", "HIPAA", "Twilio Video"],
    techStack: ["React Native", "Twilio Video", "Node.js", "Postgres", "AWS HIPAA"],
    summary:
      "Delivered a HIPAA-compliant patient portal with appointment scheduling, secure messaging, and embedded telehealth video visits across iOS and Android.",
    overview:
      "Meridian's patients were bouncing between a scheduling portal, a messaging app, and a separate video vendor. Front-desk staff spent more time resetting logins than seeing patients. We unified the experience into one HIPAA-compliant app — and launched it on both stores in the same week.",
    challenge:
      "Meridian needed a single mobile app to replace three disconnected systems for scheduling, messaging, and video visits — all while meeting strict HIPAA requirements for data handling and audit logging.",
    solution:
      "We built a unified React Native app with end-to-end encrypted messaging, Twilio-powered video visits, and a HIPAA-compliant backend with full audit logging, launched simultaneously on iOS and Android.",
    approach: [
      "Designed a HIPAA-compliant data architecture with encrypted storage and audit logs",
      "Built appointment scheduling with real-time provider availability",
      "Integrated Twilio Video for embedded telehealth visits",
      "Ran a phased beta across 3 clinics before full rollout",
    ],
    results: [
      "50,000+ active patients within 6 months",
      "4.8-star average App Store rating",
      "31% reduction in missed-appointment rate",
    ],
    metrics: [
      { value: "50k+", label: "Active patients in 6 months" },
      { value: "4.8★", label: "App Store rating" },
      { value: "31%", label: "Fewer missed appointments" },
      { value: "2 stores", label: "iOS + Android same week" },
    ],
    year: "2024",
    duration: "22 weeks",
    teamSize: "9 people",
    coverImage: projectImages["meridian-health-patient-portal"],
    gallery: projectGalleries["meridian-health-patient-portal"],
    featured: false,
    published: true,
  },
  {
    id: "55555555-5555-4555-8555-555555555555",
    slug: "brightpath-seo-programmatic",
    title: "Programmatic SEO Content Engine",
    client: "BrightPath Education",
    category: "SEO & Growth",
    industry: "Education",
    tags: ["Next.js ISR", "Technical SEO", "Structured Data"],
    techStack: ["Next.js", "Postgres", "Schema.org", "BigQuery", "Looker"],
    summary:
      "Built a programmatic SEO system generating and maintaining 8,000+ landing pages with automated schema markup, internal linking, and Core Web Vitals monitoring.",
    overview:
      "BrightPath's catalog was thousands of near-duplicate course pages cannibalizing each other. Manual SEO couldn't keep up with new programs. We treated pages as a product: generated from structured data, unique enough to rank, and watched continuously for CWV regressions.",
    challenge:
      "BrightPath's course catalog had thousands of near-duplicate pages that either weren't indexed or were competing against each other in search results, and manual page maintenance couldn't scale with their catalog growth.",
    solution:
      "We built a programmatic SEO system that generates unique, structured landing pages from BrightPath's course data at scale, with automated schema markup, internal linking rules, and continuous Core Web Vitals monitoring.",
    approach: [
      "Designed a templated page-generation system driven by structured course data",
      "Implemented automated schema.org markup and canonical/internal-linking rules",
      "Built a Core Web Vitals monitoring dashboard across all generated pages",
      "Ran iterative content-quality passes to avoid thin-content penalties",
    ],
    results: [
      "212% increase in organic sessions YoY",
      "Ranked top-3 for 1,400+ target keywords",
      "Core Web Vitals passing on 96% of pages",
    ],
    metrics: [
      { value: "212%", label: "Organic sessions YoY" },
      { value: "1,400+", label: "Keywords in the top 3" },
      { value: "8,000+", label: "Pages in the engine" },
      { value: "96%", label: "Pages passing CWV" },
    ],
    year: "2025",
    duration: "14 weeks",
    teamSize: "5 people",
    coverImage: projectImages["brightpath-seo-programmatic"],
    gallery: projectGalleries["brightpath-seo-programmatic"],
    featured: false,
    published: true,
    testimonial: {
      quote:
        "Their SEO engineering work more than doubled our organic traffic in under a year — and they explained exactly why every change mattered.",
      name: "Marcus Webb",
      role: "Director of Growth",
    },
  },
  {
    id: "66666666-6666-4666-8666-666666666666",
    slug: "cascade-logistics-cloud-migration",
    title: "Cloud Migration & DevOps Overhaul",
    client: "Cascade Logistics",
    category: "Web Development",
    industry: "Logistics",
    tags: ["AWS", "Kubernetes", "Terraform", "GitHub Actions"],
    techStack: ["AWS EKS", "Terraform", "GitHub Actions", "Datadog", "Helm"],
    summary:
      "Migrated an on-premise logistics platform to AWS with containerized services, Infrastructure-as-Code, and a zero-downtime CI/CD pipeline replacing manual deploys.",
    overview:
      "Cascade's peak shipping season used to start with a hardware order. Deploys were multi-hour maintenance windows. We moved the platform to AWS, made every environment reproducible, and turned deploys into a non-event — including the Friday before Cyber Week.",
    challenge:
      "Cascade's on-premise infrastructure required manual, multi-hour deploys with regular unplanned downtime, and scaling for peak shipping season meant physically provisioning new servers weeks in advance.",
    solution:
      "We migrated the platform to AWS with containerized services on Kubernetes, codified the entire infrastructure in Terraform, and replaced manual deploys with a zero-downtime CI/CD pipeline on GitHub Actions.",
    approach: [
      "Containerized existing services and deployed them on Amazon EKS",
      "Codified all infrastructure in Terraform for repeatable environments",
      "Built a zero-downtime blue/green deployment pipeline in GitHub Actions",
      "Set up autoscaling policies ahead of peak shipping season",
    ],
    results: [
      "Infrastructure costs reduced by 34%",
      "Deploy frequency up from weekly to daily",
      "Zero unplanned downtime since migration",
    ],
    metrics: [
      { value: "34%", label: "Lower infra cost" },
      { value: "Daily", label: "Deploy cadence" },
      { value: "0", label: "Unplanned downtime since cutover" },
      { value: "EKS", label: "All services containerized" },
    ],
    year: "2024",
    duration: "18 weeks",
    teamSize: "6 people",
    coverImage: projectImages["cascade-logistics-cloud-migration"],
    gallery: projectGalleries["cascade-logistics-cloud-migration"],
    featured: false,
    published: true,
    testimonial: {
      quote:
        "Migrating our infrastructure felt terrifying on paper. In practice it was the smoothest technical project we've ever run, with zero downtime.",
      name: "Sofia Reyes",
      role: "Head of Platform",
    },
  },
];
