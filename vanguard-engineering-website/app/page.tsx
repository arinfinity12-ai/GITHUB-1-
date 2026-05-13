import { Hero } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { MechanismSection } from "@/components/sections/MechanismSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CaseStudyFeatured } from "@/components/sections/CaseStudyFeatured";
import { Verticals } from "@/components/sections/Verticals";
import { AboutDuo } from "@/components/sections/AboutDuo";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <MechanismSection />
      <HowItWorks />
      <CaseStudyFeatured />
      <Verticals />
      <AboutDuo />
      <FAQ />
      <FinalCTA />
    </>
  );
}
