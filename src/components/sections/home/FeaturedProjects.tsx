import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Badge from "@/components/ui/Badge";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionWrapper from "@/components/ui/SectionWrapper";
import MotionReveal from "@/components/ui/MotionReveal";
import Button from "@/components/ui/Button";
import type { Project } from "@/lib/types";

export default function FeaturedProjects({ projects }: { projects: Project[] }) {
  return (
    <SectionWrapper glow="blue">
      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="Selected Work"
          title="Results our clients can point to"
          gradientWord="clients can point to"
          align="left"
        />
        <Button href="/projects" variant="outline">
          View All Projects <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {projects.map((project, i) => (
          <MotionReveal key={project.slug} delay={i * 0.1}>
            <Link href={`/projects/${project.slug}`} className="group block h-full overflow-hidden rounded-3xl border border-border">
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
              </div>
              <div className="p-5">
                <Badge>{project.category}</Badge>
                <h3 className="mt-3 font-display text-lg font-semibold group-hover:text-accent-blue">{project.title}</h3>
                <p className="mt-1 text-sm text-foreground-muted">{project.client}</p>
                <p className="mt-3 text-sm font-medium text-accent-blue">
                  {project.metrics[0]?.value ?? project.results[0]}
                </p>
              </div>
            </Link>
          </MotionReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
