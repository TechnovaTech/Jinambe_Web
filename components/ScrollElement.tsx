'use client';

import { useEffect, useState } from 'react';

export default function ScrollElement() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-32 h-32 bg-gray-400 dark:bg-gray-600 shadow-2xl z-10"
      style={{
        transform: `translateY(-50%) translateX(-50%) rotate(${scrollY * 0.2}deg)`
      }}
    />
  );
}