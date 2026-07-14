"use client";

import { motion } from "motion/react";
import Reveal from "./Reveal";

const items = [
  {
    title: "AI-Powered Analytics",
    desc: "Predict student performance, spot drop-off risks, and get smart recommendations — before issues arise.",
    icon: "◈",
    color: "from-accent to-accent-400",
    span: "lg:col-span-2 lg:row-span-2",
    size: "large",
  },
  {
    title: "Mobile App",
    desc: "Native apps for iOS & Android. Parents get real-time notifications; teachers mark attendance on the go.",
    icon: "✧",
    color: "from-blue-400 to-blue-600",
    span: "lg:col-span-1 lg:row-span-1",
    size: "small",
  },
  {
    title: "Secure Cloud",
    desc: "End-to-end encryption, GDPR & DPDP compliant. Your data stays in India.",
    icon: "🔒",
    color: "from-emerald-400 to-emerald-600",
    span: "lg:col-span-1 lg:row-span-1",
    size: "small",
  },
  {
    title: "Smart Notifications",
    desc: "WhatsApp, SMS, email, and in-app — reach parents however they prefer. Automatic fee reminders and exam alerts.",
    icon: "◎",
    color: "from-amber-400 to-amber-600",
    span: "lg:col-span-1 lg:row-span-1",
    size: "small",
  },
  {
    title: "Library Management",
    desc: "Digital catalog, issue/return tracking, late fee auto-calculation. Students can search books from their portal.",
    icon: "◇",
    color: "from-rose-400 to-rose-600",
    span: "lg:col-span-1 lg:row-span-1",
    size: "small",
  },
  {
    title: "Transport Tracking",
    desc: "GPS-enabled bus tracking with live ETA. Parents know exactly when the bus arrives.",
    icon: "▣",
    color: "from-cyan-400 to-cyan-600",
    span: "lg:col-span-1 lg:row-span-1",
    size: "small",
  },
  {
    title: "Integration Ready",
    desc: "REST APIs & webhooks. Connect with your existing LMS, payment gateways, and ERP tools effortlessly.",
    icon: "⇄",
    color: "from-violet-400 to-violet-600",
    span: "lg:col-span-2 lg:row-span-1",
    size: "wide",
  },
];

export default function BentoGrid() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-semibold tracking-widest text-accent">
              BEYOND THE BASICS
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Everything your school needs
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-soft">
              From AI insights to transport tracking — one platform, endless possibilities
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-4 lg:grid-rows-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                className={`surface-card rounded-[28px] overflow-hidden ${item.span}`}
              >
                <div className={`h-full bg-gradient-to-br ${item.color} p-0.5`}>
                  <div className="h-full rounded-[27px] bg-white p-6">
                    <div className="flex h-full flex-col">
                      <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-surface-2 text-lg">
                        {item.icon}
                      </span>
                      <h3 className="font-display text-lg font-bold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
