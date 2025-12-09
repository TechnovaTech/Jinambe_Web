'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <main className="bg-white dark:bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wider">Get In Touch</p>
            <h1 className="text-5xl md:text-7xl font-light text-black dark:text-white mb-6 leading-tight">
              Let's Build Something<br/><span className="text-gray-400 dark:text-gray-600">Amazing Together.</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 font-light text-lg max-w-2xl mx-auto">
              Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-black dark:text-white mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-950 border border-black/10 dark:border-white/10 rounded-2xl text-black dark:text-white focus:border-black dark:focus:border-white outline-none transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black dark:text-white mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-950 border border-black/10 dark:border-white/10 rounded-2xl text-black dark:text-white focus:border-black dark:focus:border-white outline-none transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black dark:text-white mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-950 border border-black/10 dark:border-white/10 rounded-2xl text-black dark:text-white focus:border-black dark:focus:border-white outline-none transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black dark:text-white mb-2">
                    Your Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={6}
                    className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-950 border border-black/10 dark:border-white/10 rounded-2xl text-black dark:text-white focus:border-black dark:focus:border-white outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform duration-300"
                >
                  Send Message →
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <div className="bg-gray-50 dark:bg-gray-950 p-8 rounded-2xl border border-black/10 dark:border-white/10">
                <h3 className="text-sm font-medium text-black dark:text-white mb-2 uppercase tracking-wider">Email</h3>
                <a href="mailto:info@jinambe.com" className="text-lg text-gray-600 dark:text-gray-400 font-light hover:text-black dark:hover:text-white transition-colors">
                  info@jinambe.com
                </a>
              </div>

              <div className="bg-gray-50 dark:bg-gray-950 p-8 rounded-2xl border border-black/10 dark:border-white/10">
                <h3 className="text-sm font-medium text-black dark:text-white mb-2 uppercase tracking-wider">Phone</h3>
                <a href="tel:+917777994472" className="text-lg text-gray-600 dark:text-gray-400 font-light hover:text-black dark:hover:text-white transition-colors">
                  +91 77779 94472
                </a>
              </div>

             
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
