"use client";

import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { homeworkData, subjects } from "@/lib/demo-data";
import { cn } from "@/lib/cn";

const statusColor: Record<string, string> = {
  active: "text-accent bg-accent-soft border-accent-soft",
  grading: "text-amber-700 bg-amber-50 border-amber-200",
  completed: "text-emerald-700 bg-emerald-50 border-emerald-200",
};

export default function HomeworkDemo() {
  const [filter, setFilter] = useState<string>("all");
  const [createMode, setCreateMode] = useState(false);
  const [newHW, setNewHW] = useState({ subject: "Mathematics", title: "", dueDate: "" });

  const filtered = useMemo(() => {
    if (filter === "all") return homeworkData;
    return homeworkData.filter((h) => h.status === filter);
  }, [filter]);

  const activeCount = homeworkData.filter((h) => h.status === "active").length;
  const submissionRate = homeworkData.length
    ? Math.round(homeworkData.reduce((a, h) => a + h.submittedCount, 0) / homeworkData.reduce((a, h) => a + h.totalStudents, 0) * 100)
    : 0;

  const handleCreate = () => {
    if (!newHW.title.trim() || !newHW.dueDate) return;
    setCreateMode(false);
    setNewHW({ subject: "Mathematics", title: "", dueDate: "" });
  };

  return (
    <div className="surface-card rounded-2xl overflow-hidden">
      <div className="border-b border-line p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="font-display text-lg font-semibold">Homework Manager</h3>
            <p className="text-sm text-ink-soft">Assign, track, grade</p>
          </div>
          <button
            onClick={() => setCreateMode(!createMode)}
            className="rounded-xl bg-accent px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
          >
            {createMode ? "Cancel" : "+ Assign"}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {createMode && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-b border-line"
          >
            <div className="grid gap-3 p-5 sm:grid-cols-3">
              <select
                value={newHW.subject}
                onChange={(e) => setNewHW({ ...newHW, subject: e.target.value })}
                className="rounded-xl border border-line bg-background px-3 py-2.5 text-sm outline-none focus:border-accent"
              >
                {subjects.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <input
                value={newHW.title}
                onChange={(e) => setNewHW({ ...newHW, title: e.target.value })}
                placeholder="Homework title..."
                className="rounded-xl border border-line bg-background px-3 py-2.5 text-sm outline-none focus:border-accent"
              />
              <div className="flex gap-2">
                <input
                  type="date"
                  value={newHW.dueDate}
                  onChange={(e) => setNewHW({ ...newHW, dueDate: e.target.value })}
                  className="flex-1 rounded-xl border border-line bg-background px-3 py-2.5 text-sm outline-none focus:border-accent"
                />
                <button
                  onClick={handleCreate}
                  className="rounded-xl bg-accent px-4 py-2.5 text-sm font-medium text-white"
                >
                  Assign
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-3 gap-3 border-b border-line bg-surface-2/50 p-5">
        <div className="surface-card rounded-xl p-3 text-center">
          <div className="text-lg font-bold text-accent">{activeCount}</div>
          <div className="text-xs text-ink-soft">Active</div>
        </div>
        <div className="surface-card rounded-xl p-3 text-center">
          <div className="text-lg font-bold text-emerald-600">{submissionRate}%</div>
          <div className="text-xs text-ink-soft">Submission</div>
        </div>
        <div className="surface-card rounded-xl p-3 text-center">
          <div className="text-lg font-bold text-amber-600">{homeworkData.filter((h) => h.status === "grading").length}</div>
          <div className="text-xs text-ink-soft">To Grade</div>
        </div>
      </div>

      <div className="flex gap-1 border-b border-line px-5 py-2">
        {["all", "active", "grading", "completed"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-lg px-3 py-1.5 text-xs font-medium capitalize transition-colors",
              filter === f ? "bg-accent text-white" : "text-ink-soft hover:bg-surface-2"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="divide-y divide-line">
        {filtered.map((h, i) => (
          <motion.div
            key={h.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.03 }}
            className="flex items-center gap-3 px-5 py-3"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium truncate">{h.title}</span>
                <span className={cn("rounded-full border px-2 py-0.5 text-[10px] font-medium capitalize", statusColor[h.status])}>
                  {h.status}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-ink-mute">
                <span>{h.subject}</span>
                <span>·</span>
                <span>Due {h.dueDate}</span>
              </div>
            </div>
            <div className="text-right shrink-0">
              <div className="text-sm font-semibold">{h.submittedCount}/{h.totalStudents}</div>
              <div className="text-xs text-ink-mute">submitted</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
