import { HeroSection } from "@/app/components/home/hero-section";
import { FeaturesGrid } from "@/app/components/home/features-grid";
import { HowItWorks } from "@/app/components/home/how-it-works";
import { WhyChooseUs } from "@/app/components/home/why-choose-us";
import { CTASection } from "@/app/components/home/cta-section";
import { Footer } from "@/app/components/home/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <HeroSection />
        <FeaturesGrid />
        <HowItWorks />
        <WhyChooseUs />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}