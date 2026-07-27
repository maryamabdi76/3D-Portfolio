import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = ({ imageUrl }) => {
  const [decal] = useTexture([imageUrl]);

  return (
    <Float speed={1.75} rotationIntensity={0} floatIntensity={1.5}>
      <ambientLight intensity={0.45} />
      <directionalLight position={[0, 0, 0.15]} intensity={1} />
      <directionalLight position={[2, 2, 2]} intensity={0.4} color="#915eff" />

      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <div className="w-full h-full">
      <Canvas
        className="w-full h-full"
        gl={{ preserveDrawingBuffer: true, antialias: true, alpha: true }}
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} enablePan={false} />
          <Ball imageUrl={icon} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default BallCanvas;
