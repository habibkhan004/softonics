import type { BlogPost, Inquiry, JobApplication, JobOpening, Project, ProjectCategory, Testimonial } from "@/lib/types";

export function mapProject(row: Record<string, unknown>): Project {
  const testimonialQuote = row.testimonial_quote ? String(row.testimonial_quote) : "";
  return {
    id: String(row.id),
    slug: String(row.slug),
    title: String(row.title),
    client: String(row.client),
    category: row.category as ProjectCategory,
    industry: String(row.industry ?? ""),
    tags: (row.tags as string[]) ?? [],
    techStack: (row.tech_stack as string[]) ?? [],
    summary: String(row.summary ?? ""),
    overview: String(row.overview ?? ""),
    challenge: String(row.challenge ?? ""),
    solution: String(row.solution ?? ""),
    approach: (row.approach as string[]) ?? [],
    results: (row.results as string[]) ?? [],
    metrics: (row.metrics as Project["metrics"]) ?? [],
    year: String(row.year ?? ""),
    duration: String(row.duration ?? ""),
    teamSize: String(row.team_size ?? ""),
    liveUrl: row.live_url ? String(row.live_url) : undefined,
    coverImage: String(row.cover_image ?? ""),
    gallery: (row.gallery as Project["gallery"]) ?? [],
    featured: Boolean(row.featured),
    published: Boolean(row.published),
    testimonial: testimonialQuote
      ? {
          quote: testimonialQuote,
          name: String(row.testimonial_name ?? ""),
          role: String(row.testimonial_role ?? ""),
        }
      : undefined,
    createdAt: row.created_at ? String(row.created_at) : undefined,
    updatedAt: row.updated_at ? String(row.updated_at) : undefined,
  };
}

export function projectToRow(project: Partial<Project>) {
  return {
    slug: project.slug,
    title: project.title,
    client: project.client,
    category: project.category,
    industry: project.industry ?? "",
    tags: project.tags ?? [],
    tech_stack: project.techStack ?? [],
    summary: project.summary ?? "",
    overview: project.overview ?? "",
    challenge: project.challenge ?? "",
    solution: project.solution ?? "",
    approach: project.approach ?? [],
    results: project.results ?? [],
    metrics: project.metrics ?? [],
    year: project.year ?? "",
    duration: project.duration ?? "",
    team_size: project.teamSize ?? "",
    live_url: project.liveUrl || null,
    cover_image: project.coverImage ?? "",
    gallery: project.gallery ?? [],
    featured: project.featured ?? false,
    published: project.published ?? true,
    testimonial_quote: project.testimonial?.quote || null,
    testimonial_name: project.testimonial?.name || null,
    testimonial_role: project.testimonial?.role || null,
    updated_at: new Date().toISOString(),
  };
}

export function mapJob(row: Record<string, unknown>): JobOpening {
  return {
    id: String(row.id),
    slug: String(row.slug),
    title: String(row.title),
    department: String(row.department),
    location: String(row.location),
    type: String(row.type),
    description: String(row.description ?? ""),
    requirements: (row.requirements as string[]) ?? [],
    niceToHave: (row.nice_to_have as string[]) ?? [],
    published: Boolean(row.published),
    createdAt: row.created_at ? String(row.created_at) : undefined,
  };
}

export function jobToRow(job: Partial<JobOpening>) {
  return {
    slug: job.slug,
    title: job.title,
    department: job.department,
    location: job.location,
    type: job.type,
    description: job.description ?? "",
    requirements: job.requirements ?? [],
    nice_to_have: job.niceToHave ?? [],
    published: job.published ?? true,
    updated_at: new Date().toISOString(),
  };
}

export function mapPost(row: Record<string, unknown>): BlogPost {
  return {
    id: String(row.id),
    slug: String(row.slug),
    title: String(row.title),
    excerpt: String(row.excerpt ?? ""),
    category: String(row.category ?? ""),
    date: String(row.date ?? ""),
    readTime: String(row.read_time ?? ""),
    coverImage: String(row.cover_image ?? ""),
    author: { name: String(row.author_name ?? ""), role: String(row.author_role ?? "") },
    content: (row.content as string[]) ?? [],
    published: Boolean(row.published),
  };
}

export function postToRow(post: Partial<BlogPost>) {
  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt ?? "",
    category: post.category ?? "",
    date: post.date,
    read_time: post.readTime ?? "",
    cover_image: post.coverImage ?? "",
    author_name: post.author?.name ?? "",
    author_role: post.author?.role ?? "",
    content: post.content ?? [],
    published: post.published ?? true,
    updated_at: new Date().toISOString(),
  };
}

export function mapTestimonial(row: Record<string, unknown>): Testimonial {
  return {
    id: String(row.id),
    quote: String(row.quote),
    name: String(row.name),
    role: String(row.role),
    company: String(row.company),
    published: Boolean(row.published),
    sortOrder: Number(row.sort_order ?? 0),
  };
}

export function mapInquiry(row: Record<string, unknown>): Inquiry {
  return {
    id: String(row.id),
    name: String(row.name),
    email: String(row.email),
    company: row.company ? String(row.company) : undefined,
    budget: row.budget ? String(row.budget) : undefined,
    message: String(row.message),
    source: (row.source as Inquiry["source"]) ?? "contact",
    status: (row.status as Inquiry["status"]) ?? "new",
    createdAt: String(row.created_at ?? new Date().toISOString()),
  };
}

export function mapApplication(row: Record<string, unknown>): JobApplication {
  return {
    id: String(row.id),
    jobId: row.job_id ? String(row.job_id) : undefined,
    jobTitle: String(row.job_title),
    name: String(row.name),
    email: String(row.email),
    phone: row.phone ? String(row.phone) : undefined,
    linkedin: row.linkedin ? String(row.linkedin) : undefined,
    resumeUrl: row.resume_url ? String(row.resume_url) : undefined,
    coverLetter: row.cover_letter ? String(row.cover_letter) : undefined,
    status: (row.status as JobApplication["status"]) ?? "new",
    createdAt: String(row.created_at ?? new Date().toISOString()),
  };
}
