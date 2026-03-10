'use client';

import { motion } from 'framer-motion';
import { Building2, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function SystemsStrengtheningService() {
  const { ref, isInView } = useScrollAnimation();

  const paragraphs = [
    'Strong systems are built on people who understand them — managers, administrators, academics and professionals who can translate global best practice into locally effective solutions. Yet systems education across much of Africa still lags behind the scale and scope of the challenge.',
    'We co-create cutting-edge academic programmes for universities and colleges, and CPD programmes for corporate entities, aimed at developing the workforce that institutions need now and in the future. Our approach is defined by cultural attunement: we don\'t transplant curricula from Western contexts. We bring world-class knowledge frameworks to life through contextual case studies, scenario-based learning and practical application rooted in African realities.',
    'This is genuinely co-created work — we develop programmes with institutional partners, not for them, and structure our relationships for long-term curriculum evolution rather than one-time delivery.',
  ];

  const deliverables = [
    'Academic programme co-design for undergraduate, postgraduate and executive education',
    'Contextual case studies, scenario-based and application-led module development',
    'CPD programme design for corporate health entities and health sector organisations',
    'Assessment and accreditation-ready curriculum architecture',
    'Ongoing curriculum review, update and co-evolution partnership structures',
    'Futures-focused content: digital health, health economics, leadership for complex systems',
  ];

  const idealFor = 'Seeking a specialist external partner to co-develop academically rigorous, contextually designed health systems education — whether for degree programmes, executive education or corporate CPD.';

  const wellSuitedTo = [
    'Medical universities developing health management and systems programmes',
    'Health sciences faculties adding leadership and management tracks',
    'Postgraduate schools creating executive health programmes',
    'Corporate health entities investing in professional workforce development',
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
    <section ref={ref} className="section bg-gradient-to-br from-gray-50 to-white">
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
                  <Building2 className="text-health-primary" size={28} />
                </motion.div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-health-primary mb-2">Service 02</p>
                  <h2 className="text-4xl font-bold text-navy-900">Systems Strengthening</h2>
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
              <div className="bg-white p-6 rounded-lg border border-gray-200">
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
