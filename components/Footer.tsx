"use client";

import { Icon } from "@iconify/react";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-2xl surface-card">
            <img src="/authlogo.png" alt="" className="h-7 w-7 object-contain" />
          </span>
          <span className="font-display text-lg font-bold">{site.brand}</span>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-ink-soft">
          {site.nav.map((n) => (
            <a key={n.href} href={n.href} className="transition-colors hover:text-foreground">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="flex h-9 w-9 items-center justify-center rounded-full surface-card text-ink-soft transition-colors hover:text-accent"
          >
            <Icon icon="ph:instagram-logo" className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="flex h-9 w-9 items-center justify-center rounded-full surface-card text-ink-soft transition-colors hover:text-accent"
          >
            <Icon icon="ph:linkedin-logo" className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="flex h-9 w-9 items-center justify-center rounded-full surface-card text-ink-soft transition-colors hover:text-accent"
          >
            <Icon icon="ph:youtube-logo" className="h-5 w-5" />
          </a>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-6xl text-center text-xs text-ink-mute">
        © {new Date().getFullYear()} {site.brand}. Made with care for UP & Bihar schools.
      </p>
    </footer>
  );
}
