"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import Logo from "@/components/layout/Logo";
import MobileMenu from "@/components/layout/MobileMenu";
import { services } from "@/lib/data/services";
import { primaryNavLinks } from "@/lib/data/nav";

function MenuToggle({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      className={`flex shrink-0 items-center gap-2 rounded-xl px-2.5 py-2 transition-colors ${
        open
          ? "border border-white/15 bg-white/10"
          : "border border-accent-indigo/35 bg-gradient-to-br from-accent-blue/15 to-accent-violet/10"
      }`}
    >
      <span
        className={`font-display text-[10px] font-bold tracking-[0.22em] ${
          open ? "text-paper" : "text-accent-violet"
        }`}
      >
        {open ? "CLOSE" : "MENU"}
      </span>
      <span className="relative flex h-4 w-5 flex-col items-end justify-center">
        <span
          className={`absolute h-[1.5px] origin-center rounded-full transition-all duration-300 ${
            open ? "w-5 translate-y-0 rotate-45 bg-paper" : "w-5 -translate-y-[5px] bg-foreground"
          }`}
        />
        <span
          className={`absolute h-[1.5px] rounded-full bg-accent-blue transition-all duration-300 ${
            open ? "w-0 opacity-0" : "w-3.5 opacity-100"
          }`}
        />
        <span
          className={`absolute h-[1.5px] origin-center rounded-full transition-all duration-300 ${
            open ? "w-5 translate-y-0 -rotate-45 bg-paper" : "w-4 translate-y-[5px] bg-foreground"
          }`}
        />
      </span>
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
    setServicesOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Mobile-only floating bar */}
      <header className="sticky top-0 z-50 lg:hidden">
        <div className="px-3 pt-[max(0.7rem,env(safe-area-inset-top))] pb-2">
          <div
            className={`flex h-14 items-center justify-between gap-3 rounded-2xl border px-3 shadow-[0_12px_40px_-18px_rgba(15,14,11,0.35)] backdrop-blur-xl transition-colors duration-300 ${
              mobileOpen
                ? "border-white/10 bg-[#0f0e0b]"
                : scrolled
                  ? "border-border bg-background/92"
                  : "border-border/80 bg-background/80"
            }`}
          >
            <Logo inverted={mobileOpen} />
            <MenuToggle open={mobileOpen} onClick={() => setMobileOpen((v) => !v)} />
          </div>
        </div>
      </header>

      {/* Desktop header */}
      <header
        className={`glass-card sticky top-0 z-50 hidden w-full border-b transition-shadow duration-300 lg:block ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Logo />

          <div className="flex items-center gap-1">
            <Link
              href="/"
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground-muted transition-colors hover:text-foreground"
            >
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-foreground-muted transition-colors hover:text-foreground"
                onClick={() => setServicesOpen((v) => !v)}
                aria-expanded={servicesOpen}
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="glass-card absolute left-1/2 top-full mt-2 grid w-[560px] -translate-x-1/2 grid-cols-2 gap-1 rounded-2xl p-3 shadow-2xl"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-surface-hover"
                      >
                        <service.icon className="mt-0.5 h-5 w-5 shrink-0 text-accent-blue" />
                        <span>
                          <span className="block text-sm font-medium text-foreground">{service.title}</span>
                          <span className="mt-0.5 block text-xs text-foreground-muted">
                            {service.shortDescription}
                          </span>
                        </span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {primaryNavLinks
              .filter((link) => link.href !== "/")
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-foreground-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
          </div>

          <Button href="/contact" size="md">
            Get a Quote
          </Button>
        </nav>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
