'use client';

import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useTheme } from './ThemeProvider';

function Scene({ scrollY, isDark }: { scrollY: number, isDark: boolean }) {
  const shapeRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (shapeRef.current) {
      // Continuous rotation + scroll-based rotation
      shapeRef.current.rotation.x = state.clock.elapsedTime * 0.18 + scrollY * 0.0025;
      shapeRef.current.rotation.y = state.clock.elapsedTime * 0.12 + scrollY * 0.002;
      shapeRef.current.rotation.z = state.clock.elapsedTime * 0.22 + scrollY * 0.0015;
      shapeRef.current.position.y = Math.sin(scrollY * 0.0035) * 0.25;
    }
  });

  const shapeColor = isDark ? '#E5E7EB' : '#D1D5DB';

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 4, 4]} intensity={0.9} />
      <pointLight position={[-2, 2, 2]} intensity={0.4} />
      
      {/* Large professional torus shape */}
      <mesh ref={shapeRef} position={[0, 0, 0]}>
        <torusGeometry args={[2.2, 0.6, 20, 120]} />
        <meshStandardMaterial 
          color={shapeColor} 
          transparent 
          opacity={0.7}
          roughness={0.4}
          metalness={0.2}
        />
      </mesh>
    </>
  );
}

export default function LocationsThree() {
  const [scrollY, setScrollY] = useState(0);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 4], fov: 60 }}>
        <Scene scrollY={scrollY} isDark={isDark} />
      </Canvas>
    </div>
  );
}