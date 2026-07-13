"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";
import GridLines from "./GridLines";
import { HEAD, BODY } from "@/lib/fonts";
import styles from "./Services.module.css";

const PROOF_ITEMS = [
  { label: "Certified Audits", path: "M12 2.5 5 5.2v5.1c0 4.3 2.9 8.1 7 9.2 4.1-1.1 7-4.9 7-9.2V5.2L12 2.5Z", check: "m9 11.5 2.2 2.2L15 9.6" },
  { label: "Maintenance Planning", path: "M9 4.5H7.5A1.5 1.5 0 0 0 6 6v13a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19V6a1.5 1.5 0 0 0-1.5-1.5H15", check: "m9 13 1.6 1.6L14 11.2" },
  { label: "Council-Focused Reporting", path: "M14 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8L14 3Z", check: "M9 17v-3" },
];

const INCLUDED_ITEMS = [
  { n: "01", body: "Certified compliance verification against the full AS EN 14974:2021 standard." },
  { n: "02", body: "Functional user testing. Professional skaters test each facility under real conditions." },
  { n: "03", body: "Detailed documentation with professional photos, measurements, and technical analysis." },
  { n: "04", body: "Actionable recommendations with prioritized maintenance plans and budget forecasting." },
];

const RECEIVE_ITEMS = [
  { n: "01 / 06", title: "Detailed Maintenance Plan", body: "A comprehensive action plan with urgent and preventative items prioritized by risk level and timeline.", accent: false },
  { n: "02 / 06", title: "Lifespan Rating", body: "Estimated remaining facility lifespan to support long-term planning and budget forecasting.", accent: false },
  { n: "03 / 06", title: "Compliance Report", body: "A professional report aligned with AS EN 14974:2021, suitable for insurance and funding applications.", accent: false },
  { n: "04 / 06", title: "Photographic Documentation", body: "Professional photos of all features, issues, and infrastructure with detailed measurements.", accent: true },
  { n: "05 / 06", title: "Functional Assessment", body: "Real-world user testing by professional skaters to identify practical usability issues.", accent: false },
  { n: "06 / 06", title: "Budget Recommendations", body: "Cost estimates and prioritization to help councils allocate maintenance and upgrade budgets effectively.", accent: false },
];

const SLIDES = [
  { n: "01 / 04", title: "Community Engagement", body: "Workshops and consultations with local skate communities to gather user feedback, understand community needs, and build support for facility improvements.", src: "/assets/community-engagement.png", alt: "Group of young skateboarders posing together with their skateboards at a local skatepark, reflecting Innovative Park Group's community engagement", community: true },
  { n: "02 / 04", title: "Strategic Planning & Upgrades", body: "Long-term facility planning and upgrade recommendations aligned with community needs, compliance requirements, and council budgets. Includes multi-year planning strategies, upgrade prioritization, budget forecasting, and facility network analysis.", src: "/assets/ipg-strategic-planning.png", alt: "IPG team reviewing skatepark master plans on site", community: false },
  { n: "03 / 04", title: "Design Consultation", body: "Expert guidance on new infrastructure design and renovations, so proposed facilities meet AS EN 14974:2021 standards and work well from day one.", src: "/assets/design-consultation-blueprint.png", alt: "Skatepark design blueprint on a concrete ledge in front of a finished skatepark", community: false },
  { n: "04 / 04", title: "Coaching Clinics & Demonstrations", body: "Live skateboarding demonstrations and coaching clinics led by Olympic-level instructors, perfect for community engagement and facility launches.", src: "/assets/coaching-clinics.png", alt: "Skate coach instructing young skaters at a skatepark", community: false },
];

const MAINT_ITEMS = [
  { n: "01", title: "Regular Inspections", body: "Scheduled routine, operational, and comprehensive annual inspections in accordance with AS EN 14974:2021 Clause 10.2." },
  { n: "02", title: "Maintenance Planning", body: "Customized maintenance schedules and protocols to extend facility lifespan and maintain compliance." },
  { n: "03", title: "Issue Tracking", body: "Systematic documentation of repairs, maintenance activities, and compliance status over time." },
  { n: "04", title: "Reporting & Analysis", body: "Regular reports on facility condition, maintenance history, and recommendations for improvements." },
];

