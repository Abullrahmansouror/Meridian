"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <section className="grid-blueprint-dark flex min-h-[70vh] items-center bg-ink py-32 text-paper">
      <Container>
        <Eyebrow index="500" tone="light">
          Something shifted
        </Eyebrow>
        <h1 className="mt-7 max-w-3xl text-5xl sm:text-7xl">
          We could not load this page.
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-mist/80">
          Try the request again. If the problem continues, contact the Meridian
          team directly.
        </p>
        <div className="mt-9">
          <Button type="button" variant="primary" onClick={reset}>
            Try again
          </Button>
        </div>
      </Container>
    </section>
  );
}
