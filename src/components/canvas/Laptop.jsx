import { Suspense, useLayoutEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  ContactShadows,
  Environment,
  OrbitControls,
  Preload,
  useGLTF,
  useTexture,
} from '@react-three/drei';
import * as THREE from 'three';

import CanvasLoader from '../Loader';

const LINKEDIN_SCREEN_IMAGE = `${import.meta.env.BASE_URL}image.png`;
const LINKEDIN_PROFILE_URL =
  'https://ir.linkedin.com/in/maryam-abdi-1b3a29140?trk=profile-badge';

const Screen = ({ geometry }) => {
  const texture = useTexture(LINKEDIN_SCREEN_IMAGE);
  const { gl } = useThree();

  useLayoutEffect(() => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.flipY = false;
    texture.center.set(0.5, 0.5);
    texture.rotation = 0;
    texture.repeat.set(1, 1);
    texture.offset.set(0, 0);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.anisotropy = Math.min(16, gl.capabilities.getMaxAnisotropy());
    texture.needsUpdate = true;
  }, [texture, gl]);

  return (
    <mesh
      geometry={geometry}
      renderOrder={2}
      onClick={(event) => {
        event.stopPropagation();
        window.open(LINKEDIN_PROFILE_URL, '_blank', 'noopener,noreferrer');
      }}
      onPointerOver={() => {
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        document.body.style.cursor = 'auto';
      }}
    >
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
};

const Model = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('./mac-draco.glb');

  useLayoutEffect(() => {
    Object.values(materials).forEach((material) => {
      if (!material) return;
      material.side = THREE.FrontSide;
      material.polygonOffset = true;
      material.polygonOffsetFactor = 1;
      material.polygonOffsetUnits = 1;

      if ('envMapIntensity' in material) {
        material.envMapIntensity = 0.85;
      }
      if ('metalness' in material) {
        material.metalness = Math.min(material.metalness ?? 0.5, 0.85);
      }
      if ('roughness' in material) {
        material.roughness = Math.max(material.roughness ?? 0.5, 0.25);
      }
      material.needsUpdate = true;
    });
  }, [materials]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const { x, y } = state.pointer;

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 2) / 20 + 0.25 + y * 0.04,
      0.08,
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      Math.sin(t / 4) / 20 + x * 0.06,
      0.08,
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      Math.sin(t / 8) / 20,
      0.08,
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      (-2 + Math.sin(t / 2)) / 2,
      0.08,
    );
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation-x={-0.425} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            material={materials.aluminium}
            geometry={nodes['Cube008'].geometry}
            castShadow
            receiveShadow
          />
          <mesh
            material={materials['matte.001']}
            geometry={nodes['Cube008_1'].geometry}
            castShadow
            receiveShadow
          />
          <Screen geometry={nodes['Cube008_2'].geometry} />
        </group>
      </group>
      <mesh
        material={materials.keys}
        geometry={nodes.keyboard.geometry}
        position={[1.79, 0, 3.45]}
        castShadow
        receiveShadow
      />
      <group position={[0, -0.1, 3.39]}>
        <mesh
          material={materials.aluminium}
          geometry={nodes['Cube002'].geometry}
          castShadow
          receiveShadow
        />
        <mesh
          material={materials.trackpad}
          geometry={nodes['Cube002_1'].geometry}
          castShadow
          receiveShadow
        />
      </group>
      <mesh
        material={materials.touchbar}
        geometry={nodes.touchbar.geometry}
        position={[0, -0.03, 1.2]}
        castShadow
        receiveShadow
      />
    </group>
  );
};

const LaptopCanvas = () => {
  return (
    <div className="canvas-container laptop-canvas w-full h-full absolute inset-0 z-0">
      <Canvas
        shadows
        camera={{ position: [-5, 0, -19], fov: 52, near: 0.1, far: 100 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          premultipliedAlpha: false,
        }}
        onCreated={({ gl, scene }) => {
          gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
          gl.setClearColor(0x000000, 0);
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.05;
          gl.outputColorSpace = THREE.SRGBColorSpace;
          scene.background = null;
        }}
      >
        <ambientLight intensity={0.35} />
        <hemisphereLight
          intensity={0.55}
          groundColor="#050816"
          color="#ffffff"
        />
        <directionalLight
          castShadow
          position={[5, 8, 5]}
          intensity={1.1}
          shadow-mapSize={[1024, 1024]}
          shadow-bias={-0.0001}
        />
        <pointLight position={[10, 10, 10]} intensity={0.6} color="#915eff" />
        <pointLight position={[-8, 4, -6]} intensity={0.35} color="#56ccf2" />

        <Suspense fallback={<CanvasLoader />}>
          <group rotation={[0, Math.PI, 0]} position={[0, -0.6, 0]} scale={0.72}>
            <Model />
          </group>
          <Environment preset="city" background={false} />
        </Suspense>

        <ContactShadows
          position={[0, -4.5, 0]}
          scale={20}
          blur={3.5}
          far={4.5}
          opacity={0.35}
          color="#000000"
        />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2.2}
          maxPolarAngle={Math.PI / 2.2}
        />
        <Preload all />
      </Canvas>
    </div>
  );
};

export default LaptopCanvas;
