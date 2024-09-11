// src/components/HeroSection.js
import React from 'react';
import ModelViewer from './ModelViewer';

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      {/* Transparent overlay with text */}
      <div className="absolute inset-0 flex flex-col items-start justify-start text-center px-4 md:mt-28">
        <h1 className=" text-4xl sm:text-6xl font-bold mb-4">Hi, I'm Saravanan</h1>
        <p className=" text-lg sm:text-2xl">I'm a Web and Flutter Developer <br/> with years of experience.</p>
      </div>

      {/* Model container, centered and full width */}
      <div className="md:pl-20 relative w-full h-full flex items-center justify-center">
        <div className="w-full md:h-[95%] h-[65%]">
          <ModelViewer modelUrl="./mychar.glb" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
