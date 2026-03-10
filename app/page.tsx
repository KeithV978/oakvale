import Hero from '@/components/sections/Hero';
import MissionStrip from '@/components/sections/MissionStrip';
import ServicesOverview from '@/components/sections/ServicesOverview';
import WhoWeWorkWith from '@/components/sections/WhoWeWorkWith';
import WhyOakvale from '@/components/sections/WhyOakvale';
import ApproachProcess from '@/components/sections/ApproachProcess';
import Challenges from '@/components/sections/Challenges';
import Solutions from '@/components/sections/Solutions';
import Approach from '@/components/sections/Approach';
import CaseStudies from '@/components/sections/CaseStudies';
import Academy from '@/components/sections/Academy';
import CTAStrip from '@/components/sections/CTAStrip';

export default function Home() {
  return (
    <main>
      <Hero />
      <MissionStrip />
      <ServicesOverview />
      <WhoWeWorkWith />
      <WhyOakvale />
      {/* <ApproachProcess /> */}
      {/* <Challenges />
      <Solutions />
      <Academy /> 
      <CaseStudies />*/}
      <Approach />
      <CTAStrip />
    </main>
  );
}
