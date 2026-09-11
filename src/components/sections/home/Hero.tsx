import CTAButton from "@/components/ui/CTAButton";
import GridBackground from "@/components/ui/GridBackground";
import HeroArtwork from "@/components/sections/home/HeroArtwork";
import { heroContent } from "@/lib/data/heroContent";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <GridBackground
        markers={[
          [64, 24],
          [64, 58],
          [82, 24],
          [82, 58],
          [46, 88],
          [64, 88],
          [82, 88],
        ]}
      />

      <div className="app-container relative grid grid-cols-1 items-start gap-12 pb-14 pt-10 sm:gap-10 sm:pb-16 lg:grid-cols-[minmax(0,46fr)_minmax(0,54fr)] lg:items-center lg:gap-6 lg:pb-20 lg:pt-10">
        {/* Copy — centred while stacked, left-aligned once the two-column layout kicks in. */}
        <div className="mx-auto max-w-[700px] text-center lg:mx-0 lg:text-left">
          <h1 className="display-hero text-white">
            {heroContent.headline.map((line) => (
              <span key={line.text} className={`block ${line.accent ? "text-accent-indigo" : ""}`}>
                {line.text}
              </span>
            ))}
          </h1>

          <p className="mx-auto mt-6 max-w-[650px] text-[15px] leading-[1.6] text-foreground-muted sm:mt-8 sm:text-[17px] lg:mx-0 lg:text-[19px]">
            {heroContent.subtitle}
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 min-[380px]:flex-row min-[380px]:flex-wrap min-[380px]:justify-center sm:mt-10 sm:gap-4 lg:items-start lg:justify-start">
            <CTAButton href={heroContent.ctaHref}>{heroContent.ctaLabel}</CTAButton>
            <CTAButton href="/projects" variant="outline">
              Our Work
            </CTAButton>
          </div>
        </div>

        {/* Artwork */}
        <div className="mx-auto w-full max-w-[340px] min-[420px]:max-w-[400px] sm:max-w-[520px] lg:mx-0 lg:max-w-none">
          <HeroArtwork />
        </div>
      </div>
    </section>
  );
}
