'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { projects } from '@/lib/projects';

export default function ProjectDetailPage() {
  const params = useParams();
  const project = projects.find(p => p.id === params.id);

  if (!project) {
    return <div>Project not found</div>;
  }

  const techDescriptions: Record<string, string> = {
    'React.js': 'Modern JavaScript library for building interactive user interfaces',
    'React Native': 'Cross-platform mobile app development framework',
    'Node.js': 'JavaScript runtime for scalable server-side applications',
    'Mongo DB': 'NoSQL database for flexible and scalable data storage',
    'VPS Server': 'Virtual private server for reliable hosting',
    'AWS(EC2)': 'Amazon cloud computing platform for scalable infrastructure',
    'Cloudinary': 'Cloud-based media management and optimization',
    'Razorpay': 'Payment gateway integration for secure transactions'
  };

  return (
    <main className="bg-white dark:bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors mb-12">
            ← Back to Projects
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-5xl md:text-6xl font-light text-black dark:text-white mb-6 leading-tight">
                Discover the Project<br/>We Are <span className="text-gray-400 dark:text-gray-600">Proud Of.</span>
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-8 font-light leading-relaxed">
                {project.description}
              </p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-medium hover:px-10 transition-all duration-500"
              >
                See Project →
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-black dark:border-white rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 grid grid-cols-3 gap-1">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-black dark:bg-white rounded-full"></div>
                ))}
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-black/10 dark:border-white/10">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-32 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wider">Our Approach</p>
            <h2 className="text-4xl md:text-5xl font-light text-black dark:text-white">
              We Make Every Project Feel Personal<br/>because <span className="text-gray-500 dark:text-gray-400">Our Clients Matter.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-black p-8 rounded-2xl border border-black/10 dark:border-white/10"
            >
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-medium text-black dark:text-white mb-3">Creative Ideas</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-light leading-relaxed">
                Innovative solutions tailored to your unique business needs and goals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-black p-8 rounded-2xl border border-black/10 dark:border-white/10"
            >
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-medium text-black dark:text-white mb-3">Strategy</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-light leading-relaxed">
                Data-driven strategies that deliver measurable results and ROI.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-black p-8 rounded-2xl border border-black/10 dark:border-white/10"
            >
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-medium text-black dark:text-white mb-3">Developers</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-light leading-relaxed">
                Expert team dedicated to bringing your vision to life with precision.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-32 bg-white dark:bg-black">
        <div className="container mx-auto px-4 max-w-7xl">
          <h3 className="text-3xl font-light text-black dark:text-white mb-12 tracking-tight">Technology Stack</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.tech.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 bg-gray-50 dark:bg-gray-950 border border-black/10 dark:border-white/10 rounded-2xl hover:border-black/30 dark:hover:border-white/30 transition-all duration-500"
              >
                <h4 className="text-lg font-medium text-black dark:text-white mb-2">{tech}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-light">
                  {techDescriptions[tech] || 'Modern technology for optimal performance'}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
