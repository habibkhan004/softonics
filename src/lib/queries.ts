import { randomUUID } from "crypto";
import { supabaseRead, supabaseWrite } from "@/lib/db/clients";
import { readCollection, removeItem, upsertItem } from "@/lib/db/local";
import {
  jobToRow,
  mapApplication,
  mapInquiry,
  mapJob,
  mapPost,
  mapProject,
  mapTestimonial,
  postToRow,
  projectToRow,
} from "@/lib/db/map";
import type {
  ApplicationStatus,
  BlogPost,
  DashboardStats,
  Inquiry,
  InquiryStatus,
  JobApplication,
  JobOpening,
  Project,
  Testimonial,
} from "@/lib/types";

export async function listPublishedProjects(): Promise<Project[]> {
  const db = await supabaseRead();
  if (db) {
    const { data, error } = await db.from("projects").select("*").eq("published", true).order("year", { ascending: false });
    if (error) throw error;
    return (data ?? []).map((row) => mapProject(row as Record<string, unknown>));
  }
  return (await readCollection("projects")).filter((p) => p.published);
}

export async function listFeaturedProjects(): Promise<Project[]> {
  const all = await listPublishedProjects();
  const featured = all.filter((p) => p.featured);
  return (featured.length ? featured : all).slice(0, 3);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const db = await supabaseRead();
  if (db) {
    const { data, error } = await db.from("projects").select("*").eq("slug", slug).eq("published", true).maybeSingle();
    if (error) throw error;
    return data ? mapProject(data as Record<string, unknown>) : null;
  }
  return (await readCollection("projects")).find((p) => p.slug === slug && p.published) ?? null;
}

export async function listAllProjects(): Promise<Project[]> {
  const db = await supabaseRead();
  if (db) {
    const { data, error } = await db.from("projects").select("*").order("created_at", { ascending: false });
    if (error) throw error;
    return (data ?? []).map((row) => mapProject(row as Record<string, unknown>));
  }
  return readCollection("projects");
}

export async function getProjectById(id: string): Promise<Project | null> {
  const db = await supabaseRead();
  if (db) {
    const { data, error } = await db.from("projects").select("*").eq("id", id).maybeSingle();
    if (error) throw error;
    return data ? mapProject(data as Record<string, unknown>) : null;
  }
  return (await readCollection("projects")).find((p) => p.id === id) ?? null;
}

export async function saveProject(input: Partial<Project> & { title: string; slug: string; client: string; category: Project["category"] }) {
  const db = await supabaseWrite();
  const id = input.id ?? randomUUID();
  const record: Project = {
    id,
    slug: input.slug,
    title: input.title,
    client: input.client,
    category: input.category,
    industry: input.industry ?? "",
    tags: input.tags ?? [],
    techStack: input.techStack ?? [],
    summary: input.summary ?? "",
    overview: input.overview ?? "",
    challenge: input.challenge ?? "",
    solution: input.solution ?? "",
    approach: input.approach ?? [],
    results: input.results ?? [],
    metrics: input.metrics ?? [],
    year: input.year ?? String(new Date().getFullYear()),
    duration: input.duration ?? "",
    teamSize: input.teamSize ?? "",
    liveUrl: input.liveUrl,
    coverImage: input.coverImage ?? "",
    gallery: input.gallery ?? [],
    featured: input.featured ?? false,
    published: input.published ?? true,
    testimonial: input.testimonial,
    updatedAt: new Date().toISOString(),
  };

  if (db) {
    const row = { id, ...projectToRow(record) };
    const { error } = await db.from("projects").upsert(row);
    if (error) throw error;
    return record;
  }
  await upsertItem("projects", record);
  return record;
}

export async function deleteProject(id: string) {
  const db = await supabaseWrite();
  if (db) {
    const { error } = await db.from("projects").delete().eq("id", id);
    if (error) throw error;
    return;
  }
  await removeItem("projects", id);
}

export async function listPublishedJobs(): Promise<JobOpening[]> {
  const db = await supabaseRead();
  if (db) {
    const { data, error } = await db.from("jobs").select("*").eq("published", true).order("created_at", { ascending: false });
    if (error) throw error;
    return (data ?? []).map((row) => mapJob(row as Record<string, unknown>));
  }
  return (await readCollection("jobs")).filter((j) => j.published);
}

export async function getJobBySlug(slug: string): Promise<JobOpening | null> {
  const db = await supabaseRead();
  if (db) {
    const { data, error } = await db.from("jobs").select("*").eq("slug", slug).eq("published", true).maybeSingle();
    if (error) throw error;
    return data ? mapJob(data as Record<string, unknown>) : null;
  }
  return (await readCollection("jobs")).find((j) => j.slug === slug && j.published) ?? null;
}

export async function listAllJobs(): Promise<JobOpening[]> {
  const db = await supabaseRead();
  if (db) {
    const { data, error } = await db.from("jobs").select("*").order("created_at", { ascending: false });
    if (error) throw error;
    return (data ?? []).map((row) => mapJob(row as Record<string, unknown>));
  }
  return readCollection("jobs");
}

