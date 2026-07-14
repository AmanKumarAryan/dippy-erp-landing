"use client";

import { motion } from "motion/react";
import { site } from "@/lib/site";

export default function Hero() {
  const h = site.hero;
  return (
    <section className="relative hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6"
          >
            <h2 className="eyebrow">{h.eyebrow}</h2>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-title"
          >
            <div className="title-line title-line-1">
              <span className="word">{h.headline}</span>
            </div>
            <div className="title-line has-desc">
              <span className="word gradient-text">{h.headlineGradient}</span>
              <span className="word title-middle">—</span>
            </div>
            <div className="title-line">
              <span className="word">{h.headlineEnd}</span>
            </div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="hero-description"
          >
            {h.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="hero-actions"
          >
            <a
              href={h.ctaPrimary.href}
              className="btn btn-primary"
            >
              {h.ctaPrimary.label}
            </a>
            <a
              href={h.ctaSecondary.href}
              className="btn btn-secondary"
            >
              {h.ctaSecondary.label}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hero-stats"
          >
            {h.stats.map((s, index) => (
              <div key={s.label} className="stat-item">
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
