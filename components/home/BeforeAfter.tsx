import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { CornerTicks } from "@/components/ui/Drafting";

const transforms = [
  { value: "Q2 2021", label: "Groundbreaking" },
  { value: "31 mo", label: "To topping out" },
  { value: "28", label: "Stories delivered" },
];

export function BeforeAfter() {
  return (
    <section className="grid-blueprint-dark bg-ink py-24 text-paper lg:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow index="—" tone="light">
                Site to summit
              </Eyebrow>
              <h2 className="mt-6 text-balance text-4xl text-paper sm:text-5xl lg:text-[3.25rem]">
                From a fenced lot to a finished landmark.
              </h2>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-mist/75">
                Drag the line to see Cascade Exchange go from a half-block
                surface lot to a 28-story mixed-use tower — built over an active
                transit easement without ever closing the line below.
              </p>

              <dl className="mt-10 grid grid-cols-3 gap-px border-t border-mist/12">
                {transforms.map((t) => (
                  <div key={t.label} className="border-t border-amber pt-4">
                    <dt className="data-label text-mist/50">{t.label}</dt>
                    <dd className="mt-2 font-display text-2xl font-extrabold">
                      {t.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="relative">
                <BeforeAfterSlider
                  beforeId="1429497419816-9ca5cfb4571a"
                  afterId="1486406146926-c627a92ad1ab"
                  beforeLabel="Site · 2021"
                  afterLabel="Delivered · 2024"
                />
                <CornerTicks className="m-3" />
              </div>
              <p className="mt-4 flex items-center justify-between font-mono text-xs text-mist/50">
                <span>Cascade Exchange · Denver, CO</span>
                <span className="text-amber">Drag to compare ↔</span>
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
