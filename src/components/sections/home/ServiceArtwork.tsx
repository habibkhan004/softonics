import Image from "next/image";

/**
 * Illustration heading each service card.
 *
 * Every service gets its own scene rather than one device recoloured six times — the
 * previous version drew the same monitor for all of them, so the column read as repeated.
 * Scenes are keyed by service slug; anything unrecognised falls back to the window.
 *
 * Pass `src` (transparent PNG/WebP) to drop a real render in without touching card layout.
 */

const INK = "#0f1211";
const GRAPHITE = "#2a3330";
const GREEN = "#2a9f56";
const GREEN_LIGHT = "#4ec573";
const GREEN_DEEP = "#12703f";
const CREAM = "#f5f0e4";
const MUTED = "#8e978f";

/** Soft contact shadow every scene shares, so the row sits on a common ground. */
function Ground() {
  return <ellipse cx="120" cy="166" rx="76" ry="8" fill={INK} opacity="0.1" />;
}

function CodeEditor() {
  return (
    <>
      <Ground />
      <rect x="30" y="22" width="180" height="132" rx="6" fill={INK} />
      <rect x="30" y="22" width="180" height="20" rx="6" fill={GRAPHITE} />
      <rect x="30" y="36" width="180" height="6" fill={GRAPHITE} />
      <circle cx="42" cy="32" r="3.5" fill={GREEN_LIGHT} />
      <circle cx="53" cy="32" r="3.5" fill={MUTED} opacity="0.5" />
      <circle cx="64" cy="32" r="3.5" fill={MUTED} opacity="0.3" />

      {/* gutter */}
      <rect x="30" y="42" width="20" height="112" fill={GRAPHITE} opacity="0.55" />

      {/* code lines — the indentation carries the "structured build" idea */}
      <rect x="58" y="54" width="52" height="5" rx="2.5" fill={GREEN_LIGHT} />
      <rect x="68" y="68" width="76" height="5" rx="2.5" fill={MUTED} opacity="0.55" />
      <rect x="68" y="82" width="58" height="5" rx="2.5" fill={GREEN} />
      <rect x="78" y="96" width="80" height="5" rx="2.5" fill={MUTED} opacity="0.4" />
      <rect x="78" y="110" width="44" height="5" rx="2.5" fill={GREEN} opacity="0.75" />
      <rect x="68" y="124" width="66" height="5" rx="2.5" fill={MUTED} opacity="0.45" />
      <rect x="58" y="138" width="30" height="5" rx="2.5" fill={GREEN_LIGHT} />

      {/* angle brackets — the one literal cue */}
      <path
        d="M176 68 L166 84 L176 100 M192 68 L202 84 L192 100"
        stroke={GREEN_LIGHT}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </>
  );
}

function BrowserWindow() {
  return (
    <>
      <Ground />
      {/* card peeking out behind, so the scene has depth */}
      <rect x="46" y="14" width="160" height="120" rx="5" fill={GREEN_DEEP} opacity="0.25" />

      <rect x="24" y="26" width="176" height="128" rx="6" fill={INK} />
      <rect x="24" y="26" width="176" height="22" rx="6" fill={GRAPHITE} />
      <rect x="24" y="42" width="176" height="6" fill={GRAPHITE} />
      <circle cx="36" cy="37" r="3" fill={MUTED} opacity="0.5" />
      <circle cx="46" cy="37" r="3" fill={MUTED} opacity="0.35" />
      <rect x="58" y="33" width="130" height="8" rx="4" fill={GREEN_DEEP} />
      <rect x="62" y="35.5" width="46" height="3" rx="1.5" fill={GREEN_LIGHT} />

      {/* page layout inside the viewport */}
      <rect x="34" y="58" width="156" height="36" rx="3" fill={GREEN} />
      <rect x="44" y="68" width="62" height="5" rx="2.5" fill={CREAM} opacity="0.9" />
      <rect x="44" y="79" width="40" height="4" rx="2" fill={CREAM} opacity="0.55" />
      <rect x="34" y="102" width="48" height="42" rx="3" fill={GRAPHITE} />
      <rect x="88" y="102" width="48" height="42" rx="3" fill={GRAPHITE} />
      <rect x="142" y="102" width="48" height="42" rx="3" fill={GREEN_DEEP} />
    </>
  );
}

function MobileDevice() {
  return (
    <>
      <Ground />
      {/* second screen behind — the same app on a larger device */}
      <rect x="122" y="40" width="92" height="108" rx="7" fill={GRAPHITE} />
      <rect x="130" y="48" width="76" height="92" rx="3" fill={GREEN_DEEP} />
      <rect x="138" y="58" width="44" height="4" rx="2" fill={GREEN_LIGHT} opacity="0.8" />
      <rect x="138" y="68" width="58" height="4" rx="2" fill={CREAM} opacity="0.35" />
      <rect x="138" y="78" width="50" height="4" rx="2" fill={CREAM} opacity="0.25" />

      {/* phone in front */}
      <rect x="40" y="20" width="78" height="134" rx="12" fill={INK} />
      <rect x="47" y="32" width="64" height="104" rx="4" fill={GREEN} />
      <rect x="68" y="25" width="22" height="4" rx="2" fill={GRAPHITE} />

      {/* app rows */}
      <rect x="54" y="40" width="36" height="5" rx="2.5" fill={CREAM} opacity="0.9" />
      <rect x="54" y="56" width="50" height="14" rx="3" fill={CREAM} opacity="0.85" />
      <rect x="54" y="76" width="50" height="14" rx="3" fill={CREAM} opacity="0.6" />
      <rect x="54" y="96" width="50" height="14" rx="3" fill={CREAM} opacity="0.4" />
      <rect x="54" y="118" width="50" height="10" rx="5" fill={INK} />
      <rect x="63" y="121.5" width="32" height="3" rx="1.5" fill={GREEN_LIGHT} />

      <circle cx="79" cy="146" r="4" fill={GRAPHITE} />
    </>
  );
}

