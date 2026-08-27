"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

export default function ListField({
  name,
  label,
  defaultItems = [],
  placeholder = "Add item",
}: {
  name: string;
  label: string;
  defaultItems?: string[];
  placeholder?: string;
}) {
  const [items, setItems] = useState(defaultItems);
  const [draft, setDraft] = useState("");

  function add() {
    const value = draft.trim();
    if (!value) return;
    setItems((prev) => [...prev, value]);
    setDraft("");
  }

  return (
    <div>
      <label className="admin-label">{label}</label>
      <input type="hidden" name={name} value={JSON.stringify(items)} />
      <div className="flex flex-col gap-2">
        {items.map((item, i) => (
          <div key={`${item}-${i}`} className="flex items-start gap-2">
            <span className="flex-1 rounded-xl border border-border bg-surface px-3 py-2 text-sm">{item}</span>
            <button
              type="button"
              onClick={() => setItems((prev) => prev.filter((_, idx) => idx !== i))}
              className="rounded-full p-2 text-foreground-muted hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
        <div className="flex gap-2">
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                add();
              }
            }}
            placeholder={placeholder}
            className="admin-input"
          />
          <button
            type="button"
            onClick={add}
            className="rounded-full border border-border px-3 text-foreground-muted hover:text-foreground"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
