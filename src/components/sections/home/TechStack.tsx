import SectionHeading from "@/components/ui/SectionHeading";
import SectionWrapper from "@/components/ui/SectionWrapper";
import MotionReveal from "@/components/ui/MotionReveal";
import Card from "@/components/ui/Card";
import { techStack } from "@/lib/data/techStack";

export default function TechStack() {
  return (
    <SectionWrapper>
      <SectionHeading
        eyebrow="Our Toolkit"
        title="Modern tools, chosen deliberately"
        gradientWord="chosen deliberately"
        subtitle="No resume-driven development — every tool earns its place by solving a real constraint on the project."
      />

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {techStack.map((group, i) => (
          <MotionReveal key={group.category} delay={i * 0.08}>
            <Card hover={false} className="h-full">
              <group.icon className="h-7 w-7 text-accent-violet" strokeWidth={1.5} />
              <h3 className="mt-4 text-sm font-semibold text-foreground">{group.category}</h3>
              <ul className="mt-3 flex flex-col gap-1.5">
                {group.items.map((item) => (
                  <li key={item} className="text-xs text-foreground-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </MotionReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
