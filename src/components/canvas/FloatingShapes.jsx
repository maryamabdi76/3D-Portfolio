import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const Shape = ({
  geometry,
  position,
  color,
  scale = 1,
  speed = 1,
  opacity = 0.22,
}) => {
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime * speed;
    ref.current.rotation.x = t * 0.18;
    ref.current.rotation.y = t * 0.28;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.35} floatIntensity={0.8}>
      <mesh ref={ref} position={position} scale={scale}>
        {geometry}
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={opacity}
          emissive={color}
          emissiveIntensity={0.25}
        />
      </mesh>
    </Float>
  );
};

const Scene = () => {
  const groupRef = useRef();

  useFrame((state) => {
    const { x, y } = state.pointer;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      x * 0.08,
      0.04,
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      y * 0.04,
      0.04,
    );
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.35} />
      <pointLight position={[8, 6, 8]} intensity={0.7} color="#915eff" />
      <pointLight position={[-8, -4, -4]} intensity={0.35} color="#00cea8" />

      <Shape
        geometry={<torusGeometry args={[1.1, 0.28, 12, 48]} />}
        position={[-4.2, 1.6, -3]}
        color="#915eff"
        scale={0.85}
        speed={0.55}
        opacity={0.2}
      />
      <Shape
        geometry={<octahedronGeometry args={[1.15, 0]} />}
        position={[4.8, -0.8, -3.5]}
        color="#00cea8"
        scale={0.7}
        speed={0.7}
        opacity={0.16}
      />
      <Shape
        geometry={<icosahedronGeometry args={[1, 0]} />}
        position={[2.4, 2.4, -5]}
        color="#56ccf2"
        scale={0.55}
        speed={0.6}
        opacity={0.14}
      />
    </group>
  );
};

const FloatingShapesCanvas = () => {
  return (
    <div className="canvas-container absolute inset-0 z-0 pointer-events-none opacity-70">
      <Canvas camera={{ position: [0, 0, 6], fov: 42 }} dpr={[1, 1.25]}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default FloatingShapesCanvas;
