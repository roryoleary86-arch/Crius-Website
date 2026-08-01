import Reveal from "@/components/Reveal";
import { GhostHead } from "@/components/SecHead";
import { IconArrow } from "@/components/icons";
import Link from "next/link";

export const metadata = {
  title: "How We Work — Crius AI",
};

const consultSteps = [
  { n: "Step 01", t: "Book", p: "A short call to understand your practice and find a time that works, in person or over Teams, whichever suits your firm." },
  { n: "Step 02", t: "The session", p: "1 to 1.5 hours, free, with a senior member of our team and the people who do the work day to day." },
  { n: "Step 03", t: "The profile", p: "We map how matters move through your practice: where time goes, where risk concentrates, where AI can responsibly help." },
  { n: "Step 04", t: "The recommendation", p: "A clear, written view: build, don't build, or wait. No pressure either way." },
];

const buildSteps = [
  { wk: "Week 1", t: "Discovery & design", p: "We map the decisions, deliverables and language of your practice, then design the agents around them. You meet a working prototype inside days." },
  { wk: "Weeks 2–3", t: "Build & integrate", p: "We wire the agents into Microsoft 365 and the systems you already run on, with persistent memory and your branding throughout." },
  { wk: "Week 4", t: "Deploy", p: "Your platform goes live in an environment your IT signs off. Your team is working in it, not waiting on a roadmap." },
  { wk: "Onward", t: "Evolve", p: "We tune, extend and add capability in step with the practice. The platform compounds in value every quarter." },
];

