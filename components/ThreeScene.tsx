'use client';

import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from './ThemeProvider';

function Scene({ scrollY, isDark }: { scrollY: number, isDark: boolean }) {
  const leftBoxRef = useRef<THREE.Mesh>(null);
  const rightBoxRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (leftBoxRef.current) {
      leftBoxRef.current.rotation.x = scrollY * 0.001;
      leftBoxRef.current.rotation.y = scrollY * 0.0015;
    }
    if (rightBoxRef.current) {
      rightBoxRef.current.rotation.x = scrollY * -0.001;
      rightBoxRef.current.rotation.z = scrollY * 0.0012;
    }
  });

  // Calculate which section is visible
  const sectionHeight = 600; // Approximate section height
  const currentSection = Math.floor(scrollY / sectionHeight);
  
  const shapeColor = isDark ? '#E5E7EB' : '#9CA3AF';

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
      
      {/* About section (section 1) - Left element */}
      {currentSection === 1 && (
        <Box ref={leftBoxRef} position={[-7, 0, -3]} args={[1.5, 1.5, 1.5]}>
          <meshStandardMaterial color={shapeColor} transparent opacity={0.6} />
        </Box>
      )}
      
      {/* Services section (section 2) - Right element */}
      {currentSection === 2 && (
        <Box ref={rightBoxRef} position={[7, 0, -3]} args={[1.2, 1.8, 1]}>
          <meshStandardMaterial color={shapeColor} transparent opacity={0.6} />
        </Box>
      )}
    </>
  );
}

export default function ThreeScene() {
  const [scrollY, setScrollY] = useState(0);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1]">
      <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
        <Scene scrollY={scrollY} isDark={isDark} />
      </Canvas>
    </div>
  );
}