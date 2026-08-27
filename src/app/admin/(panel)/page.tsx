import Link from "next/link";
import { Briefcase, FolderKanban, Inbox, Users } from "lucide-react";
import { dbMode, storageMode } from "@/lib/env";
import { getDashboardStats, listApplications, listInquiries } from "@/lib/queries";
import { formatDate } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function AdminHomePage() {
  const [stats, applications, inquiries] = await Promise.all([
    getDashboardStats(),
    listApplications(),
    listInquiries(),
  ]);

  const cards = [
    { label: "Case studies", value: stats.projects, hint: `${stats.publishedProjects} live`, href: "/admin/projects", icon: FolderKanban },
    { label: "Open roles", value: stats.jobs, hint: "Published careers", href: "/admin/careers", icon: Briefcase },
    { label: "Applications", value: stats.applications, hint: `${stats.newApplications} new`, href: "/admin/applications", icon: Users },
    { label: "Inquiries", value: stats.inquiries, hint: `${stats.newInquiries} unread`, href: "/admin/inquiries", icon: Inbox },
  ];

  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent-blue">Command</p>
      <h1 className="mt-2 font-display text-4xl font-bold">Studio desk</h1>
      <p className="mt-2 text-sm text-foreground-muted">
        Database: <span className="text-foreground">{dbMode()}</span>
        {" · "}
        Media: <span className="text-foreground">{storageMode()}</span>
      </p>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className="rounded-3xl border border-border bg-background-elevated p-5 transition-colors hover:bg-surface"
          >
            <card.icon className="h-5 w-5 text-accent-blue" />
            <div className="mt-6 font-display text-4xl font-bold">{card.value}</div>
            <div className="mt-1 text-sm font-medium">{card.label}</div>
            <div className="mt-1 text-xs text-foreground-muted">{card.hint}</div>
          </Link>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <section className="rounded-3xl border border-border bg-background-elevated p-6">
          <h2 className="font-display text-xl font-semibold">Latest inquiries</h2>
          <ul className="mt-4 flex flex-col gap-3">
            {inquiries.slice(0, 5).map((item) => (
              <li key={item.id} className="border-b border-border pb-3 last:border-0">
                <div className="flex justify-between gap-3 text-sm">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-xs text-foreground-muted">{formatDate(item.createdAt)}</span>
                </div>
                <p className="mt-1 line-clamp-1 text-xs text-foreground-muted">{item.message}</p>
              </li>
            ))}
            {inquiries.length === 0 && <p className="text-sm text-foreground-muted">No inquiries yet.</p>}
          </ul>
        </section>
        <section className="rounded-3xl border border-border bg-background-elevated p-6">
          <h2 className="font-display text-xl font-semibold">Latest applications</h2>
          <ul className="mt-4 flex flex-col gap-3">
            {applications.slice(0, 5).map((item) => (
              <li key={item.id} className="border-b border-border pb-3 last:border-0">
                <div className="flex justify-between gap-3 text-sm">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-xs text-foreground-muted">{item.status}</span>
                </div>
                <p className="mt-1 text-xs text-foreground-muted">{item.jobTitle}</p>
              </li>
            ))}
            {applications.length === 0 && <p className="text-sm text-foreground-muted">No applications yet.</p>}
          </ul>
        </section>
      </div>
    </div>
  );
}
