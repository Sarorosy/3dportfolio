import React, { useRef, useEffect } from 'react';
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
  const controlsRef = useRef();

    const handleTouchStart = (event) => {
      if (event.touches.length === 1) {
        // Prevent single-finger touch from interacting with the model
        event.preventDefault();
      }
    };
  
    const handleTouchMove = (event) => {
      if (event.touches.length === 1) {
        // Prevent single-finger touch from interacting with the model
        event.preventDefault();
      }
    };
  
    useEffect(() => {
      const canvas = document.getElementById('canvas');
      
      // Add touch event listeners to prevent single-finger scrolling
      canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
      canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
  
      return () => {
        canvas.removeEventListener('touchstart', handleTouchStart);
        canvas.removeEventListener('touchmove', handleTouchMove);
      };
    }, []);

  return (
    <div className="relative w-full h-[90%] " >
      <Canvas id="canvas" className="w-full h-full overflow-y-hidden " >
        {/* Camera setup */}
        <PerspectiveCamera makeDefault position={[0, 0, -4]} />

        {/* Lighting setup */}
        <ambientLight intensity={2} />
        <directionalLight position={[10, 10, 5]} intensity={2} castShadow color={"white"} />
        <directionalLight position={[-10, -10, -5]} intensity={5} color={"violet"} />

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
        <div className={`w-full h-full bg-gradient-to-b from-transparent via-transparent to-black`} />

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
