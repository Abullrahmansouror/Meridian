import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { img } from "@/lib/utils";
import { projects, getProject } from "@/lib/data/projects";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { CornerTicks } from "@/components/ui/Drafting";
import { ButtonLink } from "@/components/ui/Button";
import { CallToAction } from "@/components/ui/CallToAction";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.summary,
    openGraph: {
      title: project.name,
      description: project.summary,
      images: [img(project.image, { w: 1200 })],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  const specs: { label: string; value: string }[] = [
    { label: "Client", value: project.client },
    { label: "Location", value: project.location },
    { label: "Completed", value: String(project.year) },
    { label: "Contract value", value: project.value },
    { label: "Scale", value: project.area },
    { label: "Duration", value: project.duration },
    { label: "Delivery", value: project.delivery },
    { label: "Sector", value: project.sector },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <Image
          src={img(project.image, { w: 1900 })}
          alt={project.name}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
        <Container>
          <div className="relative pb-14 pt-32 lg:pb-20 lg:pt-44">
            <div className="flex flex-wrap items-center gap-3">
              <span className="data-label bg-amber px-2 py-1 text-ink">
                {project.sector}
              </span>
              <span className="data-label text-mist/60">
                {project.coordinates}
              </span>
            </div>
            <h1 className="mt-7 max-w-4xl text-balance text-[2.75rem] font-extrabold leading-[0.98] tracking-[-0.025em] sm:text-6xl lg:text-7xl">
              {project.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist/80 lg:text-xl">
              {project.summary}
            </p>
            <div className="mt-9">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-mist/70 transition-colors hover:text-paper"
              >
                <span aria-hidden>←</span> All projects
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Spec sheet */}
      <section className="bg-paper py-16 lg:py-20">
        <Container>
          <Reveal>
            <Eyebrow index="—">Project record</Eyebrow>
            <dl className="mt-8 grid grid-cols-2 gap-px border-t border-line sm:grid-cols-4">
              {specs.map((s) => (
                <div key={s.label} className="border-t border-amber pt-4">
                  <dt className="data-label text-concrete">{s.label}</dt>
                  <dd className="mt-2 font-mono text-base text-ink">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </section>

      {/* Overview + scope */}
      <section className="bg-mist py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-6">
              <Reveal>
                <Eyebrow index="01">The brief</Eyebrow>
                <div className="mt-6 space-y-5 text-lg leading-relaxed text-graphite">
                  {project.overview.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <Reveal delay={0.08}>
                <Eyebrow index="02">Scope of work</Eyebrow>
                <ul className="mt-6 flex flex-col">
                  {project.scope.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 border-t border-line py-4 first:border-t-0"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-amber" />
                      <span className="text-base text-ink">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>

          {/* Outcomes */}
          <Reveal delay={0.1}>
            <dl className="mt-16 grid gap-px border-t border-line sm:grid-cols-3">
              {project.outcomes.map((o) => (
                <div key={o.label} className="border-t border-amber pt-5">
                  <dt className="font-display text-4xl font-extrabold text-ink lg:text-5xl">
                    {o.value}
                  </dt>
                  <dd className="mt-3 text-sm text-graphite">{o.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </section>

      {/* Gallery */}
      <section className="bg-paper py-16 lg:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {project.gallery.map((id, i) => (
              <Reveal key={id} delay={i * 0.07}>
                <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                  <Image
                    src={img(id, { w: 1000 })}
                    alt={`${project.name} — view ${i + 1}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out hover:scale-105"
                  />
                  <CornerTicks className="m-3" color="border-paper/30" />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Next project */}
      <section className="bg-mist py-16">
        <Container>
          <Link
            href={`/projects/${next.slug}`}
            className="group flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <span className="data-label text-amber">Next project</span>
              <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
                {next.name}
              </h2>
              <p className="mt-1 data-label text-concrete">
                {next.sector} · {next.location}
              </p>
            </div>
            <span className="inline-flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ink transition-colors group-hover:text-amber">
              View project
              <svg width="20" height="10" viewBox="0 0 20 10" fill="none" aria-hidden className="transition-transform duration-300 group-hover:translate-x-1.5">
                <path d="M0 5h18M14 1l4 4-4 4" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </span>
          </Link>
        </Container>
      </section>

      <CallToAction />
    </>
  );
}
