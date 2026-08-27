"use client";

import Link from "next/link";
import { footerColumns, socialLinks } from "@/lib/data/nav";
import Logo from "@/components/layout/Logo";
import { submitNewsletterAction } from "@/lib/actions";
import { brand } from "@/lib/brand";

const socialInitials: Record<string, string> = {
  GitHub: "GH",
  LinkedIn: "in",
  X: "X",
};

export default function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto w-full min-w-0 max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo variant="lockup" />
            <p className="mt-4 max-w-xs text-sm text-foreground-muted">
              {brand.legalName} designs and builds custom software, web & mobile apps, AI/ML systems, and SEO-driven
              growth for ambitious teams.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-xs font-semibold text-foreground-muted transition-colors hover:border-accent-indigo/50 hover:text-foreground"
                >
                  {socialInitials[social.label]}
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-foreground">{column.title}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold text-foreground">Stay in the loop</h3>
            <p className="mt-4 text-sm text-foreground-muted">
              Occasional notes on software, AI, and SEO. No spam.
            </p>
            <form className="mt-4 flex flex-col gap-2" action={submitNewsletterAction}>
              <input
                type="email"
                name="email"
                required
                placeholder="you@company.com"
                className="rounded-full border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-foreground-muted/70 outline-none focus:border-accent-indigo/60"
              />
              <button
                type="submit"
                className="rounded-full px-4 py-2.5 text-sm font-medium text-black transition-opacity hover:opacity-90"
                style={{ backgroundImage: "var(--gradient-brand)" }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-foreground-muted">
            &copy; {new Date().getFullYear()} {brand.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-foreground-muted hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-foreground-muted hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
