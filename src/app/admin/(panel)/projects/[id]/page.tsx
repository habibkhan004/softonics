import { notFound } from "next/navigation";
import ProjectForm from "@/components/admin/ProjectForm";
import { getProjectById } from "@/lib/queries";

export const dynamic = "force-dynamic";

export default async function EditProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = await getProjectById(id);
  if (!project) notFound();

  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent-blue">Edit</p>
      <h1 className="mt-2 font-display text-4xl font-bold">{project.title}</h1>
      <div className="mt-8">
        <ProjectForm project={project} />
      </div>
    </div>
  );
}
