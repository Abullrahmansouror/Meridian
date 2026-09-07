import Link from "next/link";
import { company, contact, offices, primaryNav } from "@/lib/data/company";
import { services } from "@/lib/data/services";
import { certifications } from "@/lib/data/certifications";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "./Wordmark";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="grid-blueprint-dark relative bg-ink text-mist">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Wordmark tone="light" />
            <p className="mt-6 max-w-xs text-balance text-lg leading-relaxed text-mist/75">
              {company.tagline}
            </p>
            <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
              <div>
                <dt className="data-label text-mist/60">License</dt>
                <dd className="mt-1 font-mono text-sm text-paper">
                  {company.license}
                </dd>
              </div>
              <div>
                <dt className="data-label text-mist/60">EMR Rating</dt>
                <dd className="mt-1 font-mono text-sm text-paper">
                  {company.emr}
                </dd>
              </div>
            </dl>
          </div>

          {/* Nav columns */}
          <nav className="lg:col-span-2" aria-label="Company">
            <h2 className="data-label text-amber">Company</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {primaryNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-mist/75 transition-colors hover:text-paper"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="lg:col-span-3" aria-label="Services">
            <h2 className="data-label text-amber">Services</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="text-mist/75 transition-colors hover:text-paper"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h2 className="data-label text-amber">Get in touch</h2>
            <ul className="mt-5 flex flex-col gap-3">
              <li>
                <a
                  href={contact.phoneHref}
                  className="font-mono text-paper transition-colors hover:text-amber"
                >
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={contact.emailHref}
                  className="text-mist/75 transition-colors hover:text-paper"
                >
                  {contact.email}
                </a>
              </li>
              <li className="data-label text-mist/60">{contact.hours}</li>
            </ul>
          </div>
        </div>

        {/* Offices */}
        <div className="mt-16 grid gap-6 border-t border-mist/12 pt-10 sm:grid-cols-3">
          {offices.map((o) => (
            <div key={o.city}>
              <div className="flex items-baseline justify-between">
                <span className="font-display text-lg font-bold text-paper">
                  {o.city}
                </span>
                <span className="data-label text-mist/60">{o.role}</span>
              </div>
              <address className="mt-2 not-italic text-sm leading-relaxed text-mist/65">
                {o.address.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </address>
              <span className="mt-2 block font-mono text-xs text-amber/80">
                {o.coordinates}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-6 border-t border-mist/12 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="data-label text-mist/60">
            © {year} {company.name}. Built to the line.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {certifications.map((c) => (
              <li key={c.abbr} className="data-label text-mist/55">
                {c.abbr}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
