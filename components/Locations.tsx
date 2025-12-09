'use client';

import { motion } from 'framer-motion';

const locations = [
  'Toronto', 'New York', 'Florida', 'France', 'Westminster', 'Germany',
  'Pune', 'Dubai', 'Tanzania', 'Gujarat', 'Mumbai', 'Bangalore', 'China'
];

export default function Locations() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-light text-center text-black dark:text-white mb-20 tracking-tighter"
        >
          Our Covered Locations
        </motion.h2>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img 
              src="/location.png" 
              alt="Our Covered Locations" 
              className="w-full h-auto max-w-4xl dark:hidden"
            />
            <img 
              src="/darklocation.png" 
              alt="Our Covered Locations" 
              className="w-full h-auto max-w-4xl hidden dark:block"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
