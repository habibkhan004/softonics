import BlogForm from "@/components/admin/BlogForm";

export default function NewPostPage() {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent-blue">New</p>
      <h1 className="mt-2 font-display text-4xl font-bold">Write an article</h1>
      <div className="mt-8">
        <BlogForm />
      </div>
    </div>
  );
}
