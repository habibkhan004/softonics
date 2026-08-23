import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, TrendingUp } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import MotionReveal from "@/components/ui/MotionReveal";
import CtaBanner from "@/components/sections/shared/CtaBanner";
import { projects } from "@/lib/data/projects";
import { projectImages } from "@/lib/images";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.slug !== project.slug && p.category === project.category).slice(0, 2);

  return (
    <>
      <SectionWrapper className="pb-0 pt-16 sm:pt-24">
        <MotionReveal>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Projects
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <Badge>{project.category}</Badge>
            <Badge>{project.year}</Badge>
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>

          <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-3 text-lg text-foreground-muted">{project.client}</p>
        </MotionReveal>

        <MotionReveal delay={0.1}>
          <div className="relative mt-10 h-64 w-full overflow-hidden rounded-3xl sm:h-96">
            <Image src={projectImages[project.slug]} alt={project.title} fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </div>
        </MotionReveal>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 flex flex-col gap-10">
            <MotionReveal>
              <h2 className="text-xl font-semibold text-foreground">The Challenge</h2>
              <p className="mt-3 text-foreground-muted leading-relaxed">{project.challenge}</p>
            </MotionReveal>
            <MotionReveal delay={0.05}>
              <h2 className="text-xl font-semibold text-foreground">The Solution</h2>
              <p className="mt-3 text-foreground-muted leading-relaxed">{project.solution}</p>
            </MotionReveal>
            <MotionReveal delay={0.1}>
              <h2 className="text-xl font-semibold text-foreground">Our Approach</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {project.approach.map((step) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-indigo/15">
                      <Check className="h-3.5 w-3.5 text-accent-blue" />
                    </span>
                    <span className="text-foreground-muted">{step}</span>
                  </li>
                ))}
              </ul>
            </MotionReveal>
          </div>

          <MotionReveal delay={0.15}>
            <Card className="sticky top-24" hover={false}>
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <TrendingUp className="h-4 w-4 text-accent-blue" />
                Results
              </div>
              <ul className="mt-5 flex flex-col gap-4">
                {project.results.map((result) => (
                  <li key={result} className="border-l-2 border-accent-indigo/50 pl-3 text-sm font-medium text-foreground">
                    {result}
                  </li>
                ))}
              </ul>
            </Card>
          </MotionReveal>
        </div>
      </SectionWrapper>

      {related.length > 0 && (
        <SectionWrapper glow="violet">
          <h2 className="text-2xl font-semibold text-foreground">More {project.category} Work</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/projects/${r.slug}`}
                className="glass-card group flex items-center gap-4 rounded-2xl p-5 transition-colors hover:bg-surface-hover"
              >
                <r.icon className="h-8 w-8 shrink-0 text-accent-blue" strokeWidth={1.5} />
                <div>
                  <h3 className="font-medium text-foreground group-hover:text-accent-blue">{r.title}</h3>
                  <p className="mt-1 text-xs text-foreground-muted">{r.client}</p>
                </div>
              </Link>
            ))}
          </div>
        </SectionWrapper>
      )}

      <CtaBanner />
    </>
  );
}
