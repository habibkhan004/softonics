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
    <section id={id} className={`relative overflow-hidden py-16 sm:py-24 ${className}`}>
      {grid && <GridBackground />}
      <div className="app-container relative z-10">{children}</div>
    </section>
  );
}
