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

    // Lighter, more vibrant ocean blue
    context.fillStyle = '#2563eb'; 
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Light green for continents
    context.fillStyle = '#86efac';

    const drawLandmass = (x: number, y: number, w: number, h: number, rotate = 0) => {
      context.save();
      context.translate(x, y);
      context.rotate(rotate);
      context.beginPath();
      context.ellipse(0, 0, w, h, 0, 0, Math.PI * 2);
      context.fill();
      
      // Add jagged edges
      for (let i = 0; i < 5; i++) {
        const ox = (Math.random() - 0.5) * w * 1.2;
        const oy = (Math.random() - 0.5) * h * 1.2;
        context.beginPath();
        context.arc(ox, oy, Math.random() * (w/2.5), 0, Math.PI * 2);
        context.fill();
      }
      context.restore();
    };

    // North America (Top Left)
    drawLandmass(250, 160, 100, 70, -0.15);
    // South America (Bottom Left)
    drawLandmass(320, 360, 50, 90, 0.1);
    // Africa (Middle)
    drawLandmass(520, 310, 60, 80);
    // Europe (Top Middle)
    drawLandmass(510, 150, 40, 35);
    // Asia (Top Right)
    drawLandmass(750, 190, 150, 90);
    // Oceania (Bottom Right)
    drawLandmass(860, 410, 45, 35);
    
    // Ice caps
    context.fillStyle = '#f8fafc';
    context.fillRect(0, 0, 1024, 15);
    context.fillRect(0, 495, 1024, 17);

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
          shininess={20}
          specular={new THREE.Color('#444444')}
        />
      </Sphere>
      
      {/* Clouds Layer */}
      <Sphere ref={cloudsRef} args={[1.02, 64, 64]} scale={1.8}>
        <meshPhongMaterial
          color="#ffffff"
          transparent
          opacity={0.12}
          depthWrite={false}
        />
      </Sphere>

      {/* Atmosphere Glow */}
      <Sphere args={[1.06, 64, 64]} scale={1.8}>
        <meshPhongMaterial
          color="#60a5fa"
          transparent
          opacity={0.1}
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
        <Stars radius={100} depth={50} count={1200} factor={4} saturation={0} fade speed={1} />
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
        <pointLight position={[-10, 5, -10]} intensity={1} color="#3b82f6" />
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
          <Earth />
        </Float>
      </Canvas>
    </div>
  );
};
