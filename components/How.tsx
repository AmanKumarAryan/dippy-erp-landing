"use client";

import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function How() {
  const how = site.how;
  return (
    <section id="how" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-semibold tracking-widest text-cyan">
              {how.eyebrow}
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {how.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-soft">{how.sub}</p>
          </div>
        </Reveal>

        <div className="relative mt-16 grid gap-8 lg:grid-cols-3">
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-accent-soft to-transparent lg:block" />
          {how.steps.map((s, i) => (
            <Reveal key={s.no} delay={i * 0.12}>
              <div className="relative">
                <div className="surface-card-2 mx-auto flex h-18 w-18 items-center justify-center rounded-full font-display text-2xl font-bold text-cyan">
                  {s.no}
                </div>
                <h3 className="mt-6 text-center font-display text-xl font-semibold">
                  {s.title}
                </h3>
                <p className="mx-auto mt-2 max-w-xs text-center text-ink-soft">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
