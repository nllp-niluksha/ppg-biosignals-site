"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`nav${solid ? " solid" : ""}`}>
      <div className="nav__inner">
        <Link href="/" className="brand">
          <svg className="brand__icon" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <circle cx="16" cy="16" r="15" stroke="#2196f3" strokeWidth="1.5" />
            <path d="M4 16h4l3-7 4 14 3-10 2 4h8" stroke="#2196f3" strokeWidth="1.8"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div>
            <div className="brand__name">PPG Biosignals</div>
            <div className="brand__sub">Physiological Monitor</div>
          </div>
        </Link>
        <nav className="nav__links">
          <a href="#how-it-works">How it works</a>
          <a href="#metrics">Metrics</a>
          <a href="#privacy">Privacy</a>
        </nav>
        <div className="nav__cta">
          <a href="#download" className="btn btn--blue btn--sm">Get the app</a>
        </div>
      </div>
    </header>
  );
}
