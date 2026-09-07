# Meridian

Meridian is a premium marketing website for a fictional commercial, civil, and industrial construction company, designed to communicate trust, precision, and engineering excellence. It combines a clean blueprint-inspired visual identity, interactive project showcases, and conversion-focused sections to present services, completed work, and company expertise in a professional and engaging way.

## Tech Stack
- Next.js 16 (App Router, TypeScript & Static Export)
- Tailwind CSS v4
- Framer Motion
- next/font (Archivo, Hanken Grotesk, IBM Plex Mono)
- next/image
- Built with Claude Code

## Goal
The goal of this project was to create a production-ready construction company website that demonstrates how modern web technologies can be used to build a high-converting corporate presence. It focuses on presenting complex business information through a structured user experience, interactive project comparisons, responsive layouts, and strong visual branding while maintaining excellent performance, accessibility, SEO, and a scalable content architecture that can easily be connected to a real backend or CMS.

## Live Website
https://meridian-construction.vercel.app

## Environment Configuration

Copy `.env.example` to `.env.local` for local development. Set
`NEXT_PUBLIC_SITE_URL` to the client-owned production origin so canonical URLs,
Open Graph metadata, `robots.txt`, and `sitemap.xml` agree.

The project brief form sends through Resend and requires `RESEND_API_KEY`,
`CONTACT_FROM_EMAIL`, and `CONTACT_TO_EMAIL`. Verify the sender domain in Resend
before deployment. Without these values, the form shows an honest delivery error
and directs visitors to the published contact email.
