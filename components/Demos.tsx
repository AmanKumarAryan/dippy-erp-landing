"use client";

import { useState, useRef } from "react";
import AttendanceDemo from "./demo/AttendanceDemo";
import FeeDemo from "./demo/FeeDemo";
import HomeworkDemo from "./demo/HomeworkDemo";
import ExamDemo from "./demo/ExamDemo";
import HostelDemo from "./demo/HostelDemo";
import Reveal from "./Reveal";

const tabs = [
  { id: "attendance", label: "Attendance", component: AttendanceDemo },
  { id: "fee", label: "Fee", component: FeeDemo },
  { id: "homework", label: "Homework", component: HomeworkDemo },
  { id: "exam", label: "Exam", component: ExamDemo },
  { id: "hostel", label: "Hostel", component: HostelDemo },
];

export default function Demos() {
  const [active, setActive] = useState("attendance");
  const ref = useRef<HTMLDivElement>(null);

  const ActiveComponent = tabs.find((t) => t.id === active)?.component || AttendanceDemo;

  return (
    <section id="demos" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl" ref={ref}>
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-semibold tracking-widest text-accent">
              INTERACTIVE DEMOS
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              See it in action
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-soft">
              Click around — each demo is fully interactive
            </p>
          </div>
        </Reveal>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={
                active === t.id
                  ? "rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-accent/20"
                  : "rounded-full border border-line bg-background px-5 py-2 text-sm font-medium text-ink-soft transition-colors hover:border-accent hover:text-accent"
              }
            >
              {t.label}
            </button>
          ))}
        </div>

        <Reveal>
          <div className="mt-8">
            <ActiveComponent />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
