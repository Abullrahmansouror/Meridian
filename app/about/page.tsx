import type { Metadata } from "next";
import Image from "next/image";
import { img } from "@/lib/utils";
import { company } from "@/lib/data/company";
import { values, milestones, leadership } from "@/lib/data/team";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { CornerTicks } from "@/components/ui/Drafting";
import { CallToAction } from "@/components/ui/CallToAction";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meridian Build Group has delivered commercial, civil, and industrial construction across the Mountain West since 1998 — self-performing the critical path and holding the line on every project.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Meridian"
        index="—"
        title="Twenty-seven years of building to the line."
        lead="We started with one crew and a flatbed. Today we deliver some of the most complex work in the Mountain West — with the same belief that the way you build is the work."
        imageId="1541888946425-d81bb19240f5"
        stats={[
          { value: "1998", label: "Founded" },
          { value: "240+", label: "Projects" },
          { value: "0.51", label: "EMR" },
          { value: "94%", label: "Repeat clients" },
        ]}
      />

      {/* Story */}
      <section className="bg-paper py-24 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow index="01">Our story</Eyebrow>
                <h2 className="mt-6 text-balance text-4xl sm:text-5xl">
                  A general contractor that still thinks like a trade.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={0.08}>
                <div className="space-y-5 text-lg leading-relaxed text-graphite">
                  <p>
                    Meridian began in 1998 as a self-perform concrete
                    contractor in Denver. We poured other builders&apos;
                    foundations for six years before we ever ran a project of
                    our own — and that apprenticeship is still in everything we
                    do.
                  </p>
                  <p>
                    Because we came up placing the structure, we never stopped.
                    Our crews still self-perform the concrete and steel on the
                    critical path, which means the most important scope on your
                    job is built by people who answer to us, not to a
                    subcontractor&apos;s margin.
                  </p>
                  <p>
                    {company.description} The work has grown from slabs to
                    28-story towers and 24-MGD water plants. The standard
                    hasn&apos;t moved.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-mist py-24 lg:py-32">
        <Container>
          <Reveal>
            <Eyebrow index="02">What we hold to</Eyebrow>
            <h2 className="mt-6 max-w-3xl text-balance text-4xl sm:text-5xl">
              Four commitments, on every job, without exception.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-px border-t border-line sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.index} delay={(i % 2) * 0.08}>
                <div className="h-full border-t border-line bg-mist pt-7 sm:pr-10">
                  <span className="font-mono text-sm text-amber">{v.index}</span>
                  <h3 className="mt-4 text-2xl font-bold">{v.title}</h3>
                  <p className="mt-3 pb-2 text-base leading-relaxed text-graphite">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="grid-blueprint-dark bg-ink py-24 text-paper lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <Eyebrow index="03" tone="light">
                  Track record
                </Eyebrow>
                <h2 className="mt-6 text-balance text-4xl sm:text-5xl">
                  Set the line in 1998. Still building to it.
                </h2>
              </Reveal>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <ol className="relative">
                {milestones.map((m, i) => (
                  <Reveal key={m.year} delay={i * 0.05}>
                    <li className="flex gap-6 border-t border-mist/12 py-7 first:border-t-0 first:pt-0">
                      <span className="w-16 shrink-0 pt-1 font-mono text-sm text-amber">
                        {m.year}
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-bold text-paper">
                          {m.title}
                        </h3>
                        <p className="mt-2 text-base leading-relaxed text-mist/70">
                          {m.detail}
                        </p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      {/* Leadership */}
      <section className="bg-paper py-24 lg:py-32">
        <Container>
          <Reveal>
            <Eyebrow index="04">Leadership</Eyebrow>
            <h2 className="mt-6 max-w-3xl text-balance text-4xl sm:text-5xl">
              Most of them came up through Meridian.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-graphite">
              Our senior team has spent a combined century on Meridian sites.
              They know the work because they have done the work.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-x-10 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((person, i) => (
              <Reveal key={person.name} delay={(i % 3) * 0.07}>
                <div className="group h-full border-t border-line py-7">
                  <div className="flex items-center justify-between">
                    <span className="grid h-14 w-14 place-items-center border border-ink/20 font-display text-lg font-extrabold text-ink transition-colors duration-300 group-hover:border-amber group-hover:bg-amber group-hover:text-ink">
                      {person.initials}
                    </span>
                    <span className="data-label text-concrete">
                      {person.tenure}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{person.name}</h3>
                  <p className="mt-1 data-label text-amber">{person.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-graphite">
                    {person.bio}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Safety band */}
      <section className="bg-mist py-20">
        <Container>
          <Reveal>
            <div className="relative grid items-center gap-8 border border-line bg-paper p-8 sm:p-12 lg:grid-cols-12">
              <CornerTicks className="m-3" />
              <div className="lg:col-span-7">
                <Eyebrow index="—">Safety</Eyebrow>
                <h2 className="mt-5 text-balance text-3xl sm:text-4xl">
                  A 0.51 EMR is not a slogan. It is how we run the site.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-graphite">
                  Every person on every Meridian site carries the authority to
                  stop any job, at any time, for any safety reason — no
                  permission required and no questions asked afterward. That
                  rule, more than any other, is why our experience modifier sits
                  at less than half the industry baseline.
                </p>
              </div>
              <div className="lg:col-span-4 lg:col-start-9">
                <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                  <Image
                    src={img("1504307651254-35680f356dfd", { w: 800 })}
                    alt="Meridian field crew on an active structure"
                    fill
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <CallToAction
        eyebrow="Work with Meridian"
        title="Build with a contractor that holds the line."
        body="Tell us about your project. We'll show you how the standard shows up from the first estimate to the final walk."
      />
    </>
  );
}
