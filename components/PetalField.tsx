"use client";

import { useEffect, useRef } from "react";

export default function PetalField({ count = 26 }: { count?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    const colors = ["#FF8A65", "#F4C95D", "#2BB6A8"];

    type P = {
      x: number;
      y: number;
      r: number;
      vy: number;
      vx: number;
      c: string;
      rot: number;
      vr: number;
    };
    let petals: P[] = [];

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      w = parent.clientWidth;
      h = parent.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      petals = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 6 + Math.random() * 10,
        vy: 0.2 + Math.random() * 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        c: colors[Math.floor(Math.random() * colors.length)],
        rot: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.01,
      }));
    };

    const drawPetal = (p: P) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.globalAlpha = 0.5;
      ctx.fillStyle = p.c;
      ctx.beginPath();
      ctx.ellipse(0, 0, p.r, p.r * 0.55, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const loop = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of petals) {
        p.y += p.vy;
        p.x += p.vx;
        p.rot += p.vr;
        if (p.y > h + 20) {
          p.y = -20;
          p.x = Math.random() * w;
        }
        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        drawPetal(p);
      }
      raf = requestAnimationFrame(loop);
    };

    let raf = 0;
    resize();
    init();
    if (reduce) {
      petals.forEach(drawPetal);
    } else {
      raf = requestAnimationFrame(loop);
    }

    const onResize = () => {
      resize();
      init();
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [count]);

  return <canvas ref={ref} className="pointer-events-none absolute inset-0 h-full w-full" />;
}
