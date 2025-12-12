'use client';

import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from './ThemeProvider';

function Scene({ scrollY, isDark }: { scrollY: number, isDark: boolean }) {
  const boxRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (boxRef.current) {
      // Continuous rotation + scroll-based rotation
      boxRef.current.rotation.x = state.clock.elapsedTime * 0.2 + scrollY * 0.003;
      boxRef.current.rotation.y = state.clock.elapsedTime * 0.3 + scrollY * 0.002;
      boxRef.current.rotation.z = state.clock.elapsedTime * 0.1 + scrollY * 0.001;
      boxRef.current.position.y = Math.sin(scrollY * 0.005) * 0.3;
    }
  });

  const shapeColor = isDark ? '#E5E7EB' : '#D1D5DB'; // Light dull gray

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 3, 3]} intensity={0.6} />
      
      {/* Subtle dodecahedron shape */}
      <mesh ref={boxRef} position={[0, 0, 0]}>
        <dodecahedronGeometry args={[1.8]} />
        <meshStandardMaterial 
          color={shapeColor} 
          transparent 
          opacity={0.5}
          roughness={0.8}
          metalness={0.0}
        />
      </mesh>
    </>
  );
}

export default function ServicesThree() {
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