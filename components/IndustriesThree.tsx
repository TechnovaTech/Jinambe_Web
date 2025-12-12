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
      shapeRef.current.rotation.x = state.clock.elapsedTime * 0.15 + scrollY * 0.002;
      shapeRef.current.rotation.y = state.clock.elapsedTime * 0.25 + scrollY * 0.003;
      shapeRef.current.rotation.z = state.clock.elapsedTime * 0.08 + scrollY * 0.001;
      shapeRef.current.position.y = Math.sin(scrollY * 0.004) * 0.2;
    }
  });

  const shapeColor = isDark ? '#E5E7EB' : '#D1D5DB';

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 3, 3]} intensity={0.6} />
      
      {/* Octahedron shape */}
      <mesh ref={shapeRef} position={[0, 0, 0]}>
        <octahedronGeometry args={[1.6]} />
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

export default function IndustriesThree() {
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