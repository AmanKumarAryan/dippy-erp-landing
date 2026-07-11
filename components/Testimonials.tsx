"use client";

import { Icon } from "@iconify/react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function Testimonials() {
  const t = site.testimonials;
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-semibold tracking-widest text-accent">
              {t.eyebrow}
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {t.title}
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {t.items.map((it, i) => (
            <Reveal key={it.name} delay={i * 0.1}>
              <div className="surface-card flex h-full flex-col rounded-[28px] p-7">
                <Icon icon="ph:quotes" className="h-8 w-8 text-accent-soft" />
                <p className="mt-4 flex-1 text-ink-soft">{it.quote}</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-accent to-cyan font-display text-sm font-bold text-white">
                    {it.avatar}
                  </span>
                  <div>
                    <div className="font-semibold">{it.name}</div>
                    <div className="text-sm text-ink-soft">{it.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
