import Link from "next/link";
import Image from "next/image";
import { img } from "@/lib/utils";
import { services } from "@/lib/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { CornerTicks } from "@/components/ui/Drafting";

export function ServicesOverview() {
  return (
    <section className="bg-mist py-24 lg:py-32">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Capabilities"
            index="01"
            title="Four disciplines, one standard"
            lead="From a 28-story tower to a live water plant, we bring the same crews, the same controls, and the same accountable line."
            className="lg:max-w-2xl"
          />
          <Reveal delay={0.1}>
            <ButtonLink href="/services" variant="outline">
              All services
            </ButtonLink>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) * 0.08}>
              <Link
                href={`/services#${s.slug}`}
                className="group flex h-full flex-col bg-paper"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                  <Image
                    src={img(s.image, { w: 1100 })}
                    alt={s.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover opacity-90 transition-all duration-[1200ms] ease-out group-hover:scale-[1.05] group-hover:opacity-100 group-focus-visible:scale-[1.05] group-focus-visible:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                  <CornerTicks className="m-4" color="border-paper/40" />
                  <span className="data-label absolute left-5 top-5 bg-amber px-2 py-1 text-ink">
                    {s.index}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-2xl font-bold text-ink sm:text-[1.7rem]">
                    {s.name}
                  </h3>
                  <p className="mt-1 data-label text-amber-deep">{s.tagline}</p>
                  <p className="mt-4 text-base leading-relaxed text-graphite">
                    {s.description}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {s.sectors.map((sector) => (
                      <li
                        key={sector}
                        className="border border-line px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-graphite"
                      >
                        {sector}
                      </li>
                    ))}
                  </ul>

                  <span className="mt-7 inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ink transition-colors group-hover:text-amber-deep">
                    Explore
                    <svg
                      width="16"
                      height="9"
                      viewBox="0 0 16 9"
                      fill="none"
                      aria-hidden
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path
                        d="M0 4.5h14M10.5 1 14 4.5 10.5 8"
                        stroke="currentColor"
                        strokeWidth="1.4"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
