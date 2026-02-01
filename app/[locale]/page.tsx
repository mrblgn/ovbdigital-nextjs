import AboutSection from '@/components/home/about-section';
import FeaturesSection from '@/components/home/features-section';
import Hero from '@/components/home/hero';
import InfoSection from '@/components/home/info-section';

export default async function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <FeaturesSection />
      <InfoSection />
    </>
  );
}
