import Hero from "@/components/sections/home/Hero";
import LogoStrip from "@/components/sections/home/LogoStrip";
import ServicesOverview from "@/components/sections/home/ServicesOverview";
import WhyChooseUs from "@/components/sections/home/WhyChooseUs";
import FeaturedProjects from "@/components/sections/home/FeaturedProjects";
import ProcessSteps from "@/components/sections/home/ProcessSteps";
import Testimonials from "@/components/sections/home/Testimonials";
import TechStack from "@/components/sections/home/TechStack";
import CtaBanner from "@/components/sections/shared/CtaBanner";
import { listFeaturedProjects, listPublishedTestimonials } from "@/lib/queries";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [featured, testimonials] = await Promise.all([listFeaturedProjects(), listPublishedTestimonials()]);

  return (
    <>
      <Hero />
      <LogoStrip />
      <ServicesOverview />
      <WhyChooseUs />
      <FeaturedProjects projects={featured} />
      <ProcessSteps />
      <Testimonials items={testimonials} />
      <TechStack />
      <CtaBanner />
    </>
  );
}
