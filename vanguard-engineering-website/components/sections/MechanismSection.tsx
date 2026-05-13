"use client";

import { motion } from "framer-motion";
import { BarChart3, Search, Settings } from "lucide-react";

import { content } from "@/lib/content";

const iconMap = {
  Search,
  Settings,
  BarChart3,
} as const;

type IconKey = keyof typeof iconMap;

export function MechanismSection() {
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
          <span className="eyebrow">Il meccanismo</span>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-5xl">
            {content.mechanism.heading}
          </h2>
          <p className="mt-4 font-display text-xl text-ink md:text-2xl">
            {content.mechanism.subHeading}
          </p>
          <p className="mt-4 text-lg text-muted">{content.mechanism.sub}</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
          {content.mechanism.layers.map((layer, i) => {
            const Icon = iconMap[layer.icon as IconKey];
            return (
              <motion.article
                key={layer.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className="flex flex-col rounded-lg border border-border bg-paper p-6 md:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted">
                    Layer {layer.number}
                  </span>
                  {Icon ? (
                    <Icon className="h-5 w-5 text-signal" aria-hidden="true" />
                  ) : null}
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
                  {layer.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted">{layer.body}</p>
                <div className="mt-6 rounded-md bg-mist p-4">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
                    Output
                  </span>
                  <p className="mt-1 text-sm italic text-ink">{layer.output}</p>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.35 }}
          className="mt-12 max-w-4xl text-base leading-relaxed text-muted md:mt-16 md:text-lg"
        >
          {content.mechanism.closing}
        </motion.p>
      </div>
    </section>
  );
}
