import Link from "next/link";
import { deleteProjectAction } from "@/lib/actions";
import { listAllProjects } from "@/lib/queries";

export const dynamic = "force-dynamic";

export default async function AdminProjectsPage() {
  const projects = await listAllProjects();

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent-blue">Portfolio</p>
          <h1 className="mt-2 font-display text-4xl font-bold">Case studies</h1>
        </div>
        <Link
          href="/admin/projects/new"
          className="rounded-full px-5 py-2.5 text-sm font-semibold text-black"
          style={{ backgroundImage: "var(--gradient-brand)" }}
        >
          New project
        </Link>
      </div>

      <div className="mt-8 overflow-hidden rounded-3xl border border-border">
        <table className="w-full text-left text-sm">
          <thead className="bg-surface text-xs uppercase tracking-widest text-foreground-muted">
            <tr>
              <th className="px-4 py-3 font-medium">Title</th>
              <th className="px-4 py-3 font-medium">Client</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium"></th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="border-t border-border">
                <td className="px-4 py-3 font-medium">{project.title}</td>
                <td className="px-4 py-3 text-foreground-muted">{project.client}</td>
                <td className="px-4 py-3">
                  <span className="rounded-full border border-border px-2 py-0.5 text-xs">
                    {project.published ? "Live" : "Draft"}
                    {project.featured ? " · Featured" : ""}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <Link href={`/admin/projects/${project.id}`} className="text-xs text-accent-blue">
                    Edit
                  </Link>
                  <form action={deleteProjectAction} className="ml-3 inline">
                    <input type="hidden" name="id" value={project.id} />
                    <button type="submit" className="text-xs text-foreground-muted hover:text-accent-indigo">
                      Delete
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
