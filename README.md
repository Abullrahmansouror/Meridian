# Meridian Build Group — Premium Construction Website

A high-end, conversion-focused marketing site for a (fictional) commercial,
civil, and industrial general contractor. Built with a **Blueprint / Engineering
Precision** visual identity: concrete neutrals, a single surveyor-amber accent,
technical grids, drafting annotations, and a draggable before/after comparison.

> All brand names, statistics, projects, and testimonials are credible
> placeholders. Swap them for real details in `lib/data/*` — no component
> changes required.

## Stack

- **Next.js 16** (App Router, TypeScript, static export of every route)
- **Tailwind CSS v4** (CSS-first tokens in `app/globals.css`)
- **Framer Motion** for scroll reveals, counters, and the page-load sequence
- **next/font** (Archivo · Hanken Grotesk · IBM Plex Mono) and **next/image**

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build — all routes prerendered
npm run start    # serve the production build
```

Node 18+ recommended (built and verified on Node 26).

## Structure

```
app/                 Routes + SEO (sitemap.ts, robots.ts, opengraph-image.tsx, icon.svg)
  page.tsx           Home (Hero → ValueProp → Stats → Services → Projects →
                     Before/After → Process → Testimonials → Certifications → CTA)
  about | services | projects | process | careers | contact
  projects/[slug]    Statically generated project case studies
components/
  layout/            Header (scroll-aware), MobileNav drawer, Footer, Wordmark
  ui/                Reusable primitives — Button, Reveal, StatCounter, Eyebrow,
                     SectionHeader, Drafting (CornerTicks/DimensionLine),
                     ProjectCard, BeforeAfterSlider, MarqueeLogos, CallToAction,
                     PageHero, Container
  home/              Homepage section components
  projects/          ProjectsExplorer (sector filter)
  contact/           QuoteForm (validated, mocked submission)
lib/
  data/              All content: company, services, projects, process,
                     testimonials, team, certifications, jobs
  motion.ts          Shared animation variants
  utils.ts           cn() + img() Unsplash URL helper
```

## Customizing

- **Brand, copy, projects, team, jobs:** edit the files in `lib/data/`.
- **Colors & type:** the `@theme` block at the top of `app/globals.css`.
- **Images:** photos are Unsplash IDs passed through `img()` and rendered with
  `next/image`. Replace the `image` / `gallery` IDs in `lib/data/projects.ts`
  (and the hero IDs in section components). Allowed hosts are set in
  `next.config.mjs` (`images.unsplash.com`).

## Contact form

`components/contact/QuoteForm.tsx` validates client-side and shows a success
state, but the submission is **mocked** (a `setTimeout`). To capture real leads,
replace the `setTimeout` in `onSubmit` with a `fetch` to your API route, form
service, or Supabase.

## SEO

Per-page metadata, Open Graph (with a generated `opengraph-image`), JSON-LD
Organization data (`app/layout.tsx`), `sitemap.xml`, and `robots.txt` are all
wired. Update the `siteUrl` in `app/layout.tsx`, `app/sitemap.ts`, and
`app/robots.ts` before launch.

## Accessibility & performance

Mobile-first responsive, visible keyboard focus, a skip link, semantic
landmarks, alt text, and `prefers-reduced-motion` respected throughout. Server
components by default; client JS only where interaction requires it.
