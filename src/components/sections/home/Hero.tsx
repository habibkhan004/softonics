"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import { heroSlides } from "@/lib/data/heroSlides";

const AUTO_ADVANCE_MS = 7000;

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, []);

  const slide = heroSlides[index];
  const [titleBefore, titleAfter] = slide.title.split(slide.gradientWord);

  return (
    <section className="relative flex min-h-[640px] items-center overflow-hidden sm:min-h-[720px]">
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-blue backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" />
                {slide.eyebrow}
              </span>

              <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
                {titleBefore}
                <span className="gradient-text">{slide.gradientWord}</span>
                {titleAfter}
              </h1>

              <p className="mt-6 max-w-lg text-lg text-foreground-muted text-balance">{slide.subtitle}</p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button href={slide.ctaHref} size="lg">
                  {slide.ctaLabel} <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/projects" variant="outline" size="lg">
                  View Our Work
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-14 flex items-center gap-3">
            {heroSlides.map((s, i) => (
              <button
                key={s.eyebrow}
                onClick={() => setIndex(i)}
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
    </section>
  );
}
