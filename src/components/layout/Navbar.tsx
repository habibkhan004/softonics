"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import MobileMenu from "@/components/layout/MobileMenu";
import { services } from "@/lib/data/services";
import { primaryNavLinks } from "@/lib/data/nav";

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
      <header
        className={`glass-card sticky top-0 z-50 w-full border-b transition-shadow duration-300 ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <span
              className="h-7 w-7 rounded-lg"
              style={{ backgroundImage: "var(--gradient-brand)" }}
              aria-hidden="true"
            />
            Soft<span className="gradient-text">onics</span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
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

          <div className="hidden lg:block">
            <Button href="/contact" size="md">
              Get a Quote
            </Button>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full text-foreground lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
