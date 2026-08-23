import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import PageHero from "@/components/sections/shared/PageHero";
import CtaBanner from "@/components/sections/shared/CtaBanner";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import MotionReveal from "@/components/ui/MotionReveal";
import { services } from "@/lib/data/services";
import { process } from "@/lib/data/process";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software, web & mobile development, AI/ML solutions, SEO, cloud/DevOps, UI/UX design, and consulting — everything a modern software partner should offer.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything a modern software partner should offer"
        gradientWord="modern software partner"
        subtitle="Eight disciplines, one accountable team — from first architecture diagram to long-term growth."
      />

      <SectionWrapper className="pt-0">
        <div className="flex flex-col gap-6">
          {services.map((service, i) => (
            <MotionReveal key={service.slug} delay={(i % 2) * 0.1}>
              <Card className="scroll-mt-24" id={service.slug}>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[auto_1fr]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-indigo/10">
                    <service.icon className="h-7 w-7 text-accent-blue" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-foreground">{service.title}</h2>
                    <p className="mt-3 text-foreground-muted">{service.longDescription}</p>
                    <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-sm">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-blue" />
                          <span className="text-foreground-muted">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/services/${service.slug}`}
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-blue transition-opacity hover:opacity-80"
                    >
                      View full service details <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </Card>
            </MotionReveal>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper glow="indigo">
        <SectionHeading
          eyebrow="How We Work"
          title="A process built for predictable delivery"
          gradientWord="predictable delivery"
        />
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {process.map((item, i) => (
            <MotionReveal key={item.step} delay={i * 0.08}>
              <div className="text-4xl font-semibold gradient-text">{item.step}</div>
              <h3 className="mt-3 text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-foreground-muted">{item.description}</p>
            </MotionReveal>
          ))}
        </div>
      </SectionWrapper>

      <CtaBanner
        title="Not sure which service fits your project?"
        subtitle="Tell us what you're trying to build — we'll recommend the right mix of services and a realistic scope."
      />
    </>
  );
}
