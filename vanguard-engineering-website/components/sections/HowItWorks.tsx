"use client";

import { motion } from "framer-motion";

import { content } from "@/lib/content";

export function HowItWorks() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.35 }}
          className="max-w-3xl"
        >
          <span className="eyebrow">Il processo</span>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-5xl">
            {content.howItWorks.heading}
          </h2>
          <p className="mt-4 text-lg text-muted">{content.howItWorks.sub}</p>
        </motion.div>

        <ol className="mt-12 flex flex-col gap-6 md:mt-16 md:gap-8">
          {content.howItWorks.phases.map((phase, i) => (
            <motion.li
              key={phase.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="grid grid-cols-1 gap-6 rounded-lg border border-border bg-bone p-6 md:grid-cols-[160px_1fr] md:gap-10 md:p-8"
            >
              <div className="flex flex-col">
                <span className="font-mono text-5xl font-semibold text-signal md:text-6xl">
                  {phase.number}
                </span>
                <span className="mt-2 font-mono text-xs uppercase tracking-widest text-muted">
                  {phase.time}
                </span>
              </div>
              <div>
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3 className="font-display text-2xl font-semibold text-ink">
                    Fase {Number(phase.number)} — {phase.title}
                  </h3>
                  <span className="inline-flex rounded-full border border-border bg-paper px-3 py-1 text-xs font-medium text-muted">
                    {phase.badge}
                  </span>
                </div>
                <p className="mt-4 text-base leading-relaxed text-muted">{phase.body}</p>
                <p className="mt-4 border-l-2 border-gold pl-4 text-sm italic text-ink">
                  {phase.note}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.35 }}
          className="mt-12 max-w-3xl font-display text-xl italic text-ink md:mt-16 md:text-2xl"
        >
          {content.howItWorks.closing}
        </motion.p>
      </div>
    </section>
  );
}
