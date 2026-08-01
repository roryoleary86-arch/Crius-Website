import Reveal from "@/components/Reveal";
import { GhostHead, SecHead } from "@/components/SecHead";
import { IconArrow } from "@/components/icons";
import Link from "next/link";

export const metadata = {
  title: "Trust & Values — Crius AI",
};

const dataPoints = [
  { k: "Isolation", v: "Isolated deployment per client. No shared environment, no cross-client exposure." },
  { k: "No training", v: "Client data is never used to train underlying models." },
  { k: "Residency", v: "EU-hosted infrastructure. Data residency maintained throughout." },
  { k: "Encryption", v: "Encrypted in transit and at rest." },
  { k: "DPA", v: "Full GDPR Data Processing Agreement executed prior to any deployment." },
];

const values = [
  { t: "An honest recommendation, even when it’s “you don’t need us.”", p: "We consult first. We only build where it makes sense, and we say so plainly when it doesn’t." },
  { t: "No fabricated case studies.", p: "Every claim on this site is traceable to something real. Where we don’t have legal-sector proof yet, we say that too." },
  { t: "Engagement-based, not productised.", p: "The platform grows with the practice. We’re not selling a fixed package and moving on." },
  { t: "Understanding before proposing.", p: "A proper consultation, understanding how the firm actually works, comes before any build is proposed." },
];

const tvTrio = [
  { k: "01", t: "A free Consultation, always first.", p: "Before anything is proposed, we spend time understanding the practice. That session is free, regardless of outcome." },
  { k: "03", t: "Built to the agreed brief.", p: "Delivery against what was actually agreed, not a suite of extras we’re incentivised to pad in." },
  { k: "04", t: "Ongoing advisory, not a handoff.", p: "The relationship continues after go-live. We’re not paid to disappear after a launch." },
];

export default function TrustValues() {
  return (
    <>
      <section className="section" id="trust-values">
        <div className="container">
          <GhostHead
            num="01"
            eyebrow="Data handling & security"
            title="Trust & Values."
            lede="This page exists for your IT and compliance function, not as decoration. Every line here is something Crius can stand behind today."
          />

          <div className="faq" style={{ marginTop: 8 }}>
            {dataPoints.map((d, i) => (
              <div key={i} className="faq-item open" style={{ padding: "24px 0" }}>
                <div style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: 24, alignItems: "baseline" }}>
                  <span style={{ fontFamily: "var(--mono)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--accent)" }}>
                    {d.k}
                  </span>
                  <p style={{ margin: 0, fontSize: 16, color: "var(--ink-2)", lineHeight: 1.6 }}>{d.v}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-sunk)" }}>
        <div className="container">
          <SecHead
            num="02"
            eyebrow="Why this works for you, not just for us"
            title="We only succeed if your engagement does."
            lede="There's no product being sold here, regardless of outcome, no fixed package, and no incentive to overbuild. The commercial structure is built so that Crius only benefits when your firm genuinely does."
          />

          <div className="tv-lead">
            <div className="build-k" style={{ color: "var(--accent)", fontFamily: "var(--mono)", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em" }}>
              02 &middot; Scoped and agreed upfront
            </div>
            <div>
              <h4 style={{ fontFamily: "var(--serif)", margin: "0 0 12px" }}>No vague retainer, no surprise invoices.</h4>
              <p style={{ color: "var(--ink-3)", fontFamily: "var(--sans)", margin: 0 }}>
                Where the Consultation points to a build, we scope it properly and agree terms
                before any work begins.
              </p>
            </div>
          </div>
          <div className="tv-trio">
            {tvTrio.map((s, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <span style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.12em", color: "var(--accent)" }}>{s.k}</span>
                <h4 style={{ margin: 0, fontFamily: "var(--serif)", fontSize: 19, lineHeight: 1.3 }}>{s.t}</h4>
                <p style={{ margin: 0, fontSize: 14, fontFamily: "var(--sans)", color: "var(--ink-3)", lineHeight: 1.6 }}>{s.p}</p>
              </div>
            ))}
          </div>

          <p className="pull-quote">
            An honest &quot;you don&apos;t need us&quot; costs us a sale. We say it anyway, because
            the incentive isn&apos;t to sell, it&apos;s to be right.
          </p>

          <div style={{ borderTop: "2px solid var(--ink)", marginTop: 32, paddingTop: 32, display: "flex", flexDirection: "column", gap: 22 }}>
            <p style={{ margin: 0, fontSize: 17, fontFamily: "var(--serif)", lineHeight: 1.75, color: "var(--ink-2)", maxWidth: "68ch" }}>
              We&apos;re engagement-based, not productised, because that&apos;s the only structure
              that keeps our interests and yours pointed the same way. There&apos;s nothing to
              lock a firm into if it isn&apos;t working, since our model is an ongoing
              relationship, not a one-off sale.
            </p>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <SecHead
            num="03"
            eyebrow="Certification roadmap"
            title="Where we are, stated plainly."
            lede="Not yet ISO 27001 certified. We'd rather say that directly than imply otherwise."
          />

          <Reveal className="marginalia">
            <div style={{ borderTop: "2px solid var(--ink)", paddingTop: 32, display: "flex", flexDirection: "column", gap: 22 }}>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: "var(--ink-2)", maxWidth: "48ch" }}>
                <strong style={{ color: "var(--ink)" }}>ISO 27001</strong> is the route we&apos;re
                taking to demonstrate NIS2 compliance.
              </p>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: "var(--ink-2)", maxWidth: "48ch" }}>
                The full certification stack, including the audit around it, is roughly a
                twelve-month build, already in motion.
              </p>
            </div>
            <div className="marginalia-note" style={{ paddingTop: 20 }}>
              Isolated deployment, no training on client data, encryption in transit and at rest,
              and EU hosting throughout &mdash; already true today, regardless of certification
              status.
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-tight" style={{ background: "var(--bg-sunk)" }}>
        <div className="container">
          <SecHead
            num="04"
            eyebrow="How we work"
            title="Values drawn from practice, not a poster."
            lede="Nothing here is aspirational language. Each of these is how we already operate."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 0,
              borderTop: "2px solid var(--ink)",
              borderLeft: "1px solid var(--rule)",
            }}
          >
            {values.map((v, i) => (
              <div key={i} className="value-card">
                <span className="idx-tag">{String(i + 1).padStart(2, "0")}</span>
                <h4 style={{ margin: 0, fontFamily: "var(--serif)", fontSize: 21, lineHeight: 1.3 }}>{v.t}</h4>
                <p style={{ margin: 0, fontSize: 14, fontFamily: "var(--sans)", color: "var(--ink-3)", lineHeight: 1.6 }}>{v.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <SecHead
            num="05"
            eyebrow="Engagement terms"
            title="How the commercial side actually works."
            lede="High-level, and meant to be reassuring. The detail lives in the engagement agreement, not on this page."
          />

          <div style={{ borderTop: "2px solid var(--ink)", paddingTop: 32 }}>
            <p style={{ margin: 0, fontSize: 17, fontFamily: "var(--serif)", lineHeight: 1.75, color: "var(--ink-2)", maxWidth: "68ch" }}>
              Where the Consultation points to a build, we scope it properly and agree terms
              before any work begins. Pricing reflects the scope of your practice, not a fixed
              package.
            </p>
          </div>

          <div className="section-cta">
            <Link href="/contact" className="btn btn-primary">
              Book a Consultation <IconArrow />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
