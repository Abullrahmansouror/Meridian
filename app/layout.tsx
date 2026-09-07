import type { Metadata } from "next";
import { Archivo, Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { company, contact, offices } from "@/lib/data/company";
import { siteUrl } from "@/lib/site";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Meridian Build Group — Commercial, Civil & Industrial Construction",
    template: "%s · Meridian Build Group",
  },
  description:
    "Meridian Build Group is a general contractor and construction manager delivering complex commercial, civil, and industrial projects across the Mountain West since 1998.",
  keywords: [
    "general contractor",
    "construction management",
    "commercial construction",
    "civil construction",
    "industrial construction",
    "design-build",
    "Denver construction",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: company.name,
    title: "Meridian Build Group — Built to the line.",
    description:
      "Commercial, civil, and industrial construction delivered on schedule, on budget, and to the line.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meridian Build Group",
    description:
      "Commercial, civil, and industrial construction. Built to the line, since 1998.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: company.name,
  url: siteUrl,
  description: company.description,
  foundingDate: String(company.founded),
  telephone: contact.phone,
  email: contact.email,
  address: offices.map((o) => ({
    "@type": "PostalAddress",
    streetAddress: o.address[0],
    addressLocality: o.city,
    addressCountry: "US",
  })),
  areaServed: "Mountain West, United States",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${hanken.variable} ${plexMono.variable}`}
    >
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest focus:text-paper"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(orgSchema).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