export async function getJobById(id: string): Promise<JobOpening | null> {
  const db = await supabaseRead();
  if (db) {
    const { data, error } = await db.from("jobs").select("*").eq("id", id).maybeSingle();
    if (error) throw error;
    return data ? mapJob(data as Record<string, unknown>) : null;
  }
  return (await readCollection("jobs")).find((j) => j.id === id) ?? null;
}

export async function saveJob(input: Partial<JobOpening> & { title: string; slug: string; department: string; location: string; type: string }) {
  const db = await supabaseWrite();
  const id = input.id ?? randomUUID();
  const record: JobOpening = {
    id,
    slug: input.slug,
    title: input.title,
    department: input.department,
    location: input.location,
    type: input.type,
    description: input.description ?? "",
    requirements: input.requirements ?? [],
    niceToHave: input.niceToHave ?? [],
    published: input.published ?? true,
    createdAt: input.createdAt ?? new Date().toISOString(),
  };
  if (db) {
    const { error } = await db.from("jobs").upsert({ id, ...jobToRow(record) });
    if (error) throw error;
    return record;
  }
  await upsertItem("jobs", record);
  return record;
}

export async function deleteJob(id: string) {
  const db = await supabaseWrite();
  if (db) {
    const { error } = await db.from("jobs").delete().eq("id", id);
    if (error) throw error;
    return;
  }
  await removeItem("jobs", id);
}

export async function listPublishedPosts(): Promise<BlogPost[]> {
  const db = await supabaseRead();
  if (db) {
    const { data, error } = await db.from("blog_posts").select("*").eq("published", true).order("date", { ascending: false });
    if (error) throw error;
    return (data ?? []).map((row) => mapPost(row as Record<string, unknown>));
  }
  return (await readCollection("blog_posts")).filter((p) => p.published);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const db = await supabaseRead();
  if (db) {
    const { data, error } = await db.from("blog_posts").select("*").eq("slug", slug).eq("published", true).maybeSingle();
    if (error) throw error;
    return data ? mapPost(data as Record<string, unknown>) : null;
  }
  return (await readCollection("blog_posts")).find((p) => p.slug === slug && p.published) ?? null;
}

export async function listAllPosts(): Promise<BlogPost[]> {
  const db = await supabaseRead();
  if (db) {
    const { data, error } = await db.from("blog_posts").select("*").order("date", { ascending: false });
    if (error) throw error;
    return (data ?? []).map((row) => mapPost(row as Record<string, unknown>));
  }
  return readCollection("blog_posts");
}

export async function getPostById(id: string): Promise<BlogPost | null> {
  const db = await supabaseRead();
  if (db) {
    const { data, error } = await db.from("blog_posts").select("*").eq("id", id).maybeSingle();
    if (error) throw error;
    return data ? mapPost(data as Record<string, unknown>) : null;
  }
  return (await readCollection("blog_posts")).find((p) => p.id === id) ?? null;
}

export async function savePost(input: Partial<BlogPost> & { title: string; slug: string }) {
  const db = await supabaseWrite();
  const id = input.id ?? randomUUID();
  const record: BlogPost = {
    id,
    slug: input.slug,
    title: input.title,
    excerpt: input.excerpt ?? "",
    category: input.category ?? "",
    date: input.date ?? new Date().toISOString().slice(0, 10),
    readTime: input.readTime ?? "5 min read",
    coverImage: input.coverImage ?? "",
    author: input.author ?? { name: "Desynt", role: "Editorial" },
    content: input.content ?? [],
    published: input.published ?? true,
  };
  if (db) {
    const { error } = await db.from("blog_posts").upsert({ id, ...postToRow(record) });
    if (error) throw error;
    return record;
  }
  await upsertItem("blog_posts", record);
  return record;
}

export async function deletePost(id: string) {
  const db = await supabaseWrite();
  if (db) {
    const { error } = await db.from("blog_posts").delete().eq("id", id);
    if (error) throw error;
    return;
  }
  await removeItem("blog_posts", id);
}

export async function listPublishedTestimonials(): Promise<Testimonial[]> {
  const db = await supabaseRead();
  if (db) {
    const { data, error } = await db.from("testimonials").select("*").eq("published", true).order("sort_order");
    if (error) throw error;
    return (data ?? []).map((row) => mapTestimonial(row as Record<string, unknown>));
  }
  return (await readCollection("testimonials")).filter((t) => t.published);
}

export async function listAllTestimonials(): Promise<Testimonial[]> {
  const db = await supabaseRead();
  if (db) {
    const { data, error } = await db.from("testimonials").select("*").order("sort_order");
    if (error) throw error;
    return (data ?? []).map((row) => mapTestimonial(row as Record<string, unknown>));
  }
  return readCollection("testimonials");
}

