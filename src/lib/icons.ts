import {
  Activity,
  BrainCircuit,
  Building2,
  Code2,
  LayoutTemplate,
  LineChart,
  type LucideIcon,
  Palette,
  Rocket,
  Search,
  Server,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
} from "lucide-react";
import type { ProjectCategory } from "@/lib/types";

export const categoryIcons: Record<ProjectCategory, LucideIcon> = {
  "Web Development": Activity,
  "Mobile Apps": Building2,
  "AI & ML": LineChart,
  "E-Commerce": ShoppingCart,
  WordPress: LayoutTemplate,
  "SEO & Growth": Rocket,
};

export const blogCategoryIcons: Record<string, LucideIcon> = {
  SEO: Search,
  "AI & ML": BrainCircuit,
  Engineering: Server,
  Mobile: Smartphone,
  Security: ShieldCheck,
  WordPress: LayoutTemplate,
};

export const serviceIcons: Record<string, LucideIcon> = {
  Code2,
  LayoutTemplate,
  Palette,
  Search,
  Server,
  Smartphone,
  BrainCircuit,
  Rocket,
};

export function projectIcon(category: ProjectCategory): LucideIcon {
  return categoryIcons[category] ?? Code2;
}

export function postIcon(category: string): LucideIcon {
  return blogCategoryIcons[category] ?? Search;
}
