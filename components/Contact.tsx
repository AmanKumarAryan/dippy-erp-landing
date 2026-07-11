"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function Contact() {
  const c = site.contact;
  const [sent, setSent] = useState(false);
  const wa = c.whatsapp.replace(/\+/g, "");

  return (
    <section id="contact" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="gradient-border relative overflow-hidden rounded-[40px] bg-surface p-10 sm:p-16">
            <div className="glow-orb left-0 top-0 h-56 w-56 bg-accent-soft/40" />
            <div className="glow-orb right-0 bottom-0 h-56 w-56 bg-cyan-soft/40" />
            <div className="relative text-center">
              <span className="text-xs font-semibold tracking-widest text-cyan">
                {c.eyebrow}
              </span>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                {c.title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-ink-soft">{c.sub}</p>
            </div>

            {sent ? (
              <div className="relative mt-10 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cyan-soft text-cyan">
                  <Icon icon="ph:check" className="h-7 w-7" />
                </div>
                <p className="mt-4 font-semibold">
                  Thank you! Hamari team 24 ghante mein aapse connect karegi.
                </p>
              </div>
            ) : (
              <form
                className="relative mx-auto mt-10 max-w-xl space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    required
                    placeholder="Aapka naam"
                    className="rounded-2xl border border-line bg-background px-4 py-3 outline-none focus:border-accent"
                  />
                  <input
                    required
                    placeholder="School ka naam"
                    className="rounded-2xl border border-line bg-background px-4 py-3 outline-none focus:border-accent"
                  />
                </div>
                <input
                  required
                  type="tel"
                  placeholder="Phone number"
                  className="w-full rounded-2xl border border-line bg-background px-4 py-3 outline-none focus:border-accent"
                />
                <textarea
                  placeholder="Kya dekhna chahte hain? (optional)"
                  rows={3}
                  className="w-full rounded-2xl border border-line bg-background px-4 py-3 outline-none focus:border-accent"
                />
                <button
                  type="submit"
                  className="w-full rounded-full bg-accent px-7 py-3.5 font-semibold text-white shadow-xl shadow-accent/25 transition-transform hover:scale-[1.02]"
                >
                  Book my free demo
                </button>
              </form>
            )}

            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4 text-sm">
              <a
                href={`mailto:${c.email}`}
                className="flex items-center gap-2 text-ink-soft hover:text-foreground"
              >
                <Icon icon="ph:envelope-simple" className="h-5 w-5 text-accent" />
                {c.email}
              </a>
              <a
                href={`https://wa.me/${wa}`}
                className="flex items-center gap-2 text-ink-soft hover:text-foreground"
              >
                <Icon icon="ph:whatsapp-logo" className="h-5 w-5 text-cyan" />
                WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
