import type { ReactNode } from "react";

export default function Card({
  children,
  className = "",
  hover = true,
  id,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  id?: string;
}) {
  return (
    <div
      id={id}
      className={`glass-card rounded-2xl p-6 sm:p-8 transition-colors duration-300 ${
        hover ? "hover:bg-surface-hover hover:border-accent-indigo/40" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
