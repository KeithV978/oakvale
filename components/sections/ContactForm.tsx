'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface FormData {
  firstName: string;
  lastName: string;
  organisation: string;
  email: string;
  enquiryType: string;
  projectDescription: string;
}

export default function ContactForm() {
  const { ref, isInView } = useScrollAnimation();
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    organisation: '',
    email: '',
    enquiryType: 'Workforce Training Programme',
    projectDescription: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Replace this with your actual API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage('Thank you! We\'ve received your enquiry and will be in touch soon.');
        setFormData({
          firstName: '',
          lastName: '',
          organisation: '',
          email: '',
          enquiryType: 'Workforce Training Programme',
          projectDescription: '',
        });
      } else {
        setSubmitMessage('Something went wrong. Please try again or email us directly.');
      }
    } catch (error) {
      setSubmitMessage('Unable to submit form. Please try again or email us directly.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-health-primary focus:ring-2 focus:ring-health-primary/20 transition-all text-navy-900 placeholder-gray-500';
  const labelClasses = 'block text-sm font-semibold text-navy-900 mb-2 uppercase tracking-wide';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
          className="max-w-2xl mx-auto"
        >
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-lg border border-gray-200"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {/* Name Row */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="firstName" className={labelClasses}>
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="Your first name"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="lastName" className={labelClasses}>
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="Your last name"
                />
              </motion.div>
            </div>

            {/* Organisation and Email Row */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="organisation" className={labelClasses}>
                  Organisation
                </label>
                <input
                  type="text"
                  id="organisation"
                  name="organisation"
                  value={formData.organisation}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="Your organisation name"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="email" className={labelClasses}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="your.email@example.com"
                />
              </motion.div>
            </div>

            {/* Enquiry Type */}
            <motion.div variants={itemVariants} className="mb-6">
              <label htmlFor="enquiryType" className={labelClasses}>
                Type of Enquiry
              </label>
              <select
                id="enquiryType"
                name="enquiryType"
                value={formData.enquiryType}
                onChange={handleChange}
                className={inputClasses}
              >
                <option>Workforce Training Programme</option>
                <option>Health Systems Strengthening / Curriculum</option>
                <option>Technology-Enabled Learning</option>
                <option>Proposal Partnership / Joint Bid</option>
                <option>General Partnership Enquiry</option>
              </select>
            </motion.div>

            {/* Project Description */}
            <motion.div variants={itemVariants} className="mb-6">
              <label htmlFor="projectDescription" className={labelClasses}>
                Tell us about your project
              </label>
              <textarea
                id="projectDescription"
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleChange}
                required
                rows={6}
                className={`${inputClasses} resize-none`}
                placeholder="Share details about your project, context, and what support you're looking for..."
              />
            </motion.div>

            {/* Submit Message */}
            {submitMessage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`mb-6 p-4 rounded-lg ${
                  submitMessage.includes('Thank you')
                    ? 'bg-green-50 text-green-700 border border-green-200'
                    : 'bg-orange-50 text-orange-700 border border-orange-200'
                }`}
              >
                {submitMessage}
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.div variants={itemVariants}>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-health-primary to-health-primary/90 text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wide text-sm"
              >
                {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                {!isSubmitting && <Send size={20} />}
              </button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
