import GridBackground from "@/components/ui/GridBackground";
import MotionReveal from "@/components/ui/MotionReveal";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  /** Rendered in the accent green. */
  gradientWord?: string;
  subtitle: string;
}

export default function PageHero({ eyebrow, title, gradientWord, subtitle }: PageHeroProps) {
  const renderTitle = () => {
    if (!gradientWord || !title.includes(gradientWord)) return title;
    const parts = title.split(gradientWord);
    return (
      <>
        {parts[0]}
        <span className="text-accent-indigo">{gradientWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="relative overflow-hidden border-b border-border/60 pb-12 pt-10 sm:pb-16 sm:pt-14">
      <GridBackground size={240} markers={[[72, 22], [86, 62]]} />

      <div className="app-container relative z-10">
        <MotionReveal>
          <p className="font-mono text-[14px] leading-none text-accent-indigo sm:text-[16px]">[{eyebrow}]</p>
        </MotionReveal>
        <MotionReveal delay={0.08}>
          <h1 className="display-type mt-6 max-w-[16ch] text-[1.85rem] text-white sm:text-[2.6rem] lg:text-[3.4rem]">
            {renderTitle()}
          </h1>
        </MotionReveal>
        <MotionReveal delay={0.16}>
          <p className="mt-7 max-w-[650px] break-words text-[16px] leading-[1.55] text-foreground-muted sm:text-[18px]">
            {subtitle}
          </p>
        </MotionReveal>
      </div>
    </section>
  );
}