function SearchGrowth() {
  return (
    <>
      <Ground />
      {/* ascending bars */}
      <rect x="34" y="112" width="24" height="42" rx="2" fill={GRAPHITE} />
      <rect x="64" y="88" width="24" height="66" rx="2" fill={GREEN_DEEP} />
      <rect x="94" y="62" width="24" height="92" rx="2" fill={GREEN} />
      <rect x="124" y="40" width="24" height="114" rx="2" fill={GREEN_LIGHT} />

      {/* trend line + arrowhead */}
      <path
        d="M44 102 L76 78 L106 52 L146 26"
        stroke={INK}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M132 20 L154 16 L150 38 Z" fill={INK} />

      {/* magnifier reading the growth */}
      <circle cx="176" cy="96" r="28" fill={CREAM} stroke={INK} strokeWidth="5" />
      <path d="M157 116 L142 132" stroke={INK} strokeWidth="8" strokeLinecap="round" />
      <path
        d="M164 98 L172 106 L190 86"
        stroke={GREEN}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </>
  );
}

function ContentBlocks() {
  return (
    <>
      <Ground />
      {/* template shell */}
      <rect x="26" y="24" width="150" height="130" rx="6" fill={INK} />
      <rect x="34" y="32" width="134" height="18" rx="3" fill={GREEN} />
      <rect x="42" y="38" width="34" height="6" rx="3" fill={CREAM} opacity="0.85" />
      <rect x="122" y="38" width="38" height="6" rx="3" fill={CREAM} opacity="0.4" />

      <rect x="34" y="58" width="40" height="88" rx="3" fill={GRAPHITE} />
      <rect x="41" y="66" width="26" height="4" rx="2" fill={GREEN_LIGHT} opacity="0.75" />
      <rect x="41" y="76" width="26" height="4" rx="2" fill={MUTED} opacity="0.4" />
      <rect x="41" y="86" width="18" height="4" rx="2" fill={MUTED} opacity="0.4" />

      <rect x="82" y="58" width="86" height="42" rx="3" fill={GREEN_DEEP} />
      <rect x="82" y="108" width="86" height="38" rx="3" fill={GRAPHITE} />
      <rect x="90" y="118" width="60" height="5" rx="2.5" fill={MUTED} opacity="0.5" />
      <rect x="90" y="130" width="44" height="5" rx="2.5" fill={MUTED} opacity="0.35" />

      {/* plugin block slotting in — the extensibility cue */}
      <rect x="150" y="92" width="54" height="54" rx="6" fill={GREEN_LIGHT} />
      <path
        d="M166 108 h10 a6 6 0 0 1 0 12 h-10 z M166 128 h22"
        stroke={INK}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </>
  );
}

function DesignBoard() {
  return (
    <>
      <Ground />
      {/* artboard */}
      <rect x="34" y="24" width="150" height="118" rx="4" fill={CREAM} stroke={INK} strokeWidth="4" />
      <circle cx="70" cy="60" r="20" fill={GREEN} />
      <rect x="100" y="42" width="68" height="38" rx="3" fill={INK} />
      <rect x="50" y="94" width="118" height="6" rx="3" fill={GRAPHITE} opacity="0.5" />
      <rect x="50" y="108" width="86" height="6" rx="3" fill={GRAPHITE} opacity="0.3" />

      {/* swatch row */}
      <circle cx="58" cy="128" r="7" fill={GREEN_LIGHT} />
      <circle cx="76" cy="128" r="7" fill={GREEN_DEEP} />
      <circle cx="94" cy="128" r="7" fill={INK} />

      {/* pen nib drawing on the board */}
      <path d="M176 98 L202 72 L214 84 L188 110 L172 114 Z" fill={GREEN_DEEP} />
      <path d="M176 98 L188 110 L172 114 Z" fill={INK} />

      {/* selection handles */}
      <g fill={CREAM} stroke={GREEN} strokeWidth="3">
        <rect x="30" y="20" width="8" height="8" />
        <rect x="180" y="20" width="8" height="8" />
        <rect x="30" y="138" width="8" height="8" />
        <rect x="180" y="138" width="8" height="8" />
      </g>
    </>
  );
}

const SCENES: Record<string, () => React.JSX.Element> = {
  "custom-software-development": CodeEditor,
  "web-application-development": BrowserWindow,
  "mobile-app-development": MobileDevice,
  "seo-digital-growth": SearchGrowth,
  "wordpress-development": ContentBlocks,
  "ui-ux-design": DesignBoard,
};

export default function ServiceArtwork({
  slug,
  src,
}: {
  /** Service slug — selects the scene. */
  slug?: string;
  src?: string;
}) {
  if (src) {
    return (
      <Image src={src} alt="" width={240} height={180} className="h-[150px] w-auto object-contain" />
    );
  }

  const Scene = (slug && SCENES[slug]) || BrowserWindow;

  return (
    <svg viewBox="0 0 240 180" role="presentation" className="h-[150px] w-[200px]">
      <Scene />
    </svg>
  );
}
