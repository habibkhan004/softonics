/**
 * Subtle technical layout grid used behind hero/section content.
 * Large cells, barely-visible lines, optional green "+" markers at intersections.
 */
export default function GridBackground({
  size = 240,
  markers = [],
  className = "",
}: {
  /** Grid cell size in px. */
  size?: number;
  /** Marker positions as [left%, top%] pairs. */
  markers?: [number, number][];
  className?: string;
}) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div
        className="tech-grid absolute inset-0"
        style={{ "--tech-grid-size": `${size}px` } as React.CSSProperties}
      />
      {markers.map(([left, top]) => (
        <span
          key={`${left}-${top}`}
          className="absolute select-none text-sm leading-none text-accent-indigo/45"
          style={{ left: `${left}%`, top: `${top}%` }}
        >
          +
        </span>
      ))}
    </div>
  );
}
