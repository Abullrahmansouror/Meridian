import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { CornerTicks } from "@/components/ui/Drafting";
import { contact, company } from "@/lib/data/company";

export function CallToAction({
  eyebrow = "Start the conversation",
  title = "Have a project that has to be built right?",
  body = "Tell us what you're planning. We'll bring a number you can trust and a team that holds it.",
  primaryLabel = "Start a project",
  primaryHref = "/contact",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
}) {
  return (
    <section className="grid-blueprint-dark relative overflow-hidden bg-ink py-24 text-paper lg:py-32">
      <Container>
        <Reveal>
          <div className="relative border border-mist/15 p-8 sm:p-12 lg:p-16">
            <CornerTicks className="m-3" />
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <Eyebrow index="—" tone="light">
                  {eyebrow}
                </Eyebrow>
                <h2 className="mt-6 max-w-2xl text-balance text-4xl sm:text-5xl lg:text-[3.5rem]">
                  {title}
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist/75">
                  {body}
                </p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <ButtonLink href={primaryHref} variant="primary">
                    {primaryLabel}
                  </ButtonLink>
                  <ButtonLink
                    href={contact.phoneHref}
                    variant="outlineLight"
                    arrow={false}
                  >
                    {contact.phone}
                  </ButtonLink>
                </div>
              </div>

              <div className="lg:col-span-4 lg:text-right">
                <dl className="flex flex-col gap-5 border-t border-mist/15 pt-6 lg:items-end">
                  <div>
                    <dt className="data-label text-mist/60">Email</dt>
                    <dd className="mt-1">
                      <a
                        href={contact.emailHref}
                        className="font-mono text-sm text-paper hover:text-amber"
                      >
                        {contact.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="data-label text-mist/60">Headquarters</dt>
                    <dd className="mt-1 font-mono text-sm text-amber">
                      {company.coordinates}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
