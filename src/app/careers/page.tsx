import type { Metadata } from "next";
import Link from "next/link";
import { Globe2, HeartPulse, GraduationCap, Palmtree, ArrowRight } from "lucide-react";
import PageHero from "@/components/sections/shared/PageHero";
import CtaBanner from "@/components/sections/shared/CtaBanner";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import MotionReveal from "@/components/ui/MotionReveal";
import { listPublishedJobs } from "@/lib/queries";
import { brand } from "@/lib/brand";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Careers",
  description: `Open roles at ${brand.legalName} — join a remote-first team building custom software, AI/ML, and growth systems.`,
};

const perks = [
  { icon: Globe2, title: "Remote-First", description: "Work from anywhere — we've been distributed since day one." },
  { icon: HeartPulse, title: "Health Coverage", description: "Comprehensive medical, dental, and vision for you and dependents." },
  { icon: GraduationCap, title: "Learning Budget", description: "$2,000/year for courses, conferences, and books." },
  { icon: Palmtree, title: "Flexible PTO", description: "Take the time you need — we trust you to manage your workload." },
];

export default async function CareersPage() {
  const jobs = await listPublishedJobs();
  const departments = Array.from(new Set(jobs.map((j) => j.department)));

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Join the team building tomorrow's software"
        gradientWord="tomorrow's software"
        subtitle="We're a remote-first team of senior engineers, designers, and strategists — and we're always looking for people who care about the craft."
      />

      <SectionWrapper className="pt-0">
        <SectionHeading eyebrow={`Why ${brand.shortName}`} title="Benefits that respect your time" gradientWord="respect your time" />
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((perk, i) => (
            <MotionReveal key={perk.title} delay={i * 0.08}>
              <Card className="h-full">
                <perk.icon className="h-8 w-8 text-accent-blue" strokeWidth={1.5} />
                <h3 className="mt-4 text-base font-semibold text-foreground">{perk.title}</h3>
                <p className="mt-2 text-sm text-foreground-muted">{perk.description}</p>
              </Card>
            </MotionReveal>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper glow="indigo">
        <SectionHeading eyebrow="Open Roles" title="Find your next role" gradientWord="next role" />
        <div className="mt-14 flex flex-col gap-10">
          {departments.map((dept) => (
            <div key={dept}>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground-muted">{dept}</h3>
              <div className="mt-4 flex flex-col gap-3">
                {jobs
                  .filter((job) => job.department === dept)
                  .map((job, i) => (
                    <MotionReveal key={job.id} delay={i * 0.05}>
                      <Link
                        href={`/careers/${job.slug}`}
                        className="glass-card flex flex-col gap-3 rounded-2xl p-5 transition-colors hover:bg-surface-hover sm:flex-row sm:items-center sm:justify-between"
                      >
                        <div>
                          <h4 className="font-medium text-foreground">{job.title}</h4>
                          <div className="mt-1 flex flex-wrap gap-2">
                            <Badge>{job.location}</Badge>
                            <Badge>{job.type}</Badge>
                          </div>
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-blue">
                          Apply <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </Link>
                    </MotionReveal>
                  ))}
              </div>
            </div>
          ))}
          {jobs.length === 0 && <p className="text-foreground-muted">No open roles right now — send a note anyway.</p>}
        </div>
      </SectionWrapper>

      <CtaBanner
        title="Don't see your role?"
        subtitle="We're always open to meeting people who are exceptional at what they do. Reach out anyway."
      />
    </>
  );
}
