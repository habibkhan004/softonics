import Image from "next/image";

/**
 * Purple raised hand for the closing CTA, waving on a slow loop.
 *
 * Stands in for the reference's 3D render, which is not in this repo. Pass `src`
 * (transparent PNG/WebP) to swap in a real asset — the wave and layout still apply.
 */
export default function CtaHand({ src, className = "" }: { src?: string; className?: string }) {
  if (src) {
    return (
      <div className={`animate-wave ${className}`}>
        <Image src={src} alt="" width={520} height={560} className="h-auto w-full object-contain" />
      </div>
    );
  }

  return (
    <svg
      viewBox="0 0 320 360"
      role="presentation"
      className={`animate-wave h-auto w-full ${className}`}
      style={{ filter: "drop-shadow(0 30px 50px rgba(0,0,0,0.5))" }}
    >
      <defs>
        <linearGradient id="hand-body" x1="0.25" y1="0" x2="0.85" y2="1">
          <stop offset="0%" stopColor="#a763ff" />
          <stop offset="45%" stopColor="#7f24f0" />
          <stop offset="100%" stopColor="#4f0fae" />
        </linearGradient>
        <linearGradient id="hand-finger" x1="0.2" y1="0" x2="0.9" y2="1">
          <stop offset="0%" stopColor="#b482ff" />
          <stop offset="60%" stopColor="#8434f5" />
          <stop offset="100%" stopColor="#5a13bd" />
        </linearGradient>
      </defs>

      {/* fingers — slightly staggered heights */}
      <rect x="96" y="44" width="38" height="150" rx="19" fill="url(#hand-finger)" />
      <rect x="138" y="26" width="38" height="168" rx="19" fill="url(#hand-finger)" />
      <rect x="180" y="34" width="38" height="160" rx="19" fill="url(#hand-finger)" />
      <rect x="222" y="60" width="36" height="134" rx="18" fill="url(#hand-finger)" />

      {/* palm */}
      <path
        d="M92 150 h170 a44 44 0 0 1 44 44 v42 a104 104 0 0 1 -104 104 h-52 a104 104 0 0 1 -104 -104 v-42 a44 44 0 0 1 44 -44 z"
        fill="url(#hand-body)"
      />

      {/* thumb */}
      <path
        d="M266 196 c26 -14 50 2 52 26 c2 26 -18 44 -44 48 l-34 6 z"
        fill="url(#hand-finger)"
      />

      {/* soft interior shading */}
      <ellipse cx="176" cy="248" rx="66" ry="54" fill="#3c0a8a" opacity="0.28" />
      <ellipse cx="150" cy="212" rx="30" ry="18" fill="#ffffff" opacity="0.12" />
    </svg>
  );
}
