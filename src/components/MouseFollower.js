// MouseFollower.js
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const MouseFollower = () => {
  useEffect(() => {
    const dot = document.getElementById('small-dot');
    const circle = document.getElementById('large-circle');

    const handleMouseMove = (e) => {
      // Follow mouse cursor for the small dot
      gsap.to(dot, {
        x: e.clientX - 10, // Adjust to center the dot
        y: e.clientY - 10, // Adjust to center the dot
        duration: 0.1, // Fast follow
      });

      // Follow mouse cursor for the larger circle with a delay
      gsap.to(circle, {
        x: e.clientX - 50, // Adjust to center the circle
        y: e.clientY - 50, // Adjust to center the circle
        duration: 0.4, // Slower follow
      });
    };

    // Add mouse move event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="hidden md:block">
      {/* Small white dot */}
      <div
        id="small-dot"
        className="absolute w-2 h-2 bg-gray-200 opacity-60 rounded-full pointer-events-none"
        style={{ position: 'fixed', top: 5, left: 5 }} // Fixed positioning
      ></div>

      {/* Larger circle */}
      <div
        id="large-circle"
        className="absolute w-12 h-12 bg-transparent border border-white opacity-40 rounded-full pointer-events-none"
        style={{ position: 'fixed', top: 22, left: 22 }} // Fixed positioning
      ></div>
    </div>
  );
};

export default MouseFollower;
