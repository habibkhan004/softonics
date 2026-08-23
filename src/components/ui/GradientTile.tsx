import type { LucideIcon } from "lucide-react";

const PALETTES = [
  "linear-gradient(135deg, #38bdf8, #6366f1)",
  "linear-gradient(135deg, #6366f1, #a855f7)",
  "linear-gradient(135deg, #a855f7, #ec4899)",
  "linear-gradient(135deg, #22d3ee, #6366f1)",
  "linear-gradient(135deg, #818cf8, #38bdf8)",
];

function hashIndex(seed: string, mod: number) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash) % mod;
}

interface GradientTileProps {
  seed: string;
  icon: LucideIcon;
  className?: string;
  iconClassName?: string;
}

export default function GradientTile({ seed, icon: Icon, className = "", iconClassName = "" }: GradientTileProps) {
  const gradient = PALETTES[hashIndex(seed, PALETTES.length)];

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-2xl ${className}`}
      style={{ backgroundImage: gradient }}
      aria-hidden="true"
    >
      <div className="grid-pattern absolute inset-0 opacity-40 mix-blend-overlay" />
      <div className="absolute inset-0 bg-black/10" />
      <Icon className={`relative text-white/25 ${iconClassName}`} strokeWidth={1} />
    </div>
  );
}
