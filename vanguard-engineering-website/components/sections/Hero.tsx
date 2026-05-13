"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { content } from "@/lib/content";

const kpiContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const kpiItem = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
};

export function Hero() {
  return (
    <section className="bg-bone">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 md:grid-cols-2 md:gap-16 md:px-8 md:py-28">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="font-display text-4xl font-semibold leading-tight tracking-tight text-ink md:text-6xl"
          >
            {content.hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.08 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl"
          >
            {content.hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.16 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              href={content.hero.primaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-signal px-8 py-4 text-lg font-semibold text-white transition-transform hover:scale-[1.02]"
            >
              {content.hero.primaryCta.label}
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href={content.hero.secondaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-paper px-8 py-4 text-lg font-medium text-ink transition-colors hover:border-ink"
            >
              {content.hero.secondaryCta.label}
            </Link>
          </motion.div>

          <p className="mt-5 text-sm text-muted">{content.hero.micro}</p>
        </div>

        <motion.div
          variants={kpiContainer}
          initial="hidden"
          animate="show"
          className="grid grid-cols-3 gap-3 md:gap-4"
          aria-label="Indicatori di risultato"
        >
          {content.hero.kpis.map((kpi) => (
            <motion.div
              key={kpi.label}
              variants={kpiItem}
              className="flex aspect-square flex-col items-center justify-center rounded-lg border border-border bg-mist p-3 text-center"
            >
              <span className="font-mono text-xl font-semibold text-ink md:text-2xl">
                {kpi.value}
              </span>
              <span className="mt-1 text-[10px] uppercase tracking-widest text-muted md:text-xs">
                {kpi.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
