'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Approach() {
  const { ref, isInView } = useScrollAnimation();

  const values = [
    {
      title: 'Proactive',
      description: 'We take the initiative to make change happen in unregulated or developing markets.',
    },
    {
      title: 'Solutions-Focused',
      description: "We don't just teach theory; we solve problems and we don't give up.",
    },
    {
      title: 'Excellence',
      description:
        'We hold ourselves and our partners to the highest global standards, culturally attuned for local application.',
    },
    {
      title: 'Commitment',
      description:
        'We care deeply about creating systemic change that outlasts any single training program.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section ref={ref} className="section bg-gradient-to-br from-gray-50 to-white">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-header text-center mb-4">
            Evidence-based learning that meets real-world needs.
          </h2>

          <p className="text-center text-lg text-navy-900 mb-12 max-w-2xl mx-auto">
            {`We don't just deliver content; we build resilient healthcare organisations. Our approach is
            rooted in four core values:`}
          </p>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all hover:translate-y--2 text-center"
              >
                <h3 className="text-2xl font-bold text-health-primary mb-3">{value.title}</h3>
                <p className="text-navy-900 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
