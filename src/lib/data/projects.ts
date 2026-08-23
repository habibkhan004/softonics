import {
  ShoppingCart,
  Activity,
  Building2,
  Rocket,
  LineChart,
  Server,
} from "lucide-react";
import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "vantage-retail-headless-commerce",
    title: "Headless Commerce Replatform",
    client: "Vantage Retail Group",
    category: "E-Commerce",
    tags: ["Next.js", "Shopify Plus", "AI Search"],
    summary:
      "Migrated a legacy monolithic storefront to a headless Next.js front-end over Shopify Plus, with an AI-powered semantic search replacing basic keyword matching.",
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
    year: "2025",
    icon: ShoppingCart,
  },
  {
    slug: "helios-robotics-fleet-dashboard",
    title: "Real-Time Fleet Monitoring Dashboard",
    client: "Helios Robotics",
    category: "Web Development",
    tags: ["React", "WebSockets", "Node.js", "TimescaleDB"],
    summary:
      "Built a real-time operations dashboard streaming telemetry from 400+ autonomous units, with anomaly alerts and historical playback for the ops team.",
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
    year: "2025",
    icon: Activity,
  },
  {
    slug: "northwind-analytics-loan-decisioning",
    title: "AI-Assisted Loan Decisioning Engine",
    client: "Northwind Analytics",
    category: "AI & ML",
    tags: ["Python", "PyTorch", "RAG", "AWS SageMaker"],
    summary:
      "Designed a hybrid rules + ML underwriting pipeline with a retrieval-augmented documentation assistant to help analysts explain model decisions to auditors.",
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
    year: "2024",
    icon: LineChart,
  },
  {
    slug: "meridian-health-patient-portal",
    title: "Patient Portal & Telehealth Platform",
    client: "Meridian Health Partners",
    category: "Mobile Apps",
    tags: ["React Native", "HIPAA", "Twilio Video"],
    summary:
      "Delivered a HIPAA-compliant patient portal with appointment scheduling, secure messaging, and embedded telehealth video visits across iOS and Android.",
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
    year: "2024",
    icon: Building2,
  },
  {
    slug: "brightpath-seo-programmatic",
    title: "Programmatic SEO Content Engine",
    client: "BrightPath Education",
    category: "SEO & Growth",
    tags: ["Next.js ISR", "Technical SEO", "Structured Data"],
    summary:
      "Built a programmatic SEO system generating and maintaining 8,000+ landing pages with automated schema markup, internal linking, and Core Web Vitals monitoring.",
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
    year: "2025",
    icon: Rocket,
  },
  {
    slug: "cascade-logistics-cloud-migration",
    title: "Cloud Migration & DevOps Overhaul",
    client: "Cascade Logistics",
    category: "Cloud & DevOps",
    tags: ["AWS", "Kubernetes", "Terraform", "GitHub Actions"],
    summary:
      "Migrated an on-premise logistics platform to AWS with containerized services, Infrastructure-as-Code, and a zero-downtime CI/CD pipeline replacing manual deploys.",
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
    year: "2024",
    icon: Server,
  },
];
