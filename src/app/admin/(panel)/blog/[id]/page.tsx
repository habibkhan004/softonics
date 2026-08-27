import { notFound } from "next/navigation";
import BlogForm from "@/components/admin/BlogForm";
import { getPostById } from "@/lib/queries";

export const dynamic = "force-dynamic";

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await getPostById(id);
  if (!post) notFound();

  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent-blue">Edit</p>
      <h1 className="mt-2 font-display text-4xl font-bold">{post.title}</h1>
      <div className="mt-8">
        <BlogForm post={post} />
      </div>
    </div>
  );
}
