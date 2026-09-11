"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "motion/react";
import { ChevronDown, Search } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";
import Logo from "@/components/layout/Logo";
import MobileMenu from "@/components/layout/MobileMenu";
import ServiceMegaMenu, { type MegaMenuItem } from "@/components/layout/ServiceMegaMenu";
import { services } from "@/lib/data/services";
import { companyNavLinks } from "@/lib/data/nav";

function MenuToggle({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      className="flex shrink-0 items-center gap-2 rounded-md border border-accent-indigo/40 px-2.5 py-2 transition-colors"
    >
      <span className="font-mono text-[10px] font-bold tracking-[0.22em] text-accent-indigo">
        {open ? "CLOSE" : "MENU"}
      </span>
      <span className="relative flex h-4 w-5 flex-col items-end justify-center">
        <span
          className={`absolute h-[1.5px] origin-center rounded-full bg-accent-indigo transition-all duration-300 ${
            open ? "w-5 translate-y-0 rotate-45" : "w-5 -translate-y-[5px]"
          }`}
        />
        <span
          className={`absolute h-[1.5px] rounded-full bg-accent-indigo transition-all duration-300 ${
            open ? "w-0 opacity-0" : "w-3.5 opacity-100"
          }`}
        />
        <span
          className={`absolute h-[1.5px] origin-center rounded-full bg-accent-indigo transition-all duration-300 ${
            open ? "w-5 translate-y-0 -rotate-45" : "w-4 translate-y-[5px]"
          }`}
        />
      </span>
    </button>
  );
}

/** Top-level nav item that opens a mega-menu on hover. */
function NavDropdown({
  label,
  open,
  onOpen,
  onClose,
  children,
}: {
  label: string;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full items-center" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <button
        className={`flex items-center gap-1 text-[15px] transition-colors duration-200 ${
          open ? "text-accent-indigo" : "text-white hover:text-accent-indigo"
        }`}
        aria-expanded={open}
      >
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>{open && children}</AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<"services" | "company" | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
    setOpenMenu(null);
  }

  // Six services keeps the reference's 3 × 2 grid; the rest live on the services page.
  const serviceItems: MegaMenuItem[] = services.slice(0, 6).map((service) => ({
    title: service.title,
    description: service.shortDescription,
    href: `/services/${service.slug}`,
  }));

  const companyItems: MegaMenuItem[] = companyNavLinks.map((link) => ({
    title: link.label,
    description: link.description,
    href: link.href,
  }));

  return (
    <>
      {/* Mobile bar */}
      <header className="sticky top-0 z-50 border-b border-border bg-background lg:hidden">
        <div className="flex h-16 items-center justify-between px-5 pt-[env(safe-area-inset-top)]">
          <Logo />
          <MenuToggle open={mobileOpen} onClick={() => setMobileOpen((v) => !v)} />
        </div>
      </header>

      {/* Desktop header */}
      <header className="sticky top-0 z-50 hidden w-full border-b border-border/60 bg-background lg:block">
        <nav className="relative mx-auto flex h-20 w-full max-w-[1600px] items-center justify-between px-7">
          <Logo />

          <div className="flex h-full items-center gap-9">
            <NavDropdown
              label="Services"
              open={openMenu === "services"}
              onOpen={() => setOpenMenu("services")}
              onClose={() => setOpenMenu(null)}
            >
              <ServiceMegaMenu
                items={serviceItems}
                onNavigate={() => setOpenMenu(null)}
                footerLink={{ label: "View all services", href: "/services" }}
              />
            </NavDropdown>

            <Link
              href="/projects"
              className="text-[15px] text-white transition-colors duration-200 hover:text-accent-indigo"
            >
              Case Studies
            </Link>

            <NavDropdown
              label="Company"
              open={openMenu === "company"}
              onOpen={() => setOpenMenu("company")}
              onClose={() => setOpenMenu(null)}
            >
              <ServiceMegaMenu items={companyItems} onNavigate={() => setOpenMenu(null)} showArtwork={false} />
            </NavDropdown>

            <button
              type="button"
              aria-label="Search"
              className="text-white transition-colors duration-200 hover:text-accent-indigo"
            >
              <Search className="h-4 w-4" />
            </button>

            <CTAButton href="/contact" variant="outline" className="px-5 py-2.5">
              Get a Quote
            </CTAButton>
          </div>
        </nav>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
