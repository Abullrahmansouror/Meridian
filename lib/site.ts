const fallbackSiteUrl = "https://meridian-construction.vercel.app";

function normalizeSiteUrl(value: string | undefined): string {
  if (!value) return fallbackSiteUrl;

  const candidate = value.startsWith("http") ? value : `https://${value}`;

  try {
    return new URL(candidate).origin;
  } catch {
    return fallbackSiteUrl;
  }
}

export const siteUrl = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ?? process.env.VERCEL_PROJECT_PRODUCTION_URL
);

export function absoluteUrl(path: string): string {
  return new URL(path, `${siteUrl}/`).toString();
}
