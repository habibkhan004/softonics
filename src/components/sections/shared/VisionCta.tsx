import CTAButton from "@/components/ui/CTAButton";
import CtaIdea from "@/components/sections/shared/CtaIdea";
import PerspectiveRoom from "@/components/sections/shared/PerspectiveRoom";

interface VisionCtaProps {
  /** Leading words, rendered in white. */
  title?: string;
  /** Final word, rendered in the accent green. */
  accentWord?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function VisionCta({
  title = "Share your",
  accentWord = "vision",
  ctaLabel = "Start a Project",
  ctaHref = "/contact",
}: VisionCtaProps) {
  return (
    <section
      className="relative isolate overflow-hidden bg-background"
      /* Lift the grid a little above the site-wide default so the room reads clearly. */
      style={{ "--grid-line": "rgba(30, 40, 34, 0.18)" } as React.CSSProperties}
    >
      <PerspectiveRoom />

      {/* Softly fades the grid at the very edges so it reads as depth, not a boxed graphic. */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,var(--background)_100%)]" />

      <div className="relative flex min-h-[560px] flex-col items-center justify-center px-[1.125rem] py-20 sm:min-h-[660px] sm:py-24">
        {/* In normal flow above the headline, so the bulb never overlaps the text when it wraps. */}
        <div className="pointer-events-none relative w-[160px] sm:w-[200px] lg:w-[230px]">
          <CtaIdea />
        </div>

        <h2 className="display-type relative mt-4 text-center text-[2.4rem] leading-[1.05] sm:text-[4rem] lg:text-[5rem]">
          <span className="text-foreground">{title} </span>
          <span className="text-accent-indigo">{accentWord}</span>
        </h2>

        <div className="relative mt-10">
          <CTAButton href={ctaHref} withArrow={false} className="px-8 py-3.5 text-[16px]">
            {ctaLabel}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
