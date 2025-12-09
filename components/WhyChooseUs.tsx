'use client';

import { motion } from 'framer-motion';

const features = [
  {
    icon: '🚀',
    title: 'Innovation First',
    description: 'Leveraging cutting-edge AI and technology to deliver future-ready solutions.'
  },
  {
    icon: '⚡',
    title: 'Fast Delivery',
    description: 'Agile development process ensuring quick turnaround without compromising quality.'
  },
  {
    icon: '🎯',
    title: 'Client-Centric',
    description: 'Your success is our priority. We tailor solutions to meet your unique needs.'
  },
  {
    icon: '🛡️',
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security and 99.9% uptime guarantee for peace of mind.'
  },
  {
    icon: '💡',
    title: 'Expert Team',
    description: 'Skilled professionals with years of experience in latest technologies.'
  },
  {
    icon: '🌍',
    title: 'Global Reach',
    description: 'Serving clients worldwide with 24/7 support and multilingual capabilities.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-32 bg-white dark:bg-black overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 text-black dark:text-white" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6 px-5 py-2 bg-black/5 dark:bg-white/5 rounded-full border border-black/10 dark:border-white/10">
            <span className="text-xs font-medium text-black dark:text-white tracking-widest uppercase">Why Us</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-light text-black dark:text-white mb-6 tracking-tighter">
            Why <span className="italic font-extralight">Choose Us</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light text-base">
            Partner with a team that combines innovation, expertise, and dedication
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-black p-10 rounded-3xl border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 hover:shadow-xl transition-all duration-500 h-full text-center group cursor-pointer"
            >
              <div className="text-5xl mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium text-black dark:text-white mb-4 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
