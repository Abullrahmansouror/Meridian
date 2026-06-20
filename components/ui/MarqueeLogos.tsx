import type { Certification } from "@/lib/data/certifications";

export function MarqueeLogos({ items }: { items: Certification[] }) {
  const loop = [...items, ...items];
  return (
    <div
      className="group/marquee relative overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
      }}
    >
      <div className="flex w-max animate-marquee items-center group-hover/marquee:[animation-play-state:paused]">
        {loop.map((c, i) => (
          <div
            key={i}
            className="flex items-center gap-4 whitespace-nowrap px-9"
            aria-hidden={i >= items.length}
          >
            <span className="font-display text-2xl font-extrabold tracking-tight text-paper">
              {c.abbr}
            </span>
            <span className="flex flex-col border-l border-mist/20 pl-4">
              <span className="text-sm text-mist/80">{c.name}</span>
              <span className="data-label text-amber">{c.detail}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
