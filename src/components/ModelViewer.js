import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, PerspectiveCamera } from '@react-three/drei';
import { AnimationMixer } from 'three';
import { useTheme } from './ThemeContext';
import * as THREE from 'three';

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

    const handlePointerDown = (event) => {
      // Disable controls if only one pointer is down
      if (event.pointerType === 'touch' && event.isPrimary) {
        if (event.pointerId !== 1) {
          controlsRef.current.enabled = false; // Disable controls
        }
      }
    };
  
    const handlePointerMove = (event) => {
      // Enable controls only if two fingers are being used
      if (event.pointerType === 'touch') {
        const pointers = navigator.maxTouchPoints;
        controlsRef.current.enabled = pointers > 1;
      }
    };
  
    const handlePointerUp = () => {
      // Re-enable controls when all pointers are up
      controlsRef.current.enabled = true;
    };
  
    useEffect(() => {
      const canvas = document.getElementById('canvas');
  
      // Add pointer event listeners
      canvas.addEventListener('pointerdown', handlePointerDown);
      canvas.addEventListener('pointermove', handlePointerMove);
      canvas.addEventListener('pointerup', handlePointerUp);
      canvas.addEventListener('pointerleave', handlePointerUp); // Handle leaving the canvas
  
      return () => {
        canvas.removeEventListener('pointerdown', handlePointerDown);
        canvas.removeEventListener('pointermove', handlePointerMove);
        canvas.removeEventListener('pointerup', handlePointerUp);
        canvas.removeEventListener('pointerleave', handlePointerUp);
      };
    }, []);

  return (
    <div className="relative w-full h-[90%] " >
      <Canvas id="canvas" className="w-full h-full overflow-y-hidden " >
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
          
          
        />
      </Canvas>

      {/* Gradient overlay and bottom text */}
      <div className="absolute inset-0 pointer-events-none h-full w-full" id="gradientdiv">
        {/* Linear gradient overlay */}
        <div className={`w-full h-full ${gradientClass}`} />

        {/* Instruction text */}
        <div className="absolute bottom-0 w-full text-center pointer-events-auto">
          <p className="text-md md:text-lg opacity-40">
            <span className="hidden md:inline">Press and hold to orbit</span>
            <span className="md:hidden">Use two fingers to orbit</span>
          </p>
        </div>
      </div>
    </div>

  );
};

export default ModelViewer;
