import HeroSection from "@/components/home/hero";
import AboutSection from "@/components/home/about";
import ProcessGrid from "@/components/home/process";
import StatsBar from "@/components/home/stats";
import FeatureBanner from "@/components/home/feature-banner";
import ServicesOverview from "@/components/home/services-overview";
import PortfolioGrid from "@/components/home/portfolio";
import StudioExperience from "@/components/home/studio-experience";
import TestimonialsSection from "@/components/home/testimonials";
import ClientLogos from "@/components/home/client-logos";
import ContactSection from "@/components/home/contact";
import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#141414] text-white selection:bg-[#ff2e5f] selection:text-white">
      <HeroSection />
      <AboutSection />
      <ProcessGrid />
      <StatsBar />
      <FeatureBanner />
      <ServicesOverview />
      <PortfolioGrid />
      <StudioExperience />
      <TestimonialsSection />
      <ClientLogos />
      <ContactSection />
      <Footer />
    </main>
  );
}
