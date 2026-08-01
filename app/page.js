import Link from "next/link";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { IconArrow } from "@/components/icons";

export const metadata = {
  title: "Crius AI — Legal judgment, applied with AI",
};

export default function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero-grid">
          <Reveal className="hero-head">
            <span className="tag">AI Consultancy for the Legal Profession</span>
            <h1 style={{ marginTop: 4 }}>
              Legal judgment, applied with AI. <em>Built in Ireland.</em>
            </h1>
            <p className="hero-sub">
              Crius is an Irish AI consultancy built for law firms and in-house legal teams. Every
              engagement starts with the Crius Consultation, a free session, in person or over
              Teams, whichever suits your firm, that gives your practice an honest, practical view
              of where AI can help, and where it can&apos;t. If it makes sense, we build it.
            </p>
            <div className="hero-cta">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Book a Consultation <IconArrow />
              </Link>
              <Link href="/how-we-work" className="btn btn-ghost btn-lg">
                See how we work
              </Link>
            </div>
          </Reveal>

          <Reveal delay={1} className="hero-panel">
            <span className="tag">Crius.ie / Consultation</span>
            <div className="consult-panel">
              <div className="cp-row">
                <span className="cp-k">Session</span>
                <span className="cp-v">In person or over Teams &middot; 1 to 1.5 hours &middot; free</span>
              </div>
              <div className="cp-row">
                <span className="cp-k">Covers</span>
                <span className="cp-v">How matters move through the practice today</span>
              </div>
              <div className="cp-row">
                <span className="cp-k">Covers</span>
                <span className="cp-v">Where time and risk concentrate</span>
              </div>
              <div className="cp-row">
                <span className="cp-k">Covers</span>
                <span className="cp-v">Where AI can responsibly help, and where it can&apos;t</span>
              </div>
              <div className="cp-row cp-row-outcome">
                <span className="cp-k">Outcome</span>
                <span className="cp-v">A written recommendation, build or not</span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="hero-meta">
          <div className="meta-item">
            <div className="k">The Consultation</div>
            <div className="v">Free, your choice of format</div>
            <div className="s">In person or over Teams, 1 to 1.5 hours, a full profile of your practice</div>
          </div>
          <div className="meta-item">
            <div className="k">The Build</div>
            <div className="v">If it makes sense</div>
            <div className="s">custom-prompted agents, engagement-based, four to six weeks depending on your team&apos;s pace</div>
          </div>
          <div className="meta-item">
            <div className="k">Based</div>
            <div className="v">Cork, Ireland</div>
            <div className="s">working directly with law firms across Ireland</div>
          </div>
        </Reveal>
      </section>

      <section className="section" id="customers">
        <div className="container">
          <div className="trust">
            <Reveal className="idx-head">
              <span className="idx-num">01</span>
              <div className="idx-head-body">
                <span className="tag">Proof, not promises</span>
                <h2 style={{ marginTop: 16 }}>An honest first conversation, not a sales pitch.</h2>
                <p className="lede">
                  The Crius Consultation exists to give your firm a clear, practical view of
                  where AI can help, and just as importantly, where it can&apos;t.
                </p>
              </div>
            </Reveal>

            <p className="pull-quote">
              No fabricated case studies, no vendor spin, an honest recommendation either way.
            </p>

            <Reveal className="stat-strip">
              <div className="stat-block">
                <div className="stat-v">2026</div>
                <div className="stat-k">NFTE Foróige Innovators of the Year</div>
              </div>
              <div className="stat-block">
                <div className="stat-v">Shortlisted</div>
                <div className="stat-k">Microsoft SL Innovators of the Year 2026</div>
              </div>
              <div className="stat-block">
                <div className="stat-v">5</div>
                <div className="stat-k">Practice areas served</div>
              </div>
            </Reveal>

            <Reveal delay={1} className="award-row">
              <div className="award-item">
                <span className="idx-num">01</span>
                <div>
                  <div className="award-name">NFTE Foróige Innovators of the Year, 2026</div>
                  <div className="award-desc">
                    Award-winning recognition from the Network for Teaching Entrepreneurship — the
                    clearest external proof point Crius has today.
                  </div>
                  <div className="award-note">Recognised</div>
                </div>
              </div>
              <div className="award-item">
                <span className="idx-num">02</span>
                <div>
                  <div className="award-name">Microsoft SL Innovators of the Year 2026</div>
                  <div className="award-desc">Also shortlisted.</div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={1} className="verticals-strip">
              <span>Commercial litigation</span>
              <span>Corporate &amp; M&amp;A</span>
              <span>Private client</span>
              <span>Regulatory &amp; compliance</span>
              <span>In-house legal teams</span>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
