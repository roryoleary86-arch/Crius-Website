"use client";

import { useState } from "react";
import { IconArrow, IconCheck } from "./icons";

const practiceAreaOptions = [
  "Commercial litigation",
  "Corporate & M&A",
  "Private client",
  "Regulatory & compliance",
  "In-house legal teams",
];

// TODO: wire this form to a real submission backend once the destination email is provided.
export default function DemoForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    role: "",
    email: "",
    phone: "",
    company: "",
    solicitors: "",
    practiceAreas: [],
    tools: "",
    format: "In person",
    availability: "",
    message: "",
  });

  const togglePracticeArea = (pa) => {
    setForm((f) => ({
      ...f,
      practiceAreas: f.practiceAreas.includes(pa)
        ? f.practiceAreas.filter((x) => x !== pa)
        : [...f.practiceAreas, pa],
    }));
  };

  const submit = (e) => {
    e.preventDefault();
    // Submission backend isn't connected yet — this is a placeholder until it is.
    setSent(true);
  };

  return (
    <section className="section" id="demo">
      <div className="container">
        <div className="demo demo-asym">
          <div className="demo-copy">
            <span className="eyebrow">Book a Consultation</span>
            <h2 style={{ marginTop: 20 }}>Tell us about your firm.</h2>
            <p className="lede" style={{ marginTop: 18 }}>
              A senior member of our team will get in touch within one business day to arrange a
              time. The Crius Consultation is free, in person or over Teams, and typically 1 to
              1.5 hours.
            </p>

            <div className="contact-card">
              <div className="contact-row">
                <div className="contact-k">Email</div>
                <div className="contact-v">
                  <a href="mailto:contactus@crius.ie">contactus@crius.ie</a>
                  <div className="contact-sub">general enquiries, consultations and partnerships</div>
                </div>
              </div>
              <div className="contact-row">
                <div className="contact-k">Based</div>
                <div className="contact-v">
                  <div>Cork, Ireland</div>
                  <div className="contact-sub">working with law firms across Ireland</div>
                </div>
              </div>
            </div>
          </div>

          {!sent ? (
            <form className="demo-form" onSubmit={submit}>
              <div className="form-row">
                <div className="form-field">
                  <label>Firm name</label>
                  <input
                    required
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Your firm"
                  />
                </div>
                <div className="form-field">
                  <label>Solicitors at the firm</label>
                  <select
                    required
                    value={form.solicitors}
                    onChange={(e) => setForm({ ...form, solicitors: e.target.value })}
                  >
                    <option value="">Select</option>
                    <option>1–5</option>
                    <option>6–15</option>
                    <option>16–50</option>
                    <option>50+</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label>Your name</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Full name"
                  />
                </div>
                <div className="form-field">
                  <label>Your role</label>
                  <input
                    required
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    placeholder="e.g. Managing Partner"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label>Work email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@yourfirm.ie"
                  />
                </div>
                <div className="form-field">
                  <label>Phone number</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="Optional"
                  />
                </div>
              </div>

              <div className="form-row-full">
                <div className="form-field">
                  <label>Main practice areas</label>
                  <div className="pa-pills">
                    {practiceAreaOptions.map((pa) => (
                      <button
                        type="button"
                        key={pa}
                        className={`pa-pill ${form.practiceAreas.includes(pa) ? "selected" : ""}`}
                        onClick={() => togglePracticeArea(pa)}
                      >
                        {pa}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="form-row-full">
                <div className="form-field">
                  <label>Current tools in use</label>
                  <input
                    value={form.tools}
                    onChange={(e) => setForm({ ...form, tools: e.target.value })}
                    placeholder="e.g. Keyhouse, Vincent AI"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label>Preferred format</label>
                  <div className="fmt-toggle">
                    <button
                      type="button"
                      className={form.format === "In person" ? "active" : ""}
                      onClick={() => setForm({ ...form, format: "In person" })}
                    >
                      In person
                    </button>
                    <button
                      type="button"
                      className={form.format === "Zoom" ? "active" : ""}
                      onClick={() => setForm({ ...form, format: "Zoom" })}
                    >
                      Zoom
                    </button>
                  </div>
                </div>
                <div className="form-field">
                  <label>Preferred contact time</label>
                  <select
                    value={form.availability}
                    onChange={(e) => setForm({ ...form, availability: e.target.value })}
                  >
                    <option value="">No preference</option>
                    <option>Mornings</option>
                    <option>Afternoons</option>
                    <option>This week</option>
                    <option>Next week</option>
                  </select>
                </div>
              </div>

              <div className="form-row-full">
                <div className="form-field">
                  <label>Anything else (optional)</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="A few lines on what you'd like to discuss."
                    rows="3"
                  ></textarea>
                </div>
              </div>

              <button type="submit" className="btn btn-primary form-submit">
                Request a Consultation <IconArrow />
              </button>
              <div className="form-note">
                This form isn&apos;t connected to email yet — for now, please reach us directly at{" "}
                <a href="mailto:contactus@crius.ie">contactus@crius.ie</a>.
              </div>
            </form>
          ) : (
            <div className="demo-form">
              <div className="form-success">
                <div
                  style={{
                    width: 40,
                    height: 40,
                    border: "1px solid var(--accent)",
                    display: "grid",
                    placeItems: "center",
                    margin: "0 0 20px",
                    color: "var(--accent)",
                  }}
                >
                  <IconCheck />
                </div>
                <h4>Request received.</h4>
                <p>
                  Thanks {form.name ? form.name.split(" ")[0] : ""}, our team will follow up. In
                  the meantime, this form isn&apos;t wired to send email yet — if it&apos;s
                  urgent, reach us at{" "}
                  <a href="mailto:contactus@crius.ie">contactus@crius.ie</a>.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
