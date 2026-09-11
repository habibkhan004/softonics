import type { ReactNode } from "react";
import GridBackground from "@/components/ui/GridBackground";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  /** Renders the technical grid behind the section. */
  grid?: boolean;
  id?: string;
}

export default function SectionWrapper({ children, className = "", grid = false, id }: SectionWrapperProps) {
  return (
    <section id={id} className={`relative overflow-hidden py-20 sm:py-28 ${className}`}>
      {grid && <GridBackground size={240} />}
      <div className="relative z-10 mx-auto w-full min-w-0 max-w-[1600px] px-6 sm:px-7">{children}</div>
    </section>
  );
}
