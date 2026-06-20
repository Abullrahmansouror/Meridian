import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { StatCounter } from "@/components/ui/StatCounter";
import { headlineStats, socialProof } from "@/lib/data/company";

export function Stats() {
  return (
    <section className="grid-blueprint-dark bg-ink py-24 text-paper lg:py-28">
      <Container>
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <Eyebrow index="—" tone="light">
              By the numbers
            </Eyebrow>
            <p className="max-w-sm text-sm leading-relaxed text-mist/60">
              The record is the argument. Every figure below is measured across
              the full portfolio, not a single flagship.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-px border-t border-mist/12 sm:grid-cols-2 lg:grid-cols-4">
          {headlineStats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="border-t border-amber pt-6">
                <span className="block font-display text-5xl font-extrabold tracking-tight lg:text-6xl">
                  <StatCounter
                    value={stat.value}
                    decimals={stat.decimals}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </span>
                <span className="mt-4 block font-display text-lg font-bold">
                  {stat.label}
                </span>
                <span className="mt-1 block text-sm text-mist/60">
                  {stat.detail}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 grid gap-8 border-t border-mist/12 pt-10 sm:grid-cols-3">
            <SecondaryStat
              value={socialProof.repeatClients}
              suffix="%"
              label="Repeat clients"
              detail="Work won from owners who have built with us before"
            />
            <SecondaryStat
              value={socialProof.onTimeDelivery}
              suffix="%"
              label="On-time delivery"
              detail="Projects handed over on or ahead of the committed date"
            />
            <SecondaryStat
              value={socialProof.selfPerform}
              suffix="%"
              label="Self-performed"
              detail="Of contract value built by our own field crews"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function SecondaryStat({
  value,
  suffix,
  label,
  detail,
}: {
  value: number;
  suffix?: string;
  label: string;
  detail: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="font-display text-3xl font-extrabold text-amber">
        <StatCounter value={value} suffix={suffix} />
      </span>
      <div>
        <span className="block font-medium text-paper">{label}</span>
        <span className="mt-1 block text-sm leading-relaxed text-mist/55">
          {detail}
        </span>
      </div>
    </div>
  );
}
