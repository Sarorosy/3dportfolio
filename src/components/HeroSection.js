import React from 'react';
import ModelViewer from './ModelViewer';

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      {/* Text overlay */}
      <div className="absolute inset-0 flex flex-col items-start justify-start text-center px-4 md:mt-28 z-10">
        <h1 className=" text-4xl sm:text-6xl font-bold mb-4">Hi, I'm Saravanan</h1>
        <p className=" text-lg sm:text-2xl">
          I'm a Web and Flutter Developer <br /> with years of experience.
        </p>
      </div>

      {/* Model container, centered and full width */}
      <div className="md:pl-20 relative w-full h-full flex items-center justify-center">
        <div className="w-full md:h-[95%] h-[65%]">
          <ModelViewer modelUrl="./mychar.glb" />
        </div>
      </div>

      {/* Gradient overlay and bottom text */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Linear gradient overlay */}
        <div className="w-full h-full bg-gradient-to-b from-transparent via-transparent to-black" />

        {/* Instruction text */}
        <div className="absolute -bottom-30 w-full text-center text-white z-20">
          <p className="text-md md:text-lg">
            {/* Change text based on screen size */}
            <span className="hidden md:inline">Press and hold to orbit</span>
            <span className="md:hidden">Use two fingers to orbit</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
