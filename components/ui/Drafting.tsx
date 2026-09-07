import { cn } from "@/lib/utils";

/**
 * Registration / crop marks at the four corners of a framed element.
 * Parent must be positioned (relative). This is the recurring drafting signature.
 */
export function CornerTicks({
  className,
  size = 14,
  color = "border-amber",
}: {
  className?: string;
  size?: number;
  color?: string;
}) {
  const s = { width: size, height: size };
  const c = cn("absolute", color);
  return (
    <span
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 z-10", className)}
    >
      <span className={cn(c, "left-0 top-0 border-l border-t")} style={s} />
      <span className={cn(c, "right-0 top-0 border-r border-t")} style={s} />
      <span className={cn(c, "bottom-0 left-0 border-b border-l")} style={s} />
      <span className={cn(c, "bottom-0 right-0 border-b border-r")} style={s} />
    </span>
  );
}

/** A drafting dimension line: end ticks, a centered label, lines that draw in. */
export function DimensionLine({
  label,
  className,
  tone = "dark",
}: {
  label?: string;
  className?: string;
  tone?: "dark" | "light";
}) {
  const lineColor = tone === "light" ? "bg-mist/30" : "bg-line-strong";
  const tickColor = "bg-amber";
  const textColor = tone === "light" ? "text-mist/70" : "text-concrete";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className={cn("h-2.5 w-px shrink-0", tickColor)} />
      <span className={cn("h-px flex-1", lineColor)} />
      {label && (
        <span className={cn("data-label shrink-0 whitespace-nowrap", textColor)}>
          {label}
        </span>
      )}
      <span className={cn("h-px flex-1", lineColor)} />
      <span className={cn("h-2.5 w-px shrink-0", tickColor)} />
    </div>
  );
}
