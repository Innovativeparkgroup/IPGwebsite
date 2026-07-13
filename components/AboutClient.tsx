"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";
import GridLines from "./GridLines";
import { HEAD, BODY } from "@/lib/fonts";
import styles from "./About.module.css";

function CornerBrackets() {
  const base = { position: "absolute" as const, width: 15, height: 15, borderColor: "rgba(16,24,38,.3)", borderStyle: "solid" as const };
  return (
    <>
      <span style={{ ...base, top: 16, left: 16, borderWidth: "1.5px 0 0 1.5px" }} />
      <span style={{ ...base, top: 16, right: 16, borderWidth: "1.5px 1.5px 0 0" }} />
      <span style={{ ...base, bottom: 16, left: 16, borderWidth: "0 0 1.5px 1.5px" }} />
      <span style={{ ...base, bottom: 16, right: 16, borderWidth: "0 1.5px 1.5px 0" }} />
    </>
  );
}

const VALUE_ROWS: { n: string; title: string; body: string; src: string; alt: string; flex: string }[][] = [
  [
    { n: "01", title: "Safety First", body: "Every decision prioritizes user safety and genuine duty of care.", src: "/assets/value-inspection.jpg", alt: "Auditor checking skatepark rail for safety compliance", flex: "1.45 1 0" },
    { n: "02", title: "User-Focused", body: "We assess skateparks from the rider's perspective, not just from a checklist.", src: "/assets/value-rider.jpg", alt: "Skateboarder using skatepark bowl during safety assessment", flex: "1 1 0" },
  ],
  [
    { n: "03", title: "Community Focused", body: "Skateparks bring people together, and our work helps councils protect that value.", src: "/assets/value-public.jpg", alt: "Community skatepark reviewed for AS EN 14974:2021 standards", flex: "1 1 0" },
    { n: "04", title: "Professional Excellence", body: "Every audit is handled with expertise, integrity, and attention to detail.", src: "/assets/value-fieldwork.jpg", alt: "Audit tools and clipboard used during skatepark inspection", flex: "1.45 1 0" },
  ],
];

const CHOOSE_ITEMS = [
  { n: "01", title: "Unique Expertise", body: "Formal auditing certification combined with professional skateboarding experience. That combination produces assessments that are comprehensive, practical, and insightful." },
  { n: "02", title: "Practical Testing", body: "We ride the parks we assess. Functional testing surfaces real-world issues that visual inspection alone cannot identify." },
  { n: "03", title: "Actionable Recommendations", body: "Clear, prioritized action plans with budget estimates. Councils know exactly what needs to be done, and when." },
  { n: "04", title: "Compliance Assurance", body: "Every audit is conducted in full accordance with AS EN 14974:2021, suitable for insurance, funding applications, and asset management." },
  { n: "05", title: "Community Engagement", body: "Our insights reflect both technical compliance and the real needs of skate communities. We help councils understand their users, not just their infrastructure." },
  { n: "06", title: "Long-Term Partnership", body: "We don't deliver one-time audits and disappear. We support ongoing maintenance planning to ensure continued safety and compliance over time." },
];

