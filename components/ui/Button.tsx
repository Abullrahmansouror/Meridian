import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "solid" | "outline" | "outlineLight" | "ghost";
type Size = "md" | "sm";

const base =
  "group/btn inline-flex items-center justify-center gap-2.5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.16em] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

const sizes: Record<Size, string> = {
  md: "h-12 px-6",
  sm: "h-10 px-4 text-[0.65rem]",
};

const variants: Record<Variant, string> = {
  primary: "bg-amber text-paper hover:bg-amber-deep",
  solid: "bg-ink text-paper hover:bg-ink-soft",
  outline:
    "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper",
  outlineLight:
    "border border-mist/35 text-paper hover:bg-paper hover:text-ink hover:border-paper",
  ghost: "px-0 text-ink hover:text-amber",
};

export function buttonStyles(variant: Variant = "primary", size: Size = "md") {
  return cn(base, sizes[size], variants[variant], variant === "ghost" && "h-auto");
}

function Arrow() {
  return (
    <svg
      width="16"
      height="9"
      viewBox="0 0 16 9"
      fill="none"
      aria-hidden
      className="transition-transform duration-300 ease-out group-hover/btn:translate-x-1"
    >
      <path d="M0 4.5h14M10.5 1 14 4.5 10.5 8" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

type LinkProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  arrow = true,
  className,
  children,
}: LinkProps) {
  return (
    <Link href={href} className={cn(buttonStyles(variant, size), className)}>
      {children}
      {arrow && <Arrow />}
    </Link>
  );
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
};

export function Button({
  variant = "primary",
  size = "md",
  arrow = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(buttonStyles(variant, size), className)} {...props}>
      {children}
      {arrow && <Arrow />}
    </button>
  );
}
