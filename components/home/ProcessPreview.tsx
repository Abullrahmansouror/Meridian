import { phases } from "@/lib/data/process";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

export function ProcessPreview() {
  return (
    <section className="bg-mist py-24 lg:py-32">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="How we deliver"
            index="03"
            title="One accountable line, end to end"
            lead="Six phases, one team carrying the project from first estimate to final warranty walk. Nothing handed off, nothing dropped."
            className="lg:max-w-2xl"
          />
          <Reveal delay={0.1}>
            <ButtonLink href="/process" variant="outline">
              The full process
            </ButtonLink>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px border-t border-line sm:grid-cols-2 lg:grid-cols-3">
          {phases.map((phase, i) => (
            <Reveal key={phase.index} delay={(i % 3) * 0.06}>
              <div className="group h-full border-t border-line bg-mist pt-6 transition-colors hover:bg-paper sm:pr-6">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-sm font-medium text-amber">
                    {phase.index}
                  </span>
                  <span className="data-label text-concrete">
                    {phase.duration}
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-bold text-ink">
                  {phase.name}
                </h3>
                <p className="mt-3 pb-2 text-base leading-relaxed text-graphite">
                  {phase.summary}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
