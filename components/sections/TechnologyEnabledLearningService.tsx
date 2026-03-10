'use client';

import { motion } from 'framer-motion';
import { Zap, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function TechnologyEnabledLearningService() {
  const { ref, isInView } = useScrollAnimation();

  const paragraphs = [
    'Technology is the multiplier that takes high-quality learning from reach of a few to reach of many. For health systems with geographically dispersed workforces, limited physical training infrastructure and real cost constraints, digital learning is not an optional extra — it is the delivery mechanism that makes scale possible.',
    'We design and build technology-enabled learning solutions that are pragmatic about the contexts they\'re deployed in. Our content and platforms are built for the bandwidth, device and literacy realities of frontline health workers and community participants — not designed for broadband classrooms in Lagos and then deployed in rural Kano or peri-urban Accra without adaptation.',
    'We work with partners to define the right technology stack, create content that works within it, and build the operational systems to support learner access, tracking and continuous improvement.',
  ];

  const deliverables = [
    'E-learning content development — interactive modules, video, audio and assessed learning',
    'LMS selection, configuration and deployment for institutional clients',
    'Mobile-first and low-bandwidth content design for distributed workforces',
    'Blended learning design integrating digital and face-to-face elements',
    'Learner analytics frameworks and progress tracking infrastructure',
    'Digital learning capacity building for institutional L&D teams',
  ];

  const idealFor = 'Looking to extend the reach, consistency and measurability of their learning programmes through technology — particularly where geographic scale, cost or staff turnover makes face-to-face-only delivery impractical.';

  const wellSuitedTo = [
    'NGOs and implementers managing distributed field workforces',
    'Government agencies requiring standardised national training delivery',
    'Universities adding online and blended delivery capabilities',
    'Corporate health entities requiring scalable staff induction and CPD',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section ref={ref} className="section bg-white">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              {/* Header */}
              <div className="flex items-start gap-4 mb-8">
                <motion.div
                  className="flex-shrink-0 w-14 h-14 rounded-lg bg-health-primary/10 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                >
                  <Zap className="text-health-primary" size={28} />
                </motion.div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-health-primary mb-2">Service 03</p>
                  <h2 className="text-4xl font-bold text-navy-900">Technology-Enabled Learning</h2>
                </div>
              </div>

              {/* Body Paragraphs */}
              <motion.div className="space-y-6 mb-10" variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
                {paragraphs.map((para, idx) => (
                  <motion.p key={idx} variants={itemVariants} className="text-lg text-navy-900 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </motion.div>

              {/* Deliverables */}
              <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
                <h3 className="text-2xl font-bold text-navy-900 mb-6">Outcomes & Deliverables</h3>
                <motion.div className="space-y-3" variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
                  {deliverables.map((deliverable, idx) => (
                    <motion.div key={idx} variants={itemVariants} className="flex items-start gap-3">
                      <CheckCircle className="text-health-primary flex-shrink-0 mt-1" size={20} />
                      <span className="text-navy-900">{deliverable}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Ideal For */}
              <div className="bg-health-primary/5 p-6 rounded-lg border-l-4 border-health-primary">
                <p className="text-sm font-semibold uppercase tracking-widest text-health-primary mb-3">Ideal For</p>
                <p className="text-navy-900 leading-relaxed">{idealFor}</p>
              </div>

              {/* Well Suited To */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-sm font-semibold uppercase tracking-widest text-health-primary mb-4">Well Suited To</p>
                <ul className="space-y-3">
                  {wellSuitedTo.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-health-primary font-bold mt-1">•</span>
                      <span className="text-navy-900 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
