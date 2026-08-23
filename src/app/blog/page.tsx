import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/sections/shared/PageHero";
import CtaBanner from "@/components/sections/shared/CtaBanner";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import MotionReveal from "@/components/ui/MotionReveal";
import { blogPosts } from "@/lib/data/blogPosts";
import { blogImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on software engineering, AI, SEO, and cloud infrastructure from the Softonics team.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Insights on software, AI, and growth"
        gradientWord="AI, and growth"
        subtitle="Notes from the engineers, designers, and strategists building at Softonics."
      />

      <SectionWrapper className="pt-0">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <MotionReveal key={post.slug} delay={(i % 3) * 0.08}>
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <div className="relative h-44 w-full overflow-hidden rounded-2xl">
                  <Image
                    src={blogImages[post.slug]}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                  <post.icon className="absolute right-3 top-3 h-6 w-6 text-white/80" strokeWidth={1.5} />
                </div>
                <div className="mt-5">
                  <div className="flex items-center gap-2">
                    <Badge>{post.category}</Badge>
                    <span className="text-xs text-foreground-muted">{post.readTime}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-foreground transition-colors group-hover:text-accent-blue">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-foreground-muted">{post.excerpt}</p>
                </div>
              </Link>
            </MotionReveal>
          ))}
        </div>
      </SectionWrapper>

      <CtaBanner />
    </>
  );
}
