import type { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  glow?: "indigo" | "violet" | "blue" | "none";
  id?: string;
}

export default function SectionWrapper({
  children,
  className = "",
  glow = "none",
  id,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`relative overflow-hidden py-20 sm:py-28 ${className}`}>
      {glow !== "none" && (
        <div
          className={`glow-orb glow-orb-${glow} animate-float-slow h-[420px] w-[420px] -top-32 left-1/2 -translate-x-1/2`}
          aria-hidden="true"
        />
      )}
      <div className="relative z-10 mx-auto w-full min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
