"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";
import GridLines from "./GridLines";
import { HEAD, BODY } from "@/lib/fonts";
import { submitToWeb3Forms } from "@/lib/web3forms";

const CHECK: CSSProperties = {
  width: 19,
  height: 19,
};

function CheckIcon({ color = "#7AA8FF" }: { color?: string }) {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={CHECK}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.4 12.3l2.4 2.4 4.8-5.1" />
    </svg>
  );
}

type Logo = { src: string; alt: string };

function Marquee({ logos, duration, reverse }: { logos: Logo[]; duration: string; reverse?: boolean }) {
  return (
    <div style={{ overflow: "hidden" }}>
      <div
        style={{
          display: "flex",
          width: "max-content",
          gap: "clamp(48px,6vw,96px)",
          animation: `ipgMarquee ${duration} linear infinite${reverse ? " reverse" : ""}`,
        }}
      >
        {[0, 1].map((group) => (
          <div
            key={group}
            aria-hidden={group === 1 ? true : undefined}
            style={{ display: "flex", alignItems: "center", gap: "clamp(48px,6vw,96px)", flex: "none" }}
          >
            {logos.map((logo, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={logo.src}
                alt={group === 0 ? logo.alt : ""}
                style={{ height: "clamp(46px,4.4vw,62px)", width: "auto", objectFit: "contain" }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const TRUSTED_LOGOS: Logo[] = [
  { src: "/ararat-rural-city-mqu9w02d.png", alt: "Ararat Rural City" },
  { src: "/banana-shire-council-logo-mqu9uugw.png", alt: "Banana Shire Council" },
  { src: "/bega-valley-council-logo-mqu9o908.png", alt: "Bega Valley Shire Council" },
  { src: "/redland-citycouncil-mqu9wnmf.png", alt: "Redland City Council" },
  { src: "/albury-city-mqu9vfl5.png", alt: "AlburyCity" },
  { src: "/assets/logo-noosa.svg", alt: "Noosa Council" },
];

export default function HomeClient() {
  const barRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const revealedOnce = useRef(false);

  const [heroRevealed, setHeroRevealed] = useState(false);
  const [loaderHidden, setLoaderHidden] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  useEffect(() => {
    const reveal = () => {
      if (revealedOnce.current) return;
      revealedOnce.current = true;
      setHeroRevealed(true);
      setTimeout(() => setLoaderHidden(true), 950);
    };

    const dur = 1500;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      if (countRef.current) countRef.current.textContent = String(Math.round(eased * 100)).padStart(3, "0");
      if (barRef.current) barRef.current.style.transform = `scaleX(${eased})`;
      if (t < 1) raf = requestAnimationFrame(tick);
      else reveal();
    };
    raf = requestAnimationFrame(tick);
    const fallback = setTimeout(reveal, 2800);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(fallback);
    };
  }, []);

  const heroLine = (i: number): CSSProperties => ({
    display: "block",
    transform: heroRevealed ? "none" : "translateY(110%)",
    opacity: heroRevealed ? 1 : 0,
    transition: "transform 1s cubic-bezier(.16,1,.3,1),opacity 1s ease",
    transitionDelay: `${200 + i * 130}ms`,
  });

  const heroFade = (i: number, withTransform = true): CSSProperties => ({
    opacity: heroRevealed ? 1 : 0,
    transform: withTransform ? (heroRevealed ? "none" : "translateY(16px)") : undefined,
    transition: withTransform ? "opacity .9s ease,transform .9s ease" : "opacity .9s ease",
    transitionDelay: `${650 + i * 120}ms`,
  });

  return (
    <div style={{ position: "relative", background: "#F3F1EC", color: "#101826", fontFamily: BODY, minHeight: "100vh", overflow: "hidden" }}>
      <GridLines hideOnMobile />

      {!loaderHidden && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "#F3F1EC url('/loader-bg.png') center center / cover no-repeat",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "clamp(24px,4vw,48px)",
            transform: heroRevealed ? "translateY(-100%)" : "translateY(0)",
            transition: "transform .9s cubic-bezier(.76,0,.24,1)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-start" }}>
            <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: 11, letterSpacing: ".24em", color: "rgba(16,24,38,.5)" }}>AUSTRALIA</span>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/loader-logo.png" alt="Innovative Park Group" style={{ width: "clamp(320px,48vw,680px)", height: "auto", display: "block" }} />
          </div>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 18 }}>
              <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: 11, letterSpacing: ".28em", color: "rgba(16,24,38,.5)" }}>LOADING</span>
              <span ref={countRef} style={{ fontFamily: HEAD, fontWeight: 900, fontSize: "clamp(56px,12vw,150px)", lineHeight: 0.78, letterSpacing: "-.01em" }}>
                000
              </span>
            </div>
            <div style={{ height: 2, background: "rgba(16,24,38,.12)", position: "relative", overflow: "hidden" }}>
              <div ref={barRef} style={{ position: "absolute", inset: 0, background: "#1A56DB", transform: "scaleX(0)", transformOrigin: "left center", willChange: "transform" }} />
            </div>
          </div>
        </div>
      )}

      <SiteNav active="Home" />

      <main style={{ position: "relative", zIndex: 2 }}>
        <section aria-labelledby="home-h1" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "130px 0 90px", position: "relative", overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img data-hero-bg-desktop="" src="/assets/header.png" alt="Skateboarder testing skatepark ramp during AS EN 14974:2021 compliance audit" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%", zIndex: 0 }} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img data-hero-bg-mobile="" src="/assets/hero-mobile.png" alt="Skateboarder testing skatepark ramp during AS EN 14974:2021 compliance audit" style={{ display: "none", position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%", zIndex: 0 }} />
          <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(104deg,rgba(2,11,33,.62) 0%,rgba(3,14,42,.38) 48%,rgba(6,22,60,.18) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(180deg,rgba(2,11,33,.04) 0%,rgba(2,11,33,.5) 100%)" }} />
          <div style={{ maxWidth: 1340, margin: "0 auto", padding: "0 40px", width: "100%", position: "relative", zIndex: 2 }}>
            <div style={{ ...heroFade(0), display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
              <span style={{ width: 36, height: 1, background: "#7AA8FF" }} />
              <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: 13, letterSpacing: ".26em", textTransform: "uppercase", color: "#7AA8FF" }}>AS EN 14974:2021 Certified Compliance</span>
            </div>
            <h1 id="home-h1" style={{ fontFamily: HEAD, fontWeight: 900, textTransform: "uppercase", lineHeight: 0.9, letterSpacing: "-.022em", fontSize: "clamp(40px,6.4vw,104px)", marginBottom: 44, color: "#F3F1EC" }}>
              <span style={{ display: "block", overflow: "hidden", paddingBottom: ".02em" }}>
                <span style={{ ...heroLine(0), color: "#ffffff", textTransform: "none", fontWeight: 800 }}>Professional</span>
              </span>
              <span style={{ display: "block", overflow: "hidden", paddingBottom: ".02em" }}>
                <span style={{ ...heroLine(1), color: "#ffffff", textTransform: "none", fontWeight: 800 }}>Skatepark</span>
              </span>
              <span style={{ display: "block", overflow: "hidden", paddingBottom: ".16em" }}>
                <span style={{ ...heroLine(2), textTransform: "none", fontWeight: 700 }}>Auditing &amp;</span>
              </span>
              <span style={{ display: "block", overflow: "hidden", paddingBottom: ".02em" }}>
                <span style={{ ...heroLine(3), color: "#7AA8FF", textTransform: "none", fontWeight: 800 }}>Safety Assessments</span>
              </span>
            </h1>
            <div data-hero-grid="" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 60, alignItems: "end" }}>
              <p data-hero-fade="" style={{ ...heroFade(1), fontFamily: BODY, fontWeight: 600, fontSize: 19, lineHeight: 1.55, color: "#ffffffd6", maxWidth: 560 }}>
                Certified AS EN 14974:2021 compliance audits led by an Olympic-level coach and professional skateboarder. Real-world testing. Reports councils can actually use.
              </p>
              <div data-hero-fade="" style={{ ...heroFade(2), display: "flex", alignItems: "center", gap: 28, justifySelf: "end" }}>
                <Link href="/contact" className="ctaButton" style={{ fontFamily: BODY, fontWeight: 600, fontSize: 14, letterSpacing: ".14em", textTransform: "uppercase", color: "#FBFCFE", background: "#1A56DB", padding: "18px 30px", whiteSpace: "nowrap", borderRadius: 15 }}>
                  Request an Audit
                </Link>
                <Link href="/services" className="learnMore" style={{ fontFamily: BODY, fontWeight: 600, fontSize: 14, letterSpacing: ".14em", textTransform: "uppercase", color: "#F3F1EC", display: "flex", alignItems: "center", gap: 10, whiteSpace: "nowrap" }}>
                  Learn More <span style={{ fontSize: 18 }}>&rarr;</span>
                </Link>
              </div>
            </div>
            <div data-hero-fade="" data-proof="" style={{ ...heroFade(3), marginTop: "clamp(46px,5.5vw,72px)", paddingTop: 26, borderTop: "1px solid rgba(255,255,255,.2)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "18px clamp(30px,5vw,64px)" }}>
              {["AS EN 14974:2021 Aligned", "Functional Skate Testing", "Council-Ready Reports"].map((label) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <CheckIcon />
                  <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: 13, letterSpacing: ".16em", textTransform: "uppercase", color: "rgba(243,241,236,.94)" }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ ...heroFade(4, false), position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
            <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: 10, letterSpacing: ".28em", color: "rgba(243,241,236,.6)" }}>SCROLL</span>
            <span style={{ width: 1, height: 34, background: "rgba(243,241,236,.45)", animation: "ipgScroll 2s ease-in-out infinite" }} />
          </div>
        </section>

        <section aria-labelledby="home-difference-h2" style={{ padding: "clamp(56px,11vw,150px) 0", background: "#F3F1EC" }}>
          <div style={{ maxWidth: 1340, margin: "0 auto", padding: "0 40px" }}>
            <Reveal style={{ display: "flex", alignItems: "baseline", gap: 22, borderTop: "1px solid rgba(16,24,38,.14)", paddingTop: 26, marginBottom: "clamp(48px,6vw,80px)" }}>
              <span style={{ fontFamily: HEAD, fontWeight: 700, fontSize: 15, letterSpacing: ".12em", color: "#1A56DB" }}>001</span>
              <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: 13, letterSpacing: ".24em", textTransform: "uppercase", color: "rgba(16,24,38,.55)" }}>The Difference</span>
            </Reveal>
            <div data-2col="" style={{ display: "grid", gridTemplateColumns: "1.02fr .98fr", gap: "clamp(40px,5.5vw,90px)", alignItems: "center" }}>
              <Reveal>
                <h2 id="home-difference-h2" style={{ fontFamily: HEAD, fontWeight: 900, lineHeight: 0.95, fontSize: "clamp(34px,4.8vw,68px)", marginBottom: 36, letterSpacing: "-0.05px" }}>
                  We don&apos;t just inspect skateparks.<br />
                  <span style={{ color: "#0d388d", letterSpacing: "-0.2px" }}>
                    <span>We skate them.</span>
                  </span>
                </h2>
                <p style={{ fontFamily: BODY, fontWeight: 500, fontSize: "clamp(17px,1.5vw,21px)", lineHeight: 1.55, color: "rgba(16,24,38,.7)", maxWidth: 520 }}>
                  Formal compliance methodology meets genuine on-the-ground testing. That combination produces assessments that are comprehensive, practical, and built for real facilities.
                </p>
              </Reveal>
              <Reveal delay={120} style={{ position: "relative" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/innovative-park-group-skate-rink-mqu96b24.jpg" alt="Aerial view of skatepark audited for AS EN 14974:2021 compliance" style={{ display: "block", width: "100%", height: "clamp(380px,42vw,560px)", objectFit: "cover", objectPosition: "center", borderRadius: 10 }} />
                <div style={{ position: "absolute", left: 24, bottom: 24, background: "#FFFFFF", border: "1px solid rgba(16,24,38,.08)", boxShadow: "0 18px 50px -18px rgba(2,11,33,.45)", padding: "22px 26px", maxWidth: 266, borderRadius: 8 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#1A56DB" }} />
                    <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(16,24,38,.5)" }}>Every Audit</span>
                  </div>
                  <p style={{ fontFamily: HEAD, fontWeight: 700, fontSize: 18, lineHeight: 1.22, color: "#101826" }}>Real-world testing included in every audit</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section style={{ padding: "clamp(50px,9vw,118px) 0", background: "#FFFFFF", borderTop: "1px solid rgba(16,24,38,.08)", borderBottom: "1px solid rgba(16,24,38,.08)" }}>
          <div style={{ maxWidth: 1340, margin: "0 auto", padding: "0 40px" }}>
            <Reveal style={{ display: "flex", alignItems: "baseline", gap: 22, borderTop: "1px solid rgba(16,24,38,.14)", paddingTop: 26, marginBottom: "clamp(40px,5vw,58px)" }}>
              <span style={{ fontFamily: HEAD, fontWeight: 700, fontSize: 15, letterSpacing: ".12em", color: "#1A56DB" }}>002</span>
              <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: 13, letterSpacing: ".24em", textTransform: "uppercase", color: "rgba(16,24,38,.55)" }}>What Sets Us Apart</span>
            </Reveal>
            <div data-2col="" style={{ display: "grid", gridTemplateColumns: ".92fr 1.08fr", gap: "clamp(40px,5.5vw,88px)", alignItems: "start" }}>
              <Reveal>
                <div style={{ fontFamily: HEAD, fontWeight: 800, lineHeight: 1.04, letterSpacing: "-0.02em", fontSize: "clamp(28px,3.3vw,46px)", marginBottom: 24 }}>
                  Certified compliance meets <span style={{ color: "#0d388d" }}>real-world skate testing.</span>
                </div>
                <p style={{ fontFamily: BODY, fontWeight: 600, fontSize: "clamp(16px,1.4vw,18px)", lineHeight: 1.6, color: "rgba(16,24,38,.66)", maxWidth: 420 }}>
                  Our audits combine formal safety methodology with practical skatepark experience, giving councils clear reports they can actually use.
                </p>
              </Reveal>
              <Reveal delay={120}>
                {[
                  { n: "01", title: "Certified Compliance", body: "Audits aligned with AS EN 14974:2021 through measurement, visual inspection, and practical testing.", last: false },
                  { n: "02", title: "Expert Leadership", body: "Led by Tommy Fynn — certified safety auditor, Olympic-level coach, and professional skateboarder.", last: false },
                  { n: "03", title: "Actionable Insights", body: "Clear maintenance priorities, lifespan ratings, and recommendations councils can actually use.", last: true },
                ].map((item) => (
                  <div key={item.n} style={{ display: "grid", gridTemplateColumns: "clamp(54px,6vw,84px) 1fr", gap: "clamp(20px,2.6vw,40px)", alignItems: "baseline", padding: "clamp(24px,2.8vw,32px) 0", borderTop: "1px solid rgba(16,24,38,.16)", borderBottom: item.last ? "1px solid rgba(16,24,38,.16)" : undefined }}>
                    <span style={{ fontFamily: HEAD, fontWeight: 800, fontSize: "clamp(34px,3.2vw,46px)", lineHeight: 0.9, color: "#1A56DB" }}>{item.n}</span>
                    <div>
                      <h3 style={{ fontFamily: HEAD, fontWeight: 800, textTransform: "uppercase", fontSize: "clamp(22px,1.8vw,27px)", lineHeight: 1.04, marginBottom: 12 }}>{item.title}</h3>
                      <p style={{ fontFamily: BODY, fontWeight: 400, fontSize: 16, lineHeight: 1.62, color: "rgba(16,24,38,.66)", maxWidth: 480 }}>{item.body}</p>
                    </div>
                  </div>
                ))}
              </Reveal>
            </div>
          </div>
        </section>

        <section aria-label="Fieldwork" style={{ position: "relative", overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/in-the-field.jpg" alt="Skatepark facility during on-site fieldwork audit at sunset" style={{ display: "block", width: "100%", height: "clamp(440px,58vw,720px)", objectFit: "cover", objectPosition: "center 55%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,rgba(2,11,33,.7) 0%,rgba(2,11,33,.34) 42%,rgba(2,11,33,.04) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
            <div style={{ maxWidth: 1340, margin: "0 auto", padding: "0 40px", width: "100%" }}>
              <Reveal style={{ maxWidth: 640 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
                  <span data-field-rule="" style={{ width: 36, height: 1, background: "#7AA8FF" }} />
                  <span data-field-tag="" style={{ fontFamily: BODY, fontWeight: 600, fontSize: 13, letterSpacing: ".26em", textTransform: "uppercase", color: "#7AA8FF" }}>In The Field</span>
                </div>
                <div style={{ fontFamily: HEAD, fontWeight: 900, textTransform: "uppercase", lineHeight: 0.94, fontSize: "clamp(38px,5.6vw,84px)", color: "#F3F1EC", marginBottom: 24 }}>
                  Fieldwork,<br />not guesswork.
                </div>
                <p style={{ fontFamily: BODY, fontSize: "clamp(17px,1.5vw,20px)", lineHeight: 1.55, color: "rgba(243,241,236,.86)", maxWidth: 500 }}>
                  Every audit combines technical measurement, photographic documentation, and real-world skate testing.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section aria-labelledby="home-audit-h2" style={{ padding: "clamp(56px,11vw,150px) 0", background: "#F3F1EC" }}>
          <div style={{ maxWidth: 1340, margin: "0 auto", padding: "0 40px" }}>
            <Reveal style={{ display: "flex", alignItems: "baseline", gap: 22, borderTop: "1px solid rgba(16,24,38,.14)", paddingTop: 26, marginBottom: "clamp(48px,6vw,72px)" }}>
              <span style={{ fontFamily: HEAD, fontWeight: 700, fontSize: 15, letterSpacing: ".12em", color: "#1A56DB" }}>003</span>
              <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: 13, letterSpacing: ".24em", textTransform: "uppercase", color: "rgba(16,24,38,.55)" }}>The Audit</span>
            </Reveal>
            <div data-incl-grid="" style={{ display: "grid", gridTemplateColumns: ".92fr 1.08fr", gap: "clamp(40px,5vw,80px)", alignItems: "start" }}>
              <Reveal style={{ position: "relative", overflow: "hidden", background: "#0d388d", borderRadius: 10, padding: "clamp(36px,4vw,56px)", alignSelf: "stretch" }}>
                <span aria-hidden="true" style={{ position: "absolute", right: "clamp(-6px,1vw,18px)", bottom: "clamp(-44px,-2.5vw,-20px)", fontFamily: HEAD, fontWeight: 900, fontSize: "clamp(180px,22vw,300px)", lineHeight: 0.8, letterSpacing: "-.04em", color: "rgba(255,255,255,.06)", pointerEvents: "none", userSelect: "none" }}>06</span>
                <div style={{ position: "relative" }}>
                  <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: 11, letterSpacing: ".24em", textTransform: "uppercase", color: "#A3BFF6", display: "block", marginBottom: 28 }}>What&apos;s Included</span>
                  <h2 id="home-audit-h2" style={{ fontFamily: HEAD, fontWeight: 800, lineHeight: 1.02, fontSize: "clamp(28px,3.2vw,46px)", color: "#FBFCFE", marginBottom: 22, letterSpacing: "-0.05px" }}>
                    A complete audit,<div>not just a checklist.</div>
                  </h2>
                  <p style={{ fontFamily: BODY, fontSize: 17, lineHeight: 1.6, color: "rgba(251,252,254,.82)", maxWidth: 380 }}>
                    Each assessment gives councils the documentation, prioritisation, and practical insight needed to manage skateparks safely and effectively.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                  {[
                    { n: "01", title: "Detailed Maintenance Plan", body: "Urgent and preventative actions, ranked by priority with timelines and cost estimates.", last: false },
                    { n: "02", title: "Lifespan Rating", body: "Estimated remaining facility lifespan to guide long-term budget planning.", last: false },
                    { n: "03", title: "Comprehensive Documentation", body: "Photographic evidence and measurements of every feature and issue.", last: false },
                    { n: "04", title: "Functional User Assessment", body: "Each park physically skated to surface what visual checks miss.", last: false },
                    { n: "05", title: "AS EN 14974:2021 Alignment", body: "Reports formatted to support asset management, insurance, and funding.", last: false },
                    { n: "06", title: "Council-Focused Recommendations", body: "Prioritised actions to manage budgets and plan upgrades.", last: true },
                  ].map((item) => (
                    <li
                      key={item.n}
                      className="includedItem"
                      style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "clamp(20px,2.4vw,34px)", padding: "24px 8px 24px 0", borderTop: "1px solid rgba(16,24,38,.14)", borderBottom: item.last ? "1px solid rgba(16,24,38,.14)" : undefined, transition: "background .25s" }}
                    >
                      <span style={{ fontFamily: HEAD, fontWeight: 700, fontSize: 14, letterSpacing: ".1em", color: "#1A56DB", paddingTop: 5 }}>{item.n}</span>
                      <div>
                        <div style={{ fontFamily: HEAD, fontWeight: 800, textTransform: "uppercase", fontSize: "clamp(18px,1.5vw,22px)", marginBottom: 7 }}>{item.title}</div>
                        <p style={{ fontFamily: BODY, fontSize: 15, lineHeight: 1.56, color: "rgba(16,24,38,.6)" }}>{item.body}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        <section aria-labelledby="home-functional-h2" style={{ position: "relative", overflow: "hidden", minHeight: "clamp(540px,62vw,780px)", display: "flex", alignItems: "center", padding: "80px 0" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/functional-testing.png" alt="Professional skater functional-testing a skatepark bowl for safety audit" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 35%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(75deg,rgba(2,11,33,.86) 0%,rgba(2,11,33,.55) 46%,rgba(2,11,33,.12) 100%)" }} />
          <div style={{ position: "relative", maxWidth: 1340, margin: "0 auto", padding: "0 40px", width: "100%" }}>
            <Reveal data-fn-card style={{ maxWidth: 560, background: "#FFFFFF", borderRadius: 10, padding: "clamp(34px,4vw,56px)", boxShadow: "0 34px 80px -30px rgba(2,11,33,.65)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 26 }}>
                <span style={{ width: 34, height: 1, background: "#1A56DB" }} />
                <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: 13, letterSpacing: ".24em", textTransform: "uppercase", color: "#1A56DB" }}>Functional User Assessment</span>
              </div>
              <h2 id="home-functional-h2" style={{ fontFamily: HEAD, fontWeight: 800, lineHeight: 1.04, letterSpacing: "-0.05em", fontSize: "clamp(27px,3vw,42px)", marginBottom: 22 }}>
                Some issues only show up when the park is actually ridden.
              </h2>
              <p style={{ fontFamily: BODY, fontSize: "clamp(16px,1.4vw,18px)", lineHeight: 1.6, color: "rgba(16,24,38,.7)" }}>
                IPG physically tests each facility during inspection — identifying usability, flow, surface, spacing, and transition issues that visual checks alone can miss.
              </p>
            </Reveal>
          </div>
        </section>

        <section aria-labelledby="home-additional-h2" style={{ padding: "clamp(56px,11vw,140px) 0", background: "#FFFFFF", borderTop: "1px solid rgba(16,24,38,.08)" }}>
          <div style={{ maxWidth: 1340, margin: "0 auto", padding: "0 40px" }}>
            <Reveal style={{ display: "flex", alignItems: "baseline", gap: 22, borderTop: "1px solid rgba(16,24,38,.14)", paddingTop: 26, marginBottom: "clamp(40px,5vw,60px)" }}>
              <span style={{ fontFamily: HEAD, fontWeight: 700, fontSize: 15, letterSpacing: ".12em", color: "#1A56DB" }}>004</span>
              <h2 id="home-additional-h2" style={{ fontFamily: BODY, fontWeight: 600, fontSize: 13, letterSpacing: ".24em", textTransform: "uppercase", color: "rgba(16,24,38,.55)", margin: 0 }}>Additional Services</h2>
            </Reveal>
            <ul data-svc-grid="" style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
              {[
                { letter: "A", title: "Community Engagement", body: "Workshops and consultations with local skate communities.", dark: true, image: undefined, delay: 0 },
                { letter: "B", title: "Strategic Planning", body: "Long-term facility planning, upgrades, and budget forecasting.", dark: false, image: undefined, delay: 100 },
                { letter: "C", title: "Design Consultation", body: "Guidance on new skatepark infrastructure and renovations.", dark: true, image: "/assets/design-consultation.jpg", delay: 60 },
                { letter: "D", title: "Coaching Clinics", body: "Live demonstrations and clinics led by Olympic-level instructors.", dark: false, image: undefined, delay: 160 },
              ].map((card) => (
                <Reveal
                  key={card.letter}
                  as="li"
                  delay={card.delay}
                  duration="0.9s"
                  style={{
                    position: card.image ? "relative" : undefined,
                    overflow: card.image ? "hidden" : undefined,
                    background: card.image ? undefined : card.dark ? "#0d388d" : "#FFFFFF",
                    border: !card.image && !card.dark ? "1px solid rgba(16,24,38,.12)" : undefined,
                    borderRadius: 10,
                    padding: "clamp(30px,3vw,46px)",
                    minHeight: "clamp(240px,22vw,300px)",
                    display: "flex",
                    flexDirection: "column",
                    color: card.dark ? "#FBFCFE" : undefined,
                  }}
                >
                  {card.image && (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={card.image} alt="Concrete skatepark with shade shelter" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(2,11,33,.35) 0%,rgba(2,11,33,.82) 100%)" }} />
                    </>
                  )}
                  <span style={{ position: card.image ? "relative" : undefined, fontFamily: HEAD, fontWeight: 700, fontSize: 14, letterSpacing: ".14em", color: card.dark ? "#A3BFF6" : "#1A56DB" }}>{card.letter}</span>
                  <div style={{ position: card.image ? "relative" : undefined, marginTop: "auto" }}>
                    <h3 style={{ fontFamily: HEAD, fontWeight: 800, textTransform: "uppercase", fontSize: "clamp(22px,1.9vw,28px)", color: card.dark ? "#FBFCFE" : undefined, marginBottom: 12 }}>{card.title}</h3>
                    <p style={{ fontFamily: BODY, fontSize: 15, lineHeight: 1.56, color: card.dark ? "rgba(251,252,254,.8)" : "rgba(16,24,38,.6)" }}>{card.body}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
            <Reveal duration="0.9s" style={{ display: "flex", justifyContent: "center", marginTop: "clamp(40px,5vw,64px)" }}>
              <Link href="/services" className="viewServicesBtn" style={{ fontFamily: BODY, fontWeight: 600, fontSize: 14, letterSpacing: ".14em", textTransform: "uppercase", color: "#FBFCFE", background: "#1A56DB", padding: "19px 40px", borderRadius: 10 }}>
                View Our Services &rarr;
              </Link>
            </Reveal>
          </div>
        </section>

        <section aria-labelledby="home-standard-h2" style={{ padding: "clamp(56px,11vw,150px) 0", background: "#F3F1EC", borderTop: "1px solid rgba(16,24,38,.08)", position: "relative" }}>
          <div style={{ maxWidth: 1340, margin: "0 auto", padding: "0 40px" }}>
            <Reveal style={{ display: "flex", alignItems: "baseline", gap: 22, borderTop: "1px solid rgba(16,24,38,.14)", paddingTop: 26, marginBottom: "clamp(48px,6vw,72px)" }}>
              <span style={{ fontFamily: HEAD, fontWeight: 700, fontSize: 15, letterSpacing: ".12em", color: "#1A56DB" }}>005</span>
              <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: 13, letterSpacing: ".24em", textTransform: "uppercase", color: "rgba(16,24,38,.55)" }}>The Standard</span>
            </Reveal>
            <div data-2col="" style={{ display: "grid", gridTemplateColumns: ".95fr 1.05fr", gap: "clamp(40px,5.5vw,90px)", alignItems: "start" }}>
              <Reveal>
                <h2 id="home-standard-h2" style={{ fontFamily: HEAD, fontWeight: 900, textTransform: "none", lineHeight: 0.92, fontSize: "clamp(30px,4vw,58px)", letterSpacing: "-0.5px" }}>
                  What is<br /><span style={{ fontSize: "clamp(30px, 4vw, 58px)", letterSpacing: "-0.05px" }}>AS EN</span><br /><span style={{ color: "rgb(13, 56, 141)" }}>14974:2021?</span>
                </h2>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 11, marginTop: 32, border: "1px solid rgba(13,56,141,.3)", borderRadius: 999, padding: "11px 20px" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0d388d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l7 3v5c0 4.4-3 8.3-7 9.5C8 19.3 5 15.4 5 11V6z" />
                    <path d="M9 11.5l2 2 4-4.2" />
                  </svg>
                  <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: 12, letterSpacing: ".16em", textTransform: "uppercase", color: "#0d388d" }}>Australian Skatepark Safety Standard</span>
                </div>
              </Reveal>
              <Reveal delay={120} style={{ paddingTop: 8 }}>
                <p style={{ fontFamily: BODY, fontSize: "clamp(17px,1.5vw,20px)", lineHeight: 1.62, color: "rgba(16,24,38,.74)", marginBottom: "clamp(34px,4vw,48px)", fontWeight: 600 }}>
                  AS EN 14974:2021 is the Australian Standard for skateparks and wheeled sports facilities, covering safety, design, construction, and maintenance.
                </p>
                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                  {[
                    "Design and spacing requirements",
                    "Surface, drainage, lighting, and signage standards",
                    "Fall zone and risk management",
                    "Support for insurance, funding, and asset planning",
                  ].map((label, i, arr) => (
                    <li key={label} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 18, alignItems: "center", padding: "20px 0", borderTop: "1px solid rgba(16,24,38,.14)", borderBottom: i === arr.length - 1 ? "1px solid rgba(16,24,38,.14)" : undefined }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A56DB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4 4 10-10.5" />
                      </svg>
                      <span style={{ fontFamily: BODY, fontWeight: 500, fontSize: "clamp(16px,1.4vw,18px)", color: "#101826" }}>{label}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        <section aria-labelledby="home-trusted-h2" style={{ padding: "clamp(50px,8vw,104px) 0", backgroundColor: "#ffffff" }}>
          <div style={{ maxWidth: 1340, margin: "0 auto", padding: "0 40px" }}>
            <Reveal style={{ display: "flex", alignItems: "baseline", gap: 22, borderTop: "1px solid rgba(16,24,38,.14)", paddingTop: 26, marginBottom: "clamp(26px,3vw,38px)" }}>
              <span style={{ fontFamily: HEAD, fontWeight: 700, fontSize: 15, letterSpacing: ".12em", color: "#1A56DB" }}>006</span>
              <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: 13, letterSpacing: ".24em", textTransform: "uppercase", color: "rgba(16,24,38,.55)" }}>Trusted by Leading Councils</span>
            </Reveal>
            <Reveal style={{ maxWidth: 720, marginBottom: "clamp(40px,4.4vw,56px)" }}>
              <h2 id="home-trusted-h2" style={{ fontFamily: HEAD, fontWeight: 900, lineHeight: 1, letterSpacing: "-0.02em", fontSize: "clamp(30px,3.8vw,54px)", marginBottom: 20 }}>Trusted by councils across Australia</h2>
              <p style={{ fontFamily: BODY, fontSize: "clamp(16px,1.4vw,18px)", lineHeight: 1.6, color: "rgba(16,24,38,.66)", maxWidth: 580 }}>
                IPG supports local governments with certified skatepark audits, practical maintenance planning, and compliance-ready reporting for real-world facilities.
              </p>
            </Reveal>
            <Reveal
              delay={120}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "clamp(20px,2.4vw,32px)",
                paddingTop: "clamp(34px,3.6vw,46px)",
                borderTop: "1px solid rgba(16,24,38,.14)",
                WebkitMaskImage: "linear-gradient(90deg,transparent 0,#000 11%,#000 89%,transparent 100%)",
                maskImage: "linear-gradient(90deg,transparent 0,#000 11%,#000 89%,transparent 100%)",
              }}
            >
              <Marquee logos={TRUSTED_LOGOS} duration="46s" />
              <Marquee logos={TRUSTED_LOGOS} duration="52s" reverse />
            </Reveal>
          </div>
        </section>

        <section style={{ position: "relative", overflow: "hidden", background: "#101826" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/measuring-section.png" alt="Auditor measuring skatepark ledge dimensions against AS EN 14974:2021" style={{ display: "block", width: "100%", height: "clamp(360px,46vw,720px)", objectFit: "cover", objectPosition: "center" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(80deg,rgba(2,11,33,.86) 0%,rgba(2,11,33,.62) 34%,rgba(2,11,33,.12) 66%,rgba(2,11,33,0) 100%)" }} />
          <div style={{ position: "absolute", left: 0, bottom: 0, width: "100%" }}>
            <div style={{ maxWidth: 1340, margin: "0 auto", padding: "0 40px clamp(40px,4.6vw,64px)" }}>
              <div style={{ maxWidth: 560 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: "clamp(18px,2vw,26px)" }}>
                  <span style={{ width: 36, height: 1, background: "#7AA8FF", flex: "none" }} />
                  <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: "clamp(12px,1.1vw,14px)", letterSpacing: ".24em", textTransform: "uppercase", color: "rgba(163,191,246,.95)" }}>Precision on site</span>
                </div>
                <div style={{ fontFamily: HEAD, fontWeight: 900, lineHeight: 0.96, letterSpacing: "-0.02em", fontSize: "clamp(34px,4.4vw,64px)", color: "#FBFCFE", marginBottom: "clamp(14px,1.6vw,20px)" }}>
                  Measured, documented,<div>signed off.</div>
                </div>
                <p style={{ fontFamily: BODY, fontSize: "clamp(16px,1.4vw,19px)", lineHeight: 1.58, color: "rgba(243,241,236,.86)", maxWidth: 480 }}>
                  Every dimension, surface, and fall zone is recorded against AS EN 14974:2021 — giving councils audit-ready evidence they can stand behind.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="home-request-h2" style={{ padding: "clamp(60px,13vw,130px) 0", background: "#F3F1EC", borderTop: "1px solid rgba(16,24,38,.1)" }}>
          <div style={{ maxWidth: 1340, margin: "0 auto", padding: "0 40px" }}>
            <Reveal style={{ display: "flex", alignItems: "baseline", gap: 22, borderTop: "1px solid rgba(16,24,38,.14)", paddingTop: 26, marginBottom: 64 }}>
              <span style={{ fontFamily: HEAD, fontWeight: 700, fontSize: 15, letterSpacing: ".12em", color: "#1A56DB" }}>007</span>
              <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: 13, letterSpacing: ".24em", textTransform: "uppercase", color: "rgba(16,24,38,.55)" }}>Get Started</span>
            </Reveal>
            <div data-2col="" style={{ display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: "clamp(48px,5vw,72px)", alignItems: "start" }}>
              <Reveal>
                <h2 id="home-request-h2" style={{ fontFamily: HEAD, fontWeight: 900, textTransform: "none", lineHeight: 1.05, fontSize: "clamp(34px,4.6vw,68px)", marginBottom: 24, letterSpacing: "-0.5px" }}>Request an Audit</h2>
                <p style={{ fontFamily: BODY, fontSize: "clamp(17px,1.5vw,19px)", lineHeight: 1.6, color: "rgba(16,24,38,.72)", maxWidth: 440 }}>
                  Tell us about your facility, location, and timeline. We&apos;ll review the details and recommend the right next step for your skatepark audit.
                </p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/get-started.png" alt="Australian skatepark ready for compliance audit request" style={{ display: "block", width: "100%", height: "clamp(300px,34vw,520px)", objectFit: "cover", objectPosition: "center", marginTop: 44, borderRadius: 10 }} />
              </Reveal>
              <Reveal delay={120}>
                <div style={{ background: "#FFFFFF", border: "1px solid rgba(16,24,38,.08)", padding: "clamp(34px,4.2vw,56px)", borderRadius: 12, boxShadow: "0 40px 80px -52px rgba(2,11,33,.45)" }}>
                  {!submitted ? (
                    <form
                      onSubmit={async (e) => {
                        e.preventDefault();
                        setSubmitting(true);
                        setSubmitError(false);
                        const form = e.currentTarget;
                        const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
                        try {
                          const ok = await submitToWeb3Forms({
                            ...data,
                            subject: `New audit request from ${data.name}`,
                            from_name: "Innovative Park Group — Request an Audit",
                          });
                          if (ok) {
                            setSubmitted(true);
                            form.reset();
                          } else {
                            setSubmitError(true);
                          }
                        } catch {
                          setSubmitError(true);
                        } finally {
                          setSubmitting(false);
                        }
                      }}
                    >
                      <div data-form2="" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22, marginBottom: 22 }}>
                        <label htmlFor="home-name" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                          <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: 12.5, letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(16,24,38,.6)" }}>Full name</span>
                          <input id="home-name" name="name" type="text" required placeholder="Your name" className="formInput" style={{ background: "#F3F1EC", border: "1px solid rgba(16,24,38,.16)", color: "#101826", fontFamily: BODY, fontSize: 14, padding: "15px 16px", outline: "none", width: "100%" }} />
                        </label>
                        <label htmlFor="home-org" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                          <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: 12.5, letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(16,24,38,.6)" }}>Council or organisation</span>
                          <input id="home-org" name="org" type="text" placeholder="Council name" className="formInput" style={{ background: "#F3F1EC", border: "1px solid rgba(16,24,38,.16)", color: "#101826", fontFamily: BODY, fontSize: 14, padding: "15px 16px", outline: "none", width: "100%" }} />
                        </label>
                      </div>
                      <div data-form2="" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22, marginBottom: 22 }}>
                        <label htmlFor="home-email" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                          <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: 12.5, letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(16,24,38,.6)" }}>Email address</span>
                          <input id="home-email" name="email" type="email" required placeholder="you@council.gov.au" className="formInput" style={{ background: "#F3F1EC", border: "1px solid rgba(16,24,38,.16)", color: "#101826", fontFamily: BODY, fontSize: 14, padding: "15px 16px", outline: "none", width: "100%" }} />
                        </label>
                        <label htmlFor="home-phone" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                          <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: 12.5, letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(16,24,38,.6)" }}>Phone number</span>
                          <input id="home-phone" name="phone" type="tel" placeholder="Optional" className="formInput" style={{ background: "#F3F1EC", border: "1px solid rgba(16,24,38,.16)", color: "#101826", fontFamily: BODY, fontSize: 14, padding: "15px 16px", outline: "none", width: "100%" }} />
                        </label>
                      </div>
                      <label htmlFor="home-location" style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 22 }}>
                        <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: 12.5, letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(16,24,38,.6)" }}>Location of the skatepark</span>
                        <input id="home-location" name="location" type="text" placeholder="Suburb, State" className="formInput" style={{ background: "#F3F1EC", border: "1px solid rgba(16,24,38,.16)", color: "#101826", fontFamily: BODY, fontSize: 14, padding: "15px 16px", outline: "none", width: "100%" }} />
                      </label>
                      <label htmlFor="home-about" style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 30 }}>
                        <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: 12.5, letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(16,24,38,.6)" }}>Tell us about the park</span>
                        <textarea id="home-about" name="about" rows={4} placeholder="Size, age, known issues" className="formInput" style={{ background: "#F3F1EC", border: "1px solid rgba(16,24,38,.16)", color: "#101826", fontFamily: BODY, fontSize: 16.5, lineHeight: 1.55, padding: "16px 18px", outline: "none", width: "100%", resize: "vertical" }} />
                      </label>
                      {submitError && (
                        <p style={{ fontFamily: BODY, fontSize: 14, lineHeight: 1.5, color: "#C0392B", marginBottom: 18 }}>
                          Something went wrong sending your request. Please try again, or email us directly at admin@innovativeparkgroup.com.
                        </p>
                      )}
                      <button type="submit" disabled={submitting} className="ctaButton" style={{ fontFamily: BODY, fontWeight: 600, fontSize: 14, letterSpacing: ".14em", textTransform: "uppercase", color: "#FBFCFE", background: "#1A56DB", border: "none", padding: "19px 44px", cursor: submitting ? "default" : "pointer", opacity: submitting ? 0.7 : 1, borderRadius: 15 }}>
                        {submitting ? "Sending..." : "Submit Request"}
                      </button>
                    </form>
                  ) : (
                    <div style={{ padding: "24px 0" }}>
                      <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", color: "#1A56DB", display: "block", marginBottom: 20 }}>Request Received</span>
                      <h3 style={{ fontFamily: HEAD, fontWeight: 900, textTransform: "uppercase", fontSize: "clamp(30px,3.6vw,50px)", lineHeight: 0.94, marginBottom: 22 }}>Thanks. We&apos;ll be in touch.</h3>
                      <p style={{ fontFamily: BODY, fontSize: 17, lineHeight: 1.6, color: "rgba(16,24,38,.7)", maxWidth: 460, marginBottom: 34 }}>
                        A member of the IPG team will respond within 48 hours to discuss your site and the right next step.
                      </p>
                      <button onClick={() => setSubmitted(false)} className="resetBtn" style={{ fontFamily: BODY, fontWeight: 600, fontSize: 13, letterSpacing: ".14em", textTransform: "uppercase", color: "#101826", background: "none", border: "1px solid rgba(16,24,38,.3)", padding: "15px 30px", cursor: "pointer" }}>
                        Send Another
                      </button>
                    </div>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section style={{ padding: "0 0 clamp(68px,14vw,140px)" }}>
          <div style={{ maxWidth: 1340, margin: "0 auto", padding: "0 40px" }}>
            <Reveal style={{ position: "relative", overflow: "hidden", padding: "clamp(40px,5.4vw,84px)", backgroundColor: "#0d388d", borderRadius: 10 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img aria-hidden="true" src="/assets/ipg-icon.png" alt="" style={{ position: "absolute", left: -85, width: "clamp(240px,30vw,420px)", height: "auto", opacity: 0.08, pointerEvents: "none", userSelect: "none", top: 295 }} />
              <div data-after-grid="" style={{ position: "relative", border: "1px solid rgba(255,255,255,.16)", borderRadius: 8, padding: "clamp(32px,4vw,60px)", display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: "clamp(40px,5vw,80px)", alignItems: "start" }}>
                <div style={{ maxWidth: 560 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
                    <span style={{ width: 34, height: 1, background: "rgba(255,255,255,.45)", flex: "none" }} />
                    <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: 13, letterSpacing: ".26em", textTransform: "uppercase", color: "#A3BFF6" }}>After You Submit</span>
                  </div>
                  <div style={{ fontFamily: HEAD, fontWeight: 800, lineHeight: 1.02, fontSize: "clamp(30px,3.6vw,52px)", marginBottom: 24, color: "#FBFCFE" }}>Clear next steps, no guesswork.</div>
                  <p style={{ fontFamily: BODY, fontSize: 18, lineHeight: 1.6, color: "rgba(251,252,254,.82)", maxWidth: 460 }}>
                    Send through your park details and we&apos;ll review the scope, confirm what&apos;s needed, and recommend the best next step for your facility or council portfolio.
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                  {[
                    { n: "01", title: "Scope Review", body: "We assess your skatepark details, location, and audit requirements.", last: false },
                    { n: "02", title: "Audit Timeline", body: "We confirm timing, priorities, and the most efficient next step.", last: false },
                    { n: "03", title: "Council-Ready Reporting", body: "You receive clear recommendations aligned with professional compliance expectations.", last: true },
                  ].map((item) => (
                    <div key={item.n} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 24, padding: "26px 0", borderTop: "1px solid rgba(255,255,255,.16)", borderBottom: item.last ? "1px solid rgba(255,255,255,.16)" : undefined }}>
                      <span style={{ fontFamily: HEAD, fontWeight: 700, fontSize: 15, letterSpacing: ".08em", color: "#A3BFF6", paddingTop: 3 }}>{item.n}</span>
                      <div>
                        <div style={{ fontFamily: HEAD, fontWeight: 700, fontSize: "clamp(18px,1.4vw,22px)", color: "#FBFCFE", marginBottom: 8 }}>{item.title}</div>
                        <p style={{ fontFamily: BODY, fontSize: 15.5, lineHeight: 1.55, color: "rgba(251,252,254,.74)" }}>{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <SiteFooter tagline="Professional skatepark audits for councils across Australia." nowrap />
      </main>
    </div>
  );
}
