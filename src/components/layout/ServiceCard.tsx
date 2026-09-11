import Link from "next/link";

/**
 * Dense editorial card used in the nav mega-menu.
 * Flat slate surface, minimal radius, no shadow — the hover arrow is the only flourish.
 */
export default function ServiceCard({
  title,
  description,
  href,
  onClick,
}: {
  title: string;
  description: string;
  href: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group relative flex min-h-[132px] flex-col rounded-sm bg-surface p-4 transition-colors duration-200 hover:bg-surface-hover"
    >
      <p className="pr-6 text-[16px] font-medium leading-snug text-white">{title}</p>
      <p className="mt-1.5 text-[15px] leading-[1.5] text-foreground-muted">{description}</p>

      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        aria-hidden="true"
        className="absolute bottom-4 right-4 h-4 w-4 -translate-x-5 -translate-y-5 text-accent-indigo opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
      >
        <path d="M1 1L17 17M17 17V4.04762M17 17H4.04762" stroke="currentColor" />
      </svg>
    </Link>
  );
}
