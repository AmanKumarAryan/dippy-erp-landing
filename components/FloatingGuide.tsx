"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import Lottie from "lottie-react";
import robotAnimation from "@/lib/robot-animation.json";

interface StoryBeat {
  section: string;
  message: string;
  emoji: string;
}

const story: StoryBeat[] = [
  { section: "hero", emoji: "👋", message: "Hey! I'm Dippy — your AI school assistant. Let me show you around!" },
  { section: "problem", emoji: "🤔", message: "Running a school is hard. Paper chaos, missed fees, manual attendance... sound familiar?" },
  { section: "how", emoji: "✨", message: "Dippy brings everything into one calm, purple dashboard. Here's how it works." },
  { section: "roles", emoji: "👥", message: "Admin, teacher, parent, student — each gets their own view. No more role-confusion." },
  { section: "features", emoji: "⚡", message: "Attendance, fees, exams, homework, hostel — all modules talk to each other." },
  { section: "demos", emoji: "🎮", message: "Try the demos! Click around — everything is interactive." },
  { section: "trust", emoji: "📊", message: "Thousands of schools trust Dippy. Real numbers, real impact." },
  { section: "testimonials", emoji: "💬", message: "Don't take my word for it — hear what actual schools say." },
  { section: "pricing", emoji: "💰", message: "Simple pricing. No hidden fees. Start with a free trial." },
  { section: "faq", emoji: "❓", message: "Got questions? I've got answers. Pick a topic below." },
  { section: "contact", emoji: "📬", message: "Ready to upgrade your school? Let's talk!" },
];

export default function FloatingGuide() {
  const [current, setCurrent] = useState(story[0]);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const sectionIds = story.map((s) => s.section);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const beat = story.find((s) => s.section === id);
      if (!beat) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setCurrent(beat);
              setVisible(true);
              clearTimeout(timeoutRef.current);
              timeoutRef.current = setTimeout(() => {
                setVisible(false);
              }, 5000);
            }
          });
        },
        { threshold: 0.25 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    const initialTimeout = setTimeout(() => setVisible(true), 2000);

    return () => {
      observers.forEach((o) => o.disconnect());
      clearTimeout(timeoutRef.current);
      clearTimeout(initialTimeout);
    };
  }, []);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-[260px] rounded-2xl bg-white p-3 shadow-xl shadow-accent/10 ring-1 ring-accent/10"
          >
            <p className="text-sm leading-relaxed text-foreground">
              <span className="mr-1">{current.emoji}</span>
              {current.message}
            </p>
            <div className="absolute -bottom-1.5 right-8 h-3 w-3 rotate-45 bg-white ring-1 ring-accent/10" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setDismissed(true)}
        className="relative h-14 w-14"
      >
        <motion.div
          animate={visible ? { y: [0, -4, 0] } : { y: 0 }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Lottie animationData={robotAnimation} loop autoplay className="h-14 w-14" />
        </motion.div>
        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[9px] text-white">
          ✕
        </span>
      </motion.button>
    </div>
  );
}
