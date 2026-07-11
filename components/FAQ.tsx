"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function FAQ() {
  const f = site.faq;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-semibold tracking-widest text-accent">
              {f.eyebrow}
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {f.title}
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 space-y-3">
          {f.items.map((it, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={it.q} delay={i * 0.05}>
                <div className="surface-card overflow-hidden rounded-[22px]">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-semibold">{it.q}</span>
                    <Icon
                      icon={isOpen ? "ph:minus" : "ph:plus"}
                      className="h-5 w-5 shrink-0 text-accent"
                    />
                  </button>
                  {isOpen && (
                    <p className="px-6 pb-5 text-ink-soft">{it.a}</p>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
