'use client';

import { motion } from 'framer-motion';
import { Users, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function WorkforceDevelopmentService() {
  const { ref, isInView } = useScrollAnimation();

  const paragraphs = [
    'Across health, social care and the informal sector, the majority of the workforce that keeps communities healthy has never had access to structured, quality training. We change that — with programmes designed for all cadres, not just qualified professionals.',
    'Our workforce training is built on a simple conviction: learning should connect directly to earning. Every programme we design embeds employability skills and, where appropriate, micro-enterprise pathways — giving participants not just knowledge, but real economic opportunity. This makes our programmes particularly effective for female and youth empowerment schemes, job creation programmes and community-based projects where sustainable income change is the goal.',
    'Structured, modular and designed for rapid deployment, our programmes can be piloted, evaluated and scaled — with documentation and monitoring that makes the case for expansion built in from day one.',
  ];

  const deliverables = [
    'Structured, modular curriculum for all cadres',
    'Employability skills frameworks and micro-enterprise pathway design integrated into learning',
    'Facilitator training and train-the-trainer capability development',
    'Assessment tools and competency frameworks for tracking learner progress',
    'Pilot design with monitoring, evaluation and scale-up pathway documentation',
    'Proposal-ready impact documentation for funder reporting and programme expansion',
  ];

  const idealFor = 'Running workforce-linked health or community interventions — particularly where participants need skills that translate into income, and where programmes must demonstrate ROI to secure expansion funding.';

  const wellSuitedTo = [
    'NGOs implementing CHW and community health programmes',
    'Government job creation and youth empowerment schemes',
    'Development foundations funding female economic empowerment',
    'Health implementers running community-based micro-enterprise pilots',
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
                  <Users className="text-health-primary" size={28} />
                </motion.div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-health-primary mb-2">Service 01</p>
                  <h2 className="text-4xl font-bold text-navy-900">Workforce Development</h2>
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
