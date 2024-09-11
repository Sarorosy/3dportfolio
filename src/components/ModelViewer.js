import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, PerspectiveCamera } from '@react-three/drei';
import { AnimationMixer } from 'three';

const Model = ({ url }) => {
  const { scene, animations } = useGLTF(url);
  const mixer = new AnimationMixer(scene);

  // Play all animations
  animations.forEach((clip) => {
    mixer.clipAction(clip).play();
  });

  useFrame((state, delta) => {
    mixer.update(delta);
  });

  // Adjust the model position and rotation to center it
  scene.position.set(0, -3.5, 0);
  scene.rotation.y = Math.PI; // Rotate the model if needed

  return <primitive object={scene} scale={2.8} />;
};

const ModelViewer = ({ modelUrl }) => {
  return (
    <Canvas id="canvas">
      {/* Camera setup */}
      <PerspectiveCamera makeDefault position={[0, 0, -4]} />

      {/* Lighting setup */}
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} castShadow color={"white"} />
      <directionalLight position={[-10, -10, -5]} intensity={6} color={"violet"} />

      {/* Model and controls */}
      <Model url={modelUrl} />
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 4}
        minDistance={3}
        maxDistance={10}
        maxAzimuthAngle={5}
        minAzimuthAngle={2}
        touches={{
          ONE: 1, // Disable single-finger control
          TWO: 2,  // Enable two-finger control for rotation
        }} 
      />
    </Canvas>
  );
};

export default ModelViewer;
