import AboutHero from '@/components/sections/AboutHero';
import OurStory from '@/components/sections/OurStory';
import VisionMissionPositioning from '@/components/sections/VisionMissionPositioning';
import OurValues from '@/components/sections/OurValues';
import AboutCTA from '@/components/sections/AboutCTA';

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <OurStory />
      <VisionMissionPositioning />
      <OurValues />
      <AboutCTA />
    </main>
  );
}
