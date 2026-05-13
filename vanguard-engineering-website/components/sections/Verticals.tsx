"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { content } from "@/lib/content";
import { cn } from "@/lib/utils";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
};

export function Verticals() {
  return (
    <section id="verticali" className="bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.35 }}
          className="max-w-3xl"
        >
          <span className="eyebrow">I verticali</span>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-5xl">
            {content.verticals.heading}
          </h2>
          <p className="mt-4 text-lg text-muted">{content.verticals.sub}</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
        >
          {content.verticals.items.map((v) => (
            <motion.article
              key={v.id}
              variants={item}
              className={cn(
                "group relative flex flex-col rounded-lg border-2 bg-paper p-6 transition-all hover:shadow-lg md:p-8",
                v.featured
                  ? "border-gold"
                  : "border-border hover:border-signal",
              )}
            >
              {v.featured ? (
                <span className="absolute -top-3 left-6 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                  Featured
                </span>
              ) : null}

              <div className="flex items-center gap-3">
                <span className="text-3xl" aria-hidden="true">
                  {v.emoji}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {v.name}
                  </h3>
                  <span className="font-mono text-xs uppercase tracking-widest text-muted">
                    {v.forWhom}
                  </span>
                </div>
              </div>

              <p className="mt-5 text-base leading-relaxed text-muted">{v.body}</p>

              <dl className="mt-6 grid grid-cols-1 gap-3 text-sm">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-muted">
                    Per chi
                  </dt>
                  <dd className="text-ink">{v.target}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-muted">
                    Ticket
                  </dt>
                  <dd className="font-medium text-ink">{v.ticket}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-muted">
                    Partner
                  </dt>
                  <dd className="text-ink">{v.partner}</dd>
                </div>
              </dl>

              <div className="mt-auto pt-6">
                <Link
                  href={v.cta.href}
                  className={cn(
                    "inline-flex items-center text-sm font-semibold transition-colors",
                    v.featured ? "text-gold hover:text-ink" : "text-signal hover:text-ink",
                  )}
                >
                  {v.cta.label}
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
