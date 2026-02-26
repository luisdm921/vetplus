import {
  Hero,
  TrustMetrics,
  Testimonials,
  ProblemsAndSolutions,
  Services,
  Urgency,
  Contact,
  FAQ,
  FinalCTA,
} from "@/components";

/*
 * CRO-optimized page structure:
 * 1. Hero — Problem-focused headline + strong WhatsApp CTA
 * 2. TrustMetrics — Numbers that build instant credibility
 * 3. Testimonials — Social proof early = trust before selling
 * 4. ProblemsAndSolutions — Address real pain points
 * 5. Services — Benefit-focused with individual WhatsApp CTAs
 * 6. Urgency — Speed of response + "how it works"
 * 7. Contact — Location + simplified WhatsApp-first contact
 * 8. FAQ — Overcome objections
 * 9. FinalCTA — Strong closing with discount offer
 */
export default function Home() {
  return (
    <>
      <Hero />
      <TrustMetrics />
      <Testimonials />
      <ProblemsAndSolutions />
      <Services />
      <Urgency />
      <Contact />
      <FAQ />
      <FinalCTA />
    </>
  );
}
