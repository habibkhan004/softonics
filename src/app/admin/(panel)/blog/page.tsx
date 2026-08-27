import Link from "next/link";
import { deletePostAction } from "@/lib/actions";
import { listAllPosts } from "@/lib/queries";

export const dynamic = "force-dynamic";

export default async function AdminBlogPage() {
  const posts = await listAllPosts();

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent-blue">Journal</p>
          <h1 className="mt-2 font-display text-4xl font-bold">Articles</h1>
        </div>
        <Link
          href="/admin/blog/new"
          className="rounded-full px-5 py-2.5 text-sm font-semibold text-black"
          style={{ backgroundImage: "var(--gradient-brand)" }}
        >
          New article
        </Link>
      </div>
      <div className="mt-8 flex flex-col gap-3">
        {posts.map((post) => (
          <div key={post.id} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-background-elevated p-4">
            <div>
              <div className="font-medium">{post.title}</div>
              <div className="text-xs text-foreground-muted">
                {post.category} · {post.date} · {post.published ? "Live" : "Draft"}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link href={`/admin/blog/${post.id}`} className="text-xs text-accent-blue">
                Edit
              </Link>
              <form action={deletePostAction}>
                <input type="hidden" name="id" value={post.id} />
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
