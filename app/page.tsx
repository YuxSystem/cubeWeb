import Hero from "@/components/hero"
import Partners from "@/components/partners"
import Integration from "@/components/integration"
import Monitoring from "@/components/monitoring"
import FAQ from "@/components/faq"
import Pricing from "@/components/pricing"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import ImageGallery from "@/components/image-gallery"
import TeamSection from "@/components/team-section"
import FeaturesWithImages from "@/components/features-with-images"

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <FeaturesWithImages />
      <Integration />
      <ImageGallery />
      <Monitoring />
      <TeamSection />
      <FAQ />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
      <ScrollToTop />
    </>
  )
}

