import { Navbar }          from '@/components/landing/Navbar'
import { HeroSection }     from '@/components/landing/HeroSection'
import { FeaturesSection } from '@/components/landing/FeaturesSection'
import { ToolsSection }    from '@/components/landing/ToolsSection'
import { StatsSection }    from '@/components/landing/StatsSection'
import { AboutSection }    from '@/components/landing/AboutSection'
import { CTASection }      from '@/components/landing/CTASection'
import { Footer }          from '@/components/landing/Footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#1a1a2e]">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ToolsSection />
      <StatsSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  )
}
