'use client';

import { motion } from 'framer-motion';

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

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-primary dark:text-white mb-16"
        >
          Solutions We Provide
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ x: 10 }}
              className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
            >
              <span className="text-secondary text-xl">•</span>
              <span className="text-lg">{solution}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
