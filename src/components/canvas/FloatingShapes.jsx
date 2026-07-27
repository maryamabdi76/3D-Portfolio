import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

const Shape = ({ geometry, position, color, wireframe = true, scale = 1, speed = 1 }) => {
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime * speed;
    ref.current.rotation.x = t * 0.35;
    ref.current.rotation.y = t * 0.55;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.5}>
      <mesh ref={ref} position={position} scale={scale}>
        {geometry}
        <meshStandardMaterial
          color={color}
          wireframe={wireframe}
          transparent
          opacity={wireframe ? 0.35 : 0.12}
          emissive={color}
          emissiveIntensity={0.4}
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
      x * 0.15,
      0.05
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      y * 0.08,
      0.05
    );
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#915eff" />
      <pointLight position={[-10, -5, -5]} intensity={0.6} color="#00cea8" />

      <Shape
        geometry={<torusGeometry args={[1, 0.35, 16, 48]} />}
        position={[-4, 1.5, -2]}
        color="#915eff"
        scale={0.9}
        speed={0.8}
      />
      <Shape
        geometry={<octahedronGeometry args={[1.2, 0]} />}
        position={[4.5, -0.5, -3]}
        color="#00cea8"
        scale={0.85}
        speed={1.1}
      />
      <Shape
        geometry={<icosahedronGeometry args={[1, 1]} />}
        position={[2, 2.5, -4]}
        color="#56ccf2"
        scale={0.7}
        speed={0.9}
      />
      <Shape
        geometry={<dodecahedronGeometry args={[0.9, 0]} />}
        position={[-3, -1.5, -3.5]}
        color="#bf61ff"
        scale={0.75}
        speed={1.2}
      />

      <Sparkles
        count={80}
        scale={12}
        size={2}
        speed={0.4}
        opacity={0.6}
        color="#915eff"
      />
    </group>
  );
};

const FloatingShapesCanvas = () => {
  return (
    <div className="canvas-container absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default FloatingShapesCanvas;
