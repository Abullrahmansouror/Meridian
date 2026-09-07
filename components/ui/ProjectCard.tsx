import Link from "next/link";
import Image from "next/image";
import { img, cn } from "@/lib/utils";
import type { Project } from "@/lib/data/projects";
import { CornerTicks } from "./Drafting";

export function ProjectCard({
  project,
  priority = false,
  aspect = "portrait",
  className,
}: {
  project: Project;
  priority?: boolean;
  aspect?: "portrait" | "landscape";
  className?: string;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group relative block overflow-hidden bg-ink",
        className
      )}
    >
      <div
        className={cn(
          "relative w-full overflow-hidden",
          aspect === "portrait" ? "aspect-[4/5]" : "aspect-[16/10]"
        )}
      >
        <Image
          src={img(project.image, { w: 1100 })}
          alt={project.name}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-ink/40" />
      </div>

      <CornerTicks className="m-4" color="border-paper/40" />

      {/* Top row: sector + coordinates */}
      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
        <span className="data-label bg-amber px-2 py-1 text-ink">
          {project.sector}
        </span>
        <span className="data-label text-paper/55">{project.coordinates}</span>
      </div>

      {/* Bottom: title, meta, hover specs */}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <h3 className="font-display text-2xl leading-tight text-paper sm:text-[1.7rem]">
          {project.name}
        </h3>
        <p className="mt-1.5 data-label text-paper/60">
          {project.location} · {project.year}
        </p>

        <div className="grid grid-cols-1 overflow-hidden transition-all duration-500 ease-out [grid-template-rows:0fr] group-hover:[grid-template-rows:1fr] group-focus-visible:[grid-template-rows:1fr] [@media(hover:none)]:[grid-template-rows:1fr]">
          <div className="min-h-0">
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 border-t border-paper/15 pt-4">
              <Spec label="Value" value={project.value} />
              <Spec label="Area" value={project.area} />
              <Spec label="Delivery" value={project.delivery} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <span className="flex flex-col">
      <span className="data-label text-paper/45">{label}</span>
      <span className="mt-0.5 font-mono text-sm text-paper">{value}</span>
    </span>
  );
}
