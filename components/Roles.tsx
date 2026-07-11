"use client";

import { Icon } from "@iconify/react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function Roles() {
  const r = site.roles;
  return (
    <section id="roles" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-semibold tracking-widest text-accent">
              {r.eyebrow}
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {r.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-soft">{r.sub}</p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {r.items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.08}>
              <div className="surface-card flex h-full flex-col rounded-[28px] p-7 transition-transform hover:-translate-y-1">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-soft text-cyan">
                  <Icon icon={it.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{it.text}</p>
                <ul className="mt-4 space-y-2">
                  {it.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-sm text-foreground">
                      <Icon icon="ph:check-circle" className="h-4 w-4 text-cyan" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
