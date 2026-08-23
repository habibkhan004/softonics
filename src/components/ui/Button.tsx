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
    "text-black shadow-[0_0_0_1px_rgba(201,162,39,0.4),0_8px_30px_-6px_rgba(201,162,39,0.45)] hover:shadow-[0_0_0_1px_rgba(201,162,39,0.5),0_10px_40px_-4px_rgba(138,106,26,0.5)]",
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
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 ease-out active:scale-[0.98] ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
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
