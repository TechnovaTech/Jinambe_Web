'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Industries from '@/components/Industries';
import Reviews from '@/components/Reviews';
import Locations from '@/components/Locations';
import Footer from '@/components/Footer';
import FloatingParticles from '@/components/FloatingParticles';

export default function Home() {
  return (
    <main className="relative">
      <FloatingParticles />
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Industries />
      <Reviews />
      <Locations />
      <Footer />
    </main>
  );
}
