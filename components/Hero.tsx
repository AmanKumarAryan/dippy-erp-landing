"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!gsap) return;

    const ctx = gsap.context(() => {
      // ─── INITIAL STATES ───
      gsap.set(".eyebrow", { y: 12, opacity: 0 });
      gsap.set(".title .word", { yPercent: 110, opacity: 0 });
      gsap.set(".title-desc", { opacity: 0, x: -10 });
      gsap.set(".future-tag", { opacity: 0, x: -10 });
      gsap.set(".badge", { scale: 0, rotation: -90, opacity: 0 });
      gsap.set(".res-item", { y: 16, opacity: 0 });
      gsap.set(".wave-wrap", { x: 120, opacity: 0 });
      gsap.set(".wave-glow", { opacity: 0 });
      gsap.set(".bg-text", { opacity: 0, scale: 1.1 });

      // ─── PAGE LOAD TIMELINE ───
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.15,
      });

      tl.to(".wave-glow", { opacity: 1, duration: 1.2 })
        .to(
          ".wave-wrap",
          { x: 0, opacity: 1, duration: 1.4, ease: "power3.out" },
          "-=1.2"
        )
        .to(
          ".bg-text",
          { opacity: 1, scale: 1, duration: 1.4, ease: "power3.out" },
          "-=1.2"
        )
        .to(".eyebrow", { y: 0, opacity: 1, duration: 0.5 }, "-=1")
        .to(
          ".title .word",
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.05,
            ease: "power4.out",
          },
          "-=.8"
        )
        .to(".title-desc", { x: 0, opacity: 1, duration: 0.6 }, "-=.5")
        .to(".future-tag", { x: 0, opacity: 1, duration: 0.5 }, "-=.3")
        .to(
          ".badge",
          {
            scale: 1,
            rotation: 0,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=.5"
        )
        .to(
          ".res-item",
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.08 },
          "-=.4"
        );

      // ─── WAVE FLOAT (gentle continuous) ───
      gsap.to(".wave-wrap", {
        y: -18,
        rotation: -1.2,
        duration: 5.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".wave-glow", {
        y: 12,
        scale: 1.05,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".wave-glow.b", {
        y: -16,
        x: -10,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Badge slow drift
      gsap.to(".badge", {
        y: "+=8",
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // ─── SCROLL PARALLAX ───
      gsap.to(".wave-wrap", {
        scrollTrigger: {
          trigger: pageRef.current,
          start: "top top",
          end: "+=1200",
          scrub: 1.2,
        },
        y: -240,
        rotation: 6,
        scale: 1.08,
      });
      gsap.to(".bg-text", {
        scrollTrigger: {
          trigger: pageRef.current,
          start: "top top",
          end: "+=1000",
          scrub: 1.2,
        },
        xPercent: -8,
        opacity: 0.5,
      });
      gsap.to(".badge", {
        scrollTrigger: {
          trigger: pageRef.current,
          start: "top top",
          end: "+=800",
          scrub: 1.5,
        },
        y: 80,
        rotation: 30,
      });

      // ─── SCROLL REVEALS ───
      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
          }
        );
      });

      // ─── INTERACTIVE: WAVE MOUSE PARALLAX ───
      if (!window.matchMedia("(pointer: coarse)").matches) {
        document.addEventListener("mousemove", (e) => {
          const x = e.clientX / window.innerWidth - 0.5;
          const y = e.clientY / window.innerHeight - 0.5;
          gsap.to(".wave-wrap", {
            x: x * 30,
            duration: 1.2,
            ease: "power3.out",
            overwrite: "auto",
          });
          gsap.to(".wave-glow", {
            x: x * 60,
            y: y * 40,
            duration: 1.4,
            ease: "power3.out",
            overwrite: "auto",
          });
          gsap.to(".badge", {
            x: x * -16,
            y: y * -10,
            duration: 1.2,
            ease: "power3.out",
            overwrite: "auto",
          });
          gsap.to(".bg-text", {
            x: x * -20,
            duration: 1.4,
            ease: "power3.out",
            overwrite: "auto",
          });
        });
      }

      // ─── CARD HOVER MICRO ───
      document.querySelectorAll(".clay-card").forEach((card) => {
        card.addEventListener("mousemove", (e) => {
          const r = card.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          gsap.to(card, {
            rotateY: x * 4,
            rotateX: -y * 4,
            duration: 0.5,
            ease: "power2.out",
            transformPerspective: 900,
          });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            rotateY: 0,
            rotateX: 0,
            duration: 0.7,
            ease: "elastic.out(1,.6)",
          });
        });
      });

      // ─── RESOURCE LIST: change active on click ───
      const resItems = document.querySelectorAll(".res-item");
      resItems.forEach((item) => {
        item.addEventListener("click", (e) => {
          e.preventDefault();
          resItems.forEach((r) => r.classList.remove("active"));
          item.classList.add("active");
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="page" ref={pageRef}>
      {/* ─── WAVE GLOW ORBS ─── */}
      <div className="wave-glow"></div>
      <div className="wave-glow b"></div>

      {/* ─── WAVE RIBBON (CSS gradient代替 since no ribbon.png) ─── */}
      <div className="wave-wrap" id="wave">
        <div className="wave-ribbon"></div>
      </div>

      {/* ─── BG TEXT ─── */}
      <div className="bg-text" aria-hidden="true">
        DIPPY&nbsp;ERP
      </div>

      {/* ─── HERO SECTION ─── */}
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

      {/* ─── FOOTER ROW (social + discover) ─── */}
      <div className="footer-row">
        <div className="social">
          <a href="#" className="social-btn" aria-label="Twitter">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 5.8c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.2-.8.5-1.7.8-2.6 1-.8-.8-1.9-1.3-3.1-1.3-2.4 0-4.2 1.9-4.2 4.2 0 .3 0 .7.1 1C8 9 4.9 7.3 2.7 4.7c-.4.6-.6 1.3-.6 2.1 0 1.5.7 2.8 1.9 3.5-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.7 3.3 4.1-.3.1-.7.1-1.1.1-.3 0-.5 0-.8-.1.5 1.7 2.1 2.9 4 2.9-1.5 1.1-3.3 1.8-5.3 1.8H1c1.9 1.2 4.2 1.9 6.6 1.9 7.9 0 12.2-6.6 12.2-12.2v-.6c.9-.6 1.6-1.4 2.2-2.3z" />
            </svg>
          </a>
          <a href="#" className="social-btn" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 8h2V5h-2a3 3 0 0 0-3 3v2H9v3h2v6h3v-6h2.4l.6-3H14V8.5c0-.3.2-.5.5-.5z" />
            </svg>
          </a>
          <a href="#" className="social-btn" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
            </svg>
          </a>
        </div>

        <a href="#" className="discover">
          Discover more
          <span className="arrow-down">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9 L12 15 L18 9" />
            </svg>
          </span>
        </a>

        <div></div>
      </div>
    </div>
  );
}
