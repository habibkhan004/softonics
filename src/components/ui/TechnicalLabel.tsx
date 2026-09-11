/**
 * Small green monospace annotation used around the hero artwork.
 * Intentionally not a badge/pill — it should read as a technical callout.
 */
export default function TechnicalLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`font-mono text-[13px] leading-none tracking-tight text-accent-indigo sm:text-[15px] ${className}`}
    >
      {children}
    </span>
  );
}
