"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { easeOutExpo } from "@/lib/motion";
import { img } from "@/lib/utils";
import { company } from "@/lib/data/company";
import { services } from "@/lib/data/services";
import { ButtonLink } from "@/components/ui/Button";
import { CornerTicks } from "@/components/ui/Drafting";

const headlineLines = ["We build", "the structures", "that last."];

export function Hero() {
  const reduce = useReducedMotion();

  const rise = (i: number) =>
    reduce
      ? {}
      : {
          initial: { y: "115%" },
          animate: { y: "0%" },
          transition: { duration: 0.95, ease: easeOutExpo, delay: 0.25 + i * 0.1 },
        };

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, ease: easeOutExpo, delay },
        };

  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      {/* Blueprint grid backdrop */}
      <motion.div
        aria-hidden
        className="grid-blueprint-dark absolute inset-0"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink"
      />

      <div className="relative mx-auto grid max-w-[88rem] gap-12 px-5 pb-12 pt-32 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-12 lg:pb-16 lg:pt-40">
        {/* Left: copy */}
        <div className="flex flex-col justify-center lg:col-span-6">
          <motion.div
            className="data-label flex flex-wrap items-center gap-x-4 gap-y-2 text-mist/70"
            {...fade(0.1)}
          >
            <span className="inline-flex items-center gap-2.5">
              <span className="h-px w-7 bg-amber" />
              Est. {company.founded}
            </span>
            <span className="text-mist/35">/</span>
            <span>240+ projects delivered</span>
            <span className="text-mist/35">/</span>
            <span className="text-amber">{company.coordinates}</span>
          </motion.div>

          <h1 className="mt-7 text-[3.25rem] font-extrabold leading-[0.94] tracking-[-0.025em] sm:text-7xl lg:text-[5.2rem] xl:text-[5.8rem]">
            {headlineLines.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.06em]">
                <motion.span className="block" {...rise(i)}>
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="mt-7 max-w-md text-lg leading-relaxed text-mist/80"
            {...fade(0.65)}
          >
            A commercial, civil, and industrial general contractor delivering
            complex projects on schedule, on budget, and to the line — across
            the Mountain West since 1998.
          </motion.p>

          <motion.div className="mt-9 flex flex-wrap gap-4" {...fade(0.78)}>
            <ButtonLink href="/contact" variant="primary">
              Start a project
            </ButtonLink>
            <ButtonLink href="/projects" variant="outlineLight">
              See our work
            </ButtonLink>
          </motion.div>
        </div>

        {/* Right: annotated hero image */}
        <motion.div
          className="relative lg:col-span-6 lg:pl-6"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeOutExpo, delay: 0.5 }}
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-graphite lg:aspect-[5/6]">
            <motion.div
              className="absolute inset-0"
              initial={reduce ? false : { clipPath: "inset(0 0 100% 0)" }}
              animate={{ clipPath: "inset(0 0 0% 0)" }}
              transition={{ duration: 1.1, ease: easeOutExpo, delay: 0.55 }}
            >
              <Image
                src={img("1541888946425-d81bb19240f5", { w: 1400 })}
                alt="Meridian field crew on an active high-rise deck"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
            <CornerTicks className="m-4" />

            {/* Annotation: top-left */}
            <div className="absolute left-5 top-5">
              <span className="data-label bg-amber px-2 py-1 text-ink">
                Fig. 01 — Active Site
              </span>
            </div>

            {/* Annotation: spec callout bottom-left */}
            <div className="absolute bottom-5 left-5 flex items-end gap-3">
              <span className="h-10 w-px bg-amber" />
              <div>
                <span className="data-label block text-mist/60">In progress</span>
                <span className="font-mono text-sm text-paper">
                  612,000 sq ft · CM at-risk
                </span>
              </div>
            </div>
          </div>

          {/* Side dimension label */}
          <span className="absolute -right-1 top-1/2 hidden -translate-y-1/2 rotate-90 origin-right font-mono text-[0.6rem] uppercase tracking-[0.3em] text-mist/40 lg:block">
            Cascade Exchange · Denver
          </span>
        </motion.div>
      </div>

      {/* Bottom service index rail */}
      <motion.div
        className="relative border-t border-mist/12"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="mx-auto grid max-w-[88rem] grid-cols-2 px-5 sm:px-8 lg:grid-cols-4 lg:px-12">
          {services.map((s) => (
            <a
              key={s.slug}
              href={`/services#${s.slug}`}
              className="group flex items-center gap-3 border-mist/12 py-5 transition-colors hover:bg-paper/5 sm:[&:not(:nth-child(2n))]:border-r lg:border-r lg:last:border-r-0"
            >
              <span className="data-label text-amber">{s.index}</span>
              <span className="text-sm font-medium text-mist/80 transition-colors group-hover:text-paper">
                {s.name}
              </span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
