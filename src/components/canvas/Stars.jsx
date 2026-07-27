import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const StarField = ({ count, radius, color, speed }) => {
  const ref = useRef();
  const positions = random.inSphere(new Float32Array(count), { radius });

  useFrame((_, delta) => {
    ref.current.rotation.x -= delta * speed;
    ref.current.rotation.y -= delta * (speed * 0.7);
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color={color}
        size={0.0025}
        sizeAttenuation
        depthWrite={false}
        opacity={0.55}
      />
    </Points>
  );
};

const Stars = () => {
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <StarField count={3000} radius={1.2} color="#915eff" speed={0.04} />
      <StarField count={2000} radius={1.5} color="#56ccf2" speed={0.025} />
      <StarField count={1500} radius={1.8} color="#00cea8" speed={0.015} />
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="canvas-container fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
