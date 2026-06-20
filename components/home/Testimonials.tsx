"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { easeOutExpo } from "@/lib/motion";
import { testimonials } from "@/lib/data/testimonials";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const count = testimonials.length;
  const active = testimonials[index];

  const go = (next: number) => {
    setDir(next > index || (index === count - 1 && next === 0) ? 1 : -1);
    setIndex((next + count) % count);
  };

  return (
    <section className="bg-paper py-24 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Eyebrow index="04">Client word</Eyebrow>
            <h2 className="mt-6 text-balance text-4xl sm:text-5xl">
              The relationship is the point.
            </h2>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-graphite">
              94% of our work is repeat business. This is why owners come back.
            </p>

            <div className="mt-10 flex items-center gap-5">
              <div className="flex gap-2">
                <NavButton label="Previous testimonial" onClick={() => go(index - 1)}>
                  <path d="M9 1 3 7l6 6" />
                </NavButton>
                <NavButton label="Next testimonial" onClick={() => go(index + 1)}>
                  <path d="M3 1l6 6-6 6" />
                </NavButton>
              </div>
              <span className="font-mono text-sm text-concrete">
                <span className="text-ink">
                  {String(index + 1).padStart(2, "0")}
                </span>{" "}
                / {String(count).padStart(2, "0")}
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="relative min-h-[20rem] border-t border-amber pt-8">
              <span
                aria-hidden
                className="font-display text-7xl font-black leading-none text-amber"
              >
                &ldquo;
              </span>
              <AnimatePresence mode="wait" custom={dir}>
                <motion.blockquote
                  key={index}
                  custom={dir}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, ease: easeOutExpo }}
                  className="mt-2"
                >
                  <p className="text-balance text-2xl font-medium leading-snug text-ink sm:text-[1.85rem] sm:leading-snug">
                    {active.quote}
                  </p>
                  <footer className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2">
                    <span className="font-display text-lg font-bold text-ink">
                      {active.author}
                    </span>
                    <span className="h-4 w-px bg-line-strong" />
                    <span className="text-sm text-graphite">
                      {active.role}, {active.company}
                    </span>
                  </footer>
                  <span className="mt-3 inline-block data-label text-amber">
                    Project — {active.project}
                  </span>
                </motion.blockquote>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function NavButton({
  children,
  label,
  onClick,
}: {
  children: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="grid h-11 w-11 place-items-center border border-ink/20 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
    >
      <svg width="12" height="14" viewBox="0 0 12 14" fill="none" aria-hidden>
        <g stroke="currentColor" strokeWidth="1.5">{children}</g>
      </svg>
    </button>
  );
}
