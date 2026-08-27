import Link from "next/link";
import { deleteJobAction } from "@/lib/actions";
import { listAllJobs } from "@/lib/queries";

export const dynamic = "force-dynamic";

export default async function AdminCareersPage() {
  const jobs = await listAllJobs();

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent-blue">Hiring</p>
          <h1 className="mt-2 font-display text-4xl font-bold">Careers</h1>
        </div>
        <Link
          href="/admin/careers/new"
          className="rounded-full px-5 py-2.5 text-sm font-semibold text-black"
          style={{ backgroundImage: "var(--gradient-brand)" }}
        >
          New role
        </Link>
      </div>
      <div className="mt-8 flex flex-col gap-3">
        {jobs.map((job) => (
          <div key={job.id} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-background-elevated p-4">
            <div>
              <div className="font-medium">{job.title}</div>
              <div className="text-xs text-foreground-muted">
                {job.department} · {job.location} · {job.type} · {job.published ? "Live" : "Draft"}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link href={`/admin/careers/${job.id}`} className="text-xs text-accent-blue">
                Edit
              </Link>
              <form action={deleteJobAction}>
                <input type="hidden" name="id" value={job.id} />
                <button type="submit" className="text-xs text-foreground-muted hover:text-accent-indigo">
                  Delete
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
