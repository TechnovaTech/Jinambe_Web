'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    setParticles(
      [...Array(80)].map(() => ({
        size: Math.random() * 8 + 4,
        left: Math.random() * 100,
        top: Math.random() * 100,
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
        scale: Math.random() + 0.5,
        duration: Math.random() * 10 + 10
      }))
    );
  }, []);

  return (
    <section className="relative flex items-center justify-center pt-20 pb-0 bg-white dark:bg-black" style={{ minHeight: '80vh' }}>
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute bg-black/60 dark:bg-white/40 rounded-full shadow-sm"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              x: [0, particle.x, 0],
              y: [0, particle.y, 0],
              scale: [1, particle.scale, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      {/* Minimal Geometric Accents */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] border border-black/20 dark:border-white/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] border border-black/20 dark:border-white/20 rounded-full"
        />
      </div>

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
