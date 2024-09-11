// src/components/HeroSection.js
import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';
import './HeroSection.css'; // Import the CSS file for styling
import mychar from './mychar.glb';
import ModelViewer from './ModelViewer';



const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="text-container">
        <h1>Hi, I'm Saravanan</h1>
        <p>I'm a Web and Flutter Developer with years of experience.</p>
      </div>
      <div className="model-container">
       <ModelViewer modelUrl="./mychar.glb"/>
      </div>
    </section>
  );
};

export default HeroSection;
