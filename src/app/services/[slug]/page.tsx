import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import MotionReveal from "@/components/ui/MotionReveal";
import CtaBanner from "@/components/sections/shared/CtaBanner";
import { services } from "@/lib/data/services";
import { projects } from "@/lib/data/projects";
import { serviceImages, projectImages } from "@/lib/images";
import { process } from "@/lib/data/process";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return { title: service.title, description: service.shortDescription };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedProjects = projects.slice(0, 2);
  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <SectionWrapper className="pb-0 pt-16 sm:pt-24">
        <MotionReveal>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Services
          </Link>

          <div className="mt-8 flex items-start gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-accent-indigo/10">
              <service.icon className="h-8 w-8 text-accent-blue" strokeWidth={1.5} />
            </div>
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl">
                {service.title}
              </h1>
              <p className="mt-3 max-w-2xl text-lg text-foreground-muted">{service.shortDescription}</p>
            </div>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.1}>
          <div className="relative mt-10 h-64 w-full overflow-hidden rounded-3xl sm:h-96">
            <Image src={serviceImages[service.slug]} alt={service.title} fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </div>
        </MotionReveal>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <MotionReveal>
              <h2 className="text-xl font-semibold text-foreground">Overview</h2>
              <p className="mt-3 text-foreground-muted leading-relaxed">{service.longDescription}</p>
            </MotionReveal>
          </div>

          <MotionReveal delay={0.1}>
            <Card hover={false}>
              <h3 className="text-sm font-semibold text-foreground">What&apos;s Included</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-blue" />
                    <span className="text-foreground-muted">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </MotionReveal>
        </div>
      </SectionWrapper>

      <SectionWrapper glow="indigo">
        <SectionHeading eyebrow="How We Work" title="What to expect, start to finish" gradientWord="start to finish" />
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {process.map((item, i) => (
            <MotionReveal key={item.step} delay={i * 0.08}>
              <div className="text-3xl font-semibold gradient-text">{item.step}</div>
              <h3 className="mt-3 text-sm font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-xs text-foreground-muted">{item.description}</p>
            </MotionReveal>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="text-2xl font-semibold text-foreground">Related Case Studies</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {relatedProjects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="glass-card group flex items-center gap-4 rounded-2xl p-5 transition-colors hover:bg-surface-hover"
            >
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                <Image src={projectImages[p.slug]} alt={p.title} fill sizes="64px" className="object-cover" />
              </div>
              <div>
                <h3 className="font-medium text-foreground group-hover:text-accent-blue">{p.title}</h3>
                <p className="mt-1 text-xs text-foreground-muted">{p.client}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14">
          <h2 className="text-2xl font-semibold text-foreground">Explore Other Services</h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="glass-card group flex flex-col gap-2 rounded-2xl p-5 transition-colors hover:bg-surface-hover"
              >
                <s.icon className="h-6 w-6 text-accent-blue" strokeWidth={1.5} />
                <h3 className="text-sm font-medium text-foreground group-hover:text-accent-blue">{s.title}</h3>
                <span className="inline-flex items-center gap-1 text-xs text-accent-blue">
                  Learn more <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <CtaBanner
        title={`Ready to start your ${service.title.toLowerCase()} project?`}
        subtitle="Tell us what you're building — we'll come back with a scoped plan and realistic timeline."
      />
    </>
  );
}
