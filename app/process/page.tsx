import type { Metadata } from "next";
import { phases } from "@/lib/data/process";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { CallToAction } from "@/components/ui/CallToAction";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How Meridian delivers: six phases from pre-construction estimating through commissioning and a one-year warranty walk, carried by one accountable team.",
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="How we deliver"
        index="—"
        title="One accountable line, end to end."
        lead="The same team carries your project from the first estimate to the final warranty walk. Six phases, nothing handed off, nothing dropped between them."
        imageId="1503387762-592deb58ef4e"
        stats={[
          { value: "6", label: "Phases" },
          { value: "1", label: "Team, start to finish" },
          { value: "11 mo", label: "Warranty walk" },
          { value: "0", label: "Surprises by design" },
        ]}
      />

      <section className="bg-paper py-20 lg:py-28">
        <Container>
          <div className="border-t border-line">
            {phases.map((phase, i) => (
              <Reveal key={phase.index} delay={(i % 2) * 0.05}>
                <div className="grid gap-8 border-b border-line py-12 lg:grid-cols-12 lg:gap-10 lg:py-16">
                  {/* Index + duration */}
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-4">
                      <span className="font-display text-6xl font-black leading-none text-amber-deep lg:text-7xl">
                        {phase.index}
                      </span>
                      <span className="h-12 w-px bg-line-strong" />
                    </div>
                    <span className="mt-4 block data-label text-concrete">
                      {phase.duration}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-6">
                    <h2 className="text-3xl font-bold sm:text-4xl">
                      {phase.name}
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-graphite">
                      {phase.summary}
                    </p>
                  </div>

                  {/* Deliverables */}
                  <div className="lg:col-span-3">
                    <span className="data-label text-concrete">Deliverables</span>
                    <ul className="mt-4 flex flex-col">
                      {phase.deliverables.map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-2.5 border-t border-line py-2.5 first:border-t-0 text-sm text-ink"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-amber" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-16">
              <Eyebrow index="—">The promise underneath</Eyebrow>
              <p className="mt-6 max-w-3xl text-balance text-2xl font-medium leading-snug text-ink sm:text-3xl sm:leading-snug">
                Every phase reports in plain sight — schedule, cost, and risk on
                one dashboard, updated weekly. You should never have to ask where
                your project stands.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <CallToAction
        eyebrow="Begin in pre-construction"
        title="The best time to involve us is before the drawings are done."
        body="Bring us in early and we'll price reality, surface risk, and protect your budget before it's committed."
      />
    </>
  );
}
