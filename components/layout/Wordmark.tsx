import Link from "next/link";
import { cn } from "@/lib/utils";
import { company } from "@/lib/data/company";

export function Wordmark({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label={`${company.name} — home`}
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span
        aria-hidden
        className="grid h-7 w-7 place-items-center border border-amber text-amber"
      >
        <span className="block h-2 w-2 bg-amber transition-transform duration-500 group-hover:rotate-45" />
      </span>
      <span
        className={cn(
          "font-display text-lg font-extrabold tracking-[0.04em]",
          tone === "light" ? "text-paper" : "text-ink"
        )}
      >
        {company.mark}
      </span>
    </Link>
  );
}
