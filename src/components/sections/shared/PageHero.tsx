import MotionReveal from "@/components/ui/MotionReveal";

interface PageHeroProps {
  eyebrow: string;
  title: string;
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
        <span className="gradient-text">{gradientWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="relative overflow-hidden pt-20 pb-16 sm:pt-28 sm:pb-20">
      <div
        className="glow-orb glow-orb-indigo animate-float-slow h-[420px] w-[420px] -top-40 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      />
      <div className="grid-pattern pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
        <MotionReveal>
          <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent-blue">
            {eyebrow}
          </span>
        </MotionReveal>
        <MotionReveal delay={0.1}>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
            {renderTitle()}
          </h1>
        </MotionReveal>
        <MotionReveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground-muted text-balance">{subtitle}</p>
        </MotionReveal>
      </div>
    </section>
  );
}
