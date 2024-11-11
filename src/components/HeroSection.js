// src/components/HeroSection.js
import React from 'react';
import ModelViewer from './ModelViewer';
import Online from './Online';
import Header from './Header';
import About from './About';

const HeroSection = () => {
  return (
    <>
    <Header />
    <section className="w-full h-screen flex flex-col md:flex-row items-center justify-center bg-black text-white mt-12 " id="hero">
      {/* Transparent overlay with text */}
      <div className="w-full md:w-1/3 h-1/4 flex flex-col items-center justify-center px-4 mt-5 md:mt-0 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">Hi, I'm Saravanan</h1>
        <p className="text-lg sm:text-2xl">
          A Full Stack Web Developer & Flutter Enthusiast
          <br /> <span className='text-gray-400'>with years of experience.</span>
        </p>
        <div className="mt-5 flex items-center justify-center">
          <Online/>
          
        </div>
      </div>

      {/* ModelViewer section */}
      <div className="w-full md:w-2/3 h-full flex items-center justify-center ">
        <div className="w-full h-[75%] md:h-[95%] ">
          <ModelViewer modelUrl="./mychar.glb" />
        </div>
      </div>
    </section>
    <About/>
    </>
  );
};

export default HeroSection;
