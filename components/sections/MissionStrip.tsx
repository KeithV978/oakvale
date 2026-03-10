'use client';

import React from 'react';
import { motion } from 'framer-motion'; 
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const cyclingWords = ['learning.', 'self-discovery.'];

const MissionCyclingText = ({ isInView }: { isInView: boolean }) => {
  const [wordIndex, setWordIndex] = React.useState(0);

  React.useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % cyclingWords.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <motion.span
      key={wordIndex}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="inline-block text-health-primary"
    >
      {cyclingWords[wordIndex]}
    </motion.span>
  );
};

export default function MissionStrip() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section ref={ref} className="section bg-white">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        //   className="max-w-4xl"
        >

            <div className="flex gap-4 justify-between items-center flex-col md:flex-row">
                <motion.div 
                  className='w-full md:w-[25%]'
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                >
                    <img src="/freepik__generate-an-image-that-shows-communitybased-learni__73928.png" alt="Mission Illustration" className="w-64 h-auto mr-12 hidden md:block rounded-lg shadow-lg" />
                </motion.div>
                <div className="w-full md:w-[70%]">
                {/* Section Label */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-sm font-semibold uppercase tracking-widest text-health-primary mb-4"
                >
                    Our Purpose
                </motion.p>

                {/* Pull Quote */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="flex items-start gap-4"
                > 
                    <h2 className="w-full text-4xl md:text-5xl font-bold text-navy-900 mb-8 leading-tight">
                        Changing lives, communities, organisations through <br/> <MissionCyclingText isInView={isInView} />
                    </h2>
                </motion.div>

                {/* Body Copy */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.25 }}
                    className="space-y-6"
                >
                    <p className="text-lg text-navy-900 leading-relaxed">
                    Our mission is to provide evidence-based learning that builds skills, raises standards and creates career pathways across the continent.
                    </p>

                    <div className="p-6 bg-health-primary/5 rounded-lg border-l-4 border-health-primary">
                    <p className="text-lg font-semibold text-navy-900 leading-relaxed">
                        Our approach is simple: pair high-quality global knowledge with deep local insight to create transformational shifts and opportunities.
                    </p>
                    </div>
                </motion.div>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
