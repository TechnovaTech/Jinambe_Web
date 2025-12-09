'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Monark University',
    description: 'Monark University empowers future leaders with world-class education and innovation, fostering curiosity, critical thinking, and excellence for career success.',
    tech: ['React.js', 'Node.js', 'Mongo DB', 'VPS Server'],
    image: '/p1.png',
    gradient: 'from-purple-500/20 to-blue-500/20',
    link: 'https://monarkuni.ac.in/'
  },
  {
    name: 'Nem Realty',
    description: 'Nem Realty is a modern real estate platform offering seamless property search, smart filters, and a smooth user experience for buyers, sellers, and renters.',
    tech: ['React.js', 'Node.js', 'Mongo DB', 'VPS Server'],
    image: '/p2.png',
    gradient: 'from-orange-500/20 to-red-500/20',
    link: 'https://nemrealty.com/'
  },
  {
    name: 'US Institute of 3D Technology',
    description: 'USI 3DT transforms industries with cutting-edge 3D serve technology, offering real-time rendering, collaboration, and secure data management for design and simulation.',
    tech: ['React.js', 'Node.js', 'Mongo DB', 'Cloudinary'],
    image: '/p3.png',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    link: 'https://usi3dt.org/'
  },
  {
    name: 'Reeja Jewels',
    description: 'Reeja Jewels is exquisite jewelry that blends traditional inspiration with modern design, celebrating individuality and timeless elegance.',
    tech: ['React.js', 'Node.js', 'Mongo DB', 'VPS Server', 'Razorpay'],
    image: '/p4.jpg',
    gradient: 'from-pink-500/20 to-purple-500/20',
    link: 'https://reejajewels.com/'
  },
  {
    name: 'IZI MOROCCO',
    description: 'IZI Morocco: Dynamic, location-based mobile game that transforms real-world exploration into interactive, task-driven quests and challenges.',
    tech: ['React Native', 'Node.js', 'Mongo DB', 'AWS(EC2)'],
    image: '/p5.png',
    gradient: 'from-yellow-500/20 to-orange-500/20',
    link: 'https://play.google.com/store/apps/details?id=com.adcl.builtup&hl=en_IN'
  },
  {
    name: 'Vaishnav Setu',
    description: 'Vaishnav Setu is the essential digital hub for the Vaishnav Samaj, enabling seamless member networking, event coordination, and the secure sharing of information and cultural updates.',
    tech: ['React Native', 'Node.js', 'Mongo DB', 'Cloudinary'],
    image: '/p6.png',
    gradient: 'from-orange-500/20 to-amber-500/20',
    link: 'https://anandastrovastu.in/'
  },
  {
    name: 'PIXELROOT - Auto UPI',
    description: 'Pixelraoot a powerful platform delivering fast recharges, easy bill payments, and secure digital transactions—all in one seamless experience.',
    tech: ['React Native', 'Node.js', 'Mongo DB', 'AWS(EC2)'],
    image: '/p7.png',
    gradient: 'from-purple-500/20 to-pink-500/20',
    link: 'https://pixelrootpay.com/'
  },
  {
    name: 'Yaari - Dating App',
    description: 'Yaari is a smart and seamless dating platform built to bring people closer through intuitive matchmaking and secure, real-time conversations.',
    tech: ['React Native', 'Node.js', 'Mongo DB', 'Cloudinary'],
    image: '/p8.png',
    gradient: 'from-red-500/20 to-orange-500/20',
    link: 'https://anandastrovastu.in/'
  }
];

export default function Projects() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-white dark:bg-black">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gray-50 dark:bg-gray-950"></div>
          <div className="absolute top-20 -left-20 w-96 h-96 bg-black/10 dark:bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-80 h-80 bg-black/15 dark:bg-white/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-black/20 dark:bg-white/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
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
              className="inline-block mb-6 px-6 py-2 bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-full border-2 border-black/20 dark:border-white/20 cursor-default"
            >
              <span className="text-black dark:text-white font-bold">💼 Our Portfolio</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-6xl md:text-8xl font-light text-black dark:text-white mb-8 leading-tight tracking-tighter"
            >
              Our Projects
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto font-light"
            >
              Discover our innovative solutions that transform businesses and drive digital success
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="relative py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white dark:bg-black backdrop-blur-sm rounded-3xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-700 border border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20"
            >
              
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className="relative p-6 space-y-4">
                <h3 className="text-lg font-medium text-black dark:text-white transition tracking-tight">
                  {project.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full text-sm font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group/btn border-2 border-black dark:border-white"
                >
                  <span>Live Project</span>
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>

                <div className="pt-4 border-t border-black/10 dark:border-white/10">
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Technology Stack
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, i) => (
                      <div key={i} className="flex flex-col items-center group/tech">
                        <div className="w-10 h-10 bg-black/5 dark:bg-white/5 rounded-lg flex items-center justify-center mb-1 group-hover/tech:scale-110 transition-transform border border-black/10 dark:border-white/10">
                          <span className="text-xl">
                            {tech.includes('React') ? '⚛️' : 
                             tech.includes('Node') ? '🟢' : 
                             tech.includes('Mongo') ? '🍃' : 
                             tech.includes('AWS') ? '☁️' :
                             tech.includes('Cloud') ? '☁️' :
                             tech.includes('VPS') ? '🖥️' : '💳'}
                          </span>
                        </div>
                        <span className="text-[10px] text-gray-600 dark:text-gray-400 text-center">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      </section>
    </>
  );
}
