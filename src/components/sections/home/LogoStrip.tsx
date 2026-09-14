import { MapPin } from "lucide-react";
import MotionReveal from "@/components/ui/MotionReveal";
import { markets } from "@/lib/data/stats";

function MarketRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-4" aria-hidden={ariaHidden}>
      {markets.map((market) => (
        <div
          key={market}
          className="glass-card flex items-center gap-3 rounded-md py-2.5 pl-2.5 pr-5"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-indigo/15">
            <MapPin className="h-4 w-4 text-accent-blue" strokeWidth={1.75} />
          </span>
          <span className="whitespace-nowrap font-mono text-sm uppercase tracking-wider text-foreground-muted">
            {market}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function LogoStrip() {
  return (
    <div className="max-w-full overflow-hidden border-y border-border py-10">
      <MotionReveal>
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-foreground-muted">
          Delivering for clients across
        </p>
      </MotionReveal>

      <div className="group mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-4">
          <MarketRow />
          <MarketRow ariaHidden />
        </div>
      </div>
    </div>
  );
}
