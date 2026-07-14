"use client";

import { motion } from "motion/react";

export default function RobotTeacher({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <rect x="16" y="30" width="32" height="22" rx="8" fill="url(#body_grad)" />
      {/* Head */}
      <rect x="14" y="10" width="36" height="26" rx="10" fill="url(#head_grad)" />
      {/* Antenna */}
      <line x1="32" y1="2" x2="32" y2="10" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
      <circle cx="32" cy="2" r="3" fill="#A855F7" />
      {/* Eyes */}
      <circle cx="25" cy="22" r="5" fill="white" />
      <circle cx="39" cy="22" r="5" fill="white" />
      <circle cx="26" cy="22" r="2.5" fill="#1E293B" />
      <circle cx="40" cy="22" r="2.5" fill="#1E293B" />
      {/* Blush */}
      <ellipse cx="20" cy="28" rx="3" ry="1.5" fill="#EDE9FE" />
      <ellipse cx="44" cy="28" rx="3" ry="1.5" fill="#EDE9FE" />
      {/* Mouth */}
      <path d="M28 30 C30 33, 34 33, 36 30" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Arms */}
      <rect x="8" y="34" width="6" height="4" rx="2" fill="#5B21B6" />
      <rect x="50" y="34" width="6" height="4" rx="2" fill="#5B21B6" />
      {/* Book/Laptop */}
      <rect x="21" y="42" width="22" height="3" rx="1" fill="#A855F7" />
      <defs>
        <linearGradient id="head_grad" x1="32" y1="10" x2="32" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7C3AED" />
          <stop offset="1" stopColor="#5B21B6" />
        </linearGradient>
        <linearGradient id="body_grad" x1="32" y1="30" x2="32" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9333EA" />
          <stop offset="1" stopColor="#6D28D9" />
        </linearGradient>
      </defs>
    </svg>
  );
}
