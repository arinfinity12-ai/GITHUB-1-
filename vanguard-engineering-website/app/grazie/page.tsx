import type { Metadata } from "next";
import Link from "next/link";

import { content } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Grazie | Vanguard Engineering Group",
  description: "Richiesta ricevuta. Letizia ti contatterà entro 24 ore.",
  robots: { index: false, follow: false },
});

export default function GraziePage() {
  return (
    <section className="bg-bone">
      <div className="mx-auto max-w-3xl px-4 py-24 text-center md:px-8 md:py-32">
        <span className="eyebrow">Conferma</span>
        <h1 className="mt-3 font-display text-5xl font-semibold text-ink md:text-6xl">
          {content.thankYou.heading}
        </h1>
        <p className="mt-4 font-display text-xl text-ink md:text-2xl">
          {content.thankYou.sub}
        </p>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted">
          {content.thankYou.body}
        </p>
        <Link
          href={content.thankYou.cta.href}
          className="mt-10 inline-flex items-center justify-center rounded-lg border border-border bg-paper px-8 py-3 text-base font-medium text-ink transition-colors hover:border-ink"
        >
          {content.thankYou.cta.label}
        </Link>
      </div>
    </section>
  );
}
