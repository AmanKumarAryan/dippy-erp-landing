"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { feeCollectionData, monthlyCollection, feeMonths } from "@/lib/demo-data";
import { cn } from "@/lib/cn";

const statusStyles: Record<string, string> = {
  paid: "bg-emerald-50 text-emerald-700 border-emerald-200",
  pending: "bg-amber-50 text-amber-700 border-amber-200",
  overdue: "bg-rose-50 text-rose-700 border-rose-200",
};

export default function FeeDemo() {
  const [selectedMonth, setSelectedMonth] = useState("Jan");
  const records = feeCollectionData.filter((r) => r.month === selectedMonth);

  const stats = {
    collected: monthlyCollection.reduce((a, m) => a + m.amount, 0),
    target: monthlyCollection.reduce((a, m) => a + m.target, 0),
    pending: monthlyCollection.filter((m) => m.amount < m.target).length,
  };

  const pct = Math.round((stats.collected / stats.target) * 100);

  return (
    <div className="surface-card rounded-2xl overflow-hidden">
      <div className="border-b border-line p-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="font-display text-lg font-semibold">Fee Collection</h3>
            <p className="text-sm text-ink-soft">Real-time collection overview</p>
          </div>
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="rounded-xl border border-line bg-background px-4 py-2 text-sm font-medium outline-none focus:border-accent"
          >
            {feeMonths.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 border-b border-line bg-surface-2/50 p-5">
        <div className="surface-card rounded-xl p-3 text-center">
          <div className="text-lg font-bold text-accent">₹{(stats.collected / 100000).toFixed(1)}L</div>
          <div className="text-xs text-ink-soft">Collected</div>
        </div>
        <div className="surface-card rounded-xl p-3 text-center">
          <div className="text-lg font-bold text-foreground">{pct}%</div>
          <div className="text-xs text-ink-soft">of Target</div>
        </div>
        <div className="surface-card rounded-xl p-3 text-center">
          <div className="text-lg font-bold text-amber-600">{stats.pending}</div>
          <div className="text-xs text-ink-soft">Pending Months</div>
        </div>
      </div>

      <div className="border-b border-line p-5">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-semibold text-ink-soft">Monthly Trend</span>
        </div>
        <div className="flex items-end gap-1.5">
          {monthlyCollection.map((m, i) => {
            const fill = Math.min((m.amount / m.target) * 100, 100);
            return (
              <div key={m.month} className="flex flex-1 flex-col items-center gap-1">
                <span className="text-[10px] text-ink-mute">₹{(m.amount / 1000).toFixed(0)}k</span>
                <div className="relative h-16 w-full rounded-md bg-surface-2">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${fill}%` }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className={cn(
                      "absolute bottom-0 left-0 right-0 rounded-md",
                      fill >= 95 ? "bg-gradient-to-t from-emerald-500 to-emerald-400" :
                      fill >= 80 ? "bg-gradient-to-t from-accent to-accent-400" :
                      "bg-gradient-to-t from-amber-500 to-amber-400"
                    )}
                    style={{ height: `${fill}%` }}
                  />
                </div>
                <span className="text-[10px] text-ink-mute">{m.month}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="divide-y divide-line">
        {records.map((r, i) => (
          <motion.div
            key={r.id}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.03 }}
            className="flex items-center gap-3 px-5 py-3"
          >
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium truncate">{r.student}</div>
              <div className="text-xs text-ink-mute">{r.class} · Due {r.dueDate}</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold">₹{r.amount}</div>
            </div>
            <span className={cn(
              "rounded-full border px-2.5 py-0.5 text-[11px] font-medium capitalize",
              statusStyles[r.status]
            )}>
              {r.status}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
