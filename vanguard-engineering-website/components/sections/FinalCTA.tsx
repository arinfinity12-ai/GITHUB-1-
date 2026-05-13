"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Phone } from "lucide-react";

import { content } from "@/lib/content";

export function FinalCTA() {
  const fc = content.finalCta;

  return (
    <section className="bg-charcoal text-bone">
      <div className="mx-auto max-w-5xl px-4 py-24 md:px-8 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <h2 className="font-display text-4xl font-semibold tracking-tight text-bone md:text-6xl">
            {fc.heading}
          </h2>
          <p className="mt-4 font-display text-xl text-bone/80 md:text-2xl">{fc.sub}</p>
        </motion.div>

        <div className="mx-auto mt-12 max-w-3xl space-y-5 text-base leading-relaxed text-bone/80 md:text-lg">
          <p>{fc.body1}</p>
          <p>{fc.body2}</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-2">
          <p className="border-l-2 border-gold pl-4 font-display text-lg italic text-bone">
            “{fc.columns.left}”
          </p>
          <p className="border-l-2 border-gold pl-4 font-display text-lg italic text-bone">
            “{fc.columns.right}”
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <h3 className="font-display text-2xl font-semibold text-bone md:text-3xl">
            {fc.checklistHeading}
          </h3>
          <ul className="mt-5 flex flex-col gap-3">
            {fc.checklist.map((c) => (
              <li key={c} className="flex items-start gap-3 text-base text-bone/90">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-gold" aria-hidden="true" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-base text-bone/80">{fc.checklistClosing}</p>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <Link
            href={fc.cta.href}
            className="inline-flex items-center justify-center gap-3 rounded-lg bg-signal px-10 py-5 text-lg font-bold uppercase tracking-wide text-white transition-transform hover:scale-[1.02] md:px-12 md:py-6 md:text-xl"
          >
            <Phone className="h-5 w-5" />
            {fc.cta.label}
          </Link>
          <p className="text-sm text-bone/60">{fc.micro}</p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl border-t border-bone/10 pt-8 text-center text-sm text-bone/70">
          <p>{fc.footerAlt}</p>
          <a
            href={`mailto:${fc.email}`}
            className="mt-2 inline-block font-mono text-bone underline-offset-4 hover:underline"
          >
            📩 {fc.email}
          </a>
        </div>
      </div>
    </section>
  );
}
