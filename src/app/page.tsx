import Hero from "@/components/sections/home/Hero";
import LogoStrip from "@/components/sections/home/LogoStrip";
import ServicesOverview from "@/components/sections/home/ServicesOverview";
import WhyChooseUs from "@/components/sections/home/WhyChooseUs";
import FeaturedProjects from "@/components/sections/home/FeaturedProjects";
import ProcessSteps from "@/components/sections/home/ProcessSteps";
import Testimonials from "@/components/sections/home/Testimonials";
import TechStack from "@/components/sections/home/TechStack";
import CtaBanner from "@/components/sections/shared/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <ServicesOverview />
      <WhyChooseUs />
      <FeaturedProjects />
      <ProcessSteps />
      <Testimonials />
      <TechStack />
      <CtaBanner />
    </>
  );
}
