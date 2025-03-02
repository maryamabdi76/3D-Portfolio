import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isSmallScreen }) => {
  const computer = useGLTF("./gaming_desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="#915eff" color="#cbb4ff" />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isSmallScreen ? 0.4 : 0.7}
        position={isSmallScreen ? [0, -3, -1] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    // Set the initial value of the `isSmallScreen` state variable
    setIsSmallScreen(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsSmallScreen(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* allow to move left and right */}
        <OrbitControls
          enableZoom={true}
          maxPolarAngle={Math.PI / 2} //not rotate the object, only rotate in specifix axes
          // minPolarAngle={Math.PI / 2} //not rotate the object, only rotate in specifix axes
        />
        <Computers isSmallScreen={isSmallScreen} />
        {/* <Asus isSmallScreen={isSmallScreen} /> */}
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
