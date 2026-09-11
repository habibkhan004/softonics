const VIEW_W = 1600;
const VIEW_H = 900;

/** The "far wall" the grid converges toward, as a fraction of the viewBox. */
const INNER_SCALE = 0.22;

/** Depth rings, eased so they bunch up toward the vanishing point. */
const RING_STEPS = [0.16, 0.31, 0.44, 0.55, 0.65, 0.73, 0.8, 0.86, 0.91, 0.95];

/** How many lines run toward the vanishing point along each axis. */
const H_DIVISIONS = 14;
const V_DIVISIONS = 8;

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

/**
 * Wireframe room receding to a central vanishing point.
 *
 * Drawn as SVG rather than CSS 3D planes so the convergence is exact and identical
 * across browsers, and so the line density can be tuned directly.
 */
export default function PerspectiveRoom({ className = "" }: { className?: string }) {
  const cx = VIEW_W / 2;
  const cy = VIEW_H / 2;

  const innerW = VIEW_W * INNER_SCALE;
  const innerH = VIEW_H * INNER_SCALE;
  const inner = {
    left: cx - innerW / 2,
    right: cx + innerW / 2,
    top: cy - innerH / 2,
    bottom: cy + innerH / 2,
  };

  // Rectangles stepping back toward the far wall.
  const rings = RING_STEPS.map((t) => ({
    x: lerp(0, inner.left, t),
    y: lerp(0, inner.top, t),
    w: lerp(VIEW_W, innerW, t),
    h: lerp(VIEW_H, innerH, t),
  }));

  // Lines from the outer frame to the matching point on the far wall.
  const rays: { x1: number; y1: number; x2: number; y2: number }[] = [];

  for (let i = 0; i <= H_DIVISIONS; i++) {
    const t = i / H_DIVISIONS;
    const outerX = lerp(0, VIEW_W, t);
    const innerX = lerp(inner.left, inner.right, t);
    rays.push({ x1: outerX, y1: 0, x2: innerX, y2: inner.top });
    rays.push({ x1: outerX, y1: VIEW_H, x2: innerX, y2: inner.bottom });
  }

  for (let i = 0; i <= V_DIVISIONS; i++) {
    const t = i / V_DIVISIONS;
    const outerY = lerp(0, VIEW_H, t);
    const innerY = lerp(inner.top, inner.bottom, t);
    rays.push({ x1: 0, y1: outerY, x2: inner.left, y2: innerY });
    rays.push({ x1: VIEW_W, y1: outerY, x2: inner.right, y2: innerY });
  }

  return (
    <svg
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    >
      <g stroke="var(--grid-line)" strokeWidth="1" fill="none">
        {rays.map((r, i) => (
          <line key={`ray-${i}`} x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2} />
        ))}
        {rings.map((r, i) => (
          <rect key={`ring-${i}`} x={r.x} y={r.y} width={r.w} height={r.h} />
        ))}
      </g>
    </svg>
  );
}
