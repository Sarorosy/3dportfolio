import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, PerspectiveCamera } from '@react-three/drei';
import { AnimationMixer } from 'three';
import { useTheme } from './ThemeContext';

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
  const controlsRef = useRef();
  const { isDarkTheme } = useTheme();
  const gradientClass = isDarkTheme
    ? 'bg-gradient-to-b from-transparent via-transparent to-black'
    : 'bg-gradient-to-b from-transparent via-transparent via-yellow to-white opacity-80';

  useEffect(() => {
    const canvas = document.getElementById('canvas');
    
    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        e.preventDefault(); // Prevent any default behavior for single touch
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches.length === 1) {
        e.preventDefault(); // Prevent movement if only one finger
      }
    };

    canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <>
      <Canvas id='canvas'>
        {/* Camera setup */}
        <PerspectiveCamera makeDefault position={[0, 0, -4]} />

        {/* Lighting setup */}
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} castShadow color={"white"} />
        <directionalLight position={[-10, -10, -5]} intensity={2} color={"violet"} />

        {/* Model and controls */}
        <Model url={modelUrl} />
        <OrbitControls 
          ref={controlsRef}
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
          minDistance={3}
          maxDistance={10}
          maxAzimuthAngle={5}
          minAzimuthAngle={2}
          touchAction="none"
        />
      </Canvas>

      {/* Gradient overlay and bottom text */}
      <div className="absolute inset-0 pointer-events-none" id='gradientdiv'>
        {/* Linear gradient overlay */}
        <div className={`w-full h-full ${gradientClass}`} />

        {/* Instruction text */}
        <div className="absolute bottom-4 w-full text-center z-20 pointer-events-auto">
          <p className="text-md md:text-lg">
            <span className="hidden md:inline">Press and hold to orbit</span>
            <span className="md:hidden">Use two fingers to orbit</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ModelViewer;
