"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const waveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax effect for wave (same as senior's)
    const handleScroll = () => {
      if (waveRef.current) {
        const scrollY = window.scrollY;
        waveRef.current.style.transform = `translateY(${scrollY * 0.15}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className="hero">
        <span className="eyebrow">Every role, one dashboard</span>

        <h1 className="title">
          <div className="title-line title-line-1">
            <span className="word">ALL-IN-ONE SCHOOL ERP:</span>
          </div>
          <div className="title-line has-desc">
            <p className="title-desc">
              With Dippy, manage admissions, attendance, fees and results from a
              single connected platform
            </p>
            <span className="word">REDEFINING</span>
          </div>
          <div className="title-line">
            <span className="word">EDUCATION</span>
            <span className="future-tag">
              <span className="hero-desc-right">
                <i className="ph-fill ph-arrow-circle-right"></i> Built for
                schools — <strong>run your campus smarter</strong>
              </span>
            </span>
          </div>
        </h1>

        {/* Circular spinning badge */}
        <div className="badge" aria-hidden="true">
          <svg className="ring" viewBox="0 0 100 100">
            <defs>
              <path
                id="badge-path"
                d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
                fill="none"
              />
            </defs>
            <text
              fontFamily="Inter Tight, sans-serif"
              fontSize="9.5"
              fontWeight="500"
              fill="#2b2b30"
              letterSpacing="2.4"
            >
              <textPath href="#badge-path">
                Admin · Teacher · Parent · Student ·{" "}
              </textPath>
            </text>
          </svg>
          <span className="badge-center">
            <svg
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 10 L9 5 M9 5 L15 5 L15 11" />
              <path d="M9 5 L9 15" />
              <path d="M4 15 L15 15" />
            </svg>
          </span>
        </div>
      </section>

      {/* ─── RESOURCE LIST ─── */}
      <nav className="resource-list" aria-label="Sections">
        <a href="#" className="res-item">
          <span className="label">
            Features <span style={{ color: "#a190b8" }}>/&nbsp;01</span>
          </span>
          <span className="dots">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span className="arrow">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            >
              <path d="M5 12 H19 M14 7 L19 12 L14 17" />
            </svg>
          </span>
        </a>
        <a href="#" className="res-item active">
          <span className="label">
            Portals <span style={{ color: "#a190b8" }}>/&nbsp;02</span>
          </span>
          <span className="dots">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span className="arrow">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="M5 12 H19 M14 7 L19 12 L14 17" />
            </svg>
          </span>
        </a>
        <a href="#" className="res-item">
          <span className="label">
            Modules <span style={{ color: "#a190b8" }}>/&nbsp;03</span>
          </span>
          <span className="dots">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span className="arrow">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            >
              <path d="M5 12 H19 M14 7 L19 12 L14 17" />
            </svg>
          </span>
        </a>
      </nav>

      {/* ─── BOTTOM CARDS ─── */}
      <section className="bottom">
        <div className="insights-cluster reveal">
          <div className="info-grid">
            <div className="clay-card info-card">
              <span className="ic-head">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="4" y="3" width="16" height="18" rx="2" />
                  <path d="M8 8 H16 M8 12 H16 M8 16 H13" />
                </svg>
                Analytics
              </span>
              <p>
                Track attendance, performance and fee trends — all in one clear
                view
              </p>
            </div>
            <div className="clay-card info-card">
              <span className="ic-head">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="M16 16 L21 21" />
                  <path d="M8 11 H14 M11 8 V14" />
                </svg>
                Reports
              </span>
              <p>
                Generate exam results, timetables and fee reports in seconds
              </p>
            </div>
          </div>
        </div>

        <div className="feature-cards reveal">
          <article className="clay-card feature-card">
            <div className="head">
              <span className="icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 21 C-2 14, 4 4, 12 9 C20 4, 26 14, 12 21 Z" />
                </svg>
              </span>
              <h3>Multi-Role Access</h3>
              <button className="menu-dots" aria-label="More">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="6" cy="12" r="1.6" />
                  <circle cx="12" cy="12" r="1.6" />
                  <circle cx="18" cy="12" r="1.6" />
                </svg>
              </button>
            </div>
            <p>
              Give every Admin, Teacher, Parent and Student their own dashboard
              — built exactly for their role
            </p>
            <div className="tag-row">
              <span className="tag">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M12 4 V20 M4 12 H20" />
                </svg>
                Role-based
              </span>
              <span className="tag">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <circle cx="12" cy="12" r="8" />
                  <path d="M8 12 L11 15 L16 9" />
                </svg>
                Secure Access
              </span>
            </div>
          </article>

          <article className="clay-card feature-card">
            <div className="head">
              <span className="icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 17 L9 11 L13 14 L21 5" />
                  <path d="M15 5 H21 V11" />
                </svg>
              </span>
              <h3>Real-Time Dashboards</h3>
              <button className="menu-dots" aria-label="More">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="6" cy="12" r="1.6" />
                  <circle cx="12" cy="12" r="1.6" />
                  <circle cx="18" cy="12" r="1.6" />
                </svg>
              </button>
            </div>
            <p>
              Attendance, fees and results sync instantly — everyone always sees
              the same, accurate data
            </p>
            <div className="tag-row">
              <span className="tag">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21 C4 16, 8 14, 12 14 C16 14, 20 16, 20 21" />
                </svg>
                Live Sync
              </span>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
