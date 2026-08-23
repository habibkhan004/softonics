import MotionReveal from "@/components/ui/MotionReveal";

const companies = [
  "Vantage Retail Group",
  "Helios Robotics",
  "Northwind Analytics",
  "Meridian Health Partners",
  "BrightPath Education",
  "Cascade Logistics",
];

export default function LogoStrip() {
  return (
    <div className="border-y border-border py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <MotionReveal>
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-foreground-muted">
            Trusted by teams at
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {companies.map((name) => (
              <span
                key={name}
                className="font-mono text-sm uppercase tracking-wider text-foreground-muted/60"
              >
                {name}
              </span>
            ))}
          </div>
        </MotionReveal>
      </div>
    </div>
  );
}
