import type { Metadata } from "next";
import { contact } from "@/lib/data/company";
import { jobs, benefits } from "@/lib/data/jobs";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { CallToAction } from "@/components/ui/CallToAction";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build a career at Meridian Build Group. Open roles in operations, field, pre-construction, and safety across Denver, Salt Lake City, and Phoenix — with employee ownership and real advancement.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        index="—"
        title="Build a career, not just a building."
        lead="The people who came up through Meridian run Meridian. If you do the work well, there is a long road ahead of you here — and a stake in what we build together."
        imageId="1541888946425-d81bb19240f5"
        stats={[
          { value: String(jobs.length), label: "Open roles" },
          { value: "0.51", label: "EMR" },
          { value: "Part", label: "Employee-owned" },
          { value: "3", label: "Regions" },
        ]}
      />

      {/* Culture */}
      <section className="bg-paper py-24 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow index="01">Why Meridian</Eyebrow>
                <h2 className="mt-6 text-balance text-4xl sm:text-5xl">
                  Work that matters, with people who mean it.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={0.08}>
                <div className="space-y-5 text-lg leading-relaxed text-graphite">
                  <p>
                    We build things that outlast us — towers, plants, the
                    infrastructure a region depends on. The people who do that
                    deserve more than a paycheck and a hard hat.
                  </p>
                  <p>
                    At Meridian you are trusted with real responsibility early,
                    backed by people who have done the job before you, and given
                    a genuine path forward. Most of our superintendents and
                    project managers started somewhere else on this list.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="bg-mist py-24 lg:py-32">
        <Container>
          <Reveal>
            <Eyebrow index="02">What you get</Eyebrow>
            <h2 className="mt-6 max-w-3xl text-balance text-4xl sm:text-5xl">
              We invest in the people who build the work.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-px border-t border-line sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={(i % 3) * 0.06}>
                <div className="h-full border-t border-line bg-mist pt-6 sm:pr-8">
                  <span className="font-mono text-sm text-amber-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-xl font-bold">{b.title}</h3>
                  <p className="mt-3 pb-2 text-base leading-relaxed text-graphite">
                    {b.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Open roles */}
      <section className="bg-paper py-24 lg:py-32">
        <Container>
          <Reveal>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <Eyebrow index="03">Open positions</Eyebrow>
                <h2 className="mt-6 text-balance text-4xl sm:text-5xl">
                  Find your seat.
                </h2>
              </div>
              <span className="data-label text-concrete">
                {String(jobs.length).padStart(2, "0")} roles open
              </span>
            </div>
          </Reveal>

          <ul className="mt-12 border-t border-line">
            {jobs.map((job, i) => (
              <Reveal key={job.title} delay={(i % 4) * 0.04}>
                <li>
                  <a
                    href={`${contact.careersEmail ? `mailto:${contact.careersEmail}` : "/contact"}?subject=${encodeURIComponent(
                      `Application — ${job.title}`
                    )}`}
                    className="group grid gap-3 border-b border-line py-6 transition-colors hover:bg-mist sm:grid-cols-12 sm:items-center sm:gap-6 sm:px-2"
                  >
                    <span className="font-display text-xl font-bold text-ink sm:col-span-5">
                      {job.title}
                    </span>
                    <span className="data-label text-graphite sm:col-span-2">
                      {job.team}
                    </span>
                    <span className="data-label text-graphite sm:col-span-2">
                      {job.location}
                    </span>
                    <span className="data-label text-graphite sm:col-span-2">
                      {job.type}
                    </span>
                    <span className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-amber-deep sm:col-span-1 sm:justify-end">
                      Apply
                      <svg width="14" height="9" viewBox="0 0 16 9" fill="none" aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                        <path d="M0 4.5h14M10.5 1 14 4.5 10.5 8" stroke="currentColor" strokeWidth="1.4" />
                      </svg>
                    </span>
                  </a>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal>
            <p className="mt-10 text-base text-graphite">
              Don&apos;t see your role?{" "}
              <a
                href={`mailto:${contact.careersEmail}`}
                className="font-medium text-ink underline decoration-amber decoration-2 underline-offset-4 hover:text-amber-deep"
              >
                Send us your resume
              </a>{" "}
              — we&apos;re always glad to meet good people.
            </p>
          </Reveal>
        </Container>
      </section>

      <CallToAction
        eyebrow="Join the crew"
        title="Ready to build something that lasts?"
        body="Apply to an open role above, or reach out directly. We read every application."
        primaryLabel="Email our people team"
        primaryHref={`mailto:${contact.careersEmail}`}
      />
    </>
  );
}
