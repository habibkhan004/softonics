import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "outline";

/**
 * Hero/nav call-to-action. Rectangular with a modest radius — deliberately not a pill.
 * Primary: solid green with dark text and the arrow in a small contrasting box.
 * Outline: transparent with a green border and green text.
 */
export default function CTAButton({
  href,
  children,
  variant = "primary",
  withArrow = variant === "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
}) {
  const base =
    "group inline-flex items-center justify-center gap-2.5 rounded-md px-6 py-3 text-[15px] font-semibold transition-all duration-200";

  const variants: Record<Variant, string> = {
    primary:
      "border border-accent-indigo bg-accent-indigo text-ink hover:shadow-[0_0_6px_var(--accent-indigo),inset_0_0_6px_var(--accent-indigo)]",
    outline:
      "border border-accent-indigo bg-transparent text-accent-indigo hover:shadow-[0_0_6px_var(--accent-indigo)]",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {withArrow && (
        <span className="flex items-center justify-center rounded bg-ink p-[3px]">
          <ArrowRight className="h-3.5 w-3.5 text-accent-indigo transition-transform duration-200 group-hover:translate-x-0.5" />
        </span>
      )}
    </Link>
  );
}
