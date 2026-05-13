import type { Metadata } from "next";

import { content } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Chi Siamo | Vanguard Engineering Group",
  description: "Chi siamo — Vanguard Engineering Group. Pagina in arrivo.",
});

export default function ChiSiamoPage() {
  return (
    <section className="bg-bone">
      <div className="mx-auto max-w-3xl px-4 py-24 md:px-8 md:py-32">
        <span className="eyebrow">In arrivo</span>
        <h1 className="mt-3 font-display text-5xl font-semibold text-ink md:text-6xl">
          {content.stubs.chiSiamo.heading}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          {content.stubs.chiSiamo.body}
        </p>
      </div>
    </section>
  );
}
