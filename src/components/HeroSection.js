import React from 'react';
import './HeroSection.css'; // Import the CSS file for styling
import ModelViewer from './ModelViewer'; // Import ModelViewer

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="text-container">
        <h1>Hi, I'm Saravanan</h1>
        <p>I'm a Web and Flutter Developer with years of experience.</p>
      </div>
      <div className="model-container">
        <ModelViewer modelUrl="./mychar.glb" />
      </div>
    </section>
  );
};

export default HeroSection;
