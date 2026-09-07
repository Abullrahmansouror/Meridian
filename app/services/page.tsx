import type { Metadata } from "next";
import Image from "next/image";
import { img, cn } from "@/lib/utils";
import { services } from "@/lib/data/services";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { CornerTicks } from "@/components/ui/Drafting";
import { CallToAction } from "@/components/ui/CallToAction";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Commercial, civil and infrastructure, industrial and energy, and design-build pre-construction — four disciplines delivered to one standard by Meridian Build Group.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        index="—"
        title="Four disciplines. One standard."
        lead="We bring the same self-perform crews, controls, and accountable line to every kind of work we take on — from a downtown tower to a live treatment plant."
        imageId="1504307651254-35680f356dfd"
        stats={[
          { value: "01", label: "Commercial" },
          { value: "02", label: "Civil" },
          { value: "03", label: "Industrial" },
          { value: "04", label: "Pre-con" },
        ]}
      />

      {services.map((s, i) => {
        const imageLeft = i % 2 === 0;
        return (
          <section
            key={s.slug}
            id={s.slug}
            className={cn(
              "scroll-mt-20 py-20 lg:py-28",
              imageLeft ? "bg-paper" : "bg-mist"
            )}
          >
            <Container>
              <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
                <Reveal
                  className={cn(
                    "lg:col-span-6",
                    imageLeft ? "lg:order-1" : "lg:order-2"
                  )}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                    <Image
                      src={img(s.image, { w: 1200 })}
                      alt={s.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
                    <CornerTicks className="m-4" />
                    <span className="data-label absolute left-5 top-5 bg-amber px-2 py-1 text-ink">
                      Discipline {s.index}
                    </span>
                  </div>
                </Reveal>

                <Reveal
                  delay={0.08}
                  className={cn(
                    "lg:col-span-5",
                    imageLeft ? "lg:order-2 lg:col-start-8" : "lg:order-1"
                  )}
                >
                  <Eyebrow index={s.index}>{s.tagline}</Eyebrow>
                  <h2 className="mt-5 text-balance text-4xl sm:text-5xl">
                    {s.name}
                  </h2>
                  <p className="mt-5 text-lg leading-relaxed text-graphite">
                    {s.description}
                  </p>

                  <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                    {s.capabilities.map((c) => (
                      <li key={c} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-amber" />
                        <span className="text-sm text-ink">{c}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-9">
                    <ButtonLink href="/contact" variant="outline">
                      Discuss a {s.name.toLowerCase()} project
                    </ButtonLink>
                  </div>
                </Reveal>
              </div>
            </Container>
          </section>
        );
      })}

      <CallToAction
        eyebrow="Scope your project"
        title="Not sure which discipline fits? Start with a conversation."
        body="Most of our projects cross more than one. Tell us the outcome you need and we'll bring the right team to the table."
      />
    </>
  );
}
