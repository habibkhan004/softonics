import type { Stat } from "@/lib/types";

export default function StatCard({ label, value }: Stat) {
  return (
    <div className="glass-card rounded-2xl p-6 text-center sm:text-left">
      <div className="text-3xl sm:text-4xl font-semibold gradient-text">{value}</div>
      <div className="mt-1 text-sm text-foreground-muted">{label}</div>
    </div>
  );
}
