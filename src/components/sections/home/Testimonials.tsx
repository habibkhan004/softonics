"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import MotionReveal from "@/components/ui/MotionReveal";
import TestimonialArtwork from "@/components/sections/home/TestimonialArtwork";
import type { Testimonial } from "@/lib/types";
import SectionLabel from "@/components/ui/SectionLabel";

const AUTO_ADVANCE_SECONDS = 7;

/** Geometry for the progress ring drawn around the active avatar. */
const RING_RADIUS = 48;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

function initialsOf(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

/** Avatars fade out the further they sit from the active one. */
function avatarOpacity(distance: number) {
  if (distance === 0) return 1;
  if (distance === 1) return 0.55;
  if (distance === 2) return 0.38;
  if (distance === 3) return 0.26;
  return 0.15;
}

export default function Testimonials({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const list = items.length ? items : [];

  // Advancing is driven by the progress ring finishing its sweep, not a timer.
  const advance = () => {
    if (list.length < 2) return;
    setIndex((i) => (i + 1) % list.length);
  };

  if (!list.length) return null;
  const current = list[Math.min(index, list.length - 1)];

  return (
    <section className="relative overflow-hidden bg-background-elevated py-16 sm:py-24">
      <div className="app-container flex flex-col items-center text-center">
        <MotionReveal>
          <SectionLabel>Testimonials</SectionLabel>
        </MotionReveal>

        <MotionReveal delay={0.08}>
          <div className="mt-8 flex justify-center">
            <TestimonialArtwork />
          </div>
        </MotionReveal>

        {/* Quote */}
        <div className="mt-10 flex min-h-[190px] w-full max-w-[900px] items-start justify-center sm:min-h-[170px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="text-[17px] italic leading-[1.55] text-foreground-muted sm:text-[21px] sm:leading-[1.5]"
            >
              {current.quote}
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Avatar rail */}
        <div className="mt-6 w-full border-t border-border pt-10">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {list.map((item, i) => {
              const active = i === index;
              return (
                <button
                  key={item.id}
                  onClick={() => setIndex(i)}
                  aria-label={`Show testimonial from ${item.name}`}
                  aria-current={active}
                  style={{ opacity: avatarOpacity(Math.abs(i - index)) }}
                  className="relative h-14 w-14 shrink-0 transition-opacity duration-500 sm:h-[72px] sm:w-[72px]"
                >
                  <span className="absolute inset-[6px] block overflow-hidden rounded-full">
                    {item.photo ? (
                      <Image
                        src={item.photo}
                        alt={item.name}
                        fill
                        sizes="72px"
                        className={`object-cover transition-all duration-500 ${active ? "" : "grayscale"}`}
                      />
                    ) : (
                      <span className="flex h-full w-full items-center justify-center bg-surface font-mono text-[14px] text-foreground-muted">
                        {initialsOf(item.name)}
                      </span>
                    )}
                  </span>

                  {/* Progress ring — when its sweep completes, the next testimonial takes over. */}
                  {active && (
                    <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full -rotate-90">
                      <circle
                        cx="50"
                        cy="50"
                        r={RING_RADIUS}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        className="text-white/10"
                      />
                      <motion.circle
                        key={current.id}
                        cx="50"
                        cy="50"
                        r={RING_RADIUS}
                        fill="none"
                        stroke="var(--accent-indigo)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray={RING_CIRCUMFERENCE}
                        initial={{ strokeDashoffset: RING_CIRCUMFERENCE }}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{ duration: AUTO_ADVANCE_SECONDS, ease: "linear" }}
                        onAnimationComplete={advance}
                      />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>

          {/* Attribution */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-8"
            >
              <div className="text-[16px] text-accent-indigo sm:text-[17px]">{current.name}</div>
              <div className="mt-1 text-[15px] text-foreground-muted">
                {current.role} at {current.company}
              </div>
              <div className="mt-4 font-mono text-[15px] uppercase tracking-[0.18em] text-foreground/70">
                {current.company}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
