import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const pillars = [
  {
    index: "01",
    title: "We self-perform the critical path",
    body: "Our own crews place the structural concrete and steel that decide the schedule. The work that matters most is never subcontracted out of our control.",
  },
  {
    index: "02",
    title: "We price reality, then hold it",
    body: "Pre-construction is where projects are won or lost. We surface risk in week three, not month nine, and commit to a number we intend to build to.",
  },
  {
    index: "03",
    title: "We measure safety, not market it",
    body: "A 0.51 experience modifier — less than half the industry baseline — is how we run every site. Anyone can stop any job, at any time.",
  },
];

export function ValueProp() {
  return (
    <section className="bg-paper py-24 lg:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow index="—">The difference</Eyebrow>
              <h2 className="mt-6 text-balance text-4xl sm:text-5xl lg:text-[3.25rem]">
                Anyone can quote a price. We quote a number we&apos;ll hold.
              </h2>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-graphite">
                For twenty-seven years we have delivered the buildings, plants,
                and infrastructure that the Mountain West runs on. The same
                discipline shows up on every one: set the line, then build to it.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="flex flex-col">
              {pillars.map((p, i) => (
                <Reveal key={p.index} delay={i * 0.08}>
                  <div className="flex gap-6 border-t border-line py-8 first:pt-0">
                    <span className="data-label pt-1.5 text-amber-deep">{p.index}</span>
                    <div>
                      <h3 className="text-2xl font-bold">{p.title}</h3>
                      <p className="mt-3 text-base leading-relaxed text-graphite">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
