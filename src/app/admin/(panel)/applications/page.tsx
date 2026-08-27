import StatusSelect from "@/components/admin/StatusSelect";
import { setApplicationStatusAction } from "@/lib/actions";
import { listApplications } from "@/lib/queries";
import { formatDate } from "@/lib/utils";

export const dynamic = "force-dynamic";

const statuses = ["new", "reviewing", "interview", "hired", "rejected"] as const;

export default async function ApplicationsPage() {
  const applications = await listApplications();

  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent-blue">Inbox</p>
      <h1 className="mt-2 font-display text-4xl font-bold">Applications</h1>
      <div className="mt-8 flex flex-col gap-4">
        {applications.length === 0 && <p className="text-sm text-foreground-muted">No applications yet.</p>}
        {applications.map((app) => (
          <article key={app.id} className="rounded-3xl border border-border bg-background-elevated p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="font-medium">{app.name}</h2>
                <p className="text-sm text-foreground-muted">{app.jobTitle}</p>
                <p className="mt-1 text-xs text-foreground-muted">
                  {app.email}
                  {app.phone ? ` · ${app.phone}` : ""}
                  {app.linkedin ? ` · ${app.linkedin}` : ""}
                </p>
              </div>
              <span className="text-xs text-foreground-muted">{formatDate(app.createdAt)}</span>
            </div>
            {app.coverLetter && <p className="mt-4 text-sm text-foreground-muted">{app.coverLetter}</p>}
            {app.resumeUrl && (
              <a href={app.resumeUrl} target="_blank" rel="noreferrer" className="mt-3 inline-block text-xs text-accent-blue">
                View resume
              </a>
            )}
            <StatusSelect action={setApplicationStatusAction} id={app.id} value={app.status} options={statuses} />
          </article>
        ))}
      </div>
    </div>
  );
}
