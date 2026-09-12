import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";
type Size = "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

interface LinkButtonProps extends BaseProps {
  href: string;
  onClick?: never;
}

interface ClickButtonProps
  extends BaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  href?: never;
}

type ButtonProps = LinkButtonProps | ClickButtonProps;

const sizeClasses: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const variantClasses: Record<Variant, string> = {
  primary:
    "text-paper shadow-[0_0_0_1px_rgba(12,107,60,0.35),0_8px_30px_-6px_rgba(12,107,60,0.25)] hover:shadow-[0_0_0_1px_rgba(12,107,60,0.55),0_0_16px_2px_rgba(12,107,60,0.3)] [&>svg:last-child]:h-6 [&>svg:last-child]:w-6 [&>svg:last-child]:shrink-0 [&>svg:last-child]:rounded-md [&>svg:last-child]:bg-paper [&>svg:last-child]:p-1 [&>svg:last-child]:text-accent-indigo",
  outline:
    "border border-border bg-transparent text-foreground hover:bg-surface-hover hover:border-accent-indigo/50",
  ghost: "bg-transparent text-foreground-muted hover:text-foreground hover:bg-surface-hover",
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  href,
  ...rest
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-200 ease-out active:scale-[0.98] ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
  const style = variant === "primary" ? { backgroundImage: "var(--gradient-brand)" } : undefined;

  if (href) {
    return (
      <Link href={href} className={classes} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} style={style} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
