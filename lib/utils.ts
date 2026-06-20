export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Build an optimized Unsplash CDN URL from a bare photo id.
 * next/image will further optimize, but we cap source width to keep payloads lean.
 */
export function img(
  id: string,
  opts: { w?: number; h?: number; q?: number } = {}
): string {
  const { w = 1600, h, q = 72 } = opts;
  const params = new URLSearchParams({
    auto: "format",
    fit: "crop",
    crop: "edges",
    w: String(w),
    q: String(q),
  });
  if (h) params.set("h", String(h));
  return `https://images.unsplash.com/photo-${id}?${params.toString()}`;
}
