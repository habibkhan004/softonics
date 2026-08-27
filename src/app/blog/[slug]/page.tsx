import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import MotionReveal from "@/components/ui/MotionReveal";
import CtaBanner from "@/components/sections/shared/CtaBanner";
import { getPostBySlug, listPublishedPosts } from "@/lib/queries";
import { postIcon } from "@/lib/icons";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const all = await listPublishedPosts();
  const related = all.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2);

  return (
    <>
      <SectionWrapper className="pb-0 pt-16 sm:pt-24">
        <MotionReveal>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>

          <div className="mt-6 flex items-center gap-3">
            <Badge>{post.category}</Badge>
            <span className="inline-flex items-center gap-1.5 text-xs text-foreground-muted">
              <Calendar className="h-3.5 w-3.5" />
              {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-foreground-muted">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl">
            {post.title}
          </h1>

          <div className="mt-6 flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-black"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            >
              {post.author.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <div className="text-sm font-medium text-foreground">{post.author.name}</div>
              <div className="text-xs text-foreground-muted">{post.author.role}</div>
            </div>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.1}>
          <div className="relative mt-10 h-64 w-full overflow-hidden rounded-3xl sm:h-96">
            <Image src={post.coverImage} alt={post.title} fill priority sizes="100vw" className="object-cover" />
          </div>
        </MotionReveal>
      </SectionWrapper>

      <SectionWrapper>
        <MotionReveal>
          <div className="mx-auto flex max-w-3xl flex-col gap-6 text-foreground-muted">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </MotionReveal>
      </SectionWrapper>

      {related.length > 0 && (
        <SectionWrapper glow="indigo">
          <h2 className="text-2xl font-semibold text-foreground">Related Reading</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {related.map((r) => {
              const Icon = postIcon(r.category);
              return (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="glass-card group flex items-center gap-4 rounded-2xl p-5 transition-colors hover:bg-surface-hover"
                >
                  <Icon className="h-8 w-8 shrink-0 text-accent-blue" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-medium text-foreground group-hover:text-accent-blue">{r.title}</h3>
                    <p className="mt-1 text-xs text-foreground-muted">{r.readTime}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </SectionWrapper>
      )}

      <CtaBanner />
    </>
  );
}
