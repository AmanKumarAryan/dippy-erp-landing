"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { examData, mockResults } from "@/lib/demo-data";
import { cn } from "@/lib/cn";

export default function ExamDemo() {
  const [view, setView] = useState<"timetable" | "results">("timetable");
  const [selectedExam, setSelectedExam] = useState(examData[0].id);

  const exam = examData.find((e) => e.id === selectedExam) || examData[0];

  return (
    <div className="surface-card rounded-2xl overflow-hidden">
      <div className="border-b border-line p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="font-display text-lg font-semibold">Exam Centre</h3>
            <p className="text-sm text-ink-soft">Timetable & results</p>
          </div>
          <div className="flex gap-1 rounded-xl border border-line p-1">
            {(["timetable", "results"] as const).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={cn(
                  "rounded-lg px-3 py-1.5 text-xs font-medium capitalize transition-colors",
                  view === v ? "bg-accent text-white" : "text-ink-soft hover:bg-surface-2"
                )}
              >
                {v}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="border-b border-line bg-surface-2/50 p-5">
        <select
          value={selectedExam}
          onChange={(e) => setSelectedExam(e.target.value)}
          className="w-full rounded-xl border border-line bg-background px-4 py-2.5 text-sm font-medium outline-none focus:border-accent"
        >
          {examData.map((e) => (
            <option key={e.id} value={e.id}>{e.name} ({e.date})</option>
          ))}
        </select>
      </div>

      {view === "timetable" ? (
        <div className="divide-y divide-line">
          <div className="grid grid-cols-3 gap-2 bg-surface-2/30 px-5 py-2.5 text-xs font-semibold text-ink-mute">
            <span>Subject</span>
            <span>Date</span>
            <span className="text-right">Max Marks</span>
          </div>
          {exam.subjects.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.04 }}
              className="grid grid-cols-3 gap-2 px-5 py-3 text-sm"
            >
              <span className="font-medium">{s.name}</span>
              <span className="text-ink-soft">{s.date}</span>
              <span className="text-right font-medium text-accent">{s.maxMarks}</span>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="divide-y divide-line">
          <div className="grid grid-cols-5 gap-2 bg-surface-2/30 px-5 py-2.5 text-xs font-semibold text-ink-mute">
            <span className="col-span-2">Student</span>
            <span className="text-right">Total</span>
            <span className="text-right">%</span>
            <span className="text-right">Grade</span>
          </div>
          {mockResults.map((r, i) => (
            <motion.div
              key={r.rank}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.04 }}
              className="grid grid-cols-5 gap-2 px-5 py-3 text-sm"
            >
              <span className="col-span-2 flex items-center gap-2">
                {i === 0 && <span className="text-xs text-amber-500">🥇</span>}
                <span className="font-medium truncate">{r.studentName}</span>
              </span>
              <span className="text-right font-semibold">{r.total}</span>
              <span className={cn(
                "text-right font-semibold",
                r.percentage >= 85 ? "text-emerald-600" : r.percentage >= 70 ? "text-accent" : "text-rose-600"
              )}>
                {r.percentage}%
              </span>
              <span className="text-right font-bold text-accent">{r.grade}</span>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
