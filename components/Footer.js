import Link from "next/link";
import CriusMark from "./CriusMark";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <span className="logo-mark" aria-hidden="true">
                <CriusMark variant="light" />
              </span>
              <span>
                Crius <em style={{ color: "rgba(246,237,224,0.55)" }}>AI</em>
              </span>
            </Link>
            <p>AI consultancy for the legal profession. Built in Cork, working directly with law firms across Ireland.</p>
          </div>
          <div>
            <h5>SERVICES</h5>
            <ul>
              <li><Link href="/how-we-work">The Consultation</Link></li>
              <li><Link href="/how-we-work">The Build</Link></li>
              <li><Link href="/contact">Book a Consultation</Link></li>
            </ul>
          </div>
          <div>
            <h5>Company</h5>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/trust-values">Trust & Values</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h5>Get in touch</h5>
            <ul>
              <li><a href="mailto:contactus@crius.ie">contactus@crius.ie</a></li>
              <li>Cork, Ireland</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Crius AI Ltd · Registered in Ireland</span>
          <span><a href="mailto:contactus@crius.ie" style={{ color: "inherit" }}>contactus@crius.ie</a></span>
        </div>
      </div>
    </footer>
  );
}
