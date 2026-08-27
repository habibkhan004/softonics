import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, Clock, Users } from "lucide-react";
import Badge from "@/components/ui/Badge";
import CtaBanner from "@/components/sections/shared/CtaBanner";
import MotionReveal from "@/components/ui/MotionReveal";
import { projectIcon } from "@/lib/icons";
import { heroFallback } from "@/lib/images";
import type { Project } from "@/lib/types";

export default function CaseStudyView({ project, related }: { project: Project; related: Project[] }) {
  const Icon = projectIcon(project.category);
  const chapters = ["Overview", "Challenge", "Approach", "Results", "Gallery"];

  return (
    <article>
      <section className="relative min-h-[72vh] overflow-hidden">
        <Image src={project.coverImage || heroFallback} alt={project.title} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/25" />
        <div className="relative z-10 mx-auto flex min-h-[72vh] w-full min-w-0 max-w-7xl flex-col justify-end px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28 lg:px-8">
          <Link href="/projects" className="inline-flex w-fit items-center gap-1.5 text-sm text-paper/70 hover:text-paper">
            <ArrowLeft className="h-4 w-4" /> Index of work
          </Link>
          <div className="mt-8 flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-3xl">
              <div className="flex flex-wrap gap-2">
                <Badge className="border-white/20 bg-white/10 text-paper">{project.category}</Badge>
                <Badge className="border-white/20 bg-white/10 text-paper">{project.industry}</Badge>
                <Badge className="border-white/20 bg-white/10 text-paper">{project.year}</Badge>
              </div>
              <h1 className="mt-5 break-words font-display text-3xl font-bold tracking-tight text-paper sm:text-6xl">
                {project.title}
              </h1>
              <p className="mt-4 text-lg text-paper/75">{project.client}</p>
            </div>
            <div className="editorial-number text-[72px] text-paper/15 sm:text-[140px]">
              {project.year.slice(-2)}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-ink text-paper">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-white/10 sm:grid-cols-4">
          {(project.metrics.length ? project.metrics : project.results.slice(0, 4).map((result) => ({ value: result, label: "Outcome" }))).map(
            (metric) => (
              <div key={metric.label + metric.value} className="bg-ink px-4 py-6 sm:px-6 sm:py-8">
                <div className="font-display text-3xl font-bold text-accent-blue sm:text-4xl">{metric.value}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.18em] text-paper/55">{metric.label}</div>
              </div>
            ),
          )}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[200px_1fr] lg:px-8">
        <aside className="hidden lg:block">
          <div className="sticky top-24 flex flex-col gap-3">
            {chapters.map((chapter, i) => (
              <a
                key={chapter}
                href={`#${chapter.toLowerCase()}`}
                className="flex items-center gap-3 text-sm text-foreground-muted hover:text-foreground"
              >
                <span className="font-mono text-[10px] text-accent-indigo">{String(i + 1).padStart(2, "0")}</span>
                {chapter}
              </a>
            ))}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm text-accent-indigo"
              >
                Visit <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </aside>

        <div className="min-w-0">
          <MotionReveal>
            <div id="overview" className="grid gap-8 sm:grid-cols-3">
              <div className="rounded-2xl border border-border bg-surface p-5">
                <Clock className="h-4 w-4 text-accent-indigo" />
                <div className="mt-3 text-xs uppercase tracking-widest text-foreground-muted">Duration</div>
                <div className="mt-1 font-medium">{project.duration || "—"}</div>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <Users className="h-4 w-4 text-accent-violet" />
                <div className="mt-3 text-xs uppercase tracking-widest text-foreground-muted">Team</div>
                <div className="mt-1 font-medium">{project.teamSize || "—"}</div>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <Icon className="h-4 w-4 text-accent-blue" />
                <div className="mt-3 text-xs uppercase tracking-widest text-foreground-muted">Discipline</div>
                <div className="mt-1 font-medium">{project.category}</div>
              </div>
            </div>
            <p className="mt-10 max-w-3xl text-lg leading-relaxed text-foreground-muted">{project.overview || project.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {(project.techStack.length ? project.techStack : project.tags).map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </MotionReveal>

          <div id="challenge" className="mt-20 grid gap-10 lg:grid-cols-2">
            <MotionReveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent-indigo">01 — The brief</p>
              <h2 className="mt-3 font-display text-3xl font-bold">The challenge</h2>
              <p className="mt-4 leading-relaxed text-foreground-muted">{project.challenge}</p>
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent-violet">02 — What we built</p>
              <h2 className="mt-3 font-display text-3xl font-bold">The solution</h2>
              <p className="mt-4 leading-relaxed text-foreground-muted">{project.solution}</p>
            </MotionReveal>
          </div>

          <MotionReveal>
            <div id="approach" className="mt-20">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent-blue">03 — Method</p>
              <h2 className="mt-3 font-display text-3xl font-bold">How we got there</h2>
              <ol className="mt-8 flex flex-col gap-4">
                {project.approach.map((step, i) => (
                  <li key={step} className="flex gap-4 rounded-2xl border border-border bg-surface p-5">
                    <span className="editorial-number text-4xl text-accent-indigo/40">{String(i + 1).padStart(2, "0")}</span>
                    <span className="pt-1 text-foreground-muted">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </MotionReveal>

          <MotionReveal>
            <div id="results" className="mt-20">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent-indigo">04 — Proof</p>
              <h2 className="mt-3 font-display text-3xl font-bold">What changed</h2>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {project.results.map((result) => (
                  <li key={result} className="flex items-start gap-3 rounded-2xl border border-border p-4">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-indigo/15">
                      <Check className="h-3.5 w-3.5 text-accent-indigo" />
                    </span>
                    <span className="font-medium">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </MotionReveal>

          {project.testimonial && (
            <blockquote className="mt-16 rounded-3xl bg-ink px-8 py-12 text-paper">
              <p className="quote-serif text-2xl leading-snug sm:text-3xl">&ldquo;{project.testimonial.quote}&rdquo;</p>
              <footer className="mt-6 text-sm text-paper/70">
                {project.testimonial.name}, {project.testimonial.role}
              </footer>
            </blockquote>
          )}

          {project.gallery.length > 0 && (
            <div id="gallery" className="mt-20">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent-violet">05 — Frames</p>
              <h2 className="mt-3 font-display text-3xl font-bold">Inside the work</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {project.gallery.map((item) => (
                  <figure key={item.url} className="overflow-hidden rounded-3xl">
                    <div className="relative h-64">
                      <Image src={item.url} alt={item.caption ?? project.title} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
                    </div>
                    {item.caption && <figcaption className="mt-3 text-sm text-foreground-muted">{item.caption}</figcaption>}
                  </figure>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-border py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold">More {project.category}</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {related.map((item) => (
                <Link key={item.slug} href={`/projects/${item.slug}`} className="group overflow-hidden rounded-3xl border border-border">
                  <div className="relative h-48">
                    <Image src={item.coverImage} alt={item.title} fill sizes="50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl font-semibold group-hover:text-accent-blue">{item.title}</h3>
                    <p className="mt-1 text-sm text-foreground-muted">{item.client}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner />
    </article>
  );
}
