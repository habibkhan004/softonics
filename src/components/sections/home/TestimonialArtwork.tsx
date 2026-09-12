import Image from "next/image";

/**
 * Small purple/green mark that sits above the testimonial quote.
 *
 * Stands in for the reference's bespoke 3D render, which is not in this repo.
 * Pass `src` (transparent PNG/WebP) to swap in a real asset without touching layout.
 */
export default function TestimonialArtwork({ src }: { src?: string }) {
  if (src) {
    return <Image src={src} alt="" width={200} height={140} className="h-[110px] w-auto object-contain" />;
  }

  return (
    <svg viewBox="0 0 200 140" role="presentation" className="h-[110px] w-auto">
      <defs>
        <linearGradient id="ta-green" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4ec573" />
          <stop offset="100%" stopColor="#12703f" />
        </linearGradient>
        <linearGradient id="ta-purple" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3a4440" />
          <stop offset="100%" stopColor="#1a211f" />
        </linearGradient>
      </defs>

      {/* green plates behind */}
      <rect x="24" y="8" width="42" height="34" fill="url(#ta-green)" />
      <rect x="138" y="98" width="42" height="34" fill="url(#ta-green)" />

      {/* document */}
      <rect x="74" y="20" width="104" height="76" fill="#ffffff" />
      <rect x="86" y="34" width="78" height="7" fill="url(#ta-green)" />
      <rect x="86" y="48" width="78" height="7" fill="url(#ta-green)" />
      <rect x="86" y="62" width="52" height="7" fill="url(#ta-green)" />
      {/* folded corner */}
      <path d="M74 96 L108 96 L74 118 Z" fill="#ded7c6" />

      {/* thumbs-up */}
      <path
        d="M44 60 C44 50 52 42 56 36 C58 33 57 26 60 24 C66 21 70 26 69 33 C68.4 37 66 42 66 42 L86 42 L86 112 L60 112 C50 112 44 106 44 96 Z"
        fill="url(#ta-purple)"
      />
      <rect x="24" y="62" width="26" height="54" rx="3" fill="url(#ta-purple)" />
      <rect x="30" y="70" width="14" height="4" rx="2" fill="#ffffff" opacity="0.25" />
    </svg>
  );
}
