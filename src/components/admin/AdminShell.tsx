"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Briefcase,
  FileText,
  FolderKanban,
  Inbox,
  LayoutDashboard,
  LogOut,
  MessageSquareQuote,
  Users,
} from "lucide-react";
import Logo from "@/components/layout/Logo";
import { logoutAction } from "@/lib/actions";
import type { ReactNode } from "react";

const links = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard },
  { href: "/admin/projects", label: "Projects", icon: FolderKanban },
  { href: "/admin/careers", label: "Careers", icon: Briefcase },
  { href: "/admin/applications", label: "Applications", icon: Users },
  { href: "/admin/inquiries", label: "Inquiries", icon: Inbox },
  { href: "/admin/blog", label: "Journal", icon: FileText },
  { href: "/admin/testimonials", label: "Voices", icon: MessageSquareQuote },
];

export default function AdminShell({ email, children }: { email: string; children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen">
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-border bg-background-elevated lg:flex">
        <div className="flex items-center gap-3 border-b border-border px-5 py-5">
          <Logo href="/admin" variant="lockup" />
        </div>
        <p className="px-5 pt-6 font-mono text-[10px] uppercase tracking-[0.28em] text-foreground-muted">Studio desk</p>
        <nav className="mt-3 flex flex-1 flex-col gap-0.5 px-3">
          {links.map((link, i) => {
            const active = pathname === link.href || (link.href !== "/admin" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                  active ? "bg-surface-hover text-foreground" : "text-foreground-muted hover:bg-surface hover:text-foreground"
                }`}
              >
                <span className="font-mono text-[10px] text-accent-blue">{String(i + 1).padStart(2, "0")}</span>
                <link.icon className="h-4 w-4" />
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-border p-4">
          <p className="truncate px-1 text-xs text-foreground-muted">{email}</p>
          <form action={logoutAction}>
            <button
              type="submit"
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-border px-3 py-2 text-xs font-medium text-foreground-muted hover:text-foreground"
            >
              <LogOut className="h-3.5 w-3.5" /> Sign out
            </button>
          </form>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-border px-4 py-3 lg:hidden">
          <Logo href="/admin" variant="lockup" />
          <form action={logoutAction}>
            <button type="submit" className="text-xs text-foreground-muted">
              Sign out
            </button>
          </form>
        </header>
        <nav className="flex gap-1 overflow-x-auto border-b border-border px-3 py-2 lg:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="shrink-0 rounded-full border border-border px-3 py-1.5 text-xs text-foreground-muted"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-8">{children}</div>
      </div>
    </div>
  );
}
