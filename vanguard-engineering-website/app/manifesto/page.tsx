import type { Metadata } from "next";

import { content } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Manifesto | Vanguard Engineering Group",
  description: "Il Manifesto di Vanguard Engineering Group — in arrivo.",
});

export default function ManifestoPage() {
  return (
    <section className="bg-bone">
      <div className="mx-auto max-w-3xl px-4 py-24 md:px-8 md:py-32">
        <span className="eyebrow">In arrivo</span>
        <h1 className="mt-3 font-display text-5xl font-semibold text-ink md:text-6xl">
          {content.stubs.manifesto.heading}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          {content.stubs.manifesto.body}
        </p>
      </div>
    </section>
  );
}
