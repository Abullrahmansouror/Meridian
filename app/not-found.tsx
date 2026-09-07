import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="grid-blueprint-dark flex min-h-screen items-center bg-ink text-paper">
      <Container>
        <div className="py-32">
          <Eyebrow index="404" tone="light">
            Off the drawings
          </Eyebrow>
          <h1 className="mt-7 max-w-3xl text-balance text-5xl font-extrabold leading-[0.98] tracking-[-0.025em] sm:text-7xl">
            This page isn&apos;t on the plans.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-mist/75">
            The page you were looking for may have moved or never existed. Let&apos;s
            get you back to solid ground.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <ButtonLink href="/" variant="primary">
              Back to home
            </ButtonLink>
            <ButtonLink href="/projects" variant="outlineLight">
              See our work
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
