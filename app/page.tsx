import Hero from "@/components/hero"
import Partners from "@/components/partners"
import Features from "@/components/features"
import Integration from "@/components/integration"
import Monitoring from "@/components/monitoring"
import FAQ from "@/components/faq"
import Pricing from "@/components/pricing"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <div className="flex flex-col">
      <main>
        <Hero />
        <Partners />
        <Features />
        <Integration />
        <Monitoring />
        <FAQ />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

