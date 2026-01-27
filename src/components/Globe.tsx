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

    // Fill with ocean blue
    context.fillStyle = '#0047ab';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Draw "continents" as green blobs
    context.fillStyle = '#2d5a27';
    for (let i = 0; i < 40; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radiusX = Math.random() * 150 + 50;
      const radiusY = Math.random() * 100 + 30;
      
      context.beginPath();
      context.ellipse(x, y, radiusX, radiusY, Math.random() * Math.PI, 0, Math.PI * 2);
      context.fill();

      // Add some smaller "islands"
      for (let j = 0; j < 3; j++) {
        context.beginPath();
        context.arc(x + Math.random() * 100 - 50, y + Math.random() * 100 - 50, Math.random() * 20, 0, Math.PI * 2);
        context.fill();
      }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);

  useFrame(() => {
    if (meshRef.current) meshRef.current.rotation.y += 0.004;
    if (cloudsRef.current) cloudsRef.current.rotation.y += 0.005;
  });

  return (
    <group>
      {/* Earth Body */}
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={1.8}>
        <meshPhongMaterial
          map={earthTexture}
          shininess={10}
          specular={new THREE.Color('#222222')}
        />
      </Sphere>
      
      {/* Clouds Layer */}
      <Sphere ref={cloudsRef} args={[1.02, 64, 64]} scale={1.8}>
        <meshPhongMaterial
          color="#ffffff"
          transparent
          opacity={0.2}
          depthWrite={false}
        />
      </Sphere>

      {/* Atmosphere Glow */}
      <Sphere args={[1.05, 64, 64]} scale={1.8}>
        <meshPhongMaterial
          color="#3b82f6"
          transparent
          opacity={0.05}
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
        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
        <pointLight position={[-10, 5, -10]} intensity={1} color="#3b82f6" />
        <Float speed={2} rotationIntensity={0.3} floatIntensity={0.4}>
          <Earth />
        </Float>
      </Canvas>
    </div>
  );
};
