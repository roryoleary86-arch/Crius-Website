"use client";

import { useState } from "react";
import { SecHead } from "./SecHead";
import { IconPlus } from "./icons";

const items = [
  {
    q: "Is the Consultation really free?",
    a: "Yes. The first session is free, in person or over Teams, whether or not it leads to a build. We would rather be honest upfront than sell you a platform you do not need.",
  },
  {
    q: "What happens in the Consultation?",
    a: "A senior member of our team spends 1 to 1.5 hours with your practice, in person or over Teams, understanding how matters actually move through the firm. You get a full profile of how you work and a written recommendation.",
  },
  {
    q: "Does the Consultation always lead to a build?",
    a: "No. Sometimes the honest answer is not yet, or not this. We'd rather say that than build something that doesn't earn its place in your practice.",
  },
  {
    q: "How is client data and confidentiality handled?",
    a: "Data is held in EU region data centres, encrypted in transit and at rest. We are GDPR compliant, and no client data is ever used to train models across engagements.",
  },
  {
    q: "Does the platform replace a lawyer's judgment?",
    a: "No. Every workflow we build keeps a human sign-off step. Crius is built to support judgment, not replace it.",
  },
  {
    q: "How long does a build take once agreed?",
    a: "Typically 4 to 6 weeks from brief to a deployed platform, depending on how quickly we get what we need from your team, and scope varies by practice. Pricing is agreed after the Consultation, based on that scope. There is no cost to find out whether a build makes sense.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section-tight" style={{ background: "var(--bg-sunk)" }}>
      <div className="container">
        <SecHead
          num="03"
          eyebrow="Frequently asked"
          title="The questions firms ask us first."
          lede="If your question isn't here, our team answers within the business day. Most answers start with 'yes, here's how.'"
        />
        <div className="faq">
          {items.map((it, i) => (
            <div key={i} className={`faq-item ${open === i ? "open" : ""}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="faq-idx">{String(i + 1).padStart(2, "0")}</span>
                <span>{it.q}</span>
                <span className="faq-plus"><IconPlus size={12} /></span>
              </button>
              <div className="faq-a">{it.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
