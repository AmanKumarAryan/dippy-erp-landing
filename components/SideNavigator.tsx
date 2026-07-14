"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/cn";

const sections = [
  { id: "hero", label: "Home" },
  { id: "problem", label: "Problem" },
  { id: "how", label: "How it Works" },
  { id: "roles", label: "Roles" },
  { id: "features", label: "Features" },
  { id: "demos", label: "Demos" },
  { id: "trust", label: "Trust" },
  { id: "testimonials", label: "Testimonials" },
  { id: "pricing", label: "Pricing" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export default function SideNavigator() {
  const [active, setActive] = useState("hero");
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(id);
            }
          });
        },
        { threshold: 0.2, rootMargin: "-10% 0px -10% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <nav className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
      <div className="relative flex flex-col items-center gap-4">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-line to-transparent" />

        {sections.map((s, i) => {
          const isActive = active === s.id;
          const isHovered = hovered === s.id;

          return (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              onMouseEnter={() => setHovered(s.id)}
              onMouseLeave={() => setHovered(null)}
              className="group relative flex h-8 w-8 items-center justify-center"
            >
              {/* Label (slides in on hover/active) */}
              <motion.span
                initial={false}
                animate={{
                  opacity: isActive || isHovered ? 1 : 0,
                  x: isActive || isHovered ? 0 : 12,
                }}
                transition={{ duration: 0.2 }}
                className={cn(
                  "pointer-events-none absolute right-full mr-3 whitespace-nowrap text-xs font-medium transition-colors",
                  isActive ? "text-accent" : "text-ink-mute"
                )}
              >
                {s.label}
              </motion.span>

              {/* Dot */}
              <motion.span
                animate={{
                  scale: isActive ? 1.8 : 1,
                  backgroundColor: isActive
                    ? "rgb(124, 58, 237)"
                    : isHovered
                    ? "rgb(124, 58, 237)"
                    : undefined,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={cn(
                  "h-2 w-2 rounded-full transition-colors",
                  isActive
                    ? "bg-accent shadow-[0_0_8px_rgba(124,58,237,0.5)]"
                    : "bg-line hover:bg-accent/50"
                )}
              />

              {/* Active glow ring */}
              {isActive && (
                <motion.span
                  layoutId="nav-glow"
                  className="absolute inset-0 rounded-full border border-accent/30"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
