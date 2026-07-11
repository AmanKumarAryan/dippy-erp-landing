"use client";

import { Icon } from "@iconify/react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function Problem() {
  const p = site.problem;
  return (
    <section id="problem" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-semibold tracking-widest text-accent">
              {p.eyebrow}
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {p.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-soft">{p.sub}</p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {p.items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.08}>
              <div className="surface-card h-full rounded-[28px] p-7 transition-transform hover:-translate-y-1">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent-deep">
                  <Icon icon={it.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">{it.title}</h3>
                <p className="mt-2 text-ink-soft">{it.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
