import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Stars, Float } from '@react-three/drei';
import * as THREE from 'three';

const Earth = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);

  // Generate a procedural Earth texture using Canvas
  const earthTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const context = canvas.getContext('2d');
    if (!context) return null;

    // Fill with vibrant ocean blue
    context.fillStyle = '#1e3a8a'; 
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Draw continents with light green
    context.fillStyle = '#4ade80';

    const drawContinent = (x: number, y: number, w: number, h: number, rotate = 0) => {
      context.save();
      context.translate(x, y);
      context.rotate(rotate);
      context.beginPath();
      context.ellipse(0, 0, w, h, 0, 0, Math.PI * 2);
      context.fill();
      
      // Add some "jaggedness" with smaller circles
      for (let i = 0; i < 8; i++) {
        const ox = (Math.random() - 0.5) * w * 1.5;
        const oy = (Math.random() - 0.5) * h * 1.5;
        context.beginPath();
        context.arc(ox, oy, Math.random() * (w/3), 0, Math.PI * 2);
        context.fill();
      }
      context.restore();
    };

    // North America
    drawContinent(250, 150, 120, 80, -0.2);
    // South America
    drawContinent(320, 350, 60, 100, 0.1);
    // Africa
    drawContinent(520, 300, 70, 90);
    // Europe
    drawContinent(510, 140, 50, 40);
    // Asia
    drawContinent(750, 180, 180, 100);
    // Oceania
    drawContinent(850, 400, 50, 40);
    // Antarctica
    context.fillRect(0, 490, 1024, 22);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);

  useFrame(() => {
    if (meshRef.current) meshRef.current.rotation.y += 0.003;
    if (cloudsRef.current) cloudsRef.current.rotation.y += 0.004;
  });

  return (
    <group>
      {/* Earth Body */}
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={1.8}>
        <meshPhongMaterial
          map={earthTexture}
          shininess={15}
          specular={new THREE.Color('#333333')}
        />
      </Sphere>
      
      {/* Clouds Layer */}
      <Sphere ref={cloudsRef} args={[1.02, 64, 64]} scale={1.8}>
        <meshPhongMaterial
          color="#ffffff"
          transparent
          opacity={0.15}
          depthWrite={false}
        />
      </Sphere>

      {/* Atmosphere Glow */}
      <Sphere args={[1.05, 64, 64]} scale={1.8}>
        <meshPhongMaterial
          color="#60a5fa"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
        />
      </Sphere>
    </group>
  );
};

export const GlobeCanvas = () => {
  return (
    <div className="w-full h-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <Stars radius={100} depth={50} count={1500} factor={4} saturation={0} fade speed={1} />
        <ambientLight intensity={1.2} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, 5, -10]} intensity={0.8} color="#3b82f6" />
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
          <Earth />
        </Float>
      </Canvas>
    </div>
  );
};
