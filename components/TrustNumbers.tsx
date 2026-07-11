"use client";

import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function TrustNumbers() {
  const t = site.trust;
  return (
    <section className="relative px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="gradient-border relative overflow-hidden rounded-[36px] bg-surface p-10 sm:p-14">
            <div className="glow-orb left-10 top-0 h-48 w-48 bg-accent-soft/40" />
            <div className="glow-orb right-10 bottom-0 h-48 w-48 bg-cyan-soft/40" />
            <div className="relative text-center">
              <span className="text-xs font-semibold tracking-widest text-cyan">
                {t.eyebrow}
              </span>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                {t.title}
              </h2>
            </div>
            <div className="relative mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
              {t.stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="gradient-text-gold font-display text-4xl font-bold sm:text-5xl">
                    {s.value}
                  </div>
                  <div className="mt-2 text-sm text-ink-soft">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
