'use client';

import { useState } from 'react';
import { useTheme } from './ThemeProvider';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="fixed top-0 w-full bg-gray-50/90 dark:bg-black/80 backdrop-blur-3xl z-50 border-b border-black/10 dark:border-white/5 shadow-sm">
      
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group cursor-pointer">
            <img 
              src="/logo.png" 
              alt="Jinambe Technologies" 
              className="h-16 w-auto group-hover:scale-105 transition-transform"
            />
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="relative px-5 py-2.5 text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-400 transition-all duration-500 group font-medium text-sm"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-black dark:bg-white group-hover:w-full transition-all duration-500"></div>
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="relative p-3 rounded-2xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 hover:rotate-180 transition-all duration-700 group border border-black/5 dark:border-white/5"
              aria-label="Toggle theme"
              suppressHydrationWarning
            >
              <span className="relative text-xl">{theme === 'light' ? '🌙' : '☀️'}</span>
            </button>

            

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 border border-black/5 dark:border-white/5"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-black/10 dark:border-white/10 space-y-2">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition font-semibold"
              >
                {item.name}
              </a>
            ))}
            <button className="w-full mt-4 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl font-bold hover:scale-105 transition-transform">
              Get Started →
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
