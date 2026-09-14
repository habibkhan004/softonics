"use client";

import Image from "next/image";
import Link from "next/link";
import { brand } from "@/lib/brand";

type Variant = "nav" | "lockup" | "mark";

/** Intrinsic size of public/brand/logo-lockup.png. */
const LOCKUP_WIDTH = 1436;
const LOCKUP_HEIGHT = 290;

export default function Logo({ href = "/", variant = "nav" }: { href?: string; variant?: Variant }) {
  if (variant === "lockup") {
    return (
      <Link href={href} className="inline-flex overflow-hidden rounded-sm bg-paper p-2" aria-label={brand.legalName}>
        <Image
          src={brand.lockup}
          alt={brand.legalName}
          width={LOCKUP_WIDTH}
          height={LOCKUP_HEIGHT}
          className="h-9 w-auto max-w-[min(220px,70vw)] object-contain object-left sm:h-10 sm:max-w-none"
          priority
        />
      </Link>
    );
  }

  if (variant === "mark") {
    return (
      <Link href={href} className="inline-flex" aria-label={brand.legalName}>
        <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-paper p-1">
          <Image src={brand.mark} alt="" width={72} height={72} className="h-full w-full object-contain" />
        </span>
      </Link>
    );
  }

  // The lockup's ground matches the header background, so it sits directly on the bar.
  return (
    <Link href={href} className="flex min-w-0 items-center" aria-label={brand.legalName}>
      <Image
        src={brand.lockup}
        alt={brand.legalName}
        width={LOCKUP_WIDTH}
        height={LOCKUP_HEIGHT}
        className="h-8 w-auto max-w-[62vw] object-contain object-left sm:h-9"
        priority
      />
    </Link>
  );
}
