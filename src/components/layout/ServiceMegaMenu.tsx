"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export interface MegaMenuItem {
  title: string;
  description: string;
  href: string;
}

/**
 * Anchored dropdown panel that hangs off its nav trigger — a contained card rather than
 * the full-bleed mega-menu it replaces. Items sit in a hairline grid (separators come from
 * `gap-px` over a border-coloured ground, so there are no stray edge rules), each row
 * marked by a green rail that wipes in on hover.
 *
 * `align` decides how the panel hangs off its trigger, so one opened from a nav item near
 * the right edge grows inwards instead of off-screen.
 */
export default function ServiceMegaMenu({
  items,
  onNavigate,
  footerLink,
  align = "left",
}: {
  items: MegaMenuItem[];
  onNavigate?: () => void;
  footerLink?: { label: string; href: string };
  align?: "left" | "center" | "right";
}) {
  return (
    // Positioning lives on the wrapper, not the motion element: Motion writes an inline
    // `transform` for the entry animation, which would override a `-translate-x-1/2` class.
    <div
      className={`absolute top-full z-40 pt-2 ${
        align === "right" ? "right-0" : align === "center" ? "left-1/2 -translate-x-1/2" : "left-0"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className="w-[min(38rem,calc(100vw-3rem))] overflow-hidden rounded-lg border border-border bg-background-elevated shadow-[0_24px_48px_-28px_rgba(15,18,17,0.5)]"
      >
        <div className="grid grid-cols-2 gap-px bg-border">
          {items.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className="group relative flex items-start gap-3.5 bg-background-elevated px-5 py-4 transition-colors duration-200 hover:bg-surface"
            >
              <span
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-accent-indigo transition-transform duration-200 group-hover:scale-y-100"
              />
              <span className="mt-[3px] font-mono text-[13px] tabular-nums text-accent-indigo/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block pr-5 text-[16px] font-medium leading-snug text-foreground transition-colors duration-200 group-hover:text-accent-indigo">
                  {item.title}
                </span>
                <span className="mt-1 block text-[15px] leading-[1.5] text-foreground-muted">
                  {item.description}
                </span>
              </span>
              <ArrowUpRight
                aria-hidden="true"
                className="mt-0.5 h-4 w-4 shrink-0 -translate-x-1 text-accent-indigo opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
              />
            </Link>
          ))}

          {/* Keeps the hairline grid square when the item count is odd. */}
          {items.length % 2 === 1 && <span className="bg-background-elevated" />}
        </div>

        {footerLink && (
          <Link
            href={footerLink.href}
            onClick={onNavigate}
            className="flex items-center justify-between bg-accent-indigo/[0.07] px-5 py-3.5 font-mono text-[13px] text-accent-indigo transition-colors duration-200 hover:bg-accent-indigo/[0.14]"
          >
            {footerLink.label}
            <span aria-hidden="true">→</span>
          </Link>
        )}
      </motion.div>
    </div>
  );
}
