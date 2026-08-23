import type { Metadata } from "next";
import PageHero from "@/components/sections/shared/PageHero";
import CtaBanner from "@/components/sections/shared/CtaBanner";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ProjectsGrid from "@/components/sections/projects/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description:
    "Selected case studies across e-commerce, AI/ML, mobile, SEO, and cloud engineering — with real, quantified results.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Selected work across industries"
        gradientWord="across industries"
        subtitle="A sample of recent engagements — real problems, shipped solutions, measurable outcomes."
      />

      <SectionWrapper className="pt-0">
        <ProjectsGrid />
      </SectionWrapper>

      <CtaBanner />
    </>
  );
}