export default function ServicesClient() {
  const [slide, setSlide] = useState(0);
  const touchX = useRef<number | null>(null);
  const slideCount = SLIDES.length;

  const goTo = (i: number) => setSlide(((i % slideCount) + slideCount) % slideCount);

  return (
    <div style={{ position: "relative", background: "#F3F1EC", color: "#101826", fontFamily: BODY, minHeight: "100vh", overflow: "hidden" }}>
      <GridLines />
      <SiteNav active="Services" />

      <main style={{ position: "relative", zIndex: 2 }}>
        <section aria-labelledby="svc-h1" style={{ padding: "clamp(132px,13vw,168px) 0 clamp(56px,5vw,76px)", position: "relative" }}>
          <div style={{ maxWidth: 1340, margin: "0 auto", padding: "0 40px", width: "100%" }}>
            <div className={styles.svcSplit} style={{ display: "grid", gridTemplateColumns: "1.28fr 0.92fr", gap: "clamp(40px,6vw,92px)", alignItems: "start", marginBottom: "clamp(40px,4.4vw,60px)" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: "clamp(28px,3vw,40px)" }}>
                  <span style={{ width: 38, height: 1, background: "#1A56DB" }} />
                  <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: 13, letterSpacing: ".28em", textTransform: "uppercase", color: "#1A56DB" }}>What We Do</span>
                </div>
                <h1 id="svc-h1" style={{ fontFamily: HEAD, fontWeight: 900, textTransform: "uppercase", lineHeight: 0.84, letterSpacing: "-.028em", fontSize: "clamp(60px,9.2vw,138px)", margin: 0 }}>
                  <span style={{ display: "block" }}>Our</span>
                  <span style={{ display: "block", color: "#1A56DB" }}>Services</span>
                </h1>
              </div>
              <div className={styles.svcRight} style={{ paddingTop: "clamp(0px,3.4vw,54px)", maxWidth: 440 }}>
                <p style={{ fontFamily: BODY, fontWeight: 500, fontSize: "clamp(19px,1.5vw,22px)", lineHeight: 1.5, color: "rgba(16,24,38,.78)", margin: "0 0 clamp(28px,3vw,38px)" }}>
                  Skatepark auditing, maintenance planning, and strategic consulting. For councils that take their facilities seriously.
                </p>
                <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid rgba(16,24,38,.14)" }}>
                  {PROOF_ITEMS.map((item, i) => (
                    <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 14, padding: "15px 0", borderBottom: i < PROOF_ITEMS.length - 1 ? "1px solid rgba(16,24,38,.12)" : undefined }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A56DB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "none" }} aria-hidden="true">
                        <path d={item.path} />
                        <path d={item.check} />
                      </svg>
                      <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: 15, letterSpacing: ".01em", color: "#101826" }}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ position: "relative", width: "100%", aspectRatio: "1774/887", maxHeight: "60vh", overflow: "hidden", background: "#E4E1DA", border: "1px solid rgba(16,24,38,.1)", borderRadius: 10 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/services-hero-skatepark.png" alt="Certified auditor inspecting skatepark for AS EN 14974:2021 compliance" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 38%", borderRadius: 10 }} />
              <span style={{ position: "absolute", left: 24, bottom: 22, fontFamily: BODY, fontWeight: 600, fontSize: 12, letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(255,255,255,.92)", textShadow: "0 1px 14px rgba(0,0,0,.55)" }}>
                Field-Tested · AS EN 14974:2021
              </span>
            </div>
          </div>
        </section>

        <section aria-labelledby="svc-core-h2" style={{ padding: "clamp(56px,13vw,120px) 0", borderTop: "1px solid rgba(16,24,38,.08)", background: "#FFFFFF", borderBottom: "1px solid rgba(16,24,38,.08)" }}>
          <div style={{ maxWidth: 1340, margin: "0 auto", padding: "0 40px" }}>
            <Reveal style={{ display: "flex", alignItems: "baseline", gap: 22, borderTop: "1px solid rgba(16,24,38,.14)", paddingTop: 26, marginBottom: 64 }}>
              <span style={{ fontFamily: HEAD, fontWeight: 700, fontSize: 15, letterSpacing: ".12em", color: "#1A56DB" }}>001</span>
              <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: 13, letterSpacing: ".24em", textTransform: "uppercase", color: "rgba(16,24,38,.55)" }}>Core Service</span>
            </Reveal>
            <div className={styles.core2} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "start" }}>
              <Reveal>
                <h2 id="svc-core-h2" style={{ fontFamily: HEAD, fontWeight: 900, textTransform: "uppercase", lineHeight: 0.92, fontSize: "clamp(30px,4vw,56px)", marginBottom: 28 }}>
                  AS EN<br />14974:2021<br /><span style={{ color: "#1A56DB" }}>Compliance Audits</span>
                </h2>
                <p style={{ fontFamily: BODY, fontSize: 18, lineHeight: 1.6, color: "rgba(16,24,38,.74)", marginBottom: 36, maxWidth: 520 }}>
                  Our flagship service. A comprehensive safety and compliance audit for skateparks and wheeled sports facilities, conducted by certified professionals and including practical functional testing.
                </p>
                <Link href="/contact" className="ctaButton" style={{ fontFamily: BODY, fontWeight: 600, fontSize: 14, letterSpacing: ".14em", textTransform: "uppercase", color: "#FBFCFE", background: "#1A56DB", padding: "18px 32px", display: "inline-block", borderRadius: 15 }}>
                  Request an Audit →
                </Link>
              </Reveal>
              <Reveal delay={120}>
                <h3 style={{ fontFamily: BODY, fontWeight: 600, fontSize: 12, letterSpacing: ".22em", textTransform: "uppercase", color: "rgba(16,24,38,.5)", display: "block", marginBottom: 8 }}>What&apos;s Included</h3>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", borderTop: "1px solid rgba(16,24,38,.14)" }}>
                  {INCLUDED_ITEMS.map((item, i) => (
                    <li key={item.n} style={{ display: "flex", gap: 22, padding: "26px 0", borderBottom: i < INCLUDED_ITEMS.length - 1 ? "1px solid rgba(16,24,38,.14)" : undefined }}>
                      <span style={{ fontFamily: HEAD, fontWeight: 700, fontSize: 13, color: "#1A56DB", paddingTop: 4 }}>{item.n}</span>
                      <p style={{ fontFamily: BODY, fontSize: 16.5, lineHeight: 1.5, color: "rgba(16,24,38,.82)" }}>{item.body}</p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        <section aria-labelledby="svc-receive-h2" style={{ padding: "clamp(60px,13vw,130px) 0" }}>
          <div style={{ maxWidth: 1340, margin: "0 auto", padding: "0 40px" }}>
            <Reveal style={{ display: "flex", alignItems: "baseline", gap: 22, borderTop: "1px solid rgba(16,24,38,.14)", paddingTop: 26, marginBottom: 64 }}>
              <span style={{ fontFamily: HEAD, fontWeight: 700, fontSize: 15, letterSpacing: ".12em", color: "#1A56DB" }}>002</span>
              <h2 id="svc-receive-h2" style={{ fontFamily: BODY, fontWeight: 600, fontSize: 13, letterSpacing: ".24em", textTransform: "uppercase", color: "rgba(16,24,38,.55)", margin: 0 }}>What You Receive</h2>
            </Reveal>
            <ul className={styles.recv} style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: "rgba(16,24,38,.1)", border: "1px solid rgba(16,24,38,.1)" }}>
              {RECEIVE_ITEMS.map((item, i) => (
                <Reveal key={item.n} as="li" delay={(i % 3) * 80} duration="0.9s" style={{ background: "#FFFFFF", padding: "42px 36px", minHeight: 270, display: "flex", flexDirection: "column" }}>
                  <span style={{ fontFamily: HEAD, fontWeight: 700, fontSize: 13, letterSpacing: ".14em", color: item.accent ? "#1A56DB" : "rgba(16,24,38,.4)", marginBottom: "auto" }}>{item.n}</span>
                  <h3 style={{ fontFamily: HEAD, fontWeight: 800, textTransform: "uppercase", fontSize: 27, lineHeight: 1.02, margin: "30px 0 14px" }}>{item.title}</h3>
                  <p style={{ fontFamily: BODY, fontSize: 15, lineHeight: 1.58, color: "rgba(16,24,38,.6)" }}>{item.body}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="svc-additional-h2" style={{ padding: "0 0 clamp(60px,13vw,130px)" }}>
          <div style={{ maxWidth: 1340, margin: "0 auto", padding: "0 40px" }}>
            <Reveal style={{ display: "flex", alignItems: "baseline", gap: 22, borderTop: "1px solid rgba(16,24,38,.14)", paddingTop: 26, marginBottom: "clamp(40px,4.4vw,64px)" }}>
              <span style={{ fontFamily: HEAD, fontWeight: 700, fontSize: 15, letterSpacing: ".12em", color: "#1A56DB" }}>003</span>
              <h2 id="svc-additional-h2" style={{ fontFamily: BODY, fontWeight: 600, fontSize: 13, letterSpacing: ".24em", textTransform: "uppercase", color: "rgba(16,24,38,.55)", margin: 0 }}>Additional Services</h2>
            </Reveal>

            <Reveal>
              <div
                style={{ overflow: "hidden", width: "100%" }}
                onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
                onTouchEnd={(e) => {
                  if (touchX.current == null) return;
                  const dx = e.changedTouches[0].clientX - touchX.current;
                  touchX.current = null;
                  if (dx > 45) goTo(slide - 1);
                  else if (dx < -45) goTo(slide + 1);
                }}
              >
                <div style={{ display: "flex", width: "100%", transition: "transform .72s cubic-bezier(.16,1,.3,1)", willChange: "transform", transform: `translateX(${-slide * 100}%)` }}>
                  {SLIDES.map((s) => (
                    <div key={s.n} className={styles.svcSlide} style={{ flex: "0 0 100%", minWidth: 0, display: "grid", gridTemplateColumns: "0.86fr 1.14fr", gap: "clamp(32px,4.5vw,72px)", alignItems: "center" }}>
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: "clamp(20px,2.4vw,30px)" }}>
                          <span style={{ width: 30, height: 1, background: "rgba(16,24,38,.28)" }} />
                          <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: 12, letterSpacing: ".22em", textTransform: "uppercase", color: "rgba(16,24,38,.5)" }}>Service {s.n}</span>
                        </div>
                        <h3 style={{ fontFamily: HEAD, fontWeight: 800, textTransform: "uppercase", fontSize: "clamp(30px,3.4vw,46px)", lineHeight: 1.0, marginBottom: "clamp(18px,2vw,26px)" }}>{s.title}</h3>
                        <p style={{ fontFamily: BODY, fontSize: "clamp(16px,1.2vw,18px)", lineHeight: 1.62, color: "rgba(16,24,38,.66)", maxWidth: 470 }}>{s.body}</p>
                      </div>
                      <div className={styles.svcImg} style={{ position: "relative", width: "100%", height: "clamp(300px,33vw,460px)", background: "#E7E4DD", border: "1px solid rgba(16,24,38,.12)", overflow: "hidden", borderRadius: 10 }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={s.community ? styles.communityImg : undefined} src={s.src} alt={s.alt} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: s.community ? "center 35%" : "center" }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, marginTop: "clamp(32px,3.6vw,52px)", borderTop: "1px solid rgba(16,24,38,.12)", paddingTop: "clamp(22px,2.4vw,30px)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                  {SLIDES.map((s, i) => (
                    <button
                      key={s.n}
                      type="button"
                      aria-label={`Go to slide ${i + 1}`}
                      onClick={() => goTo(i)}
                      style={{ height: 3, width: i === slide ? 44 : 20, border: "none", padding: 0, background: i === slide ? "#1A56DB" : "rgba(16,24,38,.16)", cursor: "pointer", transition: "width .4s cubic-bezier(.16,1,.3,1),background .4s ease" }}
                    />
                  ))}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <button type="button" aria-label="Previous service" onClick={() => goTo(slide - 1)} className="carouselNav" style={{ width: 54, height: 54, border: "none", background: "#1A56DB", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#FFFFFF", transition: "background .3s ease" }}>
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="m15 6-6 6 6 6" /></svg>
                  </button>
                  <button type="button" aria-label="Next service" onClick={() => goTo(slide + 1)} className="carouselNav" style={{ width: 54, height: 54, border: "none", background: "#1A56DB", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#FFFFFF", transition: "background .3s ease" }}>
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="m9 6 6 6-6 6" /></svg>
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section aria-labelledby="svc-maint-h2" style={{ padding: "clamp(60px,13vw,130px) 0", background: "#FFFFFF", borderTop: "1px solid rgba(16,24,38,.08)", borderBottom: "1px solid rgba(16,24,38,.08)" }}>
          <div style={{ maxWidth: 1340, margin: "0 auto", padding: "0 40px" }}>
            <Reveal style={{ display: "flex", alignItems: "baseline", gap: 22, borderTop: "1px solid rgba(16,24,38,.14)", paddingTop: 26, marginBottom: 48 }}>
              <span style={{ fontFamily: HEAD, fontWeight: 700, fontSize: 15, letterSpacing: ".12em", color: "#1A56DB" }}>004</span>
              <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: 13, letterSpacing: ".24em", textTransform: "uppercase", color: "rgba(16,24,38,.55)" }}>Ongoing Maintenance Support</span>
            </Reveal>
            <Reveal>
              <h2 id="svc-maint-h2" style={{ fontFamily: HEAD, fontWeight: 900, lineHeight: 1.0, letterSpacing: "-.025em", fontSize: "clamp(27px,3.2vw,46px)", maxWidth: 1060, marginBottom: 72 }}>
                Beyond the initial audit, we help councils<br />maintain their skateparks safely over time.
              </h2>
            </Reveal>
            <ul className={styles.maint} style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0, borderTop: "1px solid rgba(16,24,38,.12)" }}>
              {MAINT_ITEMS.map((item, i) => (
                <Reveal
                  key={item.n}
                  as="li"
                  delay={i * 80}
                  duration="0.9s"
                  style={{ padding: i === 0 ? "40px 28px 0 0" : i === MAINT_ITEMS.length - 1 ? "40px 0 0 28px" : "40px 28px 0 28px", borderRight: i < MAINT_ITEMS.length - 1 ? "1px solid rgba(16,24,38,.12)" : undefined }}
                >
                  <span style={{ fontFamily: HEAD, fontWeight: 700, fontSize: 13, color: "#1A56DB", display: "block", marginBottom: 24 }}>{item.n}</span>
                  <h3 style={{ fontFamily: HEAD, fontWeight: 800, textTransform: "uppercase", fontSize: 23, marginBottom: 14, lineHeight: 1.05 }}>{item.title}</h3>
                  <p style={{ fontFamily: BODY, fontSize: 14.5, lineHeight: 1.55, color: "rgba(16,24,38,.6)" }}>{item.body}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section style={{ padding: "clamp(60px,14vw,140px) 0" }}>
          <div style={{ maxWidth: 1340, margin: "0 auto", padding: "0 40px" }}>
            <Reveal className={styles.cta} style={{ padding: "clamp(48px,7vw,100px)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 48, backgroundColor: "#0d388d", position: "relative", overflow: "hidden", borderRadius: 15 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img aria-hidden="true" src="/assets/ipg-icon.png" alt="" style={{ position: "absolute", left: "clamp(-40px,-2vw,0px)", bottom: "clamp(-50px,-3vw,-20px)", width: "clamp(240px,30vw,420px)", height: "auto", opacity: 0.08, pointerEvents: "none", userSelect: "none", zIndex: 0 }} />
              <div style={{ position: "absolute", inset: 0, zIndex: 0, backgroundImage: "repeating-linear-gradient(45deg,rgba(255,255,255,.045) 0,rgba(255,255,255,.045) 1px,transparent 1px,transparent 14px)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", inset: 0, zIndex: 0, background: "radial-gradient(90% 150% at 88% 50%,rgba(255,255,255,.055) 0,transparent 58%)", pointerEvents: "none", borderRadius: 15 }} />
              <div style={{ position: "relative", zIndex: 1, maxWidth: 680 }}>
                <h2 style={{ fontFamily: HEAD, fontWeight: 900, textTransform: "uppercase", lineHeight: 0.94, fontSize: "clamp(32px,4.4vw,62px)", marginBottom: 22, color: "#FBFCFE" }}>Ready to get started?</h2>
                <p style={{ fontFamily: BODY, fontSize: 18, lineHeight: 1.55, color: "rgba(251,252,254,.92)" }}>Contact us today to discuss your skatepark auditing and maintenance needs.</p>
              </div>
              <Link href="/contact" className={styles.ctaBtn} style={{ position: "relative", zIndex: 1, fontFamily: BODY, fontWeight: 600, letterSpacing: "clamp(.06em,1vw,.14em)", textTransform: "uppercase", color: "#1A56DB", background: "#FFFFFF", padding: "clamp(13px,3.4vw,20px) clamp(20px,4.6vw,36px)", fontSize: "clamp(12px,3.2vw,15px)", whiteSpace: "nowrap", maxWidth: "100%", boxSizing: "border-box", borderRadius: 15 }}>
                Request a Consultation<span className={styles.ctaArrow}> →</span>
              </Link>
            </Reveal>
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}
