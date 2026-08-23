import { Check } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import StatCard from "@/components/ui/StatCard";
import MotionReveal from "@/components/ui/MotionReveal";
import { stats } from "@/lib/data/stats";

const differentiators = [
  "Senior engineers only — no outsourced juniors learning on your project",
  "Fixed-scope delivery with a live demo at the end of every sprint",
  "Transparent pricing with no surprise change-order fees",
  "Direct access to the team building your product, not account managers",
];

export default function WhyChooseUs() {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
        <MotionReveal>
          <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent-blue">
            Why Softonics
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Built for teams who&apos;ve been burned by agencies before
          </h2>
          <ul className="mt-8 flex flex-col gap-4">
            {differentiators.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-indigo/15">
                  <Check className="h-3.5 w-3.5 text-accent-blue" />
                </span>
                <span className="text-foreground-muted">{item}</span>
              </li>
            ))}
          </ul>
        </MotionReveal>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, i) => (
            <MotionReveal key={stat.label} delay={i * 0.08}>
              <StatCard {...stat} />
            </MotionReveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
