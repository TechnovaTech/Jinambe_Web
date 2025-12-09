'use client';

import { motion } from 'framer-motion';

const industries = [
  { 
    name: 'IT Industry', 
    description: 'Delivering cutting-edge software and technology solutions',
    image: '/industries/it.jpg', 
    icon: '💻' 
  },
  { 
    name: 'E commerce', 
    description: 'Enhancing online retail platforms for seamless customer experiences',
    image: '/industries/ecommerce.jpg', 
    icon: '🛒' 
  },
  { 
    name: 'Manufacturing', 
    description: 'Streamlining operations through smart technology integration',
    image: '/industries/manufacturing.jpg', 
    icon: '🏭' 
  },
  { 
    name: 'Healthcare', 
    description: 'Providing innovative digital tools to improve patient care and management',
    image: '/industries/healthcare.jpg', 
    icon: '⚕️' 
  }
];

export default function Industries() {
  return (
    <section id="industries" className="relative py-32 bg-gray-50 dark:bg-gray-950 overflow-hidden">
      {/* Striped Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, currentColor 0px, currentColor 2px, transparent 2px, transparent 40px)' }} className="text-black dark:text-white"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6 px-5 py-2 bg-black/5 dark:bg-white/5 rounded-full border border-black/10 dark:border-white/10">
            <span className="text-xs font-medium text-black dark:text-white tracking-widest uppercase">Industries</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-light text-black dark:text-white mb-6 tracking-tighter">
            Industries We <span className="italic font-extralight">Serve</span>
          </h2>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white dark:bg-black backdrop-blur-sm rounded-3xl border border-black/10 dark:border-white/10 transition-all duration-700 group cursor-pointer overflow-hidden h-full"
              >
                {/* Expanding Circle Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-black/5 dark:bg-white/5 rounded-full group-hover:w-[200%] group-hover:h-[200%] transition-all duration-1000"></div>
                
                {/* Top Corner Fold */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-black/10 dark:border-t-white/10 border-r-transparent group-hover:border-t-black/20 dark:group-hover:border-t-white/20 transition-all duration-700"></div>
                
                <div className="relative p-8 text-center space-y-4 z-10 group-hover:-translate-y-2 transition-transform duration-700">
                  <div className="w-20 h-20 mx-auto mb-4 bg-black/5 dark:bg-white/5 rounded-full flex items-center justify-center group-hover:bg-black/10 dark:group-hover:bg-white/10 group-hover:rounded-none transition-all duration-700">
                    <span className="text-4xl group-hover:scale-125 transition-transform duration-700">
                      {industry.icon}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-black dark:text-white tracking-tight">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
