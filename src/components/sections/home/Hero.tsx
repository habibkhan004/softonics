"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Check, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import { heroSlides } from "@/lib/data/heroSlides";
import { stats } from "@/lib/data/stats";

const AUTO_ADVANCE_MS = 7000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, AUTO_ADVANCE_MS);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const goTo = (i: number) => {
    setIndex(i);
    resetTimer();
  };
  const goPrev = () => goTo((index - 1 + heroSlides.length) % heroSlides.length);
  const goNext = () => goTo((index + 1) % heroSlides.length);

  const slide = heroSlides[index];
  const [titleBefore, titleAfter] = slide.title.split(slide.gradientWord);
  const heroStats = [stats[0], stats[1]];

  return (
    <section className="relative w-full min-w-0 px-3 py-2 sm:px-4 sm:py-6 lg:flex lg:items-center lg:justify-center lg:px-0">
      <div className="relative mx-auto flex min-h-[32rem] w-full min-w-0 max-w-full flex-col justify-center overflow-hidden rounded-2xl shadow-2xl shadow-black/10 sm:min-h-[560px] lg:h-[80vh] lg:w-[90%] lg:max-w-7xl lg:rounded-none">
        <AnimatePresence mode="sync">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image src={slide.image} alt="" fill priority={index === 0} sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/92 to-background/55" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80" />
          </motion.div>
        </AnimatePresence>

        {/* Left rail: eyebrow, prev arrow, dots, counter */}
        <div className="absolute left-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-7 lg:flex">
          <span className="rotate-180 text-[11px] font-semibold uppercase tracking-[0.3em] text-foreground-muted [writing-mode:vertical-rl]">
            {slide.eyebrow}
          </span>
          <button
            onClick={goPrev}
            aria-label="Previous slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground-muted backdrop-blur transition-colors hover:border-accent-indigo/50 hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <div className="flex flex-col items-center gap-2.5">
            {heroSlides.map((s, i) => (
              <button
                key={s.eyebrow}
                onClick={() => goTo(i)}
                aria-label={`Show slide: ${s.eyebrow}`}
                className="flex items-center justify-center py-1"
              >
                <span
                  className={`w-1 rounded-full transition-all duration-300 ${
                    i === index ? "h-7 bg-accent-blue" : "h-1.5 bg-border hover:bg-foreground-muted/50"
                  }`}
                />
              </button>
            ))}
          </div>
          <span className="rotate-180 text-[11px] font-mono tracking-widest text-foreground-muted [writing-mode:vertical-rl]">
            {String(index + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
          </span>
        </div>

        <button
          onClick={goNext}
          aria-label="Next slide"
          className="absolute right-6 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border text-foreground-muted backdrop-blur transition-colors hover:border-accent-indigo/50 hover:text-foreground lg:flex"
        >
          <ArrowRight className="h-4 w-4" />
        </button>

        <div className="relative z-10 w-full min-w-0 px-4 py-10 sm:px-10 lg:px-14">
          <div className="max-w-2xl min-w-0 lg:pl-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5 }}
                className="min-w-0"
              >
                <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-accent-indigo backdrop-blur sm:px-4 sm:text-xs">
                  <Sparkles className="h-3.5 w-3.5 shrink-0" />
                  <span className="truncate">{slide.eyebrow}</span>
                </span>

                <h1 className="mt-5 break-words text-[1.7rem] font-semibold leading-[1.15] tracking-tight text-foreground sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl">
                  {titleBefore}
                  <span className="gradient-text">{slide.gradientWord}</span>
                  {titleAfter}
                </h1>

                <p className="mt-5 max-w-lg break-words text-[0.95rem] leading-relaxed text-foreground-muted sm:mt-6 sm:text-lg">
                  {slide.subtitle}
                </p>

                <ul className="mt-5 flex flex-col gap-2 sm:mt-6 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
                  {slide.highlights.map((item) => (
                    <li key={item} className="flex min-w-0 items-start gap-2 text-sm text-foreground-muted">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-indigo" />
                      <span className="break-words">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex w-full min-w-0 flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
                  <Button href={slide.ctaHref} size="lg" className="w-full sm:w-auto">
                    {slide.ctaLabel} <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button href="/projects" variant="outline" size="lg" className="w-full sm:w-auto">
                    View Our Work
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex items-center gap-3 lg:hidden">
              {heroSlides.map((s, i) => (
                <button
                  key={s.eyebrow}
                  onClick={() => goTo(i)}
                  aria-label={`Show slide: ${s.eyebrow}`}
                  className="group flex items-center py-2"
                >
                  <span
                    className={`h-1 rounded-full transition-all duration-300 ${
                      i === index ? "w-10 bg-accent-blue" : "w-4 bg-border group-hover:bg-foreground-muted"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Floating stat cards */}
        <div className="absolute bottom-6 right-6 z-20 hidden gap-4 sm:flex lg:right-10">
          {heroStats.map((stat) => (
            <div key={stat.label} className="glass-card rounded-2xl px-5 py-4">
              <div className="text-xs text-foreground-muted">{stat.label}</div>
              <div className="mt-1 text-2xl font-semibold gradient-text">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
