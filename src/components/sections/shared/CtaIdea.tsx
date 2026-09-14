/**
 * Glowing lightbulb for the closing "Share your vision" CTA, floating on a slow loop.
 * Drawn in the brand greens so it sits on the perspective grid without a backdrop.
 */
export default function CtaIdea({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 360"
      role="presentation"
      className={`animate-float h-auto w-full ${className}`}
      style={{ filter: "drop-shadow(0 30px 50px rgba(15,18,17,0.18))" }}
    >
      <defs>
        <radialGradient id="idea-glow" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#62d487" stopOpacity="0.55" />
          <stop offset="60%" stopColor="#2a9f5c" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#2a9f5c" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="idea-glass" x1="0.2" y1="0" x2="0.85" y2="1">
          <stop offset="0%" stopColor="#62d487" />
          <stop offset="50%" stopColor="#1f8a50" />
          <stop offset="100%" stopColor="#0b5530" />
        </linearGradient>
        <linearGradient id="idea-base" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0b3d24" />
          <stop offset="50%" stopColor="#14583a" />
          <stop offset="100%" stopColor="#0b3d24" />
        </linearGradient>
      </defs>

      {/* halo */}
      <circle cx="160" cy="140" r="150" fill="url(#idea-glow)" />

      {/* rays */}
      <g stroke="#2a9f5c" strokeWidth="10" strokeLinecap="round" opacity="0.85">
        <line x1="160" y1="22" x2="160" y2="2" />
        <line x1="62" y1="48" x2="46" y2="32" />
        <line x1="258" y1="48" x2="274" y2="32" />
        <line x1="30" y1="140" x2="8" y2="140" />
        <line x1="290" y1="140" x2="312" y2="140" />
      </g>

      {/* glass */}
      <path
        d="M112 238 C112 214 60 196 60 140 A100 100 0 1 1 260 140 C260 196 208 214 208 238 Z"
        fill="url(#idea-glass)"
      />

      {/* filament */}
      <path
        d="M134 236 V196 L148 176 L160 196 L172 176 L186 196 V236"
        fill="none"
        stroke="#d9f7e2"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />

      {/* glass highlight */}
      <path d="M96 120 A68 68 0 0 1 150 74" fill="none" stroke="#ffffff" strokeWidth="12" strokeLinecap="round" opacity="0.28" />

      {/* screw base */}
      <rect x="110" y="244" width="100" height="22" rx="11" fill="url(#idea-base)" />
      <rect x="114" y="270" width="92" height="20" rx="10" fill="url(#idea-base)" />
      <rect x="120" y="294" width="80" height="18" rx="9" fill="url(#idea-base)" />
      <path d="M138 316 h44 a22 22 0 0 1 -44 0 z" fill="#0b3d24" />
    </svg>
  );
}
