"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { content } from "@/lib/content";

export function CaseStudyFeatured() {
  const cs = content.caseStudy;

  return (
    <section className="bg-bone">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.35 }}
          className="max-w-3xl"
        >
          <span className="eyebrow">Case study in evidenza</span>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-5xl">
            {cs.heading}
          </h2>
          <p className="mt-4 text-lg text-muted">{cs.sub}</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {cs.context.map((row) => (
                <div key={row.label} className="rounded-lg border border-border bg-paper p-4">
                  <dt className="font-mono text-[11px] uppercase tracking-widest text-muted">
                    {row.label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-ink">{row.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8">
              <h3 className="font-display text-xl font-semibold text-ink">
                {cs.problemTitle}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted">{cs.problemBody}</p>
              <ul className="mt-4 flex flex-col gap-2">
                {cs.consequences.map((c) => (
                  <li key={c} className="flex gap-2 text-sm text-ink">
                    <span aria-hidden="true" className="text-signal">
                      —
                    </span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <blockquote className="mt-8 border-l-4 border-gold bg-paper p-5 italic text-ink">
              <p className="text-base leading-relaxed">“{cs.quote.text}”</p>
              <footer className="mt-3 text-sm font-medium not-italic text-muted">
                — {cs.quote.author}
              </footer>
            </blockquote>

            <div className="mt-8">
              <h3 className="font-display text-xl font-semibold text-ink">
                {cs.solutionTitle}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted">{cs.solutionBody}</p>
              <ul className="mt-4 flex flex-col gap-2">
                {cs.architecture.map((row) => (
                  <li key={row.label} className="text-sm text-ink">
                    <span className="font-semibold">{row.label}:</span>{" "}
                    <span className="text-muted">{row.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4 }}
            className="rounded-lg border-2 border-gold bg-charcoal text-bone shadow-xl"
          >
            <div className="border-b border-bone/10 px-6 py-4">
              <span className="font-mono text-xs uppercase tracking-widest text-signal">
                {cs.kpiTitle}
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full table-fixed border-collapse text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-widest text-bone/60">
                    <th className="px-6 py-3 font-medium">KPI</th>
                    <th className="px-6 py-3 font-medium">Prima</th>
                    <th className="px-6 py-3 font-medium">Dopo</th>
                  </tr>
                </thead>
                <tbody>
                  {cs.kpiTable.map((row) => (
                    <tr key={row.kpi} className="border-t border-bone/10">
                      <td className="px-6 py-4 align-top text-bone/90">{row.kpi}</td>
                      <td className="px-6 py-4 align-top font-mono text-bone/70">
                        {row.before}
                      </td>
                      <td className="px-6 py-4 align-top font-mono font-semibold text-gold">
                        {row.after}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="border-t border-bone/10 px-6 py-4 text-xs italic text-bone/60">
              ⚠️ {cs.kpiNote}
            </p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.35 }}
          className="mt-12 max-w-4xl text-base leading-relaxed text-muted md:mt-16 md:text-lg"
        >
          {cs.closing}
        </motion.p>

        <div className="mt-8">
          <Link
            href={cs.cta.href}
            className="inline-flex items-center gap-2 rounded-lg border-2 border-gold bg-paper px-6 py-3 text-base font-semibold text-ink transition-colors hover:bg-gold hover:text-white"
          >
            {cs.cta.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
