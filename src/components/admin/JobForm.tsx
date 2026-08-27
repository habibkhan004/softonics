"use client";

import ListField from "@/components/admin/ListField";
import { saveJobAction } from "@/lib/actions";
import type { JobOpening } from "@/lib/types";
import { slugify } from "@/lib/utils";
import { useState } from "react";

export default function JobForm({ job }: { job?: JobOpening }) {
  const [slug, setSlug] = useState(job?.slug ?? "");

  return (
    <form action={saveJobAction} className="flex flex-col gap-6">
      {job?.id && <input type="hidden" name="id" value={job.id} />}
      <div>
        <label className="admin-label">Title</label>
        <input
          name="title"
          required
          defaultValue={job?.title}
          onChange={(e) => {
            if (!job) setSlug(slugify(e.target.value));
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
          <label className="admin-label">Department</label>
          <input name="department" required defaultValue={job?.department} className="admin-input" />
        </div>
        <div>
          <label className="admin-label">Location</label>
          <input name="location" required defaultValue={job?.location} className="admin-input" />
        </div>
        <div>
          <label className="admin-label">Type</label>
          <select name="type" defaultValue={job?.type ?? "Full-time"} className="admin-input">
            <option>Full-time</option>
            <option>Contract</option>
            <option>Part-time</option>
          </select>
        </div>
      </div>
      <div>
        <label className="admin-label">Description</label>
        <textarea name="description" rows={6} defaultValue={job?.description} className="admin-input" />
      </div>
      <ListField name="requirements" label="Requirements" defaultItems={job?.requirements} />
      <ListField name="niceToHave" label="Nice to have" defaultItems={job?.niceToHave} />
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" name="published" defaultChecked={job?.published ?? true} /> Published
      </label>
      <button
        type="submit"
        className="self-start rounded-full px-6 py-3 text-sm font-semibold text-black"
        style={{ backgroundImage: "var(--gradient-brand)" }}
      >
        Save role
      </button>
    </form>
  );
}
