import Image from "next/image";
import TechnicalLabel from "@/components/ui/TechnicalLabel";

/**
 * Hero 3D visual.
 *
 * The reference composition is a bespoke 3D render (purple volumetric forms on a green
 * platform with paper fragments floating around it). No such asset exists in this repo,
 * so this renders an abstract 3D composition in the same palette and layout.
 *
 * To swap in a real render: pass `src` (transparent PNG/WebP) — the layout, scale and
 * surrounding annotations stay exactly the same.
 */
export default function HeroArtwork({ src }: { src?: string }) {
  return (
    <div className="relative w-full">
      {/* Annotations pinned around the artwork */}
      <TechnicalLabel className="absolute right-[2%] top-[22%] z-10 hidden lg:block">Apps</TechnicalLabel>
      <TechnicalLabel className="absolute right-[1%] top-[52%] z-10 hidden lg:block">SEO</TechnicalLabel>
      <TechnicalLabel className="absolute bottom-[2%] left-[6%] z-10 hidden lg:block">Frontends</TechnicalLabel>
      <TechnicalLabel className="absolute bottom-[2%] left-[46%] z-10 hidden lg:block">Backends</TechnicalLabel>
      <TechnicalLabel className="absolute bottom-[2%] right-[2%] z-10 hidden lg:block">WordPress</TechnicalLabel>

      <span className="absolute right-[8%] top-[17%] hidden select-none text-sm text-accent-indigo/50 lg:block">+</span>
      <span className="absolute right-[8%] top-[47%] hidden select-none text-sm text-accent-indigo/50 lg:block">+</span>
      <span className="absolute bottom-[7%] left-[30%] hidden select-none text-sm text-accent-indigo/50 lg:block">+</span>
      <span className="absolute bottom-[7%] right-[10%] hidden select-none text-sm text-accent-indigo/50 lg:block">+</span>

      {src ? (
        <Image
          src={src}
          alt=""
          width={690}
          height={856}
          priority
          className="h-auto w-full object-contain"
        />
      ) : (
        <AbstractRender />
      )}
    </div>
  );
}

function AbstractRender() {
  return (
    <svg
      viewBox="0 0 720 560"
      role="presentation"
      className="h-auto w-full overflow-visible"
      style={{ filter: "drop-shadow(0 40px 60px rgba(0,0,0,0.45))" }}
    >
      <defs>
        <linearGradient id="ha-green-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8df5a4" />
          <stop offset="55%" stopColor="#57d977" />
          <stop offset="100%" stopColor="#34b256" />
        </linearGradient>
        <linearGradient id="ha-green-side" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2fa04d" />
          <stop offset="100%" stopColor="#1d6c34" />
        </linearGradient>
        <radialGradient id="ha-purple-a" cx="32%" cy="26%" r="78%">
          <stop offset="0%" stopColor="#a672ff" />
          <stop offset="52%" stopColor="#7c26ec" />
          <stop offset="100%" stopColor="#4a0da3" />
        </radialGradient>
        <radialGradient id="ha-purple-b" cx="36%" cy="22%" r="80%">
          <stop offset="0%" stopColor="#b98bff" />
          <stop offset="50%" stopColor="#8734f0" />
          <stop offset="100%" stopColor="#51119f" />
        </radialGradient>
        <linearGradient id="ha-paper" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#dfe4ec" />
        </linearGradient>
        <radialGradient id="ha-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#65df80" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#65df80" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ambient glow */}
      <ellipse cx="380" cy="300" rx="300" ry="210" fill="url(#ha-glow)" />

      {/* contact shadow */}
      <ellipse cx="370" cy="488" rx="240" ry="26" fill="#05070d" opacity="0.55" />

      {/* green platform — side face then top face */}
      <path d="M84 424 L362 500 L664 388 L664 356 L362 468 L84 392 Z" fill="url(#ha-green-side)" />
      <path d="M84 392 L362 468 L664 356 L386 280 Z" fill="url(#ha-green-top)" />

      {/* green ribbon rising through the composition */}
      <path
        d="M392 286 C356 214 420 152 476 132 C438 182 420 230 438 280 Z"
        fill="url(#ha-green-top)"
        opacity="0.95"
      />

      {/* purple volumetric masses */}
      <g>
        <ellipse cx="246" cy="352" rx="118" ry="98" fill="url(#ha-purple-a)" />
        <ellipse cx="206" cy="310" rx="64" ry="56" fill="url(#ha-purple-a)" />
        <ellipse cx="296" cy="292" rx="56" ry="50" fill="url(#ha-purple-b)" opacity="0.92" />
      </g>
      <g>
        <ellipse cx="516" cy="268" rx="110" ry="92" fill="url(#ha-purple-b)" />
        <ellipse cx="482" cy="224" rx="58" ry="50" fill="url(#ha-purple-b)" />
        <ellipse cx="564" cy="218" rx="48" ry="42" fill="url(#ha-purple-a)" opacity="0.9" />
      </g>

      {/* specular highlights */}
      <ellipse cx="208" cy="300" rx="28" ry="17" fill="#ffffff" opacity="0.18" />
      <ellipse cx="488" cy="216" rx="25" ry="15" fill="#ffffff" opacity="0.2" />

      {/* floating paper fragments */}
      <g className="animate-float">
        <g transform="rotate(-14 210 96)">
          <rect x="174" y="64" width="72" height="62" rx="4" fill="url(#ha-paper)" />
          <rect x="186" y="80" width="46" height="4" rx="2" fill="#8f9bb3" />
          <rect x="186" y="92" width="34" height="4" rx="2" fill="#c2cad8" />
        </g>
      </g>
      <g className="animate-float-slow">
        <g transform="rotate(12 588 86)">
          <rect x="554" y="56" width="66" height="58" rx="4" fill="url(#ha-paper)" />
          <rect x="566" y="72" width="42" height="4" rx="2" fill="#8f9bb3" />
          <rect x="566" y="84" width="28" height="4" rx="2" fill="#c2cad8" />
        </g>
      </g>
      <g className="animate-float-slow">
        <g transform="rotate(-8 646 336)">
          <rect x="618" y="310" width="58" height="52" rx="4" fill="url(#ha-paper)" />
          <rect x="628" y="324" width="36" height="4" rx="2" fill="#8f9bb3" />
          <rect x="628" y="336" width="24" height="4" rx="2" fill="#c2cad8" />
        </g>
      </g>
      <g className="animate-float">
        <g transform="rotate(16 104 246)">
          <rect x="76" y="220" width="54" height="50" rx="4" fill="url(#ha-paper)" />
          <rect x="86" y="234" width="32" height="4" rx="2" fill="#8f9bb3" />
          <rect x="86" y="246" width="22" height="4" rx="2" fill="#c2cad8" />
        </g>
      </g>
      <g className="animate-float-slow">
        <g transform="rotate(-18 372 122)">
          <rect x="346" y="98" width="50" height="46" rx="4" fill="url(#ha-paper)" />
          <rect x="356" y="112" width="30" height="4" rx="2" fill="#8f9bb3" />
          <rect x="356" y="124" width="20" height="4" rx="2" fill="#c2cad8" />
        </g>
      </g>
    </svg>
  );
}
