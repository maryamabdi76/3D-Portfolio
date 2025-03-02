import React, { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

const Tetrahedron = () => {
  // Define the vertices of the tetrahedron
  const vertices = useMemo(() => {
    return new Float32Array([
      0, 0, 1, // Vertex 1
     -0.5, 0.866, 0, // Vertex 2
      0.5, 0.866, 0, // Vertex 3
     -0.5, -0.433, 0.5, // Vertex 4
      0.5, -0.433, 0.5, // Vertex 5
    ]);
  }, []);

  // Define the indices for the triangles forming the tetrahedron
  const indices = useMemo(() => {
    return new Uint16Array([
      0, 1, 2, // First face
      0, 2, 4, // Second face
      0, 3, 4, // Third face
      3, 1, 2, // Fourth face
    ]);
  }, []);

  return (
    <mesh>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attachObject={['attributes', 'position']}
          array={vertices}
          count={vertices.length / 3}
          itemSize={3}
        />
        <bufferAttribute
          attachObject={['attributes', 'index']}
          array={indices}
          count={indices.length}
          itemSize={1}
        />
      </bufferGeometry>
      <meshBasicMaterial color="orange" />
    </mesh>
  );
};

const TriangleCanvas = () => {
  return (
    <Canvas>
      <Tetrahedron />
      <Stars />
      <OrbitControls />
    </Canvas>
  );
};

export default TriangleCanvas;
