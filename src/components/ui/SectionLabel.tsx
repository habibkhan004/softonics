import type { ReactNode } from "react";

/**
 * Section marker: a short rule followed by a wide-tracked uppercase label.
 * Replaces the previous `[Bracketed]` monospace eyebrow.
 */
export default function SectionLabel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span aria-hidden="true" className="h-px w-7 shrink-0 bg-accent-indigo" />
      <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent-indigo">
        {children}
      </span>
    </span>
  );
}
