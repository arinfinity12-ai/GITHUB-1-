"use client";

import { motion } from "framer-motion";

import { content } from "@/lib/content";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" as const, delay: i * 0.08 },
  }),
};

export function ProblemSection() {
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
          <h2 className="font-display text-3xl font-semibold leading-tight text-ink md:text-5xl">
            {content.problem.heading}
          </h2>
          <p className="mt-4 text-lg text-muted md:text-xl">{content.problem.sub}</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
          {content.problem.cards.map((card, i) => (
            <motion.article
              key={card.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="flex flex-col rounded-lg border border-border bg-bone p-6 md:p-8"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-signal">
                Sintomo {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold text-ink">
                {card.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted">{card.body}</p>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.35 }}
          className="mt-12 max-w-3xl font-display text-xl italic text-ink md:mt-16 md:text-2xl"
        >
          {content.problem.closing}
        </motion.p>
      </div>
    </section>
  );
}
