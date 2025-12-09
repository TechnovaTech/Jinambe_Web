'use client';

import { motion } from 'framer-motion';

const industries = [
  {
    title: 'IT Industry',
    description: 'Delivering cutting-edge software and technology solutions',
    icon: '💻'
  },
  {
    title: 'E commerce',
    description: 'Enhancing online retail platforms for seamless customer experiences',
    icon: '🛒'
  },
  {
    title: 'Manufacturing',
    description: 'Streamlining operations through smart technology integration',
    icon: '🏭'
  },
  {
    title: 'Healthcare',
    description: 'Providing innovative digital tools to improve patient care and management',
    icon: '⚕️'
  }
];

const solutions = [
  'Web Development',
  'App Development',
  'Software Development',
  'Artificial Intelligence',
  'Digital Marketing',
  'Social media Marketing',
  'Shopify Development',
  'ERP/CRM',
  'Cloud Computing'
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white dark:bg-black py-16">
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-20 -right-40 w-80 h-80 bg-black dark:bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -left-40 w-96 h-96 bg-black dark:bg-white rounded-full blur-3xl"></div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-black/10 dark:border-white/10 rounded-full"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6 px-5 py-2 bg-black/5 dark:bg-white/5 rounded-full border border-black/10 dark:border-white/10">
            <span className="text-xs font-medium text-black dark:text-white tracking-widest uppercase">About Us</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-light text-black dark:text-white tracking-tighter mb-6">
            <span>Jinambe</span> Technologies
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-black/10 dark:border-white/10"
          >
            <img 
              src="/aboutus.jpg" 
              alt="About Jinambe Technologies" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg font-light">
              Jinambe Technologies is your complete Digital Transformation Partner, offering end-to-end solutions from expert Web/Mobile App Development and scalable Cloud Computing to essential enterprise systems like Shopify and Tailored ERP.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base font-light">
              We ensure market success with Digital & Social Media Marketing and provide specialized, secure, and compliant operational excellence through our Healthcare IT services.
            </p>
            <div className="pt-6">
              <a href="/about" className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-medium hover:gap-4 transition-all duration-500">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
