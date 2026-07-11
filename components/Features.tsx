"use client";

import { Icon } from "@iconify/react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function Features() {
  const f = site.features;
  return (
    <section id="features" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-semibold tracking-widest text-cyan">
              {f.eyebrow}
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {f.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-soft">{f.sub}</p>
          </div>
        </Reveal>

        <div className="mt-14 space-y-6">
          {f.groups.map((g, gi) => (
            <Reveal key={g.name} delay={gi * 0.05}>
              <div className="surface-card-2 rounded-[32px] p-7 sm:p-9">
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-soft text-accent-deep">
                    <Icon icon={g.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-2xl font-bold">{g.name}</h3>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {g.items.map((it) => (
                    <div
                      key={it.title}
                      className="rounded-2xl bg-surface p-5 transition-transform hover:-translate-y-1"
                    >
                      <Icon icon={it.icon} className="h-6 w-6 text-cyan" />
                      <h4 className="mt-3 font-semibold">{it.title}</h4>
                      <p className="mt-1 text-sm text-ink-soft">{it.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
