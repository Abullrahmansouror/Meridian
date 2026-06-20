import { certifications } from "@/lib/data/certifications";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { MarqueeLogos } from "@/components/ui/MarqueeLogos";

export function Certifications() {
  return (
    <section className="border-y border-mist/12 bg-ink py-16 text-paper lg:py-20">
      <Container>
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <Eyebrow index="05" tone="light">
                Credentials
              </Eyebrow>
              <h2 className="mt-5 max-w-xl text-balance text-3xl sm:text-4xl">
                Accredited, certified, and accountable.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-mist/60">
              Bonded and licensed in every state we build. Our people carry the
              certifications; our systems carry the proof.
            </p>
          </div>
        </Reveal>
      </Container>

      <div className="mt-12 border-y border-mist/12 py-8">
        <MarqueeLogos items={certifications} />
      </div>
    </section>
  );
}
