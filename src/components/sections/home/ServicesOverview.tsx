import Link from "next/link";
import CTAButton from "@/components/ui/CTAButton";
import GridBackground from "@/components/ui/GridBackground";
import MotionReveal from "@/components/ui/MotionReveal";
import ServiceArtwork from "@/components/sections/home/ServiceArtwork";
import { services } from "@/lib/data/services";
import SectionLabel from "@/components/ui/SectionLabel";

export default function ServicesOverview() {
  return (
    /*
     * Note: no `overflow-hidden` on this section — it would break the sticky left column.
     * That's why this doesn't use SectionWrapper.
     */
    <section className="relative border-y border-border/60 py-16 sm:py-24">
      <GridBackground />

      <div className="app-container relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,40fr)_minmax(0,60fr)] lg:items-start lg:gap-14">
        {/* Left column stays pinned while the cards scroll past it. */}
        <div className="text-center lg:sticky lg:top-28 lg:self-start lg:text-left">
          <SectionLabel>Our Services</SectionLabel>

          <h2 className="font-hero mt-6 text-[1.9rem] leading-[1.12] sm:text-[2.4rem] lg:text-[2.9rem]">
            <span className="block text-accent-indigo">Focus on what matters.</span>
            <span className="block text-foreground">Ship the work that moves the business.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-[520px] text-[15px] leading-[1.6] text-foreground-muted sm:text-[17px] lg:mx-0">
            Six disciplines under one roof, staffed by senior people. Start with one and add the rest as you
            grow — the same team carries the context through instead of handing it off.
          </p>

          <div className="mt-8 flex justify-center lg:justify-start">
            <CTAButton href="/services" variant="outline">
              All services
            </CTAButton>
          </div>
        </div>

        {/* Right column — the scrolling stack. */}
        <div className="flex flex-col gap-4">
          {services.map((service, i) => (
            <MotionReveal key={service.slug} delay={0.05}>
              <article className="relative rounded-sm bg-surface p-6 sm:p-8">
                <span className="absolute right-6 top-6 font-mono text-[13px] text-accent-indigo">
                  [{String(i + 1).padStart(2, "0")}]
                </span>

                <ServiceArtwork slug={service.slug} />

                <h3 className="font-hero mt-6 text-[1.3rem] text-foreground sm:text-[1.6rem]">{service.title}</h3>

                <p className="mt-3 max-w-[560px] text-[15px] leading-[1.6] text-foreground-muted sm:text-[17px]">
                  {service.shortDescription}
                </p>

                <Link
                  href={`/services/${service.slug}`}
                  className="mt-5 inline-block text-[15px] text-accent-indigo underline underline-offset-4 transition-opacity hover:opacity-75"
                >
                  Read more
                </Link>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