export default function HowWeWork() {
  return (
    <>
      <section className="section" id="approach">
        <div className="container">
          <GhostHead
            num="01"
            eyebrow="How we work"
            title="Consult first. Build if it makes sense."
            lede="Crius is a single engagement, not two separate products. Every relationship starts with the Crius Consultation. Only where it's warranted does that lead to a build."
          />

          <Reveal className="marginalia" style={{ marginTop: 8, marginBottom: 32 }}>
            <div className="studio-head" style={{ marginBottom: 0 }}>
              <span className="tag">The Crius Consultation</span>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: 28, marginTop: 14, maxWidth: "46ch" }}>
                One session. A full picture of how you work.
              </h3>
              <p className="lede" style={{ marginTop: 12, maxWidth: "58ch" }}>
                The Crius Consultation is a free session with a senior member of our team,
                typically 1 to 1.5 hours, in person or over Teams, whichever suits your firm. We
                leave with a full profile of how your practice actually works, and you leave with
                an honest recommendation, whether or not that means building anything.
              </p>
            </div>
            <div className="marginalia-note">
              No pitch deck. No proposal until you ask for one. Just the session, and a straight
              answer afterward.
            </div>
          </Reveal>

          <div className="steps">
            {consultSteps.map((s, i) => (
              <div key={i} className="step">
                <span className="n">{s.n}</span>
                <h4>{s.t}</h4>
                <p>{s.p}</p>
              </div>
            ))}
          </div>

          <div className="section-cta">
            <Link href="/contact" className="btn btn-primary">
              Book a Consultation <IconArrow />
            </Link>
          </div>
        </div>
      </section>

      <section className="section build-section" id="build">
        <div className="container">
          <Reveal className="studio-head">
            <span className="tag">02 · If the Consultation recommends it</span>
            <h2 className="studio-title">
              Consult first.
              <br />
              Build only <em>where it&apos;s warranted.</em>
            </h2>
            <p className="lede">
              Where the Consultation points to a build, Crius designs, builds and deploys a
              custom AI agent platform, prompted to your practice&apos;s domain and integrated
              with your tools. Typically four to six weeks from brief to deployment, depending on
              your team&apos;s pace.
            </p>
          </Reveal>

          <Reveal delay={1} className="studio-band">
            <div className="sb-item">
              <div className="sb-v">4 to 6 weeks</div>
              <div className="sb-k">Brief to deployed, depending on your team&apos;s pace</div>
            </div>
            <div className="sb-item">
              <div className="sb-v">Anthropic AI</div>
              <div className="sb-k">A frontier model, engineered</div>
            </div>
            <div className="sb-item">
              <div className="sb-v">100% yours</div>
              <div className="sb-k">Your data, your IP, your brand</div>
            </div>
          </Reveal>

          <Reveal delay={1} className="studio-timeline">
            <div className="st-head">
              <span className="st-eyebrow">The delivery</span>
              <h3>From a brief on Monday to a platform your team relies on.</h3>
            </div>
            <div className="st-rail">
              {buildSteps.map((s, i) => (
                <div className="st-step" key={i}>
                  <div className="st-node"><span></span></div>
                  <div className="st-wk">{s.wk}</div>
                  <div className="st-t">{s.t}</div>
                  <div className="st-p">{s.p}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="build-lead">
            <div className="build-k">01 Bespoke</div>
            <div>
              <h4>Custom-prompted to your domain.</h4>
              <p>
                Not a chatbot. Not a generic copilot. Each agent is built around the specific
                decisions, deliverables and language of your practice, and refined alongside the
                people who use it every day.
              </p>
            </div>
          </div>
          <div className="build-trio">
            <div className="build-pillar">
              <div className="build-k">02 Integrated</div>
              <h4>In the tools you already use.</h4>
              <p>
                Microsoft 365 native, with extensions to the systems your practice actually runs
                on. Persistent memory across conversations. Your data stays yours, deployed in
                environments your IT can sign off.
              </p>
            </div>
            <div className="build-pillar">
              <div className="build-k">03 Powered</div>
              <h4>Anthropic&apos;s strongest models, with engineering around it.</h4>
              <p>
                The underlying model is always one of Anthropic&apos;s leading models. The
                platform around it, agents, memory, integrations, branding, is built by Crius to
                make a frontier model usable inside a serious professional workflow.
              </p>
            </div>
            <div className="build-pillar">
              <div className="build-k">04 Evolving</div>
              <h4>Built to grow with your practice.</h4>
              <p>
                Engagement-based, not productised. We tune the agents, extend the integrations
                and add capability in step with how the practice changes.
              </p>
            </div>
          </div>

          <p className="pull-quote pull-quote-dark pull-quote-wide">
            The platform you have in year two is the one your practice has earned.
          </p>

          <Reveal className="case-study" style={{ maxWidth: "78ch" }}>
            <div className="case-meta">
              <span className="case-tag">Method in practice, not legal-sector proof</span>
              <div className="case-title">A four-agent platform for a pharmaceutical launch team.</div>
              <div className="case-sub">
                The clearest example of the approach we bring to every engagement, including law
                firms.
              </div>
            </div>
            <div className="case-body">
              <p>
                This wasn&apos;t a law firm. It&apos;s included here because it shows the method,
                not because it proves legal-sector delivery: custom-prompted agents, a human
                sign-off step in every workflow, and full GDPR compliance from day one.
              </p>
              <ul className="case-agents">
                <li>
                  <span className="ag-k">Agent 01</span>
                  <span className="ag-t">Custom-prompted</span>
                  <span className="ag-p">Each agent prompted to a specific function in the launch, not a generic assistant.</span>
                </li>
                <li>
                  <span className="ag-k">Oversight</span>
                  <span className="ag-t">Human sign-off</span>
                  <span className="ag-p">Every workflow includes a sign-off step. The agents draft, a person decides.</span>
                </li>
                <li>
                  <span className="ag-k">Compliance</span>
                  <span className="ag-t">GDPR by design</span>
                  <span className="ag-p">Data handling and retention built in from day one, not bolted on after.</span>
                </li>
                <li>
                  <span className="ag-k">Result</span>
                  <span className="ag-t">Four agents, one team</span>
                  <span className="ag-p">Deployed and in use, coordinating what had been four separate manual processes.</span>
                </li>
              </ul>
            </div>
          </Reveal>

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
