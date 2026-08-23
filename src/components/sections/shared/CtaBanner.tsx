import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
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
        <div className="glass-card relative overflow-hidden rounded-3xl px-8 py-16 text-center sm:px-16">
          <div
            className="glow-orb glow-orb-violet h-[320px] w-[320px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            aria-hidden="true"
          />
          <div className="relative z-10">
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-foreground-muted text-balance">{subtitle}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" size="lg">
                Start a Project <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/projects" variant="outline" size="lg">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </MotionReveal>
    </SectionWrapper>
  );
}
