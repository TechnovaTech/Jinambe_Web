'use client';

import { motion } from 'framer-motion';

export default function Hero() {

  return (
    <section className="relative flex items-center justify-center pt-20 pb-0 bg-white dark:bg-black" style={{ minHeight: '80vh' }}>
      {/* Background Video */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero.mp4" type="video/mp4" />
        <source src="/hero.webm" type="video/webm" />
      </video>
      {/* Video Overlay */}
      <div className="absolute inset-0 bg-white/70 dark:bg-black/70"></div>


      {/* Content - Centered */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl lg:text-9xl font-light text-black dark:text-white mb-6 tracking-tighter leading-[0.9]"
        >
          Digital
          <br />
          <span>Transformation</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto font-light tracking-wide"
        >
          Your Complete Digital Transformation Partner
        </motion.p>

        <motion.a
          href="/projects"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(74, 95, 217, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
          className="relative overflow-hidden bg-black dark:bg-white text-white dark:text-black px-12 py-5 rounded-full text-base font-medium transition-all duration-500 inline-flex items-center gap-3 group hover:gap-5 hover:px-14"
        >
          Live Project
          <motion.svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="group-hover:rotate-90 transition-transform duration-300"
          >
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 16 16 12 12 8"/>
            <line x1="8" y1="12" x2="16" y2="12"/>
          </motion.svg>
        </motion.a>
      </div>

     
    </section>
  );
}
