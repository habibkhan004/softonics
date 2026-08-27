import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { blogPosts } from "@/lib/data/blogPosts";
import { jobs } from "@/lib/data/jobs";
import { projects } from "@/lib/data/projects";
import { testimonials } from "@/lib/data/testimonials";
import type { BlogPost, Inquiry, JobApplication, JobOpening, Project, Testimonial } from "@/lib/types";

export type Collections = {
  projects: Project[];
  jobs: JobOpening[];
  applications: JobApplication[];
  inquiries: Inquiry[];
  blog_posts: BlogPost[];
  testimonials: Testimonial[];
};

const DIR = path.join(process.cwd(), "data");

const seeds: Collections = {
  projects,
  jobs,
  applications: [],
  inquiries: [],
  blog_posts: blogPosts,
  testimonials,
};

async function ensureDir() {
  await mkdir(DIR, { recursive: true });
}

export async function readCollection<K extends keyof Collections>(name: K): Promise<Collections[K]> {
  await ensureDir();
  const file = path.join(DIR, `${name}.json`);
  try {
    const raw = await readFile(file, "utf8");
    return JSON.parse(raw) as Collections[K];
  } catch {
    const seed = seeds[name];
    await writeFile(file, JSON.stringify(seed, null, 2), "utf8");
    return structuredClone(seed);
  }
}

export async function writeCollection<K extends keyof Collections>(name: K, items: Collections[K]) {
  await ensureDir();
  await writeFile(path.join(DIR, `${name}.json`), JSON.stringify(items, null, 2), "utf8");
}

export async function upsertItem<K extends keyof Collections>(name: K, item: Collections[K][number]) {
  const items = await readCollection(name);
  const id = (item as { id: string }).id;
  const index = (items as { id: string }[]).findIndex((row) => row.id === id);
  if (index >= 0) (items as unknown as unknown[])[index] = item;
  else (items as unknown as unknown[]).unshift(item);
  await writeCollection(name, items);
  return item;
}

export async function removeItem<K extends keyof Collections>(name: K, id: string) {
  const items = await readCollection(name);
  const next = (items as { id: string }[]).filter((row) => row.id !== id);
  await writeCollection(name, next as Collections[K]);
}
