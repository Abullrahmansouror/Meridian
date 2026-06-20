"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { easeOutExpo } from "@/lib/motion";
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

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-40 bg-ink lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="grid-blueprint-dark absolute inset-0 opacity-60" />
          <div className="relative flex h-full flex-col px-5 pb-10 pt-24 sm:px-8">
            <nav className="flex flex-col">
              {primaryNav.map((link, i) => {
                const active =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.08 + i * 0.05,
                      duration: 0.5,
                      ease: easeOutExpo,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="flex items-baseline justify-between border-b border-mist/12 py-5"
                    >
                      <span className="font-display text-3xl font-bold text-paper">
                        {link.label}
                      </span>
                      <span className="data-label text-amber">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="mt-auto flex flex-col gap-6">
              <ButtonLink href="/contact" variant="primary" className="w-full">
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}
