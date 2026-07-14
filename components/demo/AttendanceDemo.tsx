"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { attendanceClasses, studentsData } from "@/lib/demo-data";
import { cn } from "@/lib/cn";

type Attendance = "present" | "absent" | "leave";

const statusIcon: Record<Attendance, string> = {
  present: "✓",
  absent: "✕",
  leave: "○",
};

const statusColor: Record<Attendance, string> = {
  present: "text-emerald-600 bg-emerald-50 border-emerald-200",
  absent: "text-rose-600 bg-rose-50 border-rose-200",
  leave: "text-amber-600 bg-amber-50 border-amber-200",
};

const weeklyTrend = [
  { day: "Mon", pct: 94 },
  { day: "Tue", pct: 88 },
  { day: "Wed", pct: 96 },
  { day: "Thu", pct: 92 },
  { day: "Fri", pct: 90 },
  { day: "Sat", pct: 85 },
];

export default function AttendanceDemo() {
  const [selectedClass, setSelectedClass] = useState("10-A");
  const [students, setStudents] = useState(studentsData["10-A"]);

  const stats = useMemo(() => {
    const total = students.length;
    const present = students.filter((s) => s.attendance === "present").length;
    const absent = students.filter((s) => s.attendance === "absent").length;
    const leave = students.filter((s) => s.attendance === "leave").length;
    const pct = total ? Math.round((present / total) * 100) : 0;
    return { total, present, absent, leave, pct };
  }, [students]);

  const streak = useMemo(() => {
    return 12;
  }, []);

  const toggleAttendance = (id: string) => {
    setStudents((prev) =>
      prev.map((s) => {
        if (s.id !== id) return s;
        const next: Record<Attendance, Attendance> = {
          present: "absent",
          absent: "leave",
          leave: "present",
        };
        return { ...s, attendance: next[s.attendance] };
      })
    );
  };

  const handleClassChange = (cls: string) => {
    setSelectedClass(cls);
    setStudents(studentsData[cls] || []);
  };

  return (
    <div className="surface-card rounded-2xl overflow-hidden">
      <div className="border-b border-line p-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="font-display text-lg font-semibold">Live Attendance</h3>
            <p className="text-sm text-ink-soft">Tap a student to toggle status</p>
          </div>
          <select
            value={selectedClass}
            onChange={(e) => handleClassChange(e.target.value)}
            className="rounded-xl border border-line bg-background px-4 py-2 text-sm font-medium text-foreground outline-none focus:border-accent"
          >
            {attendanceClasses.map((c) => (
              <option key={c.value} value={c.value}>{c.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 border-b border-line bg-surface-2/50 p-5 sm:grid-cols-4">
        <div className="surface-card rounded-xl p-3 text-center">
          <div className="text-2xl font-bold text-accent">{stats.pct}%</div>
          <div className="text-xs text-ink-soft">Attendance</div>
        </div>
        <div className="surface-card rounded-xl p-3 text-center">
          <div className="text-2xl font-bold text-emerald-600">{stats.present}</div>
          <div className="text-xs text-ink-soft">Present</div>
        </div>
        <div className="surface-card rounded-xl p-3 text-center">
          <div className="text-2xl font-bold text-rose-600">{stats.absent}</div>
          <div className="text-xs text-ink-soft">Absent</div>
        </div>
        <div className="surface-card rounded-xl p-3 text-center">
          <div className="flex items-center justify-center gap-1 text-2xl font-bold text-accent-deep">
            <span>{streak}</span>
            <span className="text-sm font-normal text-ink-soft">days</span>
          </div>
          <div className="text-xs text-ink-soft">Best Streak</div>
        </div>
      </div>

      <div className="divide-y divide-line">
        <AnimatePresence mode="popLayout">
          {students.map((s, i) => (
            <motion.button
              key={s.id}
              layout
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.02, duration: 0.2 }}
              onClick={() => toggleAttendance(s.id)}
              className="flex w-full items-center gap-3 px-5 py-2.5 text-left transition-colors hover:bg-surface-2/50"
            >
              <span className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full border text-xs font-bold",
                statusColor[s.attendance]
              )}>
                {statusIcon[s.attendance]}
              </span>
              <span className="flex-1 text-sm font-medium">{s.name}</span>
              <span className="text-xs text-ink-mute">Roll {s.rollNo}</span>
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      <div className="border-t border-line p-5">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-semibold text-ink-soft">This Week</span>
          <span className="text-xs text-ink-mute">Avg {Math.round(weeklyTrend.reduce((a, d) => a + d.pct, 0) / weeklyTrend.length)}%</span>
        </div>
        <div className="flex items-end gap-2">
          {weeklyTrend.map((d) => (
            <div key={d.day} className="flex flex-1 flex-col items-center gap-1.5">
              <span className="text-[10px] font-medium text-ink-mute">{d.pct}%</span>
              <div className="relative h-20 w-full rounded-lg bg-surface-2">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${d.pct}%` }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 rounded-lg bg-gradient-to-t from-accent to-accent-400"
                  style={{ height: `${d.pct}%` }}
                />
              </div>
              <span className="text-[10px] text-ink-mute">{d.day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
