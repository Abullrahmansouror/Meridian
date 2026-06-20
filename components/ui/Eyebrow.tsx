import { cn } from "@/lib/utils";

export function Eyebrow({
  index,
  children,
  tone = "dark",
  className,
}: {
  index?: string;
  children: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "data-label inline-flex items-center gap-2.5",
        tone === "light" ? "text-mist" : "text-graphite",
        className
      )}
    >
      <span className="h-px w-7 bg-amber" aria-hidden />
      {index && <span className="text-amber">{index}</span>}
      <span>{children}</span>
    </span>
  );
}