export default function AboutClient() {
  return (
    <div style={{ position: "relative", background: "#F3F1EC", color: "#101826", fontFamily: BODY, minHeight: "100vh", overflow: "hidden" }}>
      <GridLines />
      <SiteNav active="About" />

      <main style={{ position: "relative", zIndex: 2 }}>
        <section aria-labelledby="about-h1" style={{ padding: "clamp(140px,15vw,196px) 0 clamp(80px,7vw,110px)", position: "relative" }}>
          <div style={{ maxWidth: 1340, margin: "0 auto", padding: "0 40px", width: "100%" }}>
            <div className={styles.split} style={{ display: "grid", gridTemplateColumns: "1.32fr 0.88fr", gap: "clamp(40px,6vw,96px)", alignItems: "start", marginBottom: "clamp(56px,6vw,88px)" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: "clamp(32px,3.4vw,46px)" }}>
                  <span style={{ width: 38, height: 1, background: "#1A56DB" }} />
                  <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: 13, letterSpacing: ".28em", textTransform: "uppercase", color: "#1A56DB" }}>Who We Are</span>
                </div>
                <h1 id="about-h1" style={{ fontFamily: HEAD, fontWeight: 900, textTransform: "uppercase", lineHeight: 0.84, letterSpacing: "-.028em", fontSize: "clamp(52px,8.4vw,136px)", margin: 0 }}>
                  <span style={{ display: "block", fontSize: "clamp(48px,11.5vw,89px)" }}>About</span>
                  <span style={{ display: "block", fontSize: "clamp(48px,11.5vw,89px)" }}>Innovative</span>
                  <span style={{ display: "block", color: "#1a56db", fontSize: "clamp(48px,11.5vw,89px)" }}>Park Group</span>
                </h1>
              </div>
              <div style={{ paddingTop: "clamp(0px,5.4vw,86px)", maxWidth: 430 }}>
                <p style={{ fontFamily: BODY, fontWeight: 500, fontSize: "clamp(19px,1.5vw,22px)", lineHeight: 1.5, color: "rgba(16,24,38,.78)", margin: "0 0 30px" }}>
                  Built on a simple belief. Skateparks should be safe, functional, and designed with input from the people who use them.
                </p>
                <Link href="/services" className="learnMore" style={{ display: "inline-flex", alignItems: "center", gap: 12, fontFamily: BODY, fontWeight: 600, fontSize: 13, letterSpacing: ".16em", textTransform: "uppercase", color: "#1a56db", paddingBottom: 8, borderBottom: "1px solid rgba(16,24,38,.28)" }}>
                  View Our Approach<span style={{ fontSize: 15 }}>→</span>
                </Link>
              </div>
            </div>

            <div style={{ position: "relative", width: "100%", aspectRatio: "1340/620", overflow: "hidden", background: "#E4E1DA", border: "1px solid rgba(16,24,38,.1)", borderRadius: 10 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/about-hero-skatepark.png" alt="Skatepark designed and audited by Innovative Park Group" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 62%", borderRadius: 10 }} />
              <span style={{ position: "absolute", left: 24, bottom: 22, fontFamily: BODY, fontWeight: 600, fontSize: 12, letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(255,255,255,.9)", textShadow: "0 1px 14px rgba(0,0,0,.5)" }}>
                Field-Tested · AS EN 14974:2021
              </span>
            </div>
          </div>
        </section>

        <section aria-labelledby="about-story-h2" style={{ borderTop: "1px solid rgba(16,24,38,.08)", paddingTop: "clamp(56px,13vw,100px)", paddingBottom: "clamp(56px,13vw,100px)" }}>
          <div style={{ maxWidth: 1340, margin: "0 auto", padding: "0 40px" }}>
            <Reveal style={{ display: "flex", alignItems: "baseline", gap: 22, borderTop: "1px solid rgba(16,24,38,.14)", paddingTop: 26, marginBottom: 64 }}>
              <span style={{ fontFamily: HEAD, fontWeight: 700, fontSize: 15, letterSpacing: ".12em", color: "#1A56DB" }}>001</span>
              <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: 13, letterSpacing: ".24em", textTransform: "uppercase", color: "rgba(16,24,38,.55)" }}>Our Story</span>
            </Reveal>
            <Reveal style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", maxWidth: 900, margin: "0 auto", gap: "clamp(32px,3.6vw,48px)" }}>
              <h2 id="about-story-h2" style={{ fontFamily: HEAD, fontWeight: 900, textTransform: "none", lineHeight: 0.96, fontSize: "clamp(34px,4.6vw,68px)", letterSpacing: "-1.5px" }}>
                We test what others only&nbsp;<span style={{ color: "rgb(13, 56, 141)" }}>inspect.</span>
              </h2>
              <p style={{ fontFamily: BODY, fontSize: "clamp(17px,1.5vw,19px)", lineHeight: 1.64, color: "rgba(16,24,38,.74)" }}>
                With skateboarding continuing to grow as both a competitive sport and everyday recreational activity, councils need expert guidance to ensure their facilities meet modern safety standards while serving their communities well.
              </p>
              <p style={{ fontFamily: BODY, fontSize: "clamp(17px,1.5vw,19px)", lineHeight: 1.64, color: "rgba(16,24,38,.74)", maxWidth: 794 }}>
                Innovative Park Group was founded to close that gap. We combine formal audit methodology with genuine on-the-ground experience. Our team doesn&apos;t just inspect facilities. We test them. We don&apos;t just identify problems. We give you a clear path to fix them.
              </p>
            </Reveal>
          </div>
        </section>

        <section aria-labelledby="about-leadership-h2" style={{ padding: "clamp(60px,13vw,130px) 0", background: "#FFFFFF", borderTop: "1px solid rgba(16,24,38,.08)", borderBottom: "1px solid rgba(16,24,38,.08)" }}>
          <div style={{ maxWidth: 1340, margin: "0 auto", padding: "0 40px" }}>
            <Reveal style={{ display: "flex", alignItems: "baseline", gap: 22, borderTop: "1px solid rgba(16,24,38,.14)", paddingTop: 26, marginBottom: 72 }}>
              <span style={{ fontFamily: HEAD, fontWeight: 700, fontSize: 15, letterSpacing: ".12em", color: "#1A56DB" }}>002</span>
              <h2 style={{ fontFamily: BODY, fontWeight: 600, fontSize: 13, letterSpacing: ".24em", textTransform: "uppercase", color: "rgba(16,24,38,.55)", margin: 0 }}>Leadership</h2>
            </Reveal>
            <div className={styles.twoCol} style={{ display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 64, alignItems: "start" }}>
              <Reveal>
                <div className={styles.leaderImg} style={{ position: "relative", border: "1px solid rgba(16,24,38,.13)", overflow: "hidden", width: "100%", height: "clamp(520px,46vw,680px)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/assets/tommy-fynn-portrait.png" alt="Tommy Fynn, certified AS EN 14974:2021 safety auditor and Olympic skateboarding coach" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%", borderRadius: 15 }} />
                </div>
              </Reveal>
              <Reveal delay={120}>
                <h3 aria-label="Tommy Fynn — Director, Certified Safety Auditor & Olympic Skateboarding Coach" style={{ fontFamily: HEAD, fontWeight: 900, textTransform: "uppercase", lineHeight: 0.92, fontSize: "clamp(36px,4.4vw,62px)", marginBottom: 10 }}>Tommy Fynn</h3>
                <p style={{ fontFamily: BODY, fontWeight: 600, fontSize: 14, letterSpacing: ".12em", textTransform: "uppercase", color: "#1A56DB", marginBottom: 34 }}>Director, Certified Safety Auditor &amp; Olympic Skateboarding Coach</p>
                <p style={{ fontFamily: BODY, fontSize: 17, lineHeight: 1.62, color: "rgba(16,24,38,.74)", marginBottom: 24 }}>
                  Tommy brings over two decades of professional skateboarding experience combined with formal certification in safety auditing and compliance assessment. As an Olympic-level coach, he&apos;s trained athletes at the highest levels of competitive skateboarding, and he understands both the technical requirements of world-class facilities and what it actually feels like to ride them.
                </p>
                <p style={{ fontFamily: BODY, fontSize: 17, lineHeight: 1.62, color: "rgba(16,24,38,.74)", marginBottom: 40 }}>
                  He personally conducts functional testing on every facility IPG audits, skating each park to identify practical issues that a visual inspection alone would miss.
                </p>
                <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid rgba(16,24,38,.12)" }}>
                  {["Certified AS EN 14974:2021 Safety Auditor", "Olympic-Level Skateboarding Coach", "Professional Skateboarder (20+ Years)"].map((label, i) => (
                    <div key={label} style={{ display: "flex", alignItems: "center", gap: 18, padding: "18px 0", borderBottom: i < 2 ? "1px solid rgba(16,24,38,.12)" : undefined }}>
                      <span style={{ fontFamily: HEAD, fontWeight: 700, fontSize: 13, color: "#1A56DB" }}>{String(i + 1).padStart(2, "0")}</span>
                      <span style={{ fontFamily: HEAD, fontWeight: 700, textTransform: "uppercase", fontSize: 19, letterSpacing: ".02em" }}>{label}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <Reveal style={{ display: "block" }}>
          <div style={{ position: "relative", width: "100%", height: "clamp(190px,42vw,600px)", borderTop: "1px solid rgba(16,24,38,.1)", borderBottom: "1px solid rgba(16,24,38,.1)", overflow: "hidden" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/about-fullwidth-skatepark.png" alt="Close-up of skatepark transition tested for AS EN 14974:2021 compliance" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 42%" }} />
          </div>
        </Reveal>

        <section aria-labelledby="about-values-h2" style={{ padding: "clamp(60px,13vw,130px) 0" }}>
          <div style={{ maxWidth: 1340, margin: "0 auto", padding: "0 40px" }}>
            <div className={styles.twoCol} style={{ display: "grid", gridTemplateColumns: "0.7fr 1.3fr", gap: "clamp(36px,5vw,80px)", alignItems: "end", marginBottom: 72 }}>
              <Reveal style={{ display: "flex", alignItems: "baseline", gap: 22, borderTop: "1px solid rgba(16,24,38,.14)", paddingTop: 26 }}>
                <span style={{ fontFamily: HEAD, fontWeight: 700, fontSize: 15, letterSpacing: ".12em", color: "#1A56DB" }}>003</span>
                <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: 13, letterSpacing: ".24em", textTransform: "uppercase", color: "rgba(16,24,38,.55)" }}>Our Values</span>
              </Reveal>
              <Reveal delay={100}>
                <h2 id="about-values-h2" style={{ fontFamily: HEAD, fontWeight: 500, lineHeight: 1.18, fontSize: "clamp(22px,2.5vw,34px)", letterSpacing: "-.01em", color: "rgba(16,24,38,.9)", maxWidth: 760 }}>
                  Our work is built around <span style={{ color: "#0d388d", fontWeight: 700 }}>safety</span>, <span style={{ color: "#0d388d", fontWeight: 700 }}>usability</span>, <span style={{ color: "#0d388d", fontWeight: 700 }}>community</span>, and <span style={{ color: "#0d388d", fontWeight: 700 }}>professional care</span>.
                </h2>
              </Reveal>
            </div>

            {VALUE_ROWS.map((row, rowIndex) => (
              <ul key={rowIndex} className={styles.vrow} style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", gap: "clamp(20px,2vw,28px)", marginBottom: rowIndex === 0 ? "clamp(20px,2vw,28px)" : 0 }}>
                {row.map((card, i) => (
                  <Reveal key={card.n} as="li" delay={i === 1 ? 100 : 0} duration="0.9s" style={{ flex: card.flex, minWidth: 0, display: "flex", flexDirection: "column", background: "#FFFFFF", border: "1px solid rgba(16,24,38,.12)" }}>
                    <div style={{ position: "relative", width: "100%", height: "clamp(280px,28vw,400px)", background: "linear-gradient(135deg,#E7E4DD 0%,#DAD6CE 100%)", overflow: "hidden" }}>
                      <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg,rgba(16,24,38,.026) 0,rgba(16,24,38,.026) 1px,transparent 1px,transparent 12px)" }} />
                      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(120% 100% at 30% 25%,transparent 50%,rgba(16,24,38,.08) 100%)" }} />
                      <CornerBrackets />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={card.src} alt={card.alt} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 2 }} />
                      <span style={{ position: "absolute", top: 0, left: 0, zIndex: 3, display: "flex", alignItems: "center", justifyContent: "center", width: 64, height: 64, background: "#1A56DB", fontFamily: HEAD, fontWeight: 800, fontSize: 24, color: "#FBFCFE", letterSpacing: ".02em" }}>
                        {card.n}
                      </span>
                    </div>
                    <div style={{ padding: "34px 34px 38px", display: "flex", flexDirection: "column", flex: 1 }}>
                      <h3 style={{ fontFamily: HEAD, fontWeight: 800, textTransform: "uppercase", fontSize: "clamp(24px,2vw,30px)", lineHeight: 1.02, marginBottom: 14 }}>{card.title}</h3>
                      <p style={{ fontFamily: BODY, fontSize: 16, lineHeight: 1.6, color: "rgba(16,24,38,.66)", maxWidth: 460 }}>{card.body}</p>
                    </div>
                  </Reveal>
                ))}
              </ul>
            ))}
          </div>
        </section>

        <section aria-labelledby="about-choose-h2" style={{ padding: "0 0 clamp(68px,14vw,140px)" }}>
          <div style={{ maxWidth: 1340, margin: "0 auto", padding: "0 40px" }}>
            <Reveal style={{ display: "flex", alignItems: "baseline", gap: 22, borderTop: "1px solid rgba(16,24,38,.14)", paddingTop: 26, marginBottom: 64 }}>
              <span style={{ fontFamily: HEAD, fontWeight: 700, fontSize: 15, letterSpacing: ".12em", color: "#1A56DB" }}>004</span>
              <h2 id="about-choose-h2" style={{ fontFamily: BODY, fontWeight: 600, fontSize: 13, letterSpacing: ".24em", textTransform: "uppercase", color: "rgba(16,24,38,.55)", margin: 0 }}>Why Councils Choose IPG</h2>
            </Reveal>
            <ul className={styles.grid3} style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 0, borderTop: "1px solid rgba(16,24,38,.1)" }}>
              {CHOOSE_ITEMS.map((item, i) => {
                const col = i % 3;
                const row = Math.floor(i / 3);
                return (
                  <Reveal
                    key={item.n}
                    as="li"
                    delay={col === 1 ? 80 : col === 2 ? 160 : 0}
                    duration="0.9s"
                    style={{
                      padding: col === 0 ? "40px 40px 40px 0" : col === 2 ? "40px 0 40px 40px" : "40px 40px",
                      borderRight: col < 2 ? "1px solid rgba(16,24,38,.1)" : undefined,
                      borderBottom: row === 0 ? "1px solid rgba(16,24,38,.1)" : undefined,
                    }}
                  >
                    <span style={{ fontFamily: HEAD, fontWeight: 700, fontSize: 13, color: "#1A56DB", display: "block", marginBottom: 22 }}>{item.n}</span>
                    <h3 style={{ fontFamily: HEAD, fontWeight: 800, textTransform: "uppercase", fontSize: 25, marginBottom: 14 }}>{item.title}</h3>
                    <p style={{ fontFamily: BODY, fontSize: 15, lineHeight: 1.58, color: "rgba(16,24,38,.6)" }}>{item.body}</p>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </section>

        <section style={{ padding: "0 0 clamp(68px,14vw,140px)" }}>
          <div style={{ maxWidth: 1340, margin: "0 auto", padding: "0 40px" }}>
            <Reveal style={{ padding: "clamp(48px,7vw,100px)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 48, backgroundColor: "#0d388d", position: "relative", overflow: "hidden", borderRadius: 15 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img aria-hidden="true" src="/assets/ipg-icon.png" alt="" style={{ position: "absolute", left: "clamp(-40px,-2vw,0px)", bottom: "clamp(-50px,-3vw,-20px)", width: "clamp(240px,30vw,420px)", height: "auto", opacity: 0.08, pointerEvents: "none", userSelect: "none", zIndex: 0 }} />
              <div style={{ position: "absolute", inset: 0, zIndex: 0, backgroundImage: "repeating-linear-gradient(45deg,rgba(255,255,255,.045) 0,rgba(255,255,255,.045) 1px,transparent 1px,transparent 14px)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", inset: 0, zIndex: 0, background: "radial-gradient(90% 150% at 88% 50%,rgba(255,255,255,.055) 0,transparent 58%)", pointerEvents: "none", borderRadius: 15 }} />
              <div style={{ position: "relative", zIndex: 1, maxWidth: 680 }}>
                <h2 style={{ fontFamily: HEAD, fontWeight: 900, textTransform: "uppercase", lineHeight: 0.94, fontSize: "clamp(32px,4.4vw,62px)", marginBottom: 22, color: "#FBFCFE" }}>
                  Ready to work<div>with us?</div>
                </h2>
                <p style={{ fontFamily: BODY, fontSize: 18, lineHeight: 1.55, color: "rgba(251,252,254,.92)" }}>Let&apos;s discuss how IPG can help you ensure your skateparks are safe, compliant, and well-maintained.</p>
              </div>
              <Link
                href="/contact"
                style={{ position: "relative", zIndex: 1, fontFamily: BODY, fontWeight: 600, letterSpacing: "clamp(.06em,1vw,.14em)", textTransform: "uppercase", color: "#1A56DB", background: "#FFFFFF", padding: "clamp(13px,3.4vw,20px) clamp(20px,4.6vw,36px)", fontSize: "clamp(12px,3.2vw,15px)", whiteSpace: "nowrap", maxWidth: "100%", boxSizing: "border-box", borderRadius: 15 }}
              >
                Get in Touch →
              </Link>
            </Reveal>
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}
