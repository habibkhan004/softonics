/**
 * Subtle technical layout grid used behind hero/section content.
 * Large cells, barely-visible lines, optional green "+" markers at intersections.
 */
export default function GridBackground({
  size = 190,
  mobileSize = 72,
  markers = [],
  className = "",
}: {
  /** Grid cell size in px from large screens up. */
  size?: number;
  /** Grid cell size in px below the large breakpoint. */
  mobileSize?: number;
  /** Marker positions as [left%, top%] pairs. */
  markers?: [number, number][];
  className?: string;
}) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div
        className="tech-grid absolute inset-0"
        style={
          {
            "--tech-grid-size": `${size}px`,
            "--tech-grid-size-mobile": `${mobileSize}px`,
          } as React.CSSProperties
        }
      />
      {/* Markers are desktop-only — on phones they land on top of the copy. */}
      {markers.map(([left, top]) => (
        <span
          key={`${left}-${top}`}
          className="absolute hidden select-none text-sm leading-none text-accent-indigo/45 lg:block"
          style={{ left: `${left}%`, top: `${top}%` }}
        >
          +
        </span>
      ))}
    </div>
  );
}
