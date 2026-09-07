import Image from "next/image";
import Link from "next/link";
import { img } from "@/lib/utils";
import { company } from "@/lib/data/company";
import { services } from "@/lib/data/services";
import { ButtonLink } from "@/components/ui/Button";
import { CornerTicks } from "@/components/ui/Drafting";

const headlineLines = ["We build", "the structures", "that last."];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      {/* Blueprint grid backdrop */}
      <div
        aria-hidden
        className="grid-blueprint-dark absolute inset-0"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink"
      />

      <div className="relative mx-auto grid max-w-[88rem] gap-12 px-5 pb-12 pt-32 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-12 lg:pb-16 lg:pt-40">
        {/* Left: copy */}
        <div className="flex flex-col justify-center lg:col-span-6">
          <div
            className="hero-fade data-label flex flex-wrap items-center gap-x-4 gap-y-2 text-mist/70"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="inline-flex items-center gap-2.5">
              <span className="h-px w-7 bg-amber" />
              Est. {company.founded}
            </span>
            <span className="text-mist/35">/</span>
            <span>240+ projects delivered</span>
            <span className="text-mist/35">/</span>
            <span className="text-amber">{company.coordinates}</span>
          </div>

          <h1 className="mt-7 text-[3.25rem] font-extrabold leading-[0.94] tracking-[-0.025em] sm:text-7xl lg:text-[5.2rem] xl:text-[5.8rem]">
            {headlineLines.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.06em]">
                <span
                  className="hero-rise block"
                  style={{ animationDelay: `${0.25 + i * 0.1}s` }}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <p
            className="hero-fade mt-7 max-w-md text-lg leading-relaxed text-mist/80"
            style={{ animationDelay: "0.65s" }}
          >
            A commercial, civil, and industrial general contractor delivering
            complex projects on schedule, on budget, and to the line — across
            the Mountain West since 1998.
          </p>

          <div
            className="hero-fade mt-9 flex flex-wrap gap-4"
            style={{ animationDelay: "0.78s" }}
          >
            <ButtonLink href="/contact" variant="primary">
              Start a project
            </ButtonLink>
            <ButtonLink href="/projects" variant="outlineLight">
              See our work
            </ButtonLink>
          </div>
        </div>

        {/* Right: annotated hero image */}
        <div
          className="hero-fade relative lg:col-span-6 lg:pl-6"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-graphite lg:aspect-[5/6]">
            <div
              className="hero-clip absolute inset-0"
              style={{ animationDelay: "0.55s" }}
            >
              <Image
                src={img("1541888946425-d81bb19240f5", { w: 1400 })}
                alt="Meridian field crew on an active high-rise deck"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
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
          <span className="absolute -right-1 top-1/2 hidden -translate-y-1/2 rotate-90 origin-right font-mono text-xs uppercase tracking-[0.2em] text-mist/60 lg:block">
            Cascade Exchange · Denver
          </span>
        </div>
      </div>

      {/* Bottom service index rail */}
      <div
        className="hero-fade relative border-t border-mist/12"
        style={{ animationDelay: "1s" }}
      >
        <div className="mx-auto grid max-w-[88rem] grid-cols-2 px-5 sm:px-8 lg:grid-cols-4 lg:px-12">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services#${s.slug}`}
              className="group flex items-center gap-3 border-mist/12 py-5 transition-colors hover:bg-paper/5 sm:[&:not(:nth-child(2n))]:border-r lg:border-r lg:last:border-r-0"
            >
              <span className="data-label text-amber">{s.index}</span>
              <span className="text-sm font-medium text-mist/80 transition-colors group-hover:text-paper">
                {s.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
