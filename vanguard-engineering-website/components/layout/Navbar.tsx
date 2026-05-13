"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { content } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while mobile drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-bone transition-colors duration-200",
        scrolled ? "border-b border-border" : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link
          href="/"
          className="font-display text-2xl font-bold tracking-tight text-ink"
          aria-label="Vanguard — Home"
        >
          VANGUARD
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navigazione principale">
          {content.nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={content.nav.cta.href}
            className="rounded-lg bg-signal px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            {content.nav.cta.label}
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Apri menu"
        >
          <Menu className="h-6 w-6 text-ink" />
        </button>
      </div>

      {/* Mobile drawer */}
      {open ? (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
          <div
            className="absolute inset-0 bg-ink/40"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-bone p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="font-display text-xl font-bold">VANGUARD</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Chiudi menu"
              >
                <X className="h-6 w-6 text-ink" />
              </button>
            </div>
            <nav className="mt-8 flex flex-col gap-5" aria-label="Navigazione mobile">
              {content.nav.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-ink"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={content.nav.cta.href}
                onClick={() => setOpen(false)}
                className="mt-2 rounded-lg bg-signal px-5 py-3 text-center text-base font-semibold text-white"
              >
                {content.nav.cta.label}
              </Link>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
