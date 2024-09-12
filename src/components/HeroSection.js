// src/components/HeroSection.js
import React from 'react';
import ModelViewer from './ModelViewer';

const HeroSection = () => {
  return (
    <section className="w-full h-screen flex flex-col md:flex-row items-center justify-center ">
      {/* Transparent overlay with text */}
      <div className="w-full md:w-1/2 h-1/4 flex flex-col items-center justify-center px-4 mt-5 md:mt-0 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">Hi, I'm Saravanan</h1>
        <p className="text-lg sm:text-2xl">
          Full Stack Web and Flutter Developer
          <br /> with years of experience.
        </p>
      </div>

      {/* ModelViewer section */}
      <div className="w-full md:w-1/2 h-full flex items-center justify-center ">
        <div className="w-full h-[75%] md:h-[95%] ">
          <ModelViewer modelUrl="./mychar.glb" />
        </div>
      </div>
    </section>

  );
};

export default HeroSection;
