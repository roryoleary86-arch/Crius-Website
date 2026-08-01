"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import CriusMark from "./CriusMark";
import { IconArrow } from "./icons";

const TABS = [
  { href: "/", label: "Home", idx: "01" },
  { href: "/how-we-work", label: "How We Work", idx: "02" },
  { href: "/trust-values", label: "Trust & Values", idx: "03" },
  { href: "/about", label: "About", idx: "04" },
  { href: "/contact", label: "Contact", idx: "05" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="nav-inner">
        <Link href="/" className="logo">
          <span className="logo-mark" aria-hidden="true">
            <CriusMark />
          </span>
          <span>
            Crius <em style={{ fontStyle: "normal", color: "var(--accent)" }}>AI</em>
          </span>
        </Link>
        <div className="nav-links">
          {TABS.map((t) => (
            <Link key={t.href} href={t.href} className={pathname === t.href ? "active" : ""}>
              <span className="idx">{t.idx}</span>
              {t.label}
            </Link>
          ))}
        </div>
        <div className="nav-cta">
          <Link href="/contact" className="btn btn-primary">
            Book a Consultation <IconArrow />
          </Link>
        </div>
      </div>
    </nav>
  );
}
