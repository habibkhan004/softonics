import SectionHeading from "@/components/ui/SectionHeading";
import SectionWrapper from "@/components/ui/SectionWrapper";
import MotionReveal from "@/components/ui/MotionReveal";
import { process } from "@/lib/data/process";

export default function ProcessSteps() {
  return (
    <SectionWrapper>
      <SectionHeading
        eyebrow="How We Work"
        title="A process built for predictable delivery"
        gradientWord="predictable delivery"
      />

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
        {process.map((item, i) => (
          <MotionReveal key={item.step} delay={i * 0.08} className="relative">
            <div className="text-4xl font-semibold gradient-text">{item.step}</div>
            <h3 className="mt-3 text-base font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm text-foreground-muted">{item.description}</p>
            {i < process.length - 1 && (
              <div className="mt-6 hidden h-px w-full bg-gradient-to-r from-border to-transparent lg:block" />
            )}
          </MotionReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
