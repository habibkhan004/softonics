import { notFound } from "next/navigation";
import JobForm from "@/components/admin/JobForm";
import { getJobById } from "@/lib/queries";

export const dynamic = "force-dynamic";

export default async function EditJobPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const job = await getJobById(id);
  if (!job) notFound();

  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent-blue">Edit</p>
      <h1 className="mt-2 font-display text-4xl font-bold">{job.title}</h1>
      <div className="mt-8">
        <JobForm job={job} />
      </div>
    </div>
  );
}
