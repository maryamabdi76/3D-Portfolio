import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Preload, Sparkles, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earthRef = useRef();
  const earth = useGLTF("./planet/scene.gltf");

  useFrame(({ clock }) => {
    earthRef.current.rotation.y = clock.elapsedTime * 0.15;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.2}>
      <group ref={earthRef}>
        <primitive object={earth.scene.clone()} scale={2.5} position-y={0} />
      </group>
    </Float>
  );
};

const EarthCanvas = () => {
  return (
    <div className="canvas-container w-full h-full">
      <Canvas
        shadows
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true, antialias: true }}
        camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-5, 3, 2]} intensity={0.8} color="#915eff" />

        <Suspense fallback={<CanvasLoader />}>
          <Earth />
          <Sparkles
            count={50}
            scale={6}
            size={1.2}
            speed={0.2}
            opacity={0.4}
            color="#56ccf2"
          />
          <OrbitControls
            autoRotate
            autoRotateSpeed={0.8}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default EarthCanvas;
