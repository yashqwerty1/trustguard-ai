"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Mesh, MeshStandardMaterial } from "three";
import { useRef } from "react";

interface ShieldProps {
  riskLevel: string;
}

function Shield({ riskLevel }: { riskLevel: string }) {
  const shieldRef = useRef<Mesh>(null!);
  const ringRef = useRef<Mesh>(null!);

  useFrame(({ clock }) => {
    const pulse = 1.8 + Math.sin(clock.getElapsedTime() * 3) * 0.7;

    shieldRef.current.rotation.y += 0.008;
    shieldRef.current.rotation.x += 0.002;

    ringRef.current.rotation.z += 0.005;

    const material = shieldRef.current.material as MeshStandardMaterial;

    material.emissiveIntensity = pulse;
  });

  const primaryColor =
    riskLevel === "HIGH"
      ? "#ef4444"
      : riskLevel === "MEDIUM"
        ? "#f59e0b"
        : "#22d3ee";

  const secondaryColor =
    riskLevel === "HIGH"
      ? "#f87171"
      : riskLevel === "MEDIUM"
        ? "#fbbf24"
        : "#67e8f9";

  return (
    <>
      <mesh ref={shieldRef}>
        <octahedronGeometry args={[2.5, 0]} />

        <meshStandardMaterial
          color={primaryColor}
          wireframe
          emissive={primaryColor}
          emissiveIntensity={2}
        />
      </mesh>

      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3.3, 0.08, 16, 100]} />

        <meshBasicMaterial color={secondaryColor} />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.8, 0.05, 16, 100]} />

        <meshBasicMaterial color={primaryColor} />
      </mesh>
    </>
  );
}

export default function Shield3D({ riskLevel }: ShieldProps) {
  const lightColor =
    riskLevel === "HIGH"
      ? "#ef4444"
      : riskLevel === "MEDIUM"
        ? "#f59e0b"
        : "#22d3ee";

  const secondaryLight =
    riskLevel === "HIGH"
      ? "#f87171"
      : riskLevel === "MEDIUM"
        ? "#fbbf24"
        : "#67e8f9";

  return (
    <div
      className="
      h-[380px]
      w-full
      flex
      items-center
      justify-center
      "
    >
      <Canvas
        camera={{
          position: [0, 0, 9],
          fov: 50,
        }}
      >
        <ambientLight intensity={1.2} />

        <pointLight position={[5, 5, 5]} intensity={8} color={lightColor} />

        <pointLight
          position={[-5, -5, -5]}
          intensity={4}
          color={secondaryLight}
        />

        <pointLight position={[0, 6, 0]} intensity={3} color={lightColor} />

        <Shield riskLevel={riskLevel} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}
