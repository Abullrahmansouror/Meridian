# Project Brief — Meridian Build Group Website

## Overview

A high-end, conversion-focused marketing website for **Meridian Build Group**, a commercial, civil, and industrial general contractor. The site is built to establish credibility, present the company as an industry leader, and turn qualified visitors into leads.

> **Brand note:** "Meridian Build Group" and all accompanying copy, statistics, projects, team, and testimonials are credible **placeholders**. They are isolated in `lib/data/*` so real company details can be dropped in without touching the design or components.

## Objectives

- Build trust and present a premium, established brand identity.
- Generate qualified leads through a clear, low-friction conversion path.
- Showcase capability and track record (services, projects, process, credentials).
- Deliver fast, mobile-first, SEO-sound performance.

## Audience

Owners, developers, public agencies, and project executives evaluating a general contractor / construction manager for complex commercial, civil/infrastructure, and industrial work.

## Brand & Positioning

- **Name:** Meridian Build Group · **Tagline:** *"We build the structures that last."*
- **Positioning:** A contractor that self-performs the critical path, prices reality in pre-construction, and holds the number and the date.
- **Voice:** Precise, confident, plain-spoken. No salesy filler; specifics over adjectives.

## Design Direction — Blueprint / Engineering Precision

Chosen deliberately to avoid generic, templated looks and to express the subject (construction drawings) directly.

- **Palette:** cool concrete neutrals (charcoal → paper) with a single **surveyor-amber** accent (`#D85B1C`).
- **Type:** Archivo (display) · Hanken Grotesk (body) · IBM Plex Mono (data/labels/coordinates).
- **Signature:** a drafting-annotation language — corner registration ticks, dimension lines, coordinate callouts, and technical grids — so the whole site reads like a living set of construction drawings.
- **Motion:** an orchestrated page-load sequence, scroll reveals, count-up stats, and hover micro-interactions; `prefers-reduced-motion` respected throughout.

## Scope

**Pages:** Home, About, Services, Projects (+ individual project case studies), Process, Careers, Contact.

**Homepage flow:** premium hero → value proposition → credibility stats → services overview → featured projects → before/after comparison → process preview → testimonials → certifications → call to action.

**Signature features:** draggable before/after image comparison, sector-filterable project portfolio, statically generated project case studies, animated credibility counters, a validated quote/contact form, and a scroll-aware navigation with a full-screen mobile menu.

## Technical Approach

- **Next.js 16** (App Router, TypeScript) — every route prerendered (static/SSG).
- **Tailwind CSS v4** (CSS-first design tokens) and **Framer Motion**.
- Optimized imagery via `next/image` (Unsplash sources), subsetted fonts via `next/font`.
- **SEO:** per-page metadata, Open Graph (generated OG image), sitemap, robots, and Organization JSON-LD.
- **Accessibility:** mobile-first responsive, visible keyboard focus, skip link, semantic landmarks, alt text, reduced-motion support.

## Decisions Made

| Decision | Choice |
| --- | --- |
| Tech stack | Next.js + Tailwind + Framer Motion |
| Visual direction | Blueprint / Engineering Precision |
| Brand & content | Invented premium fictional brand, placeholder copy |
| Lead capture & hosting | Front-end only — form validates with full UX but submission is **mocked**; no backend, no deploy |

## Status

**Delivered and verified.** `npm run build` passes cleanly (all routes prerendered, no type errors); the full site has been visually reviewed across desktop and mobile, including the mobile menu, before/after slider, and contact form. The project is on GitHub at `Abullrahmansouror/MERIDIAN-construction`.

## To Take It Live

1. **Swap content** — replace placeholders in `lib/data/*` (and hero image IDs) with real company details, projects, and photography.
2. **Wire the contact form** — replace the mocked `setTimeout` in `components/contact/QuoteForm.tsx` with a real endpoint, form service, or Supabase to capture leads.
3. **Set the production URL** — update `siteUrl` in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts`.
4. **Deploy** — Vercel (zero-config for Next.js); add the custom domain.

## Success Measures

Qualified contact-form submissions, time-on-site and project-page engagement, mobile performance/Lighthouse scores, and organic search visibility for the target regions and disciplines.
