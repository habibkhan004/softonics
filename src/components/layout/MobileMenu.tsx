"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { primaryNavLinks } from "@/lib/data/nav";
import { services } from "@/lib/data/services";
import { brand } from "@/lib/brand";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const links = [
  ...primaryNavLinks.slice(0, 1),
  { label: "Services", href: "/services" },
  ...primaryNavLinks.slice(1),
  { label: "Contact", href: "/contact" },
];

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;

    const prevHtml = document.documentElement.style.overflow;
    const prevBody = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.documentElement.style.overflow = prevHtml;
      document.body.style.overflow = prevBody;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28 }}
          className="fixed inset-0 z-40 lg:hidden"
        >
          <div className="absolute inset-0 bg-[#0f0e0b]" />
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div
            className="pointer-events-none absolute -left-16 top-24 h-64 w-64 rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle, #b78f0c, transparent 70%)" }}
          />

          <div className="relative flex h-full min-h-0 flex-col pt-[calc(4.6rem+env(safe-area-inset-top))]">
            <div className="absolute bottom-0 left-0 top-[calc(4.6rem+env(safe-area-inset-top))] w-[3px] bg-gradient-to-b from-accent-blue via-accent-indigo to-transparent" />

            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 pb-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40">Navigate</p>

              <nav className="mt-4 flex flex-col">
                {links.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, duration: 0.35 }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="group flex items-baseline gap-4 border-b border-white/10 py-3.5"
                    >
                      <span className="font-mono text-[11px] text-accent-blue">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-[1.65rem] font-semibold leading-none tracking-tight text-paper transition-colors group-hover:text-accent-blue">
                        {link.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.35 }}
                className="mt-8"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40">Capabilities</p>
                <div className="mt-4 grid grid-cols-1 gap-2 min-[380px]:grid-cols-2">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      onClick={onClose}
                      className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-[13px] text-white/75 transition-colors hover:border-accent-indigo/40 hover:text-paper"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.35 }}
              className="shrink-0 border-t border-white/10 px-6 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]"
            >
              <a
                href={`mailto:${brand.email}`}
                className="text-sm text-white/55 transition-colors hover:text-paper"
              >
                {brand.email}
              </a>
              <Link
                href="/contact"
                onClick={onClose}
                className="mt-3 flex w-full items-center justify-between rounded-full px-5 py-3.5 text-sm font-semibold text-black"
                style={{ backgroundImage: "var(--gradient-brand)" }}
              >
                Start a Project
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
