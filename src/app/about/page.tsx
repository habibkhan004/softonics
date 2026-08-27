import type { Metadata } from "next";
import Image from "next/image";
import { Hammer, Eye, Zap, Handshake } from "lucide-react";
import PageHero from "@/components/sections/shared/PageHero";
import CtaBanner from "@/components/sections/shared/CtaBanner";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import StatCard from "@/components/ui/StatCard";
import MotionReveal from "@/components/ui/MotionReveal";
import { stats } from "@/lib/data/stats";
import { team } from "@/lib/data/team";
import { aboutImages } from "@/lib/images";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "About Us",
  description: `The story, mission, and team behind ${brand.legalName} — a software company built by engineers, for engineers.`,
};

const values = [
  {
    icon: Hammer,
    title: "Craftsmanship",
    description: "We'd rather ship something smaller and well-built than something large and fragile.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Weekly demos, honest timelines, and no burying bad news until the retro.",
  },
  {
    icon: Zap,
    title: "Speed",
    description: "Momentum compounds. We bias toward shipping and iterating over endless planning.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description: "Most of our clients stay with us for years, not one-off projects — that's by design.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={`About ${brand.shortName}`}
        title="Built by engineers who were tired of agency theater"
        gradientWord="agency theater"
        subtitle={`We started ${brand.legalName} to build the kind of software partner we always wished we could hire.`}
      />

      <SectionWrapper className="pt-0">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <MotionReveal>
            <div className="space-y-6 text-foreground-muted">
              <p>
                {brand.legalName} was founded in 2018 by a small team of engineers frustrated with bloated agency
                processes — endless discovery decks, junior developers learning on client dollars, and
                scope creep dressed up as &ldquo;flexibility.&rdquo; We set out to build something different: a
                software company where senior engineers do the actual engineering, and clients get a
                direct line to the people building their product.
              </p>
              <p>
                Since then we&apos;ve grown into a full-service partner spanning custom software, web and
                mobile development, AI/ML systems, SEO, and WordPress — but the founding
                principle hasn&apos;t changed. Every engagement is staffed by senior people, scoped honestly,
                and delivered with the kind of transparency we wished we&apos;d gotten as clients ourselves.
              </p>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <div className="relative h-72 w-full overflow-hidden rounded-3xl sm:h-96">
              <Image src={aboutImages.hero} alt={`The ${brand.legalName} team collaborating`} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
            </div>
          </MotionReveal>
        </div>
      </SectionWrapper>

      <SectionWrapper glow="violet">
        <SectionHeading eyebrow="What We Value" title="Principles that shape every engagement" gradientWord="every engagement" />
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <MotionReveal key={value.title} delay={i * 0.08}>
              <Card className="h-full">
                <value.icon className="h-8 w-8 text-accent-blue" strokeWidth={1.5} />
                <h3 className="mt-4 text-base font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm text-foreground-muted">{value.description}</p>
              </Card>
            </MotionReveal>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <MotionReveal key={stat.label} delay={i * 0.08}>
              <StatCard {...stat} />
            </MotionReveal>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="pt-0">
        <MotionReveal>
          <div className="relative h-56 w-full overflow-hidden rounded-3xl sm:h-72">
            <Image src={aboutImages.culture} alt={`${brand.legalName} team culture`} fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-transparent" />
            <div className="relative flex h-full max-w-md flex-col justify-center px-8 sm:px-12">
              <h3 className="text-2xl font-semibold text-foreground sm:text-3xl">Remote-first, output-focused</h3>
              <p className="mt-2 text-sm text-foreground-muted">
                We hire the best people wherever they are and measure work by what ships, not hours online.
              </p>
            </div>
          </div>
        </MotionReveal>
      </SectionWrapper>

      <SectionWrapper glow="indigo">
        <SectionHeading eyebrow="The Team" title="Leaders behind the work" gradientWord="behind the work" />
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <MotionReveal key={member.name} delay={(i % 4) * 0.08}>
              <Card className="text-center" hover={false}>
                <div
                  className="mx-auto flex h-16 w-16 items-center justify-center rounded-full text-lg font-semibold text-black"
                  style={{ backgroundImage: "var(--gradient-brand)" }}
                >
                  {member.initials}
                </div>
                <h3 className="mt-4 text-sm font-semibold text-foreground">{member.name}</h3>
                <p className="mt-1 text-xs text-foreground-muted">{member.role}</p>
              </Card>
            </MotionReveal>
          ))}
        </div>
      </SectionWrapper>

      <CtaBanner />
    </>
  );
}
