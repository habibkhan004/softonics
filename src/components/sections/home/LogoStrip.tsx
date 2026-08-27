import { Building2, Activity, LineChart, HeartPulse, GraduationCap, Truck, Landmark, Factory, Radio } from "lucide-react";
import MotionReveal from "@/components/ui/MotionReveal";

const companies = [
  { name: "Vantage Retail Group", icon: Building2 },
  { name: "Helios Robotics", icon: Activity },
  { name: "Northwind Analytics", icon: LineChart },
  { name: "Meridian Health Partners", icon: HeartPulse },
  { name: "BrightPath Education", icon: GraduationCap },
  { name: "Cascade Logistics", icon: Truck },
  { name: "Solstice Financial", icon: Landmark },
  { name: "Ironclad Manufacturing", icon: Factory },
  { name: "Lumen Media Group", icon: Radio },
];

function LogoRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-4" aria-hidden={ariaHidden}>
      {companies.map((company) => (
        <div
          key={company.name}
          className="glass-card flex items-center gap-3 rounded-full py-2.5 pl-2.5 pr-5"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-indigo/15">
            <company.icon className="h-4 w-4 text-accent-blue" strokeWidth={1.75} />
          </span>
          <span className="whitespace-nowrap font-mono text-sm uppercase tracking-wider text-foreground-muted">
            {company.name}
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
          Trusted by teams at
        </p>
      </MotionReveal>

      <div className="group mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused]">
          <LogoRow />
          <LogoRow ariaHidden />
        </div>
      </div>
    </div>
  );
}
