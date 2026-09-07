"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { primaryNav, contact, company } from "@/lib/data/company";
import { ButtonLink } from "@/components/ui/Button";

export function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const dialog = dialogRef.current;
    const focusable = dialog?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    focusable?.[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  return (
    <div
      ref={dialogRef}
      id="mobile-navigation"
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      aria-hidden={!open}
      inert={!open}
      className={cn(
        "fixed inset-0 z-40 bg-ink transition-[opacity,visibility] duration-300 lg:hidden",
        open ? "visible opacity-100" : "invisible pointer-events-none opacity-0"
      )}
    >
      <div className="grid-blueprint-dark absolute inset-0 opacity-60" />
      <div className="relative flex h-full flex-col px-5 pb-10 pt-24 sm:px-8">
        <nav className="flex flex-col">
          {primaryNav.map((link, i) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  aria-current={active ? "page" : undefined}
                  className="flex items-baseline justify-between border-b border-mist/12 py-5"
                >
                  <span className="font-display text-3xl font-bold text-paper">
                    {link.label}
                  </span>
                  <span className="data-label text-amber">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </Link>
              </div>
            );
          })}
        </nav>

        <div className="mt-auto flex flex-col gap-6">
          <ButtonLink
            href="/contact"
            variant="primary"
            className="w-full"
            onClick={onClose}
          >
            Start a project
          </ButtonLink>
          <div className="flex flex-col gap-1">
            <a
              href={contact.phoneHref}
              className="font-mono text-sm text-paper"
            >
              {contact.phone}
            </a>
            <span className="data-label text-mist/50">
              {company.coordinates}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
