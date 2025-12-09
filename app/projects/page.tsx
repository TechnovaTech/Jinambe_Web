'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { projects } from '@/lib/projects';

export default function ProjectsPage() {
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
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="inline-block mb-6 px-5 py-2 bg-black/5 dark:bg-white/5 rounded-full border border-black/10 dark:border-white/10">
              <span className="text-xs font-medium text-black dark:text-white tracking-widest uppercase">💼 Our Portfolio</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-light text-black dark:text-white mb-8 leading-tight tracking-tighter">
              Our <span className="italic font-extralight">Projects</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto font-light">
              Discover our innovative solutions that transform businesses and drive digital success
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/projects/${project.id}`}>
                  <div className="group relative bg-white dark:bg-black rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-all duration-700 hover:shadow-xl cursor-pointer">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 right-4 px-3 py-1 bg-black/80 dark:bg-white/80 text-white dark:text-black rounded-full text-xs font-medium">
                        {project.category}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-medium text-black dark:text-white mb-3 tracking-tight group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-2 font-light mb-4">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-black/5 dark:bg-white/5 rounded-full text-xs font-light text-black dark:text-white">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
