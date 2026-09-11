"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { companyNavLinks } from "@/lib/data/nav";
import { services } from "@/lib/data/services";
import { brand } from "@/lib/brand";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

interface NestedItem {
  label: string;
  href: string;
  description?: string;
}

/** Mirrors the desktop nav: Services and Company open nested lists, Case Studies is a direct link. */
const sections: {
  label: string;
  href?: string;
  items?: NestedItem[];
  footerLink?: { label: string; href: string };
}[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    items: services.slice(0, 6).map((service) => ({
      label: service.title,
      href: `/services/${service.slug}`,
      description: service.shortDescription,
    })),
    footerLink: { label: "View all services", href: "/services" },
  },
  { label: "Case Studies", href: "/projects" },
  {
    label: "Company",
    items: companyNavLinks.map((link) => ({
      label: link.label,
      href: link.href,
      description: link.description,
    })),
  },
];

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  // Collapse any open section once the menu closes, without an effect round-trip.
  const [prevOpen, setPrevOpen] = useState(open);
  if (prevOpen !== open) {
    setPrevOpen(open);
    if (!open) setExpanded(null);
  }

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
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-40 lg:hidden"
        >
          <div className="absolute inset-0 bg-background" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div
            className="pointer-events-none absolute -left-16 top-24 h-64 w-64 rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(circle, #65df80, transparent 70%)" }}
          />

          <div className="relative flex h-full min-h-0 flex-col pt-[calc(4.3rem+env(safe-area-inset-top))]">
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-[1.125rem] pb-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">Navigate</p>

              <nav className="mt-5 flex flex-col">
                {sections.map((section, i) => {
                  const isOpen = expanded === section.label;
                  const index = String(i + 1).padStart(2, "0");

                  if (section.href) {
                    return (
                      <motion.div
                        key={section.label}
                        initial={{ opacity: 0, x: 14 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 + i * 0.05, duration: 0.3 }}
                      >
                        <Link
                          href={section.href}
                          onClick={onClose}
                          className="group flex items-center gap-4 border-b border-white/[0.07] py-4"
                        >
                          <span className="font-mono text-[11px] tabular-nums text-accent-indigo/70">{index}</span>
                          <span className="text-[1.05rem] font-medium tracking-tight text-paper/90 transition-colors group-hover:text-accent-indigo">
                            {section.label}
                          </span>
                          <ArrowUpRight className="ml-auto h-4 w-4 text-white/25 transition-colors group-hover:text-accent-indigo" />
                        </Link>
                      </motion.div>
                    );
                  }

                  return (
                    <motion.div
                      key={section.label}
                      initial={{ opacity: 0, x: 14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.05, duration: 0.3 }}
                      className="border-b border-white/[0.07]"
                    >
                      <button
                        type="button"
                        onClick={() => setExpanded(isOpen ? null : section.label)}
                        aria-expanded={isOpen}
                        className="group flex w-full items-center gap-4 py-4 text-left"
                      >
                        <span className="font-mono text-[11px] tabular-nums text-accent-indigo/70">{index}</span>
                        <span
                          className={`text-[1.05rem] font-medium tracking-tight transition-colors ${
                            isOpen ? "text-accent-indigo" : "text-paper/90"
                          }`}
                        >
                          {section.label}
                        </span>
                        <ChevronDown
                          className={`ml-auto h-4 w-4 transition-all duration-300 ${
                            isOpen ? "rotate-180 text-accent-indigo" : "text-white/25"
                          }`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28, ease: "easeOut" }}
                            className="overflow-hidden"
                          >
                            <ul className="flex flex-col gap-1 pb-4 pl-[2.1rem]">
                              {section.items?.map((item) => (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    onClick={onClose}
                                    className="block rounded-sm border border-white/[0.07] bg-white/[0.03] px-3 py-2.5 transition-colors hover:border-accent-indigo/40 hover:bg-white/[0.06]"
                                  >
                                    <span className="block text-[14px] font-medium text-paper/90">{item.label}</span>
                                    {item.description && (
                                      <span className="mt-0.5 block text-[12px] leading-snug text-foreground-muted">
                                        {item.description}
                                      </span>
                                    )}
                                  </Link>
                                </li>
                              ))}

                              {section.footerLink && (
                                <li className="pt-1">
                                  <Link
                                    href={section.footerLink.href}
                                    onClick={onClose}
                                    className="font-mono text-[12px] text-accent-indigo transition-opacity hover:opacity-75"
                                  >
                                    {section.footerLink.label} →
                                  </Link>
                                </li>
                              )}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </nav>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.3 }}
              className="shrink-0 border-t border-white/10 px-[1.125rem] py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]"
            >
              <a href={`mailto:${brand.email}`} className="text-sm text-white/55 transition-colors hover:text-paper">
                {brand.email}
              </a>
              <Link
                href="/contact"
                onClick={onClose}
                className="mt-3 flex w-full items-center justify-between rounded-md px-5 py-3.5 text-sm font-semibold text-black"
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
