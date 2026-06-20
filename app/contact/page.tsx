import type { Metadata } from "next";
import { contact, offices } from "@/lib/data/company";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { QuoteForm } from "@/components/contact/QuoteForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Meridian Build Group. Send a project brief or reach our Denver, Salt Lake City, or Phoenix offices directly.",
};

const nextSteps = [
  {
    index: "01",
    title: "We read it",
    body: "A pre-construction lead reviews your brief — not a sales rep — usually within the business day.",
  },
  {
    index: "02",
    title: "We talk",
    body: "A short call to understand the scope, the constraints, and what success looks like for you.",
  },
  {
    index: "03",
    title: "We get to work",
    body: "If there's a fit, we move to early estimating and a real plan. No pressure, no boilerplate.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Start a project"
        index="—"
        title="Tell us what you're building."
        lead="Send a project brief and our pre-construction team will be in touch within one business day. Or reach any of our offices directly."
      />

      <section className="bg-paper py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
            {/* Details */}
            <div className="lg:col-span-4">
              <Reveal>
                <Eyebrow index="—">Direct lines</Eyebrow>
                <div className="mt-7 flex flex-col gap-6">
                  <div>
                    <span className="data-label text-concrete">Phone</span>
                    <a
                      href={contact.phoneHref}
                      className="mt-1 block font-display text-2xl font-bold text-ink hover:text-amber"
                    >
                      {contact.phone}
                    </a>
                  </div>
                  <div>
                    <span className="data-label text-concrete">Email</span>
                    <a
                      href={contact.emailHref}
                      className="mt-1 block font-mono text-base text-ink hover:text-amber"
                    >
                      {contact.email}
                    </a>
                  </div>
                  <div>
                    <span className="data-label text-concrete">Hours</span>
                    <p className="mt-1 font-mono text-base text-ink">
                      {contact.hours}
                    </p>
                  </div>
                </div>

                <div className="mt-10 border-t border-line pt-8">
                  <span className="data-label text-concrete">Offices</span>
                  <ul className="mt-5 flex flex-col gap-6">
                    {offices.map((o) => (
                      <li key={o.city}>
                        <div className="flex items-baseline justify-between">
                          <span className="font-display text-lg font-bold text-ink">
                            {o.city}
                          </span>
                          <span className="data-label text-concrete">
                            {o.role}
                          </span>
                        </div>
                        <address className="mt-1 not-italic text-sm leading-relaxed text-graphite">
                          {o.address.map((line) => (
                            <div key={line}>{line}</div>
                          ))}
                        </address>
                        <span className="mt-1 block font-mono text-xs text-amber">
                          {o.coordinates}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-7 lg:col-start-6">
              <Reveal delay={0.1}>
                <QuoteForm />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* What happens next */}
      <section className="bg-mist py-20 lg:py-24">
        <Container>
          <Reveal>
            <Eyebrow index="—">What happens next</Eyebrow>
          </Reveal>
          <div className="mt-10 grid gap-px border-t border-line sm:grid-cols-3">
            {nextSteps.map((s, i) => (
              <Reveal key={s.index} delay={i * 0.08}>
                <div className="h-full border-t border-amber bg-mist pt-6 sm:pr-8">
                  <span className="font-mono text-sm text-amber">{s.index}</span>
                  <h3 className="mt-4 text-xl font-bold text-ink">{s.title}</h3>
                  <p className="mt-3 pb-2 text-base leading-relaxed text-graphite">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
