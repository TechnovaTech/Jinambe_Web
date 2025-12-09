'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const controls = animate(0, value, {
        duration: 2,
        onUpdate: (v) => setCount(Math.floor(v))
      });
      return controls.stop;
    }
  }, [isVisible, value]);

  return (
    <motion.div
      onViewportEnter={() => setIsVisible(true)}
      viewport={{ once: true }}
    >
      {count}{suffix}
    </motion.div>
  );
}

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '200+', label: 'Happy Clients' },
  { number: '50+', label: 'Team Members' },
  { number: '15+', label: 'Countries Served' }
];

const values = [
  {
    icon: '🎯',
    title: 'Innovation',
    description: 'We push boundaries with cutting-edge AI and technology solutions that drive real business transformation.'
  },
  {
    icon: '🤝',
    title: 'Integrity',
    description: 'Transparency and honesty guide every decision we make, building trust with our clients and partners.'
  },
  {
    icon: '⚡',
    title: 'Excellence',
    description: 'We deliver nothing but the best, ensuring quality and precision in every project we undertake.'
  },
  {
    icon: '🌟',
    title: 'Client Success',
    description: 'Your success is our mission. We go above and beyond to ensure you achieve your business goals.'
  }
];

const timeline = [
  { year: '2018', event: 'Founded', description: 'Jinambe Technologies was born with a vision to transform businesses through technology' },
  { year: '2019', event: 'First 50 Clients', description: 'Reached milestone of serving 50+ satisfied clients across multiple industries' },
  { year: '2020', event: 'Global Expansion', description: 'Expanded operations to serve clients in 10+ countries worldwide' },
  { year: '2022', event: 'AI Innovation', description: 'Launched AI-powered solutions, becoming leaders in intelligent automation' },
  { year: '2024', event: 'Industry Leader', description: 'Recognized as a top digital transformation partner with 500+ successful projects' }
];

const team = [
  { name: 'John Smith', role: 'CEO & Founder', image: '👨💼' },
  { name: 'Sarah Johnson', role: 'CTO', image: '👩💻' },
  { name: 'Michael Chen', role: 'Head of AI', image: '👨🔬' },
  { name: 'Emily Davis', role: 'Design Lead', image: '👩🎨' },
  { name: 'David Kumar', role: 'Operations Head', image: '👨💼' },
  { name: 'Lisa Anderson', role: 'Marketing Director', image: '👩💼' }
];

export default function AboutPage() {
  return (
    <main className="bg-white dark:bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-white dark:bg-black">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} className="text-black dark:text-white"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              className="inline-block mb-6 px-5 py-2 bg-black/5 dark:bg-white/5 rounded-full border border-black/10 dark:border-white/10 cursor-default"
            >
              <span className="text-black dark:text-white font-medium text-xs tracking-widest uppercase">🚀 Innovating Since 2018</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-6xl md:text-8xl font-light text-black dark:text-white mb-8 leading-tight tracking-tighter"
            >
              About Jinambe Technologies
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto font-light"
            >
              Empowering businesses worldwide with innovative AI-driven solutions and cutting-edge technology
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-32 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-light text-black dark:text-white mb-8 tracking-tighter">Our <span className="italic font-extralight">Story</span></h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 font-light">
                Founded in 2018, Jinambe Technologies emerged from a simple yet powerful vision: to bridge the gap between businesses and cutting-edge technology. What started as a small team of passionate developers has grown into a global force in digital transformation.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Today, we're proud to serve over 200 clients across 15+ countries, delivering innovative solutions that combine artificial intelligence, cloud computing, and modern development practices.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                Our journey is driven by one constant: an unwavering commitment to our clients' success and a passion for technological excellence.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl border border-black/10 dark:border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop&q=80" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-light text-black dark:text-white mb-2">
                <Counter value={500} suffix="+" />
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-light text-sm">Projects Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-light text-black dark:text-white mb-2">
                <Counter value={200} suffix="+" />
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-light text-sm">Happy Clients</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-light text-black dark:text-white mb-2">
                <Counter value={50} suffix="+" />
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-light text-sm">Team Members</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-light text-black dark:text-white mb-2">
                <Counter value={15} suffix="+" />
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-light text-sm">Countries Served</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white dark:bg-black p-10 rounded-3xl border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 relative overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-700"
            >
              <div className="text-5xl mb-6">🎯</div>
              <h3 className="text-2xl font-medium text-black dark:text-white mb-4 tracking-tight">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                To empower businesses of all sizes with innovative, AI-driven technology solutions that drive growth, efficiency, and competitive advantage in the digital age.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-black p-10 rounded-3xl border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 relative overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-700"
            >
              <div className="text-5xl mb-6">🔮</div>
              <h3 className="text-2xl font-medium text-black dark:text-white mb-4 tracking-tight">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                To be the world's most trusted digital transformation partner, recognized for innovation, excellence, and our unwavering commitment to client success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-6 px-5 py-2 bg-black/5 dark:bg-white/5 rounded-full border border-black/10 dark:border-white/10">
              <span className="text-xs font-medium text-black dark:text-white tracking-widest uppercase">What Drives Us</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-black dark:text-white mb-6 tracking-tighter">
              Core <span className="italic font-extralight">Values</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white dark:bg-black p-8 rounded-3xl border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-all duration-700 hover:shadow-xl cursor-pointer"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-medium text-black dark:text-white mb-3 tracking-tight">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-light">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-light text-black dark:text-white mb-6 tracking-tighter">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 font-light">
              Let's work together to bring your vision to life with cutting-edge technology
            </p>
            <a href="/contact" className="inline-block bg-black dark:bg-white text-white dark:text-black px-10 py-4 rounded-full font-medium text-base hover:px-12 transition-all duration-500 border-2 border-black dark:border-white">
              Get Started Today →
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
