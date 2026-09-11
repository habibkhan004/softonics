import CTAButton from "@/components/ui/CTAButton";
import GridBackground from "@/components/ui/GridBackground";
import HeroArtwork from "@/components/sections/home/HeroArtwork";
import { heroContent } from "@/lib/data/heroContent";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <GridBackground
        size={240}
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

      <div className="app-container relative grid grid-cols-1 items-start gap-10 pb-16 pt-8 lg:grid-cols-[minmax(0,46fr)_minmax(0,54fr)] lg:items-center lg:gap-6 lg:pb-20 lg:pt-10">
        {/* Copy */}
        <div className="max-w-[700px]">
          <p className="font-mono text-[15px] leading-none text-accent-indigo sm:text-[17px]">
            [{heroContent.eyebrow}]
          </p>

          <h1 className="display-hero mt-7 text-white">
            {heroContent.headline.map((line) => (
              <span key={line.text} className={`block ${line.accent ? "text-accent-indigo" : ""}`}>
                {line.text}
              </span>
            ))}
          </h1>

          <p className="mt-9 max-w-[650px] text-[17px] leading-[1.55] text-foreground-muted sm:text-[19px]">
            {heroContent.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <CTAButton href={heroContent.ctaHref}>{heroContent.ctaLabel}</CTAButton>
            <CTAButton href="/projects" variant="outline">
              Our Work
            </CTAButton>
          </div>
        </div>

        {/* Artwork */}
        <div className="mx-auto w-full max-w-[430px] sm:max-w-[520px] lg:mx-0 lg:max-w-none">
          <HeroArtwork />
        </div>
      </div>
    </section>
  );
}
