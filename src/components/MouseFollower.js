import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const MouseFollower = () => {
  useEffect(() => {
    const smallDot = document.getElementById('small-dot');
    const largeCircle = document.getElementById('large-circle');
    let mouseX = 0;
    let mouseY = 0;
    let circleX = 0;
    let circleY = 0;

    const circleSpeed = 0.15; // Adjust speed for smoother effect

    // Initially hide the circles
    smallDot.style.opacity = "0";
    largeCircle.style.opacity = "0";

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Ensure visibility of the cursors when mouse moves
      smallDot.style.opacity = "0.8";
      largeCircle.style.opacity = "0.6";

      // Directly position the small dot to mouse position
      smallDot.style.left = `${mouseX - 3}px`;
      smallDot.style.top = `${mouseY -3}px`;
    };

    const animateCircle = () => {
      circleX += (mouseX - circleX) * circleSpeed;
      circleY += (mouseY - circleY) * circleSpeed;

      // Center the large circle around the mouse position
      largeCircle.style.left = `${circleX - 18}px`; // 5px offset for centering
      largeCircle.style.top = `${circleY - 18}px`; // 5px offset for centering

      requestAnimationFrame(animateCircle);
    };

    // Start the animation
    animateCircle();

    // Add mouse move event listener
    document.addEventListener('mousemove', handleMouseMove);

    // Hide circles when mouse leaves the window
    document.addEventListener('mouseleave', () => {
      smallDot.style.opacity = "0";
      largeCircle.style.opacity = "0";
    });

    // Show circles when mouse enters the window
    document.addEventListener('mouseenter', () => {
      smallDot.style.opacity = "0.8";
      largeCircle.style.opacity = "0.6";
    });

    // Clean up event listeners on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', () => {
        smallDot.style.opacity = "0";
        largeCircle.style.opacity = "0";
      });
      document.removeEventListener('mouseenter', () => {
        smallDot.style.opacity = "0.8";
        largeCircle.style.opacity = "0.6";
      });
    };
  }, []);

  return (
    <div className="hidden md:block">
      {/* Small white dot */}
      <div
        id="small-dot"
        className="absolute w-2 h-2 bg-gray-200 rounded-full pointer-events-none"
        style={{ position: 'fixed', top: 0, left: 0 }} // Initial position doesn't matter since it's set in the mouse move handler
      ></div>

      {/* Larger circle */}
      <div
        id="large-circle"
        className="absolute w-10 h-10 bg-transparent border border-white rounded-full pointer-events-none"
        style={{ position: 'fixed', top: 0, left: 0 }} // Initial position doesn't matter since it's set in the mouse move handler
      ></div>
    </div>
  );
};

export default MouseFollower;
