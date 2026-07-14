"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { hostelData } from "@/lib/demo-data";
import { cn } from "@/lib/cn";

const statusConfig: Record<string, { label: string; className: string; icon: string }> = {
  occupied: { label: "Full", className: "bg-accent text-white border-accent", icon: "■" },
  partial: { label: "Partial", className: "bg-amber-50 text-amber-700 border-amber-200", icon: "◐" },
  available: { label: "Available", className: "bg-emerald-50 text-emerald-700 border-emerald-200", icon: "□" },
  maintenance: { label: "Maint.", className: "bg-rose-50 text-rose-700 border-rose-200", icon: "△" },
};

const blocks = ["A", "B"];

export default function HostelDemo() {
  const [selectedBlock, setSelectedBlock] = useState("A");
  const rooms = hostelData.filter((r) => r.block === selectedBlock);

  const floors = [...new Set(rooms.map((r) => r.floor))].sort();

  const totalCapacity = rooms.reduce((a, r) => a + r.capacity, 0);
  const totalOccupants = rooms.reduce((a, r) => a + r.occupants.length, 0);

  return (
    <div className="surface-card rounded-2xl overflow-hidden">
      <div className="border-b border-line p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="font-display text-lg font-semibold">Hostel Manager</h3>
            <p className="text-sm text-ink-soft">Room allocation overview</p>
          </div>
          <div className="flex gap-1 rounded-xl border border-line p-1">
            {blocks.map((b) => (
              <button
                key={b}
                onClick={() => setSelectedBlock(b)}
                className={cn(
                  "rounded-lg px-3 py-1.5 text-xs font-medium transition-colors",
                  selectedBlock === b ? "bg-accent text-white" : "text-ink-soft hover:bg-surface-2"
                )}
              >
                Block {b}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 border-b border-line bg-surface-2/50 p-5">
        <div className="surface-card rounded-xl p-3 text-center">
          <div className="text-lg font-bold text-accent">{totalOccupants}/{totalCapacity}</div>
          <div className="text-xs text-ink-soft">Occupied</div>
        </div>
        <div className="surface-card rounded-xl p-3 text-center">
          <div className="text-lg font-bold text-emerald-600">{rooms.filter((r) => r.status === "available").length}</div>
          <div className="text-xs text-ink-soft">Available</div>
        </div>
        <div className="surface-card rounded-xl p-3 text-center">
          <div className="text-lg font-bold text-ink-soft">{selectedBlock}</div>
          <div className="text-xs text-ink-soft">Block</div>
        </div>
      </div>

      <div className="divide-y divide-line">
        {floors.map((floor) => (
          <div key={floor}>
            <div className="bg-surface-2/30 px-5 py-2 text-xs font-semibold text-ink-mute">
              Floor {floor}
            </div>
            <div className="divide-y divide-line">
              {rooms.filter((r) => r.floor === floor).map((room) => (
                <motion.div
                  key={room.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="px-5 py-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-sm font-bold text-foreground">{room.number}</span>
                      <span className={cn(
                        "rounded-full border px-2 py-0.5 text-[10px] font-medium",
                        statusConfig[room.status].className
                      )}>
                        {statusConfig[room.status].label}
                      </span>
                    </div>
                    <span className="text-xs text-ink-mute">Warden: {room.warden}</span>
                  </div>
                  {room.occupants.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {room.occupants.map((o) => (
                        <span key={o.name} className="rounded-md bg-surface-2 px-2 py-0.5 text-xs text-ink-soft">
                          {o.name} <span className="text-ink-mute">({o.class})</span>
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
