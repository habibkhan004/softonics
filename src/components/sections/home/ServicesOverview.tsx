import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionWrapper from "@/components/ui/SectionWrapper";
import MotionReveal from "@/components/ui/MotionReveal";
import { services } from "@/lib/data/services";

export default function ServicesOverview() {
  return (
    <SectionWrapper glow="indigo">
      <SectionHeading
        eyebrow="What We Do"
        title="Everything a modern software partner should offer"
        gradientWord="modern software partner"
        subtitle="From first line of code to long-term growth, we cover the full stack of what a software company needs to deliver."
      />

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <MotionReveal key={service.slug} delay={(i % 3) * 0.08}>
            <Card className="h-full">
              <service.icon className="h-9 w-9 text-accent-blue" strokeWidth={1.5} />
              <h3 className="mt-5 text-lg font-semibold text-foreground">{service.title}</h3>
              <p className="mt-2 text-sm text-foreground-muted">{service.shortDescription}</p>
              <Link
                href={`/services/${service.slug}`}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-blue transition-opacity hover:opacity-80"
              >
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Card>
          </MotionReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
