"use client";

import { Icon } from "@iconify/react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function Pricing() {
  const p = site.pricing;
  return (
    <section id="pricing" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-semibold tracking-widest text-cyan">
              {p.eyebrow}
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {p.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-soft">{p.sub}</p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {p.tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.1}>
              <div
                className={`relative flex h-full flex-col rounded-[32px] p-8 ${
                  tier.highlight
                    ? "bg-accent text-white shadow-2xl shadow-accent/30"
                    : "surface-card"
                }`}
              >
                {tier.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-semibold text-accent-deep">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-xl font-bold">{tier.name}</h3>
                <p
                  className={`mt-1 text-sm ${
                    tier.highlight ? "text-white/80" : "text-ink-soft"
                  }`}
                >
                  {tier.blurb}
                </p>
                <div className="mt-5 flex items-end gap-1">
                  <span className="font-display text-4xl font-bold">{tier.price}</span>
                  <span
                    className={`mb-1 text-sm ${
                      tier.highlight ? "text-white/80" : "text-ink-soft"
                    }`}
                  >
                    {tier.period}
                  </span>
                </div>
                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((ft) => (
                    <li key={ft} className="flex items-center gap-2 text-sm">
                      <Icon
                        icon="ph:check-circle"
                        className={`h-5 w-5 ${
                          tier.highlight ? "text-white" : "text-cyan"
                        }`}
                      />
                      {ft}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-8 rounded-full px-6 py-3.5 text-center font-semibold transition-transform hover:scale-[1.03] ${
                    tier.highlight
                      ? "bg-white text-accent-deep"
                      : "bg-accent text-white shadow-lg shadow-accent/20"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
