'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const reviews = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc',
    image: '👩‍💼',
    rating: 5,
    review: 'Jinambe Technologies transformed our digital presence with their innovative AI solutions. The team is professional, responsive, and truly understands modern technology.'
  },
  {
    name: 'Michael Chen',
    role: 'Founder, E-Shop Global',
    image: '👨‍💻',
    rating: 5,
    review: 'Outstanding work on our e-commerce platform! Their expertise in Shopify and custom development exceeded our expectations. Highly recommended!'
  },
  {
    name: 'Emily Rodriguez',
    role: 'CTO, HealthCare Plus',
    image: '👩‍⚕️',
    rating: 5,
    review: 'The healthcare IT solutions provided by Jinambe are top-notch. Secure, compliant, and user-friendly. They delivered exactly what we needed.'
  },
  {
    name: 'David Kumar',
    role: 'Director, Real Estate Pro',
    image: '👨‍💼',
    rating: 5,
    review: 'Exceptional service! Our real estate platform is now faster, more intuitive, and generates better leads. The ROI has been incredible.'
  },
  {
    name: 'Lisa Anderson',
    role: 'Marketing Head, Fashion Hub',
    image: '👩‍🎨',
    rating: 5,
    review: 'Their digital marketing strategies combined with AI-driven insights helped us triple our online sales. Truly a game-changer for our business.'
  },
  {
    name: 'James Wilson',
    role: 'Owner, Food Delivery Co',
    image: '👨‍🍳',
    rating: 5,
    review: 'The mobile app they developed is smooth, fast, and our customers love it. Great communication throughout the project. Will work with them again!'
  }
];

export default function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollInterval: NodeJS.Timeout;
    let isPaused = false;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (!isPaused && scrollContainer) {
          const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
          const currentScroll = scrollContainer.scrollLeft;
          
          if (currentScroll >= maxScroll - 1) {
            scrollContainer.scrollLeft = 0;
          } else {
            scrollContainer.scrollLeft += 2;
          }
        }
      }, 30);
    };

    const handleMouseEnter = () => {
      isPaused = true;
    };

    const handleMouseLeave = () => {
      isPaused = false;
    };

    const handleTouchStart = () => {
      isPaused = true;
    };

    const handleTouchEnd = () => {
      isPaused = false;
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    scrollContainer.addEventListener('touchstart', handleTouchStart);
    scrollContainer.addEventListener('touchend', handleTouchEnd);
    startAutoScroll();

    return () => {
      clearInterval(scrollInterval);
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
        scrollContainer.removeEventListener('touchstart', handleTouchStart);
        scrollContainer.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, []);

  return (
    <section className="relative py-20 bg-gray-50 dark:bg-gray-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-96 h-96 bg-black dark:bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-black dark:bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light text-black dark:text-white mb-6 tracking-tighter">
            <span>Reviews</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light text-sm">
            Don't just take our word for it - hear what our clients have to say about their experience
          </p>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', scrollBehavior: 'smooth' }}
          >
            {[...reviews, ...reviews].map((review, index) => (
              <motion.div
                key={`review-${index}`}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white dark:bg-black backdrop-blur-sm p-8 rounded-3xl border border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20 transition-all duration-700 hover:shadow-lg w-[340px] flex-shrink-0"
              >
                
                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm">⭐</span>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-800 dark:text-gray-200 mb-4 leading-relaxed text-sm line-clamp-4 font-medium">
                    "{review.review}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-3 border-t border-black/10 dark:border-white/10">
                    <div className="text-2xl">{review.image}</div>
                    <div>
                      <h4 className="font-bold text-black dark:text-white text-sm">
                        {review.name}
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Auto-scroll Indicator */}
          <div className="text-center mt-4 text-xs text-gray-500 dark:text-gray-400">
            Auto-scrolling • Hover to pause
          </div>
        </div>
      </div>
    </section>
  );
}
