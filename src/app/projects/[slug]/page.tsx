import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyView from "@/components/sections/projects/CaseStudyView";
import { getProjectBySlug, listPublishedProjects } from "@/lib/queries";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  const all = await listPublishedProjects();
  const related = all.filter((p) => p.slug !== project.slug && p.category === project.category).slice(0, 2);

  return <CaseStudyView project={project} related={related} />;
}
