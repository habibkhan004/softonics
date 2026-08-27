import JobForm from "@/components/admin/JobForm";

export default function NewJobPage() {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent-blue">New</p>
      <h1 className="mt-2 font-display text-4xl font-bold">Post a role</h1>
      <div className="mt-8">
        <JobForm />
      </div>
    </div>
  );
}
