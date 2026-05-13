"use client";

import { motion } from "framer-motion";

import { content } from "@/lib/content";
import { cn } from "@/lib/utils";

export function AboutDuo() {
  const duo = content.aboutDuo;

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
          <span className="eyebrow">Chi siamo</span>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-5xl">
            {duo.heading}
          </h2>
          <p className="mt-4 text-lg text-muted">{duo.sub}</p>
        </motion.div>

        <div className="mx-auto mt-12 max-w-2xl md:mt-16">
          <div className="flex aspect-[4/3] items-center justify-center rounded-lg border border-border bg-mist text-sm uppercase tracking-widest text-muted">
            {duo.photoCaption}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-10">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.35 }}
            className="rounded-lg border border-border bg-paper p-6 md:p-8"
          >
            <span
              className={cn(
                "inline-flex rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest",
                duo.architect.badgeClass,
              )}
            >
              {duo.architect.role}
            </span>
            <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
              {duo.architect.name}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {duo.architect.body}
            </p>
            <blockquote className="mt-6 border-l-4 border-gold pl-4 font-display text-lg italic text-ink">
              “{duo.architect.quote}”
            </blockquote>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.35, delay: 0.08 }}
            className="rounded-lg border border-border bg-paper p-6 md:p-8"
          >
            <span
              className={cn(
                "inline-flex rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest",
                duo.bridge.badgeClass,
              )}
            >
              {duo.bridge.role}
            </span>
            <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
              {duo.bridge.name}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted">{duo.bridge.body}</p>
          </motion.article>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.35 }}
          className="mt-12 max-w-4xl md:mt-16"
        >
          <h3 className="font-display text-2xl font-semibold text-ink md:text-3xl">
            {duo.why.heading}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            {duo.why.body}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
