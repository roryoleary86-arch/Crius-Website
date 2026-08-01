import Link from "next/link";
import Reveal from "./Reveal";
import { IconArrow } from "./icons";

export default function CTASection({
  title = "Book a Consultation, or just say hello.",
  sub = "We'll respond within one business day. The Crius Consultation is free, in person or over Teams, and typically 1 to 1.5 hours, on how your practice actually works.",
  label = "Get started",
  cta = "Book a Consultation",
}) {
  return (
    <section className="cta-section">
      <div className="container">
        <Reveal className="cta-block">
          <span className="eyebrow">{label}</span>
          <h2>{title}</h2>
          <p>{sub}</p>
          <Link href="/contact" className="btn btn-primary btn-lg">
            {cta} <IconArrow />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
