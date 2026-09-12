"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import MotionReveal from "@/components/ui/MotionReveal";
import type { Project, ProjectCategory } from "@/lib/types";

const categories: (ProjectCategory | "All")[] = [
  "All",
  "Web Development",
  "Mobile Apps",
  "E-Commerce",
  "WordPress",
  "SEO & Growth",
];

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-md border px-4 py-2 text-sm font-medium transition-colors ${
              active === cat ? "border-transparent text-paper" : "border-border text-foreground-muted hover:text-foreground"
            }`}
            style={active === cat ? { backgroundImage: "var(--gradient-brand)" } : undefined}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <MotionReveal key={project.slug} delay={(i % 3) * 0.08}>
            <Link
              href={`/projects/${project.slug}`}
              className="group block h-full overflow-hidden rounded-sm border border-border"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                <span className="absolute left-4 top-4 font-mono text-[11px] tracking-[0.2em] text-paper/80">
                  {String(i + 1).padStart(2, "0")} / {project.year}
                </span>
              </div>
              <div className="bg-background-elevated p-5">
                <div className="flex items-center justify-between gap-2">
                  <Badge>{project.category}</Badge>
                  <span className="text-xs text-foreground-muted">{project.industry}</span>
                </div>
                <h3 className="mt-3 text-lg font-medium group-hover:text-accent-indigo">{project.title}</h3>
                <p className="mt-1 text-sm text-foreground-muted">{project.client}</p>
                <p className="mt-3 text-sm text-foreground-muted">{project.summary}</p>
                {project.metrics[0] && (
                  <p className="mt-4 display-type text-xl text-accent-indigo">
                    {project.metrics[0].value}{" "}
                    <span className="text-sm font-medium text-foreground-muted">{project.metrics[0].label}</span>
                  </p>
                )}
              </div>
            </Link>
          </MotionReveal>
        ))}
      </div>
    </div>
  );
}
