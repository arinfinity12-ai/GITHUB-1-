import type { Metadata } from "next";

import { DiagnosticCallForm } from "@/components/forms/DiagnosticCallForm";
import { content } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Diagnostic Call | Vanguard Engineering Group",
  description:
    "Prenota una Diagnostic Call gratuita con Vanguard. 60 minuti per mappare i tuoi 3 colli di bottiglia operativi.",
});

export default function DiagnosticCallPage() {
  return (
    <section className="bg-bone">
      <div className="mx-auto max-w-5xl px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Diagnostic Call</span>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
            {content.diagnosticCall.heading}
          </h1>
          <p className="mt-4 text-lg text-muted">{content.diagnosticCall.sub}</p>
        </div>

        <div className="mt-12 md:mt-16">
          <DiagnosticCallForm />
        </div>
      </div>
    </section>
  );
}
