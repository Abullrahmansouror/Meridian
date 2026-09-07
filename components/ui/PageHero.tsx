import Image from "next/image";
import { img } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

type HeroStat = { value: string; label: string };

export function PageHero({
  eyebrow,
  index,
  title,
  lead,
  imageId,
  stats,
}: {
  eyebrow: string;
  index?: string;
  title: React.ReactNode;
  lead?: string;
  imageId?: string;
  stats?: HeroStat[];
}) {
  return (
    <section className="grid-blueprint-dark relative overflow-hidden bg-ink text-paper">
      {imageId && (
        <>
          <Image
            src={img(imageId, { w: 1900 })}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/55" />
        </>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />

      <Container>
        <div className="relative pb-16 pt-32 lg:pb-24 lg:pt-44">
          <Eyebrow index={index} tone="light">
            {eyebrow}
          </Eyebrow>
          <h1 className="mt-7 max-w-4xl text-balance text-[2.75rem] font-extrabold leading-[0.98] tracking-[-0.025em] sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {lead && (
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-mist/80 lg:text-xl">
              {lead}
            </p>
          )}

          {stats && stats.length > 0 && (
            <dl className="mt-12 grid max-w-3xl grid-cols-2 gap-px border-t border-mist/12 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="border-t border-amber pt-4">
                  <dt className="data-label text-mist/60">{s.label}</dt>
                  <dd className="mt-2 font-display text-2xl font-extrabold lg:text-3xl">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </Container>
    </section>
  );
}
