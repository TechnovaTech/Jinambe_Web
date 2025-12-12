'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const LocationsThree = dynamic(() => import('./LocationsThree'), { ssr: false });

const locations = [
  'Toronto', 'New York', 'Florida', 'France', 'Westminster', 'Germany',
  'Pune', 'Dubai', 'Tanzania', 'Gujarat', 'Mumbai', 'Bangalore', 'China'
];

export default function Locations() {
  return (
    <section className="relative py-16 bg-gray-50 dark:bg-gray-950 overflow-hidden">
      {/* 3D Element - Top beside heading */}
      <div className="absolute left-0 top-4 -translate-x-1/5 w-72 h-72 pointer-events-none z-10">
        <LocationsThree />
      </div>
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
