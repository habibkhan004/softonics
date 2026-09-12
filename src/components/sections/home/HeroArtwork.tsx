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


/**
 * The hero scene: a workstation on a green stage — editor, phone and a live metrics card,
 * i.e. the work this studio actually ships. It replaces an abstract blob composition that
 * said nothing about the business.
 */
function AbstractRender() {
  const INK = "#0f1211";
  const GRAPHITE = "#2a3330";
  const GREEN = "#2a9f56";
  const GREEN_LIGHT = "#4ec573";
  const GREEN_DEEP = "#12703f";
  const CREAM = "#f5f0e4";
  const MUTED = "#8e978f";

  return (
    <svg viewBox="0 0 720 560" role="presentation" className="h-auto w-full overflow-visible">
      <defs>
        <linearGradient id="ha-stage-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4ec573" />
          <stop offset="55%" stopColor="#2a9f56" />
          <stop offset="100%" stopColor="#167a3d" />
        </linearGradient>
        <linearGradient id="ha-stage-side" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#12693a" />
          <stop offset="100%" stopColor="#0a4224" />
        </linearGradient>
        <linearGradient id="ha-paper" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e8e2d4" />
        </linearGradient>
        <radialGradient id="ha-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0c6b3c" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#0c6b3c" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ambient glow */}
      <ellipse cx="380" cy="300" rx="300" ry="210" fill="url(#ha-glow)" />

      {/* contact shadow */}
      <ellipse cx="370" cy="488" rx="240" ry="26" fill={INK} opacity="0.14" />

      {/* isometric stage — side face then top face */}
      <path d="M84 424 L362 500 L664 388 L664 356 L362 468 L84 392 Z" fill="url(#ha-stage-side)" />
      <path d="M84 392 L362 468 L664 356 L386 280 Z" fill="url(#ha-stage-top)" />

      {/* ---- editor window, centre ---- */}
      <g>
        {/* stand */}
        <path d="M352 330 h40 v40 h-40 z" fill={GRAPHITE} />
        <ellipse cx="372" cy="372" rx="58" ry="12" fill={INK} />

        <rect x="196" y="104" width="352" height="232" rx="10" fill={INK} />
        <rect x="196" y="104" width="352" height="30" rx="10" fill={GRAPHITE} />
        <rect x="196" y="122" width="352" height="12" fill={GRAPHITE} />
        <circle cx="216" cy="119" r="5" fill={GREEN_LIGHT} />
        <circle cx="232" cy="119" r="5" fill={MUTED} opacity="0.5" />
        <circle cx="248" cy="119" r="5" fill={MUTED} opacity="0.3" />

        {/* file gutter */}
        <rect x="196" y="134" width="46" height="202" fill={GRAPHITE} opacity="0.5" />
        <rect x="208" y="152" width="22" height="5" rx="2.5" fill={MUTED} opacity="0.45" />
        <rect x="208" y="168" width="22" height="5" rx="2.5" fill={GREEN_LIGHT} opacity="0.8" />
        <rect x="208" y="184" width="22" height="5" rx="2.5" fill={MUTED} opacity="0.3" />

        {/* code */}
        <rect x="262" y="152" width="92" height="8" rx="4" fill={GREEN_LIGHT} />
        <rect x="278" y="174" width="150" height="8" rx="4" fill={MUTED} opacity="0.5" />
        <rect x="278" y="196" width="108" height="8" rx="4" fill={GREEN} />
        <rect x="294" y="218" width="176" height="8" rx="4" fill={MUTED} opacity="0.38" />
        <rect x="294" y="240" width="84" height="8" rx="4" fill={GREEN} opacity="0.7" />
        <rect x="278" y="262" width="140" height="8" rx="4" fill={MUTED} opacity="0.42" />
        <rect x="262" y="284" width="60" height="8" rx="4" fill={GREEN_LIGHT} />

        {/* blinking caret block */}
        <rect x="332" y="284" width="12" height="10" fill={GREEN_LIGHT} opacity="0.85" />
      </g>

      {/* ---- phone, left ---- */}
      <g>
        <ellipse cx="150" cy="406" rx="52" ry="11" fill={INK} opacity="0.16" />
        <g transform="rotate(-8 150 320)">
          <rect x="106" y="210" width="92" height="180" rx="14" fill={INK} />
          <rect x="114" y="226" width="76" height="146" rx="5" fill={GREEN} />
          <rect x="138" y="217" width="28" height="5" rx="2.5" fill={GRAPHITE} />
          <rect x="124" y="238" width="42" height="6" rx="3" fill={CREAM} opacity="0.9" />
          <rect x="124" y="256" width="56" height="18" rx="4" fill={CREAM} opacity="0.85" />
          <rect x="124" y="280" width="56" height="18" rx="4" fill={CREAM} opacity="0.55" />
          <rect x="124" y="304" width="56" height="18" rx="4" fill={CREAM} opacity="0.35" />
          <rect x="124" y="336" width="56" height="14" rx="7" fill={INK} />
          <rect x="136" y="340.5" width="32" height="5" rx="2.5" fill={GREEN_LIGHT} />
        </g>
      </g>

      {/* ---- metrics card, right ---- */}
      <g>
        <ellipse cx="580" cy="382" rx="58" ry="12" fill={INK} opacity="0.14" />
        <g transform="rotate(7 580 300)">
          <rect x="506" y="216" width="148" height="156" rx="8" fill="url(#ha-paper)" />
          <rect x="522" y="234" width="62" height="7" rx="3.5" fill={GRAPHITE} opacity="0.55" />
          <rect x="522" y="250" width="40" height="12" rx="3" fill={GREEN_DEEP} />

          {/* bar chart */}
          <rect x="522" y="316" width="18" height="34" rx="2" fill={GRAPHITE} opacity="0.4" />
          <rect x="548" y="300" width="18" height="50" rx="2" fill={GREEN_DEEP} opacity="0.65" />
          <rect x="574" y="286" width="18" height="64" rx="2" fill={GREEN} />
          <rect x="600" y="268" width="18" height="82" rx="2" fill={GREEN_LIGHT} />
          <path
            d="M528 306 L556 292 L584 276 L612 258"
            stroke={INK}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="612" cy="258" r="5" fill={INK} />
        </g>
      </g>

      {/* ---- deploy tick, floating ---- */}
      <g className="animate-float">
        <circle cx="596" cy="150" r="34" fill={GREEN_DEEP} />
        <path
          d="M581 150 L592 161 L613 138"
          stroke={CREAM}
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>

      {/* ---- floating document fragments ---- */}
      <g className="animate-float-slow">
        <g transform="rotate(-14 154 106)">
          <rect x="118" y="74" width="72" height="62" rx="4" fill="url(#ha-paper)" />
          <rect x="130" y="90" width="46" height="4" rx="2" fill={MUTED} />
          <rect x="130" y="102" width="34" height="4" rx="2" fill={MUTED} opacity="0.55" />
        </g>
      </g>
      <g className="animate-float">
        <g transform="rotate(12 428 74)">
          <rect x="396" y="46" width="66" height="58" rx="4" fill="url(#ha-paper)" />
          <rect x="408" y="62" width="42" height="4" rx="2" fill={MUTED} />
          <rect x="408" y="74" width="28" height="4" rx="2" fill={MUTED} opacity="0.55" />
        </g>
      </g>
      <g className="animate-float-slow">
        <g transform="rotate(-8 660 314)">
          <rect x="632" y="288" width="58" height="52" rx="4" fill="url(#ha-paper)" />
          <rect x="642" y="302" width="36" height="4" rx="2" fill={MUTED} />
          <rect x="642" y="314" width="24" height="4" rx="2" fill={MUTED} opacity="0.55" />
        </g>
      </g>
    </svg>
  );
}
