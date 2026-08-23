import type { Metadata } from "next";
import { Check } from "lucide-react";
import PageHero from "@/components/sections/shared/PageHero";
import CtaBanner from "@/components/sections/shared/CtaBanner";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import MotionReveal from "@/components/ui/MotionReveal";
import PricingFaq from "@/components/sections/pricing/PricingFaq";
import { pricingTiers, pricingFaqs } from "@/lib/data/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent, project-based and retainer pricing for software development, AI/ML, and SEO engagements.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Straightforward pricing, no surprise invoices"
        gradientWord="no surprise invoices"
        subtitle="Every engagement starts with a scoped estimate — here's the general shape of what that looks like."
      />

      <SectionWrapper className="pt-0">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <MotionReveal key={tier.name} delay={i * 0.1}>
              <div
                className={`relative flex h-full flex-col rounded-2xl p-8 ${
                  tier.highlighted
                    ? "border-2 border-accent-indigo/60 bg-surface"
                    : "glass-card"
                }`}
              >
                {tier.highlighted && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold text-white"
                    style={{ backgroundImage: "var(--gradient-brand)" }}
                  >
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-semibold text-foreground">{tier.name}</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-semibold gradient-text">{tier.price}</span>
                </div>
                <p className="mt-1 text-xs text-foreground-muted">{tier.period}</p>
                <p className="mt-4 text-sm text-foreground-muted">{tier.description}</p>
                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-blue" />
                      <span className="text-foreground-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  href="/contact"
                  variant={tier.highlighted ? "primary" : "outline"}
                  className="mt-8 w-full"
                >
                  {tier.ctaLabel}
                </Button>
              </div>
            </MotionReveal>
          ))}
        </div>

        <MotionReveal>
          <p className="mt-8 text-center text-sm text-foreground-muted">
            Need something outside these shapes?{" "}
            <a href="/contact" className="font-medium text-accent-blue">
              Let&apos;s talk about a custom scope
            </a>
            .
          </p>
        </MotionReveal>
      </SectionWrapper>

      <SectionWrapper glow="blue">
        <SectionHeading eyebrow="FAQ" title="Common pricing questions" gradientWord="pricing questions" />
        <div className="mt-14">
          <PricingFaq items={pricingFaqs} />
        </div>
      </SectionWrapper>

      <CtaBanner />
    </>
  );
}
