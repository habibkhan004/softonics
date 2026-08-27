import ProjectForm from "@/components/admin/ProjectForm";

export default function NewProjectPage() {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent-blue">New</p>
      <h1 className="mt-2 font-display text-4xl font-bold">Upload a case study</h1>
      <p className="mt-2 max-w-xl text-sm text-foreground-muted">
        Cover and gallery images go to Cloudinary when configured, otherwise they are stored locally.
      </p>
      <div className="mt-8">
        <ProjectForm />
      </div>
    </div>
  );
}
