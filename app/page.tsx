import Hero from '@/components/sections/Hero';
import Challenges from '@/components/sections/Challenges';
import Solutions from '@/components/sections/Solutions';
import Approach from '@/components/sections/Approach';
import CaseStudies from '@/components/sections/CaseStudies';
import Academy from '@/components/sections/Academy';

export default function Home() {
  return (
    <main>
      <Hero />
      <Challenges />
      <Solutions />
      <Approach />
      <CaseStudies />
      <Academy />
    </main>
  );
}
