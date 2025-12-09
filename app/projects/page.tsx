'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const projects = [
  {
    id: 'monark-university',
    name: 'Monark University',
    description: 'Monark University empowers future leaders with world-class education and innovation, fostering curiosity, critical thinking, and excellence for career success.',
    tech: ['React.js', 'Node.js', 'Mongo DB', 'VPS Server'],
    image: '/p1.png',
    link: 'https://monarkuni.ac.in/',
    category: 'Education'
  },
  {
    id: 'nem-realty',
    name: 'Nem Realty',
    description: 'Nem Realty is a modern real estate platform offering seamless property search, smart filters, and a smooth user experience for buyers, sellers, and renters.',
    tech: ['React.js', 'Node.js', 'Mongo DB', 'VPS Server'],
    image: '/p2.png',
    link: 'https://nemrealty.com/',
    category: 'Real Estate'
  },
  {
    id: 'usi-3dt',
    name: 'US Institute of 3D Technology',
    description: 'USI 3DT transforms industries with cutting-edge 3D serve technology, offering real-time rendering, collaboration, and secure data management for design and simulation.',
    tech: ['React.js', 'Node.js', 'Mongo DB', 'Cloudinary'],
    image: '/p3.png',
    link: 'https://usi3dt.org/',
    category: 'Technology'
  },
  {
    id: 'reeja-jewels',
    name: 'Reeja Jewels',
    description: 'Reeja Jewels is exquisite jewelry that blends traditional inspiration with modern design, celebrating individuality and timeless elegance.',
    tech: ['React.js', 'Node.js', 'Mongo DB', 'VPS Server', 'Razorpay'],
    image: '/p4.jpg',
    link: 'https://reejajewels.com/',
    category: 'E-commerce'
  },
  {
    id: 'izi-morocco',
    name: 'IZI MOROCCO',
    description: 'IZI Morocco: Dynamic, location-based mobile game that transforms real-world exploration into interactive, task-driven quests and challenges.',
    tech: ['React Native', 'Node.js', 'Mongo DB', 'AWS(EC2)'],
    image: '/p5.png',
    link: 'https://play.google.com/store/apps/details?id=com.adcl.builtup&hl=en_IN',
    category: 'Mobile App'
  },
  {
    id: 'vaishnav-setu',
    name: 'Vaishnav Setu',
    description: 'Vaishnav Setu is the essential digital hub for the Vaishnav Samaj, enabling seamless member networking, event coordination, and the secure sharing of information and cultural updates.',
    tech: ['React Native', 'Node.js', 'Mongo DB', 'Cloudinary'],
    image: '/p6.png',
    link: 'https://anandastrovastu.in/',
    category: 'Social Network'
  },
  {
    id: 'pixelroot',
    name: 'PIXELROOT - Auto UPI',
    description: 'Pixelraoot a powerful platform delivering fast recharges, easy bill payments, and secure digital transactions—all in one seamless experience.',
    tech: ['React Native', 'Node.js', 'Mongo DB', 'AWS(EC2)'],
    image: '/p7.png',
    link: 'https://pixelrootpay.com/',
    category: 'Fintech'
  },
  {
    id: 'yaari',
    name: 'Yaari - Dating App',
    description: 'Yaari is a smart and seamless dating platform built to bring people closer through intuitive matchmaking and secure, real-time conversations.',
    tech: ['React Native', 'Node.js', 'Mongo DB', 'Cloudinary'],
    image: '/p8.png',
    link: 'https://anandastrovastu.in/',
    category: 'Social'
  }
];

export { projects };

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
