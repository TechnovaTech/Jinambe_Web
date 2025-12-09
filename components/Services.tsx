'use client';

import { motion } from 'framer-motion';

const services = [
  {
    icon: '🌐',
    title: 'Web Development',
    description: 'Custom web applications built with cutting-edge technologies for optimal performance and user experience.'
  },
  {
    icon: '📱',
    title: 'App Development',
    description: 'Native and cross-platform mobile applications that deliver seamless experiences across all devices.'
  },
  {
    icon: '💻',
    title: 'Software Development',
    description: 'Enterprise-grade software solutions tailored to your business needs and workflows.'
  },
  {
    icon: '🤖',
    title: 'Artificial Intelligence',
    description: 'AI-powered solutions including machine learning, NLP, and intelligent automation systems.'
  },
  {
    icon: '📊',
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies to boost your online presence and drive growth.'
  },
  {
    icon: '🛒',
    title: 'Shopify Development',
    description: 'Complete e-commerce solutions with custom Shopify stores and integrations.'
  },
  {
    icon: '⚙️',
    title: 'ERP/CRM',
    description: 'Streamline operations with customized ERP and CRM systems for your business.'
  },
  {
    icon: '☁️',
    title: 'Cloud Computing',
    description: 'Scalable cloud infrastructure and migration services for modern businesses.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-16 bg-gray-50 dark:bg-gray-950 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-40 left-20 w-96 h-96 bg-black dark:bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-black dark:bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6 px-5 py-2 bg-black/5 dark:bg-white/5 rounded-full border border-black/10 dark:border-white/10">
            <span className="text-xs font-medium text-black dark:text-white tracking-widest uppercase">What We Offer</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-light text-black dark:text-white mb-6 tracking-tighter">
            Our <span>Services</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light text-base">
            Comprehensive digital solutions powered by cutting-edge technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white dark:bg-black backdrop-blur-sm p-8 rounded-3xl border border-black/10 dark:border-white/10 transition-all duration-700 cursor-pointer overflow-hidden"
            >
              {/* Sliding Border Effect */}
              <div className="absolute inset-0 rounded-3xl">
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-black dark:bg-white group-hover:w-full transition-all duration-700"></div>
                <div className="absolute top-0 right-0 w-[2px] h-0 bg-black dark:bg-white group-hover:h-full transition-all duration-700 delay-200"></div>
                <div className="absolute bottom-0 right-0 w-0 h-[2px] bg-black dark:bg-white group-hover:w-full transition-all duration-700 delay-400"></div>
                <div className="absolute bottom-0 left-0 w-[2px] h-0 bg-black dark:bg-white group-hover:h-full transition-all duration-700 delay-600"></div>
              </div>
              
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-0 h-0 bg-black dark:bg-white opacity-5 group-hover:w-20 group-hover:h-20 transition-all duration-700 rounded-bl-full"></div>
              
              <div className="relative z-10 text-center group-hover:scale-105 transition-transform duration-700">
                <div className="w-16 h-16 mx-auto mb-6 bg-black/5 dark:bg-white/5 rounded-2xl flex items-center justify-center group-hover:rounded-full group-hover:rotate-12 transition-all duration-700">
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-700">
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-lg font-medium text-black dark:text-white mb-3 transition tracking-tight group-hover:tracking-wide">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
