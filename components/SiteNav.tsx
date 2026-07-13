"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./SiteNav.module.css";
import { BODY } from "@/lib/fonts";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

export default function SiteNav({ active }: { active: "Home" | "About" | "Services" | "Contact" }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav aria-label="Primary" style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, borderBottom: "1px solid rgba(16,24,38,.08)", backgroundColor: "#001b3feb", height: 95 }}>
        <div style={{ maxWidth: 1340, margin: "0 auto", padding: "18px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 93 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/nav-logo-ipg.png" alt="Innovative Park Group" className={styles.logo} style={{ height: 66, width: "auto", display: "block", objectFit: "contain" }} />
          </Link>
          <div className={styles.navLinks}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.navLink}
                style={{
                  fontFamily: BODY,
                  fontWeight: 600,
                  fontSize: 13,
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                  color: link.label === active ? "#ffffff" : "#ffffff8c",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={styles.ctaButton}
              style={{ fontFamily: BODY, fontWeight: 600, fontSize: 13, letterSpacing: ".14em", textTransform: "uppercase", color: "#FBFCFE", background: "#1A56DB", padding: "13px 22px", borderRadius: 15 }}
            >
              Request an Audit
            </Link>
          </div>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen((v) => !v)}
            className={styles.navToggle}
          >
            <span style={{ display: "block", width: 24, height: 2, background: "#fff" }} />
            <span style={{ display: "block", width: 24, height: 2, background: "#fff" }} />
            <span style={{ display: "block", width: 24, height: 2, background: "#fff" }} />
          </button>
        </div>
        <div
          style={{
            position: "absolute",
            top: 95,
            left: 0,
            right: 0,
            background: "#001b3f",
            borderBottom: "1px solid rgba(255,255,255,.12)",
            transform: menuOpen ? "translateY(0)" : "translateY(-12px)",
            opacity: menuOpen ? 1 : 0,
            pointerEvents: menuOpen ? "auto" : "none",
            transition: "opacity .28s ease,transform .28s ease",
            display: "flex",
            flexDirection: "column",
            padding: "6px 28px 26px",
          }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: BODY,
                fontWeight: 600,
                fontSize: 14,
                letterSpacing: ".18em",
                textTransform: "uppercase",
                color: link.label === active ? "#fff" : "rgba(255,255,255,.7)",
                padding: "17px 0",
                borderBottom: "1px solid rgba(255,255,255,.1)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            style={{ fontFamily: BODY, fontWeight: 600, fontSize: 14, letterSpacing: ".14em", textTransform: "uppercase", color: "#FBFCFE", background: "#1A56DB", padding: 16, textAlign: "center", borderRadius: 12, marginTop: 18 }}
          >
            Request an Audit
          </Link>
        </div>
      </nav>
    </header>
  );
}
