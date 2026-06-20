"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { easeOutExpo } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { projects, sectors, type ProjectSector } from "@/lib/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Container } from "@/components/ui/Container";

type Filter = "All" | ProjectSector;

export function ProjectsExplorer() {
  const [filter, setFilter] = useState<Filter>("All");
  const filters: Filter[] = ["All", ...sectors];

  const visible =
    filter === "All"
      ? projects
      : projects.filter((p) => p.sector === filter);

  return (
    <section className="bg-paper py-16 lg:py-20">
      <Container>
        {/* Filter rail */}
        <div className="flex flex-col gap-6 border-b border-line pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1">
            {filters.map((f) => {
              const active = filter === f;
              const count =
                f === "All"
                  ? projects.length
                  : projects.filter((p) => p.sector === f).length;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  aria-pressed={active}
                  className={cn(
                    "shrink-0 border px-4 py-2 font-mono text-[0.7rem] uppercase tracking-[0.14em] transition-colors",
                    active
                      ? "border-amber bg-amber text-ink"
                      : "border-line text-graphite hover:border-ink hover:text-ink"
                  )}
                >
                  {f}
                  <span className={cn("ml-2", active ? "text-ink/60" : "text-concrete")}>
                    {String(count).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>
          <span className="data-label text-concrete">
            Showing {String(visible.length).padStart(2, "0")} of{" "}
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease: easeOutExpo }}
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {visible.map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
                priority={i < 3}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
