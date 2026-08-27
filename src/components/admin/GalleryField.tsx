"use client";

import { useState } from "react";
import { ImagePlus, Loader2, Plus, X } from "lucide-react";
import type { ProjectGalleryItem } from "@/lib/types";

export default function GalleryField({ defaultItems = [] }: { defaultItems?: ProjectGalleryItem[] }) {
  const [items, setItems] = useState(defaultItems);
  const [busy, setBusy] = useState(false);

  async function onFile(file: File) {
    setBusy(true);
    const body = new FormData();
    body.append("file", file);
    const res = await fetch("/api/upload", { method: "POST", body });
    const data = (await res.json()) as { url?: string };
    setBusy(false);
    if (data.url) {
      const url = data.url;
      setItems((prev) => [...prev, { url, caption: "" }]);
    }
  }

  return (
    <div>
      <label className="admin-label">Gallery</label>
      <input type="hidden" name="gallery" value={JSON.stringify(items)} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map((item, i) => (
          <div key={`${item.url}-${i}`} className="overflow-hidden rounded-2xl border border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.url} alt="" className="h-36 w-full object-cover" />
            <div className="flex items-center gap-2 p-2">
              <input
                value={item.caption ?? ""}
                onChange={(e) =>
                  setItems((prev) => prev.map((row, idx) => (idx === i ? { ...row, caption: e.target.value } : row)))
                }
                placeholder="Caption"
                className="admin-input"
              />
              <button type="button" onClick={() => setItems((prev) => prev.filter((_, idx) => idx !== i))}>
                <X className="h-4 w-4 text-foreground-muted" />
              </button>
            </div>
          </div>
        ))}
        <label className="flex h-36 cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border text-sm text-foreground-muted">
          {busy ? <Loader2 className="h-5 w-5 animate-spin" /> : <ImagePlus className="h-5 w-5" />}
          {busy ? "Uploading…" : "Add image"}
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) void onFile(file);
            }}
          />
        </label>
      </div>
      <button
        type="button"
        onClick={() => setItems((prev) => [...prev, { url: "", caption: "" }])}
        className="mt-3 inline-flex items-center gap-1 text-xs text-foreground-muted"
      >
        <Plus className="h-3 w-3" /> Add by URL
      </button>
    </div>
  );
}
