import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

const Globe = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.008;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={1.8}>
        <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={0.2}
          speed={3}
          roughness={0.1}
          metalness={1}
          emissive="#1e3a8a"
          emissiveIntensity={0.5}
        />
      </Sphere>
    </Float>
  );
};

export const GlobeCanvas = () => {
  return (
    <div className="w-full h-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} alpha={true}>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#60a5fa" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#4f46e5" />
        <spotLight position={[0, 5, 0]} intensity={1} />
        <Globe />
      </Canvas>
    </div>
  );
};
