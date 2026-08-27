"use client";

import ImageUploader from "@/components/admin/ImageUploader";
import { savePostAction } from "@/lib/actions";
import type { BlogPost } from "@/lib/types";
import { slugify } from "@/lib/utils";
import { useState } from "react";

export default function BlogForm({ post }: { post?: BlogPost }) {
  const [slug, setSlug] = useState(post?.slug ?? "");

  return (
    <form action={savePostAction} className="flex flex-col gap-6">
      {post?.id && <input type="hidden" name="id" value={post.id} />}
      <div>
        <label className="admin-label">Title</label>
        <input
          name="title"
          required
          defaultValue={post?.title}
          onChange={(e) => {
            if (!post) setSlug(slugify(e.target.value));
          }}
          className="admin-input"
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="admin-label">Slug</label>
          <input name="slug" required value={slug} onChange={(e) => setSlug(e.target.value)} className="admin-input" />
        </div>
        <div>
          <label className="admin-label">Category</label>
          <input name="category" defaultValue={post?.category} className="admin-input" />
        </div>
        <div>
          <label className="admin-label">Date</label>
          <input type="date" name="date" defaultValue={post?.date?.slice(0, 10)} className="admin-input" />
        </div>
        <div>
          <label className="admin-label">Read time</label>
          <input name="readTime" defaultValue={post?.readTime ?? "5 min read"} className="admin-input" />
        </div>
        <div>
          <label className="admin-label">Author</label>
          <input name="authorName" defaultValue={post?.author.name} className="admin-input" />
        </div>
        <div>
          <label className="admin-label">Author role</label>
          <input name="authorRole" defaultValue={post?.author.role} className="admin-input" />
        </div>
      </div>
      <ImageUploader name="coverImage" label="Cover image" defaultUrl={post?.coverImage} />
      <div>
        <label className="admin-label">Excerpt</label>
        <textarea name="excerpt" rows={3} defaultValue={post?.excerpt} className="admin-input" />
      </div>
      <div>
        <label className="admin-label">Body (paragraphs separated by a blank line)</label>
        <textarea name="content" rows={12} defaultValue={post?.content.join("\n\n")} className="admin-input" />
      </div>
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" name="published" defaultChecked={post?.published ?? true} /> Published
      </label>
      <button
        type="submit"
        className="self-start rounded-full px-6 py-3 text-sm font-semibold text-black"
        style={{ backgroundImage: "var(--gradient-brand)" }}
      >
        Save article
      </button>
    </form>
  );
}
