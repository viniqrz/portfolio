import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

const Earth = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += 0.004;
    }
  });

  return (
    <group>
      {/* Ocean */}
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={1.8}>
        <meshPhongMaterial
          color="#0047ab"
          emissive="#001a3d"
          specular="#111111"
          shininess={5}
        />
        {/* Simple Continent generation using a noise-like displacement or just colored sphere if textures aren't available */}
        {/* Since we can't easily fetch textures, we use a second layer with a procedural-like appearance or standard colors */}
        <Sphere args={[1.005, 64, 64]}>
          <meshPhongMaterial
            color="#2d5a27"
            transparent
            opacity={0.8}
            // Pixar style - we want a clean look
          />
        </Sphere>
      </Sphere>
      
      {/* Atmosphere/Clouds */}
      <Sphere ref={cloudsRef} args={[1.02, 64, 64]} scale={1.8}>
        <meshPhongMaterial
          color="#ffffff"
          transparent
          opacity={0.2}
        />
      </Sphere>
    </group>
  );
};

export const GlobeCanvas = () => {
  return (
    <div className="w-full h-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={2.5} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#3b82f6" />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <Earth />
        </Float>
      </Canvas>
    </div>
  );
};
