"use client";

import Image from "next/image";
import Link from "next/link";
import { brand } from "@/lib/brand";

type Variant = "nav" | "lockup" | "mark";

export default function Logo({
  href = "/",
  variant = "nav",
  inverted = false,
}: {
  href?: string;
  variant?: Variant;
  inverted?: boolean;
}) {
  if (variant === "lockup") {
    return (
      <Link href={href} className="inline-flex overflow-hidden rounded-sm bg-white p-2">
        <Image
          src={brand.lockup}
          alt={brand.legalName}
          width={640}
          height={180}
          className="h-10 w-auto max-w-[min(220px,70vw)] object-contain object-left sm:h-12 sm:max-w-none"
          priority
        />
      </Link>
    );
  }

  if (variant === "mark") {
    return (
      <Link href={href} className="inline-flex" aria-label={brand.legalName}>
        {/* The mark's artwork is dark, so it sits on a white chip to stay legible on the dark UI. */}
        <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-white p-1">
          <Image src={brand.mark} alt="" width={72} height={72} className="h-full w-full object-contain" />
        </span>
      </Link>
    );
  }

  return (
    <Link href={href} className="flex min-w-0 items-center gap-2.5" aria-label={brand.legalName}>
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-white p-[3px] sm:h-9 sm:w-9">
        <Image src={brand.mark} alt="" width={72} height={72} className="h-full w-full object-contain" />
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={`font-display text-[14px] font-semibold tracking-[0.18em] sm:text-[15px] sm:tracking-[0.2em] ${
            inverted ? "text-paper" : "text-foreground"
          }`}
        >
          {brand.name}
        </span>
        <span
          className={`mt-1 hidden text-[10px] font-medium uppercase tracking-[0.16em] min-[400px]:block sm:text-[11px] ${
            inverted ? "text-white/55" : "text-foreground-muted"
          }`}
        >
          Digital Solutions
        </span>
      </span>
    </Link>
  );
}
