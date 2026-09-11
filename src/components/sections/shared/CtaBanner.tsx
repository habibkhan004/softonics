import CTAButton from "@/components/ui/CTAButton";
import MotionReveal from "@/components/ui/MotionReveal";
import SectionWrapper from "@/components/ui/SectionWrapper";

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
}

export default function CtaBanner({
  title = "Ready to build something great?",
  subtitle = "Tell us about your project and we'll get back to you within one business day with next steps.",
}: CtaBannerProps) {
  return (
    <SectionWrapper className="pt-0">
      <MotionReveal>
        <div className="relative overflow-hidden rounded-sm border border-border bg-surface px-6 py-14 sm:px-14 sm:py-16">
          <div className="relative z-10 max-w-2xl">
            <h2 className="display-type text-[1.75rem] text-white sm:text-[2.5rem]">{title}</h2>
            <p className="mt-5 max-w-[650px] text-[16px] leading-[1.55] text-foreground-muted sm:text-[18px]">
              {subtitle}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <CTAButton href="/contact">Start a Project</CTAButton>
              <CTAButton href="/projects" variant="outline">
                View Our Work
              </CTAButton>
            </div>
          </div>
        </div>
      </MotionReveal>
    </SectionWrapper>
  );
}
