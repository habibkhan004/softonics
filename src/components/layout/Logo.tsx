"use client";

import Image from "next/image";
import Link from "next/link";
import { brand } from "@/lib/brand";

type Variant = "nav" | "lockup" | "mark";

export default function Logo({ href = "/", variant = "nav" }: { href?: string; variant?: Variant }) {
  if (variant === "lockup") {
    return (
      <Link href={href} className="inline-flex overflow-hidden rounded-lg bg-black">
        <Image
          src={brand.lockup}
          alt={brand.legalName}
          width={640}
          height={180}
          className="h-11 w-auto object-contain object-left sm:h-12"
          priority
        />
      </Link>
    );
  }

  if (variant === "mark") {
    return (
      <Link href={href} className="inline-flex" aria-label={brand.legalName}>
        <Image src={brand.mark} alt="" width={72} height={72} className="h-9 w-9 object-contain mix-blend-multiply" />
      </Link>
    );
  }

  return (
    <Link href={href} className="flex items-center gap-2.5" aria-label={brand.legalName}>
      <Image src={brand.mark} alt="" width={72} height={72} className="h-9 w-9 object-contain mix-blend-multiply" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[15px] font-bold tracking-[0.2em] text-foreground">{brand.name}</span>
        <span className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.2em] text-foreground-muted">
          Digital Solutions
        </span>
      </span>
    </Link>
  );
}
