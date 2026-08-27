import {
  Code2,
  Globe,
  Smartphone,
  BrainCircuit,
  Search,
  LayoutTemplate,
  Palette,
} from "lucide-react";
import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    slug: "custom-software-development",
    icon: Code2,
    title: "Custom Software Development",
    shortDescription:
      "Bespoke systems engineered around your workflows, not the other way around.",
    longDescription:
      "We design and build custom software from the ground up — internal tools, ERPs, automation platforms, and complex business systems — using domain-driven design and clean architecture so the codebase stays maintainable as your team and requirements grow.",
    features: [
      "Requirements discovery & technical architecture",
      "Domain-driven, modular system design",
      "Legacy system modernization & re-platforming",
      "API-first development for future integrations",
      "Automated testing & CI/CD from day one",
    ],
  },
  {
    slug: "web-application-development",
    icon: Globe,
    title: "Web Application Development",
    shortDescription:
      "Fast, accessible, SEO-friendly web apps built on modern frameworks.",
    longDescription:
      "From marketing sites to complex SaaS dashboards, we build with Next.js, React, and Node.js — prioritizing Core Web Vitals, accessibility, and server-side rendering so your product is fast on day one and easy to extend after launch.",
    features: [
      "Next.js / React front-end engineering",
      "Node.js, NestJS & serverless back-ends",
      "Design systems & component libraries",
      "Performance & Core Web Vitals optimization",
      "Progressive Web App (PWA) delivery",
    ],
  },
  {
    slug: "mobile-app-development",
    icon: Smartphone,
    title: "Mobile App Development",
    shortDescription:
      "Native-feel iOS & Android apps from a single React Native codebase.",
    longDescription:
      "We ship cross-platform apps with React Native and Flutter for teams that need to move fast on both iOS and Android, and native Swift/Kotlin when performance or platform APIs demand it — backed by CI pipelines for TestFlight and Play Console releases.",
    features: [
      "Cross-platform apps with React Native & Flutter",
      "Native iOS (Swift) & Android (Kotlin) development",
      "Offline-first data sync & push notifications",
      "App Store / Play Store release management",
      "Ongoing OS-version compatibility maintenance",
    ],
  },
  {
    slug: "ai-machine-learning",
    icon: BrainCircuit,
    title: "AI & Machine Learning Solutions",
    shortDescription:
      "From predictive models to production-grade LLM applications.",
    longDescription:
      "From predictive analytics pipelines to custom LLM-powered chat interfaces, we design and ship ML systems using PyTorch, TensorFlow, and modern RAG architectures — not just API wrappers. We handle everything from data pipelines to model evaluation and monitoring in production.",
    features: [
      "Custom LLM applications & RAG pipelines",
      "Predictive analytics & forecasting models",
      "Computer vision & document intelligence",
      "MLOps: training, evaluation & monitoring pipelines",
      "AI feature integration into existing products",
    ],
  },
  {
    slug: "seo-digital-growth",
    icon: Search,
    title: "SEO & Digital Growth",
    shortDescription:
      "Technical SEO and content systems that compound organic traffic.",
    longDescription:
      "We treat SEO as an engineering problem as much as a content one — auditing crawl budgets, Core Web Vitals, and structured data, then building programmatic SEO systems and content pipelines that keep ranking long after the project ends.",
    features: [
      "Technical SEO audits & Core Web Vitals optimization",
      "Programmatic SEO for content-heavy sites",
      "Local & international SEO strategy",
      "Structured data & schema markup implementation",
      "Analytics, tracking & conversion reporting setup",
    ],
  },
  {
    slug: "wordpress-development",
    icon: LayoutTemplate,
    title: "WordPress Development",
    shortDescription:
      "Custom themes, plugins, and WooCommerce builds that stay fast and easy to edit.",
    longDescription:
      "We design and build WordPress sites that marketing teams can actually run — custom themes, Gutenberg blocks, WooCommerce, and headless WordPress when you need a Next.js front-end. Security, performance, and clean editorial workflows are part of the build, not a later phase.",
    features: [
      "Custom WordPress themes & Gutenberg blocks",
      "WooCommerce & membership storefronts",
      "Advanced Custom Fields & editorial workflows",
      "Headless WordPress with Next.js",
      "Performance, security hardening & migrations",
    ],
  },
  {
    slug: "ui-ux-design",
    icon: Palette,
    title: "UI/UX Design",
    shortDescription:
      "Interfaces designed around real user research, not just aesthetics.",
    longDescription:
      "Our design process starts with user research and information architecture, moves through low-fidelity wireframes and interactive prototypes, and ends in polished, accessible interfaces backed by a documented design system your team can extend.",
    features: [
      "User research & journey mapping",
      "Wireframing & interactive prototyping (Figma)",
      "Design systems & component documentation",
      "Accessibility (WCAG 2.1 AA) auditing",
      "Usability testing & iterative refinement",
    ],
  },
];
