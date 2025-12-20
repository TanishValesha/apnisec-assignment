
import { Footer } from "./components/Landing/Footer"
import { HeroSection } from "./components/Landing/HeroSection"
import { Navigation } from "./components/Landing/Navigation"
import { ServicesSection } from "./components/Landing/ServiceSection"
import { StatsSection } from "./components/Landing/StatsSection"
import { TestimonialsSection } from "./components/Landing/TestimonialSection"
import { TrustSection } from "./components/Landing/TrustSection"
import { UseCasesSection } from "./components/Landing/UseCaseSection"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <UseCasesSection />
      <StatsSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
