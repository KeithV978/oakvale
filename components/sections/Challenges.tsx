'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Challenges() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section ref={ref} className="section bg-navy-50">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-header text-center">
            Translating Knowledge into Opportunity and Lasting Change
          </h2>

          <p className="text-center text-lg text-navy-900 mb-12 max-w-3xl mx-auto">
            We know that improving health outcomes requires more than just clinical theory; it requires
            professionalised operations, standardised care, and scalable capacity. We design learning
            solutions that solve real-world problems.
          </p>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {/* Healthcare Providers */}
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-health-primary mb-4">For Healthcare Providers</h3>
              <p className="text-navy-900 leading-relaxed">
                We help hospital founders and clinic owners standardise care quality, embed best
                practices, and improve retention through structured workforce development.
              </p>
            </motion.div>

            {/* Governments & NGOs */}
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-health-primary mb-4">For Governments & NGOs</h3>
              <p className="text-navy-900 leading-relaxed">
                We design and deploy mass training solutions that turn policy into practice, building
                capacity at scale while delivering measurable ROI and community impact.
              </p>
            </motion.div>

            {/* Universities */}
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-health-primary mb-4">For Universities</h3>
              <p className="text-navy-900 leading-relaxed">
                We bridge the gap between academic theory and market-ready clinical leadership, helping
                institutions modernise their curricula for the realities of the healthcare sector.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
