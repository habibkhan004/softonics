"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/lib/types";

export default function PricingFaq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-3">
      {items.map((item, i) => (
        <div key={item.question} className="glass-card overflow-hidden rounded-2xl">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            aria-expanded={open === i}
          >
            <span className="text-sm font-medium text-foreground sm:text-base">{item.question}</span>
            <ChevronDown
              className={`h-4 w-4 shrink-0 text-foreground-muted transition-transform ${
                open === i ? "rotate-180" : ""
              }`}
            />
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-sm text-foreground-muted">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}
