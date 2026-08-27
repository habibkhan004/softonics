import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import Badge from "@/components/ui/Badge";
import ApplyForm from "@/components/sections/careers/ApplyForm";
import { getJobBySlug } from "@/lib/queries";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const job = await getJobBySlug(slug);
  if (!job) return {};
  return { title: job.title, description: job.description };
}

export default async function JobDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = await getJobBySlug(slug);
  if (!job) notFound();

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <Link href="/careers" className="inline-flex items-center gap-1.5 text-sm text-foreground-muted hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> All roles
      </Link>
      <div className="mt-8 flex flex-wrap gap-2">
        <Badge>{job.department}</Badge>
        <Badge>{job.location}</Badge>
        <Badge>{job.type}</Badge>
      </div>
      <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl">{job.title}</h1>
      <p className="mt-6 max-w-3xl text-lg text-foreground-muted">{job.description}</p>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="font-display text-2xl font-semibold">What you&apos;ll bring</h2>
          <ul className="mt-5 flex flex-col gap-3">
            {job.requirements.map((item) => (
              <li key={item} className="flex gap-3 text-foreground-muted">
                <Check className="mt-1 h-4 w-4 shrink-0 text-accent-indigo" />
                {item}
              </li>
            ))}
          </ul>
          {job.niceToHave.length > 0 && (
            <>
              <h2 className="mt-10 font-display text-2xl font-semibold">Nice to have</h2>
              <ul className="mt-5 flex flex-col gap-3">
                {job.niceToHave.map((item) => (
                  <li key={item} className="flex gap-3 text-foreground-muted">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-accent-violet" />
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
        <ApplyForm jobId={job.id} jobTitle={job.title} />
      </div>
    </section>
  );
}
