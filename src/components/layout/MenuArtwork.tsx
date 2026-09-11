import Image from "next/image";

/**
 * Purple 3D object that sits in the left column of the mega-menu.
 *
 * As with the hero, the reference uses a bespoke render that is not in this repo.
 * Pass `src` (transparent PNG/WebP) to drop the real asset in without touching layout.
 */
export default function MenuArtwork({ src }: { src?: string }) {
  if (src) {
    return <Image src={src} alt="" width={606} height={494} className="h-auto w-full object-contain" />;
  }

  return (
    <svg viewBox="0 0 340 250" role="presentation" className="h-auto w-full">
      <defs>
        <radialGradient id="mm-purple" cx="32%" cy="24%" r="78%">
          <stop offset="0%" stopColor="#c09aff" />
          <stop offset="48%" stopColor="#8734f0" />
          <stop offset="100%" stopColor="#43099a" />
        </radialGradient>
        <radialGradient id="mm-purple-2" cx="38%" cy="28%" r="76%">
          <stop offset="0%" stopColor="#a672ff" />
          <stop offset="58%" stopColor="#7313eb" />
          <stop offset="100%" stopColor="#3a0885" />
        </radialGradient>
        <linearGradient id="mm-green" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8df5a4" />
          <stop offset="100%" stopColor="#3fbe60" />
        </linearGradient>
      </defs>

      {/* green arc anchoring the palette */}
      <path
        d="M52 176 A 118 118 0 0 1 288 176"
        fill="none"
        stroke="url(#mm-green)"
        strokeWidth="10"
        strokeLinecap="round"
        opacity="0.9"
      />

      {/* volumetric purple cluster */}
      <ellipse cx="172" cy="150" rx="104" ry="88" fill="url(#mm-purple)" />
      <ellipse cx="118" cy="104" rx="50" ry="44" fill="url(#mm-purple-2)" />
      <ellipse cx="238" cy="108" rx="42" ry="37" fill="url(#mm-purple-2)" opacity="0.94" />
      <ellipse cx="124" cy="98" rx="20" ry="12" fill="#ffffff" opacity="0.2" />
      <ellipse cx="172" cy="236" rx="96" ry="14" fill="#05070d" opacity="0.5" />
    </svg>
  );
}
