"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { primaryNav, contact } from "@/lib/data/company";
import { ButtonLink } from "@/components/ui/Button";
import { Wordmark } from "./Wordmark";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Solid paper bar only when scrolled and the menu is closed. While the menu
  // is open the bar stays transparent so the dark drawer reads behind the X.
  const solidBar = scrolled && !open;
  const tone: "dark" | "light" = solidBar ? "dark" : "light";

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          solidBar
            ? "border-b border-line bg-paper/90 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        )}
      >
      <div className="mx-auto flex h-16 max-w-[88rem] items-center justify-between px-5 sm:px-8 lg:h-[4.5rem] lg:px-12">
        <Wordmark tone={tone} />

        <nav className="hidden items-center gap-8 lg:flex">
          {primaryNav.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "data-label relative py-1 transition-colors",
                  tone === "light"
                    ? "text-paper/75 hover:text-paper"
                    : "text-graphite hover:text-ink",
                  active && (tone === "light" ? "text-paper" : "text-ink")
                )}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-0.5 left-0 h-px w-full bg-amber" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-5">
          <a
            href={contact.phoneHref}
            className={cn(
              "hidden font-mono text-xs transition-colors xl:block",
              tone === "light"
                ? "text-paper/75 hover:text-paper"
                : "text-graphite hover:text-ink"
            )}
          >
            {contact.phone}
          </a>
          <span className="hidden sm:inline-flex">
            <ButtonLink href="/contact" variant="primary" size="sm" arrow={false}>
              Start a project
            </ButtonLink>
          </span>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 grid h-10 w-10 place-items-center lg:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="flex w-6 flex-col gap-[5px]">
              <span
                className={cn(
                  "h-px w-full origin-center transition-all duration-300",
                  open ? "translate-y-[3px] rotate-45" : "",
                  open || tone === "light" ? "bg-paper" : "bg-ink"
                )}
              />
              <span
                className={cn(
                  "h-px w-full origin-center transition-all duration-300",
                  open ? "-translate-y-[3px] -rotate-45" : "",
                  open || tone === "light" ? "bg-paper" : "bg-ink"
                )}
              />
            </span>
          </button>
        </div>
        </div>
      </header>

      <MobileNav open={open} onClose={() => setOpen(false)} />
    </>
  );
}
