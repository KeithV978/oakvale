import ServicesHero from '@/components/sections/ServicesHero';
import WorkforceDevelopmentService from '@/components/sections/WorkforceDevelopmentService';
import SystemsStrengtheningService from '@/components/sections/SystemsStrengtheningService';
import TechnologyEnabledLearningService from '@/components/sections/TechnologyEnabledLearningService';
import ServicesCTA from '@/components/sections/ServicesCTA';

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <WorkforceDevelopmentService />
      <SystemsStrengtheningService />
      <TechnologyEnabledLearningService />
      <ServicesCTA />
    </main>
  );
}
