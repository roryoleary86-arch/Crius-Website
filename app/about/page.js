import Link from "next/link";
import { GhostHead } from "@/components/SecHead";
import { IconArrow } from "@/components/icons";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "About — Crius AI",
};

export default function About() {
  return (
    <>
      <section className="section" id="about">
        <div className="container">
          <GhostHead
            num="01"
            eyebrow="About Crius"
            title="An Irish AI consultancy built for the legal profession."
            lede="Crius is based in Cork and works directly with law firms and in-house legal teams. Every engagement starts with the Crius Consultation, and every recommendation is judged on whether it holds up under real scrutiny, not on theory."
          />

          <div className="section-cta">
            <Link href="/contact" className="btn btn-primary">
              Book a Consultation <IconArrow />
            </Link>
          </div>
        </div>
      </section>

      <FAQ />
      <CTASection />
    </>
  );
}
