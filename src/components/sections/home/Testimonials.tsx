"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionWrapper from "@/components/ui/SectionWrapper";
import MotionReveal from "@/components/ui/MotionReveal";
import { testimonials } from "@/lib/data/testimonials";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const current = testimonials[index];

  return (
    <SectionWrapper glow="violet">
      <SectionHeading
        eyebrow="Client Voices"
        title="What it's like to work with us"
        gradientWord="work with us"
      />

      <MotionReveal>
        <div className="glass-card relative mx-auto mt-14 max-w-3xl rounded-3xl p-8 sm:p-12 min-h-[260px]">
          <Quote className="h-10 w-10 text-accent-indigo/40" />
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <p className="mt-4 text-lg text-foreground text-balance sm:text-xl">
                &ldquo;{current.quote}&rdquo;
              </p>
              <div className="mt-6">
                <div className="font-semibold text-foreground">{current.name}</div>
                <div className="text-sm text-foreground-muted">
                  {current.role}, {current.company}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setIndex(i)}
                aria-label={`Show testimonial from ${t.name}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-accent-blue" : "w-1.5 bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </MotionReveal>
    </SectionWrapper>
  );
}