export async function saveTestimonial(input: Partial<Testimonial> & { quote: string; name: string; role: string; company: string }) {
  const db = await supabaseWrite();
  const id = input.id ?? randomUUID();
  const record: Testimonial = {
    id,
    quote: input.quote,
    name: input.name,
    role: input.role,
    company: input.company,
    published: input.published ?? true,
    sortOrder: input.sortOrder ?? 0,
  };
  if (db) {
    const { error } = await db.from("testimonials").upsert({
      id,
      quote: record.quote,
      name: record.name,
      role: record.role,
      company: record.company,
      published: record.published,
      sort_order: record.sortOrder,
    });
    if (error) throw error;
    return record;
  }
  await upsertItem("testimonials", record);
  return record;
}

export async function deleteTestimonial(id: string) {
  const db = await supabaseWrite();
  if (db) {
    const { error } = await db.from("testimonials").delete().eq("id", id);
    if (error) throw error;
    return;
  }
  await removeItem("testimonials", id);
}

export async function createInquiry(input: Omit<Inquiry, "id" | "createdAt" | "status"> & { status?: InquiryStatus }) {
  const db = await supabaseWrite();
  const record: Inquiry = {
    id: randomUUID(),
    name: input.name,
    email: input.email,
    company: input.company,
    budget: input.budget,
    message: input.message,
    source: input.source,
    status: input.status ?? "new",
    createdAt: new Date().toISOString(),
  };
  if (db) {
    const { error } = await db.from("inquiries").insert({
      id: record.id,
      name: record.name,
      email: record.email,
      company: record.company ?? null,
      budget: record.budget ?? null,
      message: record.message,
      source: record.source,
      status: record.status,
    });
    if (error) throw error;
    return record;
  }
  await upsertItem("inquiries", record);
  return record;
}

export async function listInquiries(): Promise<Inquiry[]> {
  const db = await supabaseRead();
  if (db) {
    const { data, error } = await db.from("inquiries").select("*").order("created_at", { ascending: false });
    if (error) throw error;
    return (data ?? []).map((row) => mapInquiry(row as Record<string, unknown>));
  }
  return readCollection("inquiries");
}

export async function updateInquiryStatus(id: string, status: InquiryStatus) {
  const db = await supabaseWrite();
  if (db) {
    const { error } = await db.from("inquiries").update({ status }).eq("id", id);
    if (error) throw error;
    return;
  }
  const items = await readCollection("inquiries");
  const next = items.map((item) => (item.id === id ? { ...item, status } : item));
  const { writeCollection } = await import("@/lib/db/local");
  await writeCollection("inquiries", next);
}

export async function createApplication(input: Omit<JobApplication, "id" | "createdAt" | "status"> & { status?: ApplicationStatus }) {
  const db = await supabaseWrite();
  const record: JobApplication = {
    id: randomUUID(),
    jobId: input.jobId,
    jobTitle: input.jobTitle,
    name: input.name,
    email: input.email,
    phone: input.phone,
    linkedin: input.linkedin,
    resumeUrl: input.resumeUrl,
    coverLetter: input.coverLetter,
    status: input.status ?? "new",
    createdAt: new Date().toISOString(),
  };
  if (db) {
    const { error } = await db.from("applications").insert({
      id: record.id,
      job_id: record.jobId ?? null,
      job_title: record.jobTitle,
      name: record.name,
      email: record.email,
      phone: record.phone ?? null,
      linkedin: record.linkedin ?? null,
      resume_url: record.resumeUrl ?? null,
      cover_letter: record.coverLetter ?? null,
      status: record.status,
    });
    if (error) throw error;
    return record;
  }
  await upsertItem("applications", record);
  return record;
}

export async function listApplications(): Promise<JobApplication[]> {
  const db = await supabaseRead();
  if (db) {
    const { data, error } = await db.from("applications").select("*").order("created_at", { ascending: false });
    if (error) throw error;
    return (data ?? []).map((row) => mapApplication(row as Record<string, unknown>));
  }
  return readCollection("applications");
}

export async function updateApplicationStatus(id: string, status: ApplicationStatus) {
  const db = await supabaseWrite();
  if (db) {
    const { error } = await db.from("applications").update({ status }).eq("id", id);
    if (error) throw error;
    return;
  }
  const items = await readCollection("applications");
  const next = items.map((item) => (item.id === id ? { ...item, status } : item));
  const { writeCollection } = await import("@/lib/db/local");
  await writeCollection("applications", next);
}

export async function getDashboardStats(): Promise<DashboardStats> {
  const [projects, jobs, applications, inquiries, posts] = await Promise.all([
    listAllProjects(),
    listAllJobs(),
    listApplications(),
    listInquiries(),
    listAllPosts(),
  ]);
  return {
    projects: projects.length,
    publishedProjects: projects.filter((p) => p.published).length,
    jobs: jobs.filter((j) => j.published).length,
    applications: applications.length,
    newApplications: applications.filter((a) => a.status === "new").length,
    inquiries: inquiries.length,
    newInquiries: inquiries.filter((i) => i.status === "new").length,
    posts: posts.length,
  };
}
