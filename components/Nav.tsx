import { site } from "@/lib/site";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-2xl surface-card">
            <img src="/authlogo.png" alt="diPPy" className="h-7 w-7 object-contain" />
          </span>
          <span className="font-display text-xl font-bold tracking-tight">{site.brand}</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {site.nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-ink-soft transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-transform hover:scale-[1.03]"
        >
          Book a demo
        </a>
      </div>
    </header>
  );
}
