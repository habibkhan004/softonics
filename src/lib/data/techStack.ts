import { Code2, Server, BrainCircuit, LayoutTemplate, Database } from "lucide-react";
import type { TechCategory } from "@/lib/types";

export const techStack: TechCategory[] = [
  {
    category: "Frontend",
    icon: Code2,
    items: ["React & Next.js", "TypeScript", "Tailwind CSS", "React Native"],
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js & NestJS", "Python & Django", "GraphQL & REST", "Go"],
  },
  {
    category: "AI / ML",
    icon: BrainCircuit,
    items: ["PyTorch & TensorFlow", "LLM & RAG Pipelines", "LangChain", "OpenAI & Anthropic APIs"],
  },
  {
    category: "WordPress",
    icon: LayoutTemplate,
    items: ["WordPress & PHP", "WooCommerce", "Advanced Custom Fields", "Headless WP + Next.js"],
  },
  {
    category: "Data",
    icon: Database,
    items: ["PostgreSQL & Redis", "TimescaleDB", "Elasticsearch", "Snowflake"],
  },
];
