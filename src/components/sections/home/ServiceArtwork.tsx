import Image from "next/image";
import type { LucideIcon } from "lucide-react";

/**
 * Small purple/green illustration that heads each service card.
 *
 * The reference uses bespoke 3D renders which are not in this repo, so this draws an
 * abstract device composition in the same palette. Pass `src` (transparent PNG/WebP)
 * to drop a real asset in without touching the card layout.
 */
export default function ServiceArtwork({
  icon: Icon,
  index = 0,
  src,
}: {
  icon: LucideIcon;
  index?: number;
  src?: string;
}) {
  if (src) {
    return (
      <Image src={src} alt="" width={240} height={180} className="h-[150px] w-auto object-contain" />
    );
  }

  // Three arrangements keep the row of cards from looking rubber-stamped.
  const variant = index % 3;

  return (
    <div className="relative h-[150px] w-[200px]">
      <svg viewBox="0 0 240 180" role="presentation" className="h-full w-full">
        <defs>
          <linearGradient id={`sa-green-${index}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8df5a4" />
            <stop offset="100%" stopColor="#3fbe60" />
          </linearGradient>
          <linearGradient id={`sa-purple-${index}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a672ff" />
            <stop offset="100%" stopColor="#6512d8" />
          </linearGradient>
        </defs>

        {/* monitor shell */}
        <rect x="28" y="8" width="184" height="124" rx="3" fill={`url(#sa-purple-${index})`} />
        <rect x="36" y="16" width="168" height="108" fill="#0d1018" />

        {/* green screen surface */}
        <rect x="44" y="24" width="152" height="92" fill={`url(#sa-green-${index})`} />

        {/* inner window — flips side per variant */}
        <rect
          x={variant === 1 ? 116 : 52}
          y="32"
          width="72"
          height="46"
          fill="#111522"
          opacity="0.92"
        />
        <rect x={variant === 1 ? 124 : 60} y="40" width="34" height="4" rx="2" fill="#8df5a4" />
        <rect x={variant === 1 ? 124 : 60} y="50" width="22" height="4" rx="2" fill="#5f6b80" />

        {/* cursor */}
        <path d="M168 84 L168 110 L175 103 L180 113 L185 110 L180 100 L189 100 Z" fill="#ffffff" />

        {/* stand + base accents */}
        <path d="M84 132 L156 132 L172 158 L68 158 Z" fill={`url(#sa-green-${index})`} />
        {variant === 2 ? (
          <>
            <rect x="58" y="150" width="60" height="10" rx="5" fill={`url(#sa-purple-${index})`} />
            <rect x="128" y="150" width="46" height="10" rx="5" fill="#5b12b8" />
          </>
        ) : (
          <>
            <rect
              x="62"
              y="146"
              width="56"
              height="10"
              rx="5"
              fill={`url(#sa-purple-${index})`}
              transform="rotate(-8 90 151)"
            />
            <rect
              x="126"
              y="148"
              width="50"
              height="10"
              rx="5"
              fill="#5b12b8"
              transform="rotate(7 151 153)"
            />
          </>
        )}
      </svg>

      {/* Service icon sits inside the green screen. */}
      <Icon
        className="absolute h-8 w-8 text-ink"
        strokeWidth={1.75}
        style={{
          left: variant === 1 ? "26%" : "62%",
          top: "36%",
        }}
      />
    </div>
  );
}
