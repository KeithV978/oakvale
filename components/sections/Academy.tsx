'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Rocket } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Academy() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="section bg-health-primary text-white relative overflow-hidden"
    >
      {/* Photo Stack Effect - Bottom Left */}
      <div className="absolute bottom-0 left-0 w-150 h-80 pointer-events-none">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, rotate: -15, y: 50 }}
            animate={isInView ? { opacity: 1, rotate: -5 + index * 3, y: 0 } : { opacity: 0, rotate: -15, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
            className="absolute w-48 h-56 rounded-lg overflow-hidden shadow-2xl"
            style={{
              left: `${index * 20}px`,
              bottom: `${index * 15}px`,
              zIndex: 10 - index,
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-blue-200 via-blue-100 to-blue-50 flex items-center justify-center border-4 border-white">
              <div className="text-center">
                <div className="text-4xl mb-2">📸</div>
                <p className="text-sm text-gray-600 font-semibold">Photo {index + 1}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Empowering Individual Careers</h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed opacity-95"
          >
            Are you an individual health professional looking to advance your future? Join a community
            of dedicated learners accessing our high-quality, self-paced courses. Whether you are
            building a career or starting a business in health and care, we provide the knowledge to
            help you take the next step.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link
              href="https://academy.oakvale.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 bg-health-secondary text-white font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Go to Oakvale Academy
              <motion.div whileHover={{ rotate: 45, x: 4 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Rocket size={20} />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
