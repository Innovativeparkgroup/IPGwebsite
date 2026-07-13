"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";
import GridLines from "./GridLines";
import { HEAD, BODY } from "@/lib/fonts";
import styles from "./Contact.module.css";

const NEXT_STEPS = [
  { n: "01", title: "Our Response", body: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly." },
  { n: "02", title: "Next Steps", body: "After initial contact, we'll discuss your specific needs, provide a project timeline, and prepare a detailed quote for your audit requirements." },
];

const FAQ_ITEMS = [
  { q: "How long does an audit take?", a: "Most audits run 1 to 3 hours on site, depending on the size and complexity of the facility. We'll give you a clear timeline once we understand the scope.", delay: 0 },
  { q: "How much does an audit cost?", a: "Pricing depends on the number of facilities, their location, and their condition. Reach out and we'll work through it together. No flat-rate quotes before we know what we're dealing with.", delay: 60 },
  { q: "Can you audit multiple parks at once?", a: "Yes, and it's often more efficient that way. Many councils bring us in to assess their full portfolio in a single engagement.", delay: 120 },
  { q: "When will I receive the report?", a: "Comprehensive reports are typically delivered within 2 to 3 weeks of the site visit. Urgent turnarounds are available on request.", delay: 0 },
  { q: "What if a park fails compliance?", a: "Our reports don't just flag issues. They prioritize them. You'll know what's urgent, what can wait, and what it's likely to cost to fix.", delay: 60 },
  { q: "Do you offer ongoing maintenance support?", a: "Yes. Beyond the initial audit we support councils with regular inspection schedules and long-term maintenance planning.", delay: 120 },
];

const inputStyle = { background: "#F6F7F9", border: "1px solid rgba(16,24,38,.12)", borderRadius: 10, color: "#101826", fontFamily: BODY, fontSize: 16, padding: "14px 15px", outline: "none", transition: "border-color .2s ease,box-shadow .2s ease" };

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={{ position: "relative", background: "#F3F1EC", color: "#101826", fontFamily: BODY, minHeight: "100vh", overflow: "hidden" }}>
      <GridLines />
      <SiteNav active="Contact" />

      <main style={{ position: "relative", zIndex: 2 }}>
        <section aria-labelledby="contact-h1" className={styles.hero} style={{ position: "relative", width: "100%", height: "clamp(470px,64vh,620px)", overflow: "hidden", background: "#001b3f" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.heroImg} src="/contact-hero.png" alt="Skatepark facility site visited by Innovative Park Group for compliance consultation" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 60%" }} />
          <div className={styles.heroOverlay} style={{ position: "absolute", inset: 0, background: "linear-gradient(96deg, rgba(0,21,49,.9) 0%, rgba(0,23,53,.66) 38%, rgba(0,27,63,.24) 74%, rgba(0,27,63,.06) 100%)" }} />
          <div className={styles.heroInner} style={{ position: "relative", zIndex: 2, maxWidth: 1340, margin: "0 auto", padding: "118px 40px 0", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Reveal style={{ display: "block" }}>
              <h1 id="contact-h1" style={{ fontFamily: HEAD, fontWeight: 900, textTransform: "uppercase", lineHeight: 0.9, letterSpacing: "-.022em", fontSize: "clamp(48px,7.2vw,116px)", color: "#FBFCFE", marginBottom: 26 }}>
                Get In <span style={{ color: "#4F8CFF" }}>Touch</span>
              </h1>
            </Reveal>
            <Reveal delay={130}>
              <p style={{ fontFamily: BODY, fontWeight: 400, fontSize: "clamp(17px,1.5vw,21px)", lineHeight: 1.55, color: "rgba(255,255,255,.84)", maxWidth: 600 }}>
                Ready to audit your skateparks? Let&apos;s talk about your facilities and figure out the right next step.
              </p>
            </Reveal>
          </div>
        </section>

        <section style={{ position: "relative", zIndex: 3, padding: "0 0 clamp(64px,12vw,124px)" }}>
          <div className={styles.contactWrap} style={{ maxWidth: 1340, margin: "0 auto", padding: "0 40px" }}>
            <div className={styles.contact2} style={{ display: "grid", gridTemplateColumns: "0.92fr 1.08fr", gap: "clamp(40px,5vw,72px)", alignItems: "start" }}>
              <Reveal className={styles.left} style={{ marginTop: "clamp(40px,5.5vw,76px)" }}>
                <div style={{ borderTop: "1px solid rgba(16,24,38,.14)", paddingTop: 28 }}>
                  <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: 12, letterSpacing: ".22em", textTransform: "uppercase", color: "rgba(16,24,38,.5)", display: "block", marginBottom: 32 }}>Contact Details</span>

                  <div style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
                    <span style={{ flexShrink: 0, width: 46, height: 46, borderRadius: 12, background: "rgba(26,86,219,.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A56DB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3.5 7l8.5 6 8.5-6" /></svg>
                    </span>
                    <div style={{ minWidth: 0 }}>
                      <span style={{ fontFamily: BODY, fontWeight: 700, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "#1A56DB", display: "block", marginBottom: 8 }}>Email</span>
                      <a href="mailto:admin@innovativeparkgroup.com" className={styles.bookLink} style={{ fontFamily: BODY, fontWeight: 600, fontSize: "clamp(14.5px,4vw,18px)", letterSpacing: ".005em", color: "#101826", display: "block", marginBottom: 8, whiteSpace: "nowrap" }}>admin@innovativeparkgroup.com</a>
                      <p style={{ fontFamily: BODY, fontSize: 14, lineHeight: 1.5, color: "rgba(16,24,38,.55)" }}>We typically respond within 24 hours during business days.</p>
                    </div>
                  </div>

                  <div style={{ height: 1, background: "rgba(16,24,38,.1)", margin: "28px 0" }} />

                  <div style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
                    <span style={{ flexShrink: 0, width: 46, height: 46, borderRadius: 12, background: "rgba(26,86,219,.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A56DB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-5.686 7-11a7 7 0 10-14 0c0 5.314 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
                    </span>
                    <div style={{ minWidth: 0 }}>
                      <span style={{ fontFamily: BODY, fontWeight: 700, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "#1A56DB", display: "block", marginBottom: 8 }}>Location</span>
                      <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: 18, letterSpacing: ".005em", color: "#101826", display: "block", marginBottom: 8 }}>Australia, Nationwide</span>
                      <p style={{ fontFamily: BODY, fontSize: 14, lineHeight: 1.5, color: "rgba(16,24,38,.55)" }}>Serving councils across the country.</p>
                    </div>
                  </div>
                </div>

                <div style={{ borderTop: "1px solid rgba(16,24,38,.14)", paddingTop: 28, marginTop: 44 }}>
                  <div style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
                    <span style={{ flexShrink: 0, width: 46, height: 46, borderRadius: 12, background: "rgba(26,86,219,.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A56DB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4.5h6a1 1 0 011 1V7a1 1 0 01-1 1H9a1 1 0 01-1-1V5.5a1 1 0 011-1z" /><path d="M8.6 12.2l1.3 1.3 2.4-2.6M8.6 16.7l1.3 1.3 2.4-2.6" /></svg>
                    </span>
                    <div style={{ minWidth: 0 }}>
                      <span style={{ fontFamily: BODY, fontWeight: 700, fontSize: 13, letterSpacing: ".13em", textTransform: "uppercase", color: "#101826", display: "block", marginBottom: 14, paddingTop: 6 }}>What to Include</span>
                      <p style={{ fontFamily: BODY, fontSize: 15, lineHeight: 1.62, color: "rgba(16,24,38,.66)" }}>Number of skateparks you need audited, location of the facilities, type of facilities (street parks, bowls, ramps), your timeline, and any specific concerns or questions you already have.</p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal className={styles.card} delay={100} style={{ marginTop: "clamp(-168px,-9.5vw,-96px)" }}>
                <div style={{ background: "#FFFFFF", border: "1px solid rgba(16,24,38,.07)", borderRadius: 18, boxShadow: "0 36px 72px -30px rgba(0,21,49,.45),0 8px 24px -16px rgba(0,21,49,.3)", padding: "clamp(30px,3.6vw,52px)" }}>
                  {!submitted ? (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setSubmitted(true);
                      }}
                    >
                      <h2 style={{ fontFamily: HEAD, fontWeight: 800, textTransform: "uppercase", fontSize: "clamp(26px,2.6vw,32px)", letterSpacing: "-.01em", display: "block", marginBottom: 8 }}>Send a Message</h2>
                      <p style={{ fontFamily: BODY, fontSize: 14.5, lineHeight: 1.5, color: "rgba(16,24,38,.55)", marginBottom: 34 }}>Tell us about your facilities and we&apos;ll be in touch.</p>
                      <div className={styles.form2} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22, marginBottom: 22 }}>
                        <label htmlFor="contact-name" style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                          <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: "rgba(16,24,38,.5)" }}>Name</span>
                          <input id="contact-name" name="name" type="text" required placeholder="Your name" className={styles.formInput} style={inputStyle} />
                        </label>
                        <label htmlFor="contact-email" style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                          <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: "rgba(16,24,38,.5)" }}>Email</span>
                          <input id="contact-email" name="email" type="email" required placeholder="you@council.gov.au" className={styles.formInput} style={inputStyle} />
                        </label>
                      </div>
                      <div className={styles.form2} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22, marginBottom: 22 }}>
                        <label htmlFor="contact-phone" style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                          <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: "rgba(16,24,38,.5)" }}>Phone</span>
                          <input id="contact-phone" name="phone" type="tel" placeholder="Optional" className={styles.formInput} style={inputStyle} />
                        </label>
                        <label htmlFor="contact-org" style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                          <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: "rgba(16,24,38,.5)" }}>Council / Organization</span>
                          <input id="contact-org" name="org" type="text" placeholder="Council name" className={styles.formInput} style={inputStyle} />
                        </label>
                      </div>
                      <label htmlFor="contact-message" style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: 30 }}>
                        <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: "rgba(16,24,38,.5)" }}>Message</span>
                        <textarea id="contact-message" name="message" rows={5} required placeholder="Tell us about your skateparks and what you're looking to get done." className={styles.formInput} style={{ ...inputStyle, lineHeight: 1.55, resize: "vertical" }} />
                      </label>
                      <button type="submit" className={styles.submitBtn} style={{ width: "100%", fontFamily: BODY, fontWeight: 700, fontSize: 14, letterSpacing: ".14em", textTransform: "uppercase", color: "#FBFCFE", background: "#1A56DB", border: "none", padding: "18px 38px", cursor: "pointer", borderRadius: 12, transition: "background .2s ease" }}>
                        Send Message →
                      </button>
                    </form>
                  ) : (
                    <div style={{ padding: "40px 0", textAlign: "left" }}>
                      <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", color: "#1A56DB", display: "block", marginBottom: 20 }}>Message Received</span>
                      <h3 style={{ fontFamily: HEAD, fontWeight: 900, textTransform: "uppercase", fontSize: "clamp(30px,3.6vw,50px)", lineHeight: 0.94, marginBottom: 22 }}>Thanks. We&apos;ll be in touch.</h3>
                      <p style={{ fontFamily: BODY, fontSize: 17, lineHeight: 1.6, color: "rgba(16,24,38,.7)", maxWidth: 460, marginBottom: 34 }}>
                        A member of the IPG team will respond within one business day to discuss your facilities and the right next step.
                      </p>
                      <button onClick={() => setSubmitted(false)} className={styles.resetBtn} style={{ fontFamily: BODY, fontWeight: 600, fontSize: 13, letterSpacing: ".14em", textTransform: "uppercase", color: "#101826", background: "none", border: "1px solid rgba(16,24,38,.3)", padding: "15px 30px", cursor: "pointer", borderRadius: 10 }}>
                        Send Another
                      </button>
                    </div>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section aria-labelledby="contact-next-h2" style={{ padding: "clamp(64px,11vw,118px) 0", background: "#FFFFFF", borderTop: "1px solid rgba(16,24,38,.08)" }}>
          <div style={{ maxWidth: 1340, margin: "0 auto", padding: "0 40px" }}>
            <Reveal style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: "clamp(36px,5vw,56px)" }}>
              <span style={{ width: 36, height: 1, background: "#1A56DB" }} />
              <h2 id="contact-next-h2" style={{ fontFamily: BODY, fontWeight: 600, fontSize: 13, letterSpacing: ".26em", textTransform: "uppercase", color: "#1A56DB", margin: 0 }}>What Happens Next</h2>
            </Reveal>

            <ul className={styles.next2} style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,80px)", marginBottom: "clamp(48px,7vw,80px)" }}>
              {NEXT_STEPS.map((step, i) => (
                <Reveal key={step.n} as="li" delay={i * 100} duration="0.9s" style={{ borderTop: "1px solid rgba(16,24,38,.14)", paddingTop: 26 }}>
                  <span style={{ fontFamily: HEAD, fontWeight: 700, fontSize: 15, letterSpacing: ".12em", color: "#1A56DB", display: "block", marginBottom: 18 }}>{step.n}</span>
                  <h3 style={{ fontFamily: HEAD, fontWeight: 700, textTransform: "uppercase", fontSize: "clamp(22px,2.4vw,30px)", lineHeight: 1.05, letterSpacing: "-.01em", marginBottom: 16 }}>{step.title}</h3>
                  <p style={{ fontFamily: BODY, fontSize: 16.5, lineHeight: 1.62, color: "rgba(16,24,38,.68)", maxWidth: 460 }}>{step.body}</p>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={120} style={{ background: "#EEF3FE", border: "1px solid rgba(26,86,219,.22)", borderRadius: 20, padding: "clamp(32px,4.4vw,56px)", display: "flex", gap: "clamp(22px,3vw,36px)", alignItems: "flex-start", flexWrap: "wrap" }}>
              <span style={{ flexShrink: 0, width: 60, height: 60, borderRadius: 16, background: "#1A56DB", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 14px 30px -12px rgba(26,86,219,.7)" }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M8.5 12.4l2.4 2.4 4.6-5.1" /></svg>
              </span>
              <div style={{ flex: 1, minWidth: "min(260px,100%)" }}>
                <span style={{ fontFamily: BODY, fontWeight: 700, fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", color: "#1A56DB", display: "block", marginBottom: 12 }}>No Cost, No Obligation</span>
                <h2 style={{ fontFamily: HEAD, fontWeight: 800, fontSize: "clamp(24px,2.8vw,34px)", lineHeight: 1.04, letterSpacing: "-.01em", marginBottom: 14, color: "#101826" }}>Free Initial Consultation</h2>
                <p style={{ fontFamily: BODY, fontSize: 16.5, lineHeight: 1.62, color: "rgba(16,24,38,.7)", maxWidth: 640, marginBottom: 22 }}>
                  We offer a free 30-minute consultation to discuss your skateparks, audit requirements, and how IPG can help your council maintain safe, compliant facilities.
                </p>
                <a href="mailto:admin@innovativeparkgroup.com" className={styles.bookLink} style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: BODY, fontWeight: 700, fontSize: 13, letterSpacing: ".14em", textTransform: "uppercase", color: "#1A56DB" }}>
                  Book a Consultation →
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section aria-labelledby="contact-faq-h2" style={{ padding: "clamp(60px,13vw,130px) 0", background: "#FFFFFF", borderTop: "1px solid rgba(16,24,38,.08)", borderBottom: "1px solid rgba(16,24,38,.08)" }}>
          <div style={{ maxWidth: 1340, margin: "0 auto", padding: "0 40px" }}>
            <Reveal style={{ display: "flex", alignItems: "baseline", gap: 22, borderTop: "1px solid rgba(16,24,38,.14)", paddingTop: 26, marginBottom: 24 }}>
              <span style={{ fontFamily: HEAD, fontWeight: 700, fontSize: 15, letterSpacing: ".12em", color: "#1A56DB" }}>001</span>
              <h2 id="contact-faq-h2" style={{ fontFamily: BODY, fontWeight: 600, fontSize: 13, letterSpacing: ".24em", textTransform: "uppercase", color: "rgba(16,24,38,.55)", margin: 0 }}>Frequently Asked</h2>
            </Reveal>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {FAQ_ITEMS.map((item) => (
                <Reveal key={item.q} as="div" delay={item.delay} duration="0.8s" style={{ borderBottom: "1px solid rgba(16,24,38,.12)" }}>
                  <details className={styles.faqDetails}>
                    <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, padding: "30px 0" }}>
                      <h3 style={{ fontFamily: HEAD, fontWeight: 700, textTransform: "uppercase", fontSize: "clamp(22px,2.6vw,32px)", lineHeight: 1.05, margin: 0 }}>{item.q}</h3>
                      <span className={styles.faqPlus} style={{ fontFamily: BODY, fontWeight: 300, fontSize: 34, color: "#1A56DB", lineHeight: 1, flexShrink: 0 }}>+</span>
                    </summary>
                    <p style={{ fontFamily: BODY, fontSize: 16.5, lineHeight: 1.62, color: "rgba(16,24,38,.68)", padding: "0 0 34px", maxWidth: 820 }}>{item.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "clamp(60px,14vw,140px) 0" }}>
          <div style={{ maxWidth: 1340, margin: "0 auto", padding: "0 40px" }}>
            <Reveal style={{ padding: "clamp(48px,7vw,100px)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 48, backgroundColor: "#0d388d", position: "relative", overflow: "hidden", borderRadius: 15 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img aria-hidden="true" src="/assets/ipg-icon.png" alt="" style={{ position: "absolute", left: "clamp(-40px,-2vw,0px)", bottom: "clamp(-50px,-3vw,-20px)", width: "clamp(240px,30vw,420px)", height: "auto", opacity: 0.08, pointerEvents: "none", userSelect: "none", zIndex: 0 }} />
              <div style={{ position: "absolute", inset: 0, zIndex: 0, backgroundImage: "repeating-linear-gradient(45deg,rgba(255,255,255,.045) 0,rgba(255,255,255,.045) 1px,transparent 1px,transparent 14px)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", inset: 0, zIndex: 0, background: "radial-gradient(90% 150% at 88% 50%,rgba(255,255,255,.055) 0,transparent 58%)", pointerEvents: "none", borderRadius: 15 }} />
              <div style={{ position: "relative", zIndex: 1, maxWidth: 680 }}>
                <h2 style={{ fontFamily: HEAD, fontWeight: 900, textTransform: "uppercase", lineHeight: 0.94, fontSize: "clamp(32px,4.4vw,62px)", marginBottom: 22, color: "#FBFCFE" }}>Ready to get started?</h2>
                <p style={{ fontFamily: BODY, fontSize: 18, lineHeight: 1.55, color: "rgba(251,252,254,.92)" }}>Send us a message above or call us directly to schedule your free initial consultation.</p>
              </div>
              <a href="mailto:admin@innovativeparkgroup.com" style={{ position: "relative", zIndex: 1, fontFamily: BODY, fontWeight: 600, fontSize: "clamp(12px,3.4vw,15px)", letterSpacing: ".14em", textTransform: "uppercase", color: "#1A56DB", background: "#FFFFFF", padding: "clamp(13px,3.4vw,20px) clamp(22px,5vw,36px)", maxWidth: "100%", textAlign: "center", boxSizing: "border-box", borderRadius: 15 }}>
                Email Us Directly<span className={styles.ctaArrow}> →</span>
              </a>
            </Reveal>
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}
