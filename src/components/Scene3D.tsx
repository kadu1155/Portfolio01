import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, Torus, Sphere, MeshDistortMaterial, Stars } from "@react-three/drei";
import { useRef, Suspense } from "react";
import type { Mesh } from "three";

function FloatingShape({ position, color, shape = "ico", scale = 1 }: { position: [number, number, number]; color: string; shape?: "ico" | "torus" | "sphere"; scale?: number }) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.3;
    ref.current.rotation.y = state.clock.elapsedTime * 0.4;
  });
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      {shape === "ico" && (
        <Icosahedron ref={ref} args={[scale, 0]} position={position}>
          <MeshDistortMaterial color={color} distort={0.3} speed={2} roughness={0.1} metalness={0.6} />
        </Icosahedron>
      )}
      {shape === "torus" && (
        <Torus ref={ref} args={[scale, scale * 0.3, 16, 64]} position={position}>
          <meshStandardMaterial color={color} roughness={0.2} metalness={0.7} emissive={color} emissiveIntensity={0.3} />
        </Torus>
      )}
      {shape === "sphere" && (
        <Sphere ref={ref} args={[scale, 32, 32]} position={position}>
          <MeshDistortMaterial color={color} distort={0.4} speed={1.5} roughness={0.1} metalness={0.5} />
        </Sphere>
      )}
    </Float>
  );
}

export function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 50 }} dpr={[1, 2]}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffb3d9" />
        <pointLight position={[-10, -5, 5]} intensity={1} color="#b794f6" />
        <pointLight position={[0, 5, -5]} intensity={0.8} color="#7dd3fc" />

        <FloatingShape position={[-3.5, 1.8, 0]} color="#f0abfc" shape="ico" scale={0.7} />
        <FloatingShape position={[3.8, -1.2, -1]} color="#c4b5fd" shape="torus" scale={0.5} />
        <FloatingShape position={[-2.5, -2, 1]} color="#7dd3fc" shape="sphere" scale={0.4} />
        <FloatingShape position={[3, 2.5, -2]} color="#fbcfe8" shape="ico" scale={0.55} />
        <FloatingShape position={[-4.2, -0.5, -1.5]} color="#a5f3fc" shape="torus" scale={0.35} />
        <FloatingShape position={[4.5, 0.8, 0.5]} color="#e9d5ff" shape="sphere" scale={0.45} />

        <Stars radius={50} depth={50} count={1500} factor={3} saturation={0.5} fade speed={1} />
      </Suspense>
    </Canvas>
  );
}
