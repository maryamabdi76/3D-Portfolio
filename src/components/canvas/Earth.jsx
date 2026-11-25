import { Suspense, useLayoutEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Preload, useTexture } from '@react-three/drei';
import * as THREE from 'three';

import CanvasLoader from '../Loader';

const BASE = `${import.meta.env.BASE_URL}textures/earth`;

const Earth = () => {
  const earthRef = useRef();
  const cloudsRef = useRef();
  const { gl } = useThree();

  const [dayMap, normalMap, specularMap, cloudsMap] = useTexture([
    `${BASE}/earth_day.jpg`,
    `${BASE}/earth_normal.jpg`,
    `${BASE}/earth_specular.jpg`,
    `${BASE}/earth_clouds.png`,
  ]);

  useLayoutEffect(() => {
    dayMap.colorSpace = THREE.SRGBColorSpace;
    cloudsMap.colorSpace = THREE.SRGBColorSpace;
    specularMap.colorSpace = THREE.NoColorSpace;
    normalMap.colorSpace = THREE.NoColorSpace;

    [dayMap, normalMap, specularMap, cloudsMap].forEach((tex) => {
      tex.anisotropy = Math.min(8, gl.capabilities.getMaxAnisotropy());
      tex.needsUpdate = true;
    });
  }, [dayMap, normalMap, specularMap, cloudsMap, gl]);

  useFrame((_, delta) => {
    earthRef.current.rotation.y += delta * 0.04;
    cloudsRef.current.rotation.y += delta * 0.055;
  });

  return (
    <group>
      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial
          map={dayMap}
          normalMap={normalMap}
          normalScale={new THREE.Vector2(0.5, 0.5)}
          specularMap={specularMap}
          shininess={12}
          specular={new THREE.Color('#667799')}
        />
      </mesh>

      <mesh ref={cloudsRef} scale={1.01}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial
          map={cloudsMap}
          transparent
          opacity={0.4}
          depthWrite={false}
        />
      </mesh>

      <mesh scale={1.045}>
        <sphereGeometry args={[1, 48, 48]} />
        <meshBasicMaterial
          color="#5b8fd9"
          transparent
          opacity={0.12}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
};

const EarthCanvas = () => {
  return (
    <div className="canvas-container w-full h-full">
      <Canvas
        shadows={false}
        dpr={[1, 1.75]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        // Wider FOV + farther camera = full sphere with clear padding (no crop)
        camera={{ fov: 42, near: 0.1, far: 100, position: [0, 0, 4.6] }}
        onCreated={({ gl, camera }) => {
          gl.setClearColor(0x000000, 0);
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.35;
          gl.outputColorSpace = THREE.SRGBColorSpace;
          camera.lookAt(0, 0, 0);
        }}
      >
        {/* Front-biased lighting so continents stay readable */}
        <ambientLight intensity={0.7} />
        <hemisphereLight intensity={0.45} color="#e8f0ff" groundColor="#0b1224" />
        <directionalLight position={[2.5, 1.2, 3.5]} intensity={1.8} color="#fff5e6" />
        <directionalLight position={[-2, 0.4, 2]} intensity={0.7} color="#8eb6ff" />

        <Suspense fallback={<CanvasLoader />}>
          <group scale={1}>
            <Earth />
          </group>
          <OrbitControls
            autoRotate
            autoRotateSpeed={0.3}
            enableZoom={false}
            enablePan={false}
            enableRotate
            target={[0, 0, 0]}
            minPolarAngle={Math.PI / 2.3}
            maxPolarAngle={Math.PI / 1.8}
          />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default EarthCanvas;
