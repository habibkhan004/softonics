import { Code2, Server, BrainCircuit, Cloud, Database } from "lucide-react";
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
    category: "Cloud & DevOps",
    icon: Cloud,
    items: ["AWS & GCP", "Docker & Kubernetes", "Terraform", "GitHub Actions"],
  },
  {
    category: "Data",
    icon: Database,
    items: ["PostgreSQL & Redis", "TimescaleDB", "Elasticsearch", "Snowflake"],
  },
];
