import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  index?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
  children?: React.ReactNode;
};

export function SectionHeader({
  eyebrow,
  index,
  title,
  lead,
  align = "left",
  tone = "dark",
  className,
  children,
}: Props) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <Eyebrow index={index} tone={tone}>
        {eyebrow}
      </Eyebrow>
      <h2
        className={cn(
          "max-w-3xl text-balance text-4xl sm:text-5xl lg:text-[3.4rem]",
          tone === "light" ? "text-paper" : "text-ink"
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "max-w-2xl text-lg leading-relaxed",
            align === "center" && "mx-auto",
            tone === "light" ? "text-mist/80" : "text-graphite"
          )}
        >
          {lead}
        </p>
      )}
      {children}
    </Reveal>
  );
}
