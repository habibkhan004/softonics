"use client";

import ImageUploader from "@/components/admin/ImageUploader";
import GalleryField from "@/components/admin/GalleryField";
import ListField from "@/components/admin/ListField";
import MetricsField from "@/components/admin/MetricsField";
import { saveProjectAction } from "@/lib/actions";
import { PROJECT_CATEGORIES, type Project } from "@/lib/types";
import { slugify } from "@/lib/utils";
import { useState } from "react";

export default function ProjectForm({ project }: { project?: Project }) {
  const [slug, setSlug] = useState(project?.slug ?? "");

  return (
    <form action={saveProjectAction} className="flex flex-col gap-8">
      {project?.id && <input type="hidden" name="id" value={project.id} />}

      <section className="grid gap-5 rounded-3xl border border-border bg-background-elevated p-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="admin-label">Title</label>
          <input
            name="title"
            required
            defaultValue={project?.title}
            onChange={(e) => {
              if (!project) setSlug(slugify(e.target.value));
            }}
            className="admin-input"
          />
        </div>
        <div>
          <label className="admin-label">Slug</label>
          <input name="slug" required value={slug} onChange={(e) => setSlug(e.target.value)} className="admin-input" />
        </div>
        <div>
          <label className="admin-label">Client</label>
          <input name="client" required defaultValue={project?.client} className="admin-input" />
        </div>
        <div>
          <label className="admin-label">Category</label>
          <select name="category" defaultValue={project?.category ?? "Web Development"} className="admin-input">
            {PROJECT_CATEGORIES.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="admin-label">Industry</label>
          <input name="industry" defaultValue={project?.industry} className="admin-input" />
        </div>
        <div>
          <label className="admin-label">Year</label>
          <input name="year" defaultValue={project?.year} className="admin-input" />
        </div>
        <div>
          <label className="admin-label">Duration</label>
          <input name="duration" defaultValue={project?.duration} placeholder="16 weeks" className="admin-input" />
        </div>
        <div>
          <label className="admin-label">Team size</label>
          <input name="teamSize" defaultValue={project?.teamSize} placeholder="6 people" className="admin-input" />
        </div>
        <div>
          <label className="admin-label">Live URL</label>
          <input name="liveUrl" defaultValue={project?.liveUrl} className="admin-input" />
        </div>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" name="featured" defaultChecked={project?.featured} /> Featured on home
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" name="published" defaultChecked={project?.published ?? true} /> Published
        </label>
      </section>

      <ImageUploader name="coverImage" label="Cover image" defaultUrl={project?.coverImage} />
      <GalleryField defaultItems={project?.gallery} />

      <div>
        <label className="admin-label">Summary</label>
        <textarea name="summary" rows={3} defaultValue={project?.summary} className="admin-input" />
      </div>
      <div>
        <label className="admin-label">Overview</label>
        <textarea name="overview" rows={5} defaultValue={project?.overview} className="admin-input" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="admin-label">Challenge</label>
          <textarea name="challenge" rows={6} defaultValue={project?.challenge} className="admin-input" />
        </div>
        <div>
          <label className="admin-label">Solution</label>
          <textarea name="solution" rows={6} defaultValue={project?.solution} className="admin-input" />
        </div>
      </div>

      <ListField name="approach" label="Approach" defaultItems={project?.approach} placeholder="Add a step" />
      <ListField name="results" label="Results" defaultItems={project?.results} placeholder="Add a result" />
      <MetricsField defaultItems={project?.metrics} />
      <ListField name="tags" label="Tags" defaultItems={project?.tags} />
      <ListField name="techStack" label="Tech stack" defaultItems={project?.techStack} />

      <section className="grid gap-5 rounded-3xl border border-border bg-background-elevated p-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="admin-label">Client quote</label>
          <textarea name="testimonialQuote" rows={3} defaultValue={project?.testimonial?.quote} className="admin-input" />
        </div>
        <div>
          <label className="admin-label">Quote name</label>
          <input name="testimonialName" defaultValue={project?.testimonial?.name} className="admin-input" />
        </div>
        <div>
          <label className="admin-label">Quote role</label>
          <input name="testimonialRole" defaultValue={project?.testimonial?.role} className="admin-input" />
        </div>
      </section>

      <button
        type="submit"
        className="self-start rounded-full px-6 py-3 text-sm font-semibold text-black"
        style={{ backgroundImage: "var(--gradient-brand)" }}
      >
        Save case study
      </button>
    </form>
  );
}
