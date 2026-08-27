"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import type { ProjectMetric } from "@/lib/types";

export default function MetricsField({ defaultItems = [] }: { defaultItems?: ProjectMetric[] }) {
  const [items, setItems] = useState<ProjectMetric[]>(defaultItems.length ? defaultItems : [{ value: "", label: "" }]);

  return (
    <div>
      <label className="admin-label">Headline metrics</label>
      <input type="hidden" name="metrics" value={JSON.stringify(items.filter((m) => m.value && m.label))} />
      <div className="flex flex-col gap-2">
        {items.map((item, i) => (
          <div key={i} className="grid grid-cols-[1fr_2fr_auto] gap-2">
            <input
              value={item.value}
              onChange={(e) => setItems((prev) => prev.map((row, idx) => (idx === i ? { ...row, value: e.target.value } : row)))}
              placeholder="38%"
              className="admin-input"
            />
            <input
              value={item.label}
              onChange={(e) => setItems((prev) => prev.map((row, idx) => (idx === i ? { ...row, label: e.target.value } : row)))}
              placeholder="Mobile conversion lift"
              className="admin-input"
            />
            <button type="button" onClick={() => setItems((prev) => prev.filter((_, idx) => idx !== i))} className="px-2">
              <X className="h-4 w-4 text-foreground-muted" />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => setItems((prev) => [...prev, { value: "", label: "" }])}
          className="inline-flex items-center gap-1 text-xs text-foreground-muted"
        >
          <Plus className="h-3 w-3" /> Add metric
        </button>
      </div>
    </div>
  );
}
