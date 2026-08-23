"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import MotionReveal from "@/components/ui/MotionReveal";
import { projects } from "@/lib/data/projects";
import { projectImages } from "@/lib/images";
import type { ProjectCategory } from "@/lib/types";

const categories: (ProjectCategory | "All")[] = [
  "All",
  "Web Development",
  "Mobile Apps",
  "AI & ML",
  "E-Commerce",
  "Cloud & DevOps",
  "SEO & Growth",
];

export default function ProjectsGrid() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              active === cat
                ? "border-transparent text-white"
                : "border-border text-foreground-muted hover:text-foreground"
            }`}
            style={active === cat ? { backgroundImage: "var(--gradient-brand)" } : undefined}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <MotionReveal key={project.slug} delay={(i % 3) * 0.08}>
            <Link href={`/projects/${project.slug}`} className="group block h-full">
              <div className="relative h-48 w-full overflow-hidden rounded-2xl">
                <Image
                  src={projectImages[project.slug]}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                <project.icon className="absolute right-3 top-3 h-6 w-6 text-white/80" strokeWidth={1.5} />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between gap-2">
                  <Badge>{project.category}</Badge>
                  <span className="text-xs text-foreground-muted">{project.year}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-foreground group-hover:text-accent-blue transition-colors">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-foreground-muted">{project.client}</p>
                <p className="mt-3 text-sm text-foreground-muted">{project.summary}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge key={tag} className="text-[11px]">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <ul className="mt-4 flex flex-col gap-1.5 border-t border-border pt-4">
                  {project.results.map((result) => (
                    <li key={result} className="text-xs font-medium text-accent-blue">
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          </MotionReveal>
        ))}
      </div>
    </div>
  );
}
