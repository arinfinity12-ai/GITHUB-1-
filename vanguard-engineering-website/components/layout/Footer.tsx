import Link from "next/link";

import { content } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-bone">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <span className="font-display text-2xl font-bold tracking-tight">
              VANGUARD
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-bone/80">
              {content.footer.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-bone">
              {content.footer.columns.links.heading}
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {content.footer.columns.links.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-bone/80 transition-colors hover:text-bone"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-bone">
              {content.footer.columns.contact.heading}
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <a
                  href={`mailto:${content.footer.columns.contact.email}`}
                  className="text-sm text-bone/80 transition-colors hover:text-bone"
                >
                  {content.footer.columns.contact.email}
                </a>
              </li>
              <li className="text-sm text-bone/80">
                {content.footer.columns.contact.city}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-bone/10 pt-6 text-xs text-bone/60 md:flex-row md:items-center">
          <span>
            © {year} {content.brand.name}
          </span>
          <Link
            href={content.footer.privacy.href}
            className="transition-colors hover:text-bone"
          >
            {content.footer.privacy.label}
          </Link>
        </div>
      </div>
    </footer>
  );
}
