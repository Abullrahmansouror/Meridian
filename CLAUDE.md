# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing website for **Meridian Build Group**, a (fictional) commercial / civil / industrial general contractor. Premium, conversion-focused, with a deliberate **Blueprint / Engineering Precision** visual identity. All brand names, copy, stats, projects, and testimonials are placeholders.

## Commands

```bash
npm install
npm run dev      # dev server (Turbopack) on :3000
npm run build    # production build — prerenders every route; THIS is the verification step
npm run start    # serve the production build
```

There is **no test suite** and **no working linter** (`next lint` exists in scripts but ESLint is intentionally not configured under Next 16). Treat a clean `npm run build` — which runs the TypeScript type-check and statically generates all routes — as the gate before considering a change done.

## Architecture

**Stack:** Next.js 16 (App Router, TypeScript), Tailwind CSS v4 (CSS-first), Framer Motion. Every route is static/SSG. Server Components by default; `"use client"` only where interaction or motion requires it.

**Content is data-driven.** `lib/data/*` is the single source of truth (`company`, `services`, `projects`, `process`, `testimonials`, `team`, `certifications`, `jobs`). Pages and components read from it; they contain almost no hardcoded copy. To rebrand or change content, edit `lib/data/*` — do **not** edit components. Adding a project = append to `lib/data/projects.ts` (its `featured` flag surfaces it on the homepage; `sector` drives the Projects filter; `[slug]` pages are generated from it).

**Design system lives in `app/globals.css`.** Tailwind v4 `@theme` defines the color + font tokens and custom utilities (`grid-blueprint`, `grid-blueprint-dark`, `data-label`, `animate-marquee`, `no-scrollbar`). Fonts are loaded with `next/font` in `app/layout.tsx`, exposed as CSS variables, and referenced by the `--font-*` tokens. Change palette/type here, not inline.

**Composition pattern.** `components/ui/*` are the reusable primitives (`Reveal`, `StatCounter`, `Eyebrow`, `SectionHeader`, `Button`/`ButtonLink`, `Drafting` → `CornerTicks`/`DimensionLine`, `ProjectCard`, `BeforeAfterSlider`, `MarqueeLogos`, `CallToAction`, `PageHero`, `Container`). `components/home/*` are homepage sections that compose those primitives; dedicated pages reuse the same primitives. Build new sections from existing primitives before introducing new ones.

**Images** are bare Unsplash photo IDs stored in data, turned into URLs by `img()` in `lib/utils.ts`, and rendered with `next/image`. The only allowed remote host is `images.unsplash.com` (`next.config.mjs`). Before using a new ID, confirm it resolves and is on-brand (construction/architecture) — many plausible IDs are unrelated photos.

**SEO** is wired: per-page `metadata`/`generateMetadata`, `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.tsx`, `app/icon.svg`, and Organization JSON-LD in `app/layout.tsx`. The production URL is hardcoded as `siteUrl` in `layout.tsx`, `sitemap.ts`, and `robots.ts` — update all three before launch.

## Non-obvious constraints (read before editing these areas)

- **MobileNav must be a sibling of `<header>`, never a child.** The header uses `backdrop-blur` (a `backdrop-filter`), which makes it a containing block for `position: fixed` descendants — nesting the full-screen drawer inside collapses it to the header's height. See `components/layout/Header.tsx` (returns a fragment: `<header>…</header>` then `<MobileNav/>`).

- **The header is scroll-aware and assumes a dark first section.** It renders transparent with light text over the hero and turns solid paper with dark text only when scrolled and the menu is closed. Therefore **every page's first section must be dark** — use `PageHero` (or an `bg-ink` hero) at the top of any new page, or the transparent header text will be invisible.

- **Tailwind display-utility specificity.** `buttonStyles()` includes a base `inline-flex`; adding `hidden`/`sm:inline-flex` directly to a `ButtonLink` won't hide it (equal specificity, declaration order wins). To toggle visibility, wrap the button in a `<span className="hidden sm:inline-flex">` instead. Watch for the same trap with other `display` conflicts.

- **`Reveal` (whileInView) hides content until scrolled into view.** It sets inline `opacity:0` in the SSR HTML (content is still in the DOM, so SEO/crawlers are fine, but it's invisible without JS). Consequence for verification: a single full-page headless screenshot shows below-the-fold sections blank — you must drive a real scroll (e.g. Puppeteer scrolling top→bottom) to trigger reveals before capturing.

- **`prefers-reduced-motion` is honored** globally (CSS) and in JS (`Hero`, `StatCounter` via `useReducedMotion`). Keep new motion behind the same checks.

- **Next 16 dynamic params are async.** In `app/projects/[slug]/page.tsx`, `params` is a `Promise` — `await` it in both the page and `generateMetadata`.

- **Tailwind v4 aspect ratios** use the bracket form (`aspect-[4/5]`), not `aspect-4/5`.

- **The contact form is mocked.** `components/contact/QuoteForm.tsx` validates fully but "submits" via a `setTimeout`; replace that with a real `fetch`/endpoint to capture leads.

## Conventions

Mono (IBM Plex Mono via `data-label` / `font-mono`) is for eyebrows, labels, data, and coordinates. A single amber accent (`--color-amber`) carries emphasis — don't introduce other accent colors. Numbered markers (01/02…) are used only where the order is real (process phases, the fixed service taxonomy), not as decoration.
