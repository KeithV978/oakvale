'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Solutions() {
  const { ref, isInView } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const solutions = [
    {
      number: '01',
      title: 'Capacity Building & Public Health (B2G)',
      subtitle: 'Rapid, scalable training for national and regional impact',
      description:
        'We work with ministries and NGOs to deploy targeted, bite-sized learning programs. From training community health workers across multiple states to standardising national data protection protocols, we provide the digital infrastructure and localised curriculum to train front-line teams at scale.',
    },
    {
      number: '02',
      title: 'Workforce Development (B2B)',
      subtitle: 'Strengthening service quality and operational resilience',
      description:
        'Many private practices and hospitals face critical vulnerabilities due to a lack of standardised onboarding and professional management. We offer CPD-accredited clinical leadership, operational training, and "Business of Health" programs to transform clinical talent into effective healthcare managers.',
    },
    {
      number: '03',
      title: 'Academic & Curriculum Partnerships',
      subtitle: 'Modernising clinical education',
      description:
        'We collaborate with leading universities to co-create and digitise curricula, offering everything from undergraduate electives to Executive Postgraduate Diplomas in Clinical Operations and Leadership.',
    },
  ];

  return (
    <section ref={ref} className="section bg-white">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-header text-center mb-12">
            Integrated Learning Solutions for Health Economies
          </h2>

          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="border-l-4 border-health-primary pl-8 py-4 rounded-r-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="text-5xl font-bold text-health-primary opacity-20">{solution.number}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-navy-900 mb-2">{solution.title}</h3>
                    <p className="text-health-primary font-semibold mb-3">{solution.subtitle}</p>
                    <p className="text-navy-900 leading-relaxed">{solution.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
