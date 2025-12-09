'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative bg-black dark:bg-white text-white dark:text-black overflow-hidden border-t border-white/10 dark:border-black/10">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-96 h-96 bg-white dark:bg-black rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white dark:bg-black rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img src="/logo.png" alt="Jinambe Technologies" className="h-16 mb-4" />
            <p className="text-gray-300 dark:text-gray-700 text-sm leading-relaxed mb-4 font-medium">
              Your Complete Digital Transformation Partner, delivering innovative solutions worldwide.
            </p>

          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-medium text-base mb-6 tracking-tight">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black transition-all duration-300 font-light text-sm">Home</a></li>
              <li><a href="/about" className="text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black transition-all duration-300 font-light text-sm">About Us</a></li>
              <li><a href="/projects" className="text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black transition-all duration-300 font-light text-sm">Projects</a></li>
              <li><a href="/contact" className="text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black transition-all duration-300 font-light text-sm">Contact</a></li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-medium text-base mb-6 tracking-tight">Services</h4>
            <ul className="space-y-3 text-gray-400 dark:text-gray-600 font-light text-sm">
              <li>Web Development</li>
              <li>App Development</li>
              <li>Cloud Computing</li>
              <li>Digital Marketing</li>
              <li>AI Solutions</li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-medium text-base mb-6 tracking-tight">Contact Us</h4>
            <ul className="space-y-3 text-gray-400 dark:text-gray-600 font-light text-sm">
              <li className="flex items-start gap-2">
                <span>📧</span>
                <span>info@jinambe.com</span>
              </li>
              <li className="flex items-start gap-2">
                <span>📞</span>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>123 Tech Street, Silicon Valley, CA 94025</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 dark:border-black/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 dark:text-gray-600 text-sm font-medium">
              &copy; 2024 Jinambe Technologies. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400 dark:text-gray-600 font-medium">
              <a href="#" className="hover:text-white dark:hover:text-black transition">Privacy Policy</a>
              <a href="#" className="hover:text-white dark:hover:text-black transition">Terms of Service</a>
              <a href="#" className="hover:text-white dark:hover:text-black transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
