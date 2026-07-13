import Link from "next/link";
import styles from "./SiteFooter.module.css";
import { BODY } from "@/lib/fonts";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

export default function SiteFooter({
  tagline = "Certified AS EN 14974:2021 skatepark compliance audits for councils across Australia.",
  nowrap = false,
}: {
  tagline?: string;
  nowrap?: boolean;
}) {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,.14)", padding: "clamp(52px,9vw,80px) 0 48px", color: "#FFFFFF", backgroundColor: "#001b3f" }}>
      <div style={{ maxWidth: 1340, margin: "0 auto", padding: "0 40px" }}>
        <div className={styles.footGrid} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48, paddingBottom: 64, borderBottom: "1px solid rgba(255,255,255,.16)" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", marginBottom: 36 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/footer-logo-ipg.png" alt="Innovative Park Group" style={{ height: 184, width: nowrap ? 178 : "auto", display: "block", objectFit: "contain" }} />
            </div>
            <p className={nowrap ? styles.tagline : undefined} style={{ fontFamily: BODY, fontSize: 16, lineHeight: nowrap ? 1.6 : 1.55, color: "rgba(255,255,255,.78)", maxWidth: nowrap ? undefined : 380 }}>
              {tagline}
            </p>
          </div>
          <div>
            <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: 11, letterSpacing: ".24em", textTransform: "uppercase", color: "rgba(255,255,255,.55)", display: "block", marginBottom: 22 }}>Navigate</span>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className={styles.footLink} style={{ fontFamily: BODY, fontSize: 15, color: "rgba(255,255,255,.85)" }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: 11, letterSpacing: ".24em", textTransform: "uppercase", color: "rgba(255,255,255,.55)", display: "block", marginBottom: 22 }}>Contact</span>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a href="mailto:admin@innovativeparkgroup.com" className={styles.footLink} style={{ fontFamily: BODY, fontSize: 15, color: "rgba(255,255,255,.85)" }}>admin@innovativeparkgroup.com</a>
              <span style={{ fontFamily: BODY, fontSize: 15, color: "rgba(255,255,255,.85)" }}>Serving councils nationwide</span>
            </div>
            <span style={{ fontFamily: BODY, fontSize: 13, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(255,255,255,.55)", display: "block", marginTop: 22 }}>AS EN 14974:2021 Certified</span>
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 16, paddingTop: 28 }}>
          <span style={{ fontFamily: BODY, fontSize: 13, letterSpacing: ".04em", color: "rgba(255,255,255,.55)" }}>&copy; 2026 Innovative Park Group. All rights reserved.</span>
          <span style={{ fontFamily: BODY, fontSize: 13, letterSpacing: ".04em", color: "rgba(255,255,255,.55)" }}>
            Web Design:{" "}
            <a href="https://www.kathalystdesignstudio.com" target="_blank" rel="noopener" className={styles.footLink} style={{ color: "inherit", textDecoration: "underline" }}>
              Kathalyst Design Studio
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
