"use client";

import Link from "next/link";
import { motion } from "motion/react";
import ServiceCard from "@/components/layout/ServiceCard";
import MenuArtwork from "@/components/layout/MenuArtwork";

export interface MegaMenuItem {
  title: string;
  description: string;
  href: string;
}

/**
 * Full-width mega-menu that drops out of the navbar — deliberately not a small dropdown.
 * Left column holds the 3D artwork, the right holds a 3-column card grid.
 */
export default function ServiceMegaMenu({
  items,
  onNavigate,
  footerLink,
  showArtwork = true,
}: {
  items: MegaMenuItem[];
  onNavigate?: () => void;
  footerLink?: { label: string; href: string };
  showArtwork?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="absolute left-0 right-0 top-full z-40 border-b border-border bg-background-elevated"
    >
      <div className="mx-auto flex w-full max-w-[1600px] items-center gap-10 px-6 pb-8 pt-2 sm:px-7">
        {showArtwork && (
          <div className="hidden w-[340px] shrink-0 xl:block">
            <MenuArtwork />
          </div>
        )}

        <div className="grid flex-1 grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <ServiceCard key={item.href} {...item} onClick={onNavigate} />
          ))}
        </div>
      </div>

      {footerLink && (
        <div className="mx-auto w-full max-w-[1600px] px-6 pb-6 sm:px-7">
          <Link
            href={footerLink.href}
            onClick={onNavigate}
            className="font-mono text-[13px] text-accent-indigo transition-opacity hover:opacity-75"
          >
            {footerLink.label} →
          </Link>
        </div>
      )}
    </motion.div>
  );
}
