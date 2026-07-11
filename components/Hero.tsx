"use client";

import { motion } from "motion/react";
import { site } from "@/lib/site";
import PetalField from "./PetalField";

export default function Hero() {
  const h = site.hero;
  return (
    <section className="relative overflow-hidden">
      <div className="glow-orb left-[-10%] top-[-10%] h-72 w-72 bg-accent-soft/40" />
      <div className="glow-orb right-[-5%] top-20 h-80 w-80 bg-cyan-soft/40" />
      <PetalField />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-24 pt-16 lg:grid-cols-2 lg:pt-24">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block rounded-full surface-card px-4 py-1.5 text-xs font-medium tracking-wide text-ink-soft"
          >
            {h.eyebrow}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl"
          >
            {h.headline}{" "}
            <span className="gradient-text">{h.headlineGradient}</span>{" "}
            {h.headlineEnd}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-6 max-w-xl text-lg text-ink-soft"
          >
            {h.sub}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href={h.ctaPrimary.href}
              className="rounded-full bg-accent px-7 py-3.5 font-semibold text-white shadow-xl shadow-accent/25 transition-transform hover:scale-[1.03]"
            >
              {h.ctaPrimary.label}
            </a>
            <a
              href={h.ctaSecondary.href}
              className="rounded-full surface-card px-7 py-3.5 font-semibold text-foreground transition-transform hover:scale-[1.03]"
            >
              {h.ctaSecondary.label}
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 flex gap-8"
          >
            {h.stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-bold">{s.value}</div>
                <div className="text-sm text-ink-soft">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          <div className="relative mx-auto max-w-sm surface-card rounded-[40px] p-8">
            <div className="glow-orb left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 bg-gold/30" />
            <img
              src="/dippy.png"
              alt="diPPy mascot"
              className="relative mx-auto w-64 animate-floaty drop-shadow-xl"
            />
            <img
              src="/children.png"
              alt=""
              className="absolute -bottom-6 -left-6 w-28 animate-drift drop-shadow-lg"
            />
            <img
              src="/ribbon.png"
              alt=""
              className="absolute -right-4 top-4 w-20 animate-drift-rev"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
