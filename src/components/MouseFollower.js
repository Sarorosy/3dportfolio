import React, { useEffect } from 'react';

const MouseFollower = () => {
  useEffect(() => {
    const smallDot = document.getElementById('small-dot');
    const largeCircle = document.getElementById('large-circle');
    let mouseX = 0;
    let mouseY = 0;
    let circleX = 0;
    let circleY = 0;
    const circleSpeed = 0.15;

    smallDot.style.opacity = "0";
    largeCircle.style.opacity = "0";

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      smallDot.style.opacity = "0.8";
      largeCircle.style.opacity = "0.6";
      smallDot.style.left = `${mouseX - 3}px`;
      smallDot.style.top = `${mouseY - 3}px`;
    };

    const handleMouseEnterLink = (e) => {
      smallDot.style.visibility = "hidden";
      largeCircle.style.width = "70px";
      largeCircle.style.height = "70px";
      largeCircle.style.transition = "width 0.3s ease, height 0.3s ease";
      
      const offsetX = (70 - 40) / 2;
      const offsetY = (70 - 40) / 2;
      largeCircle.style.left = `${e.clientX - offsetX}px`;
      largeCircle.style.top = `${e.clientY - offsetY}px`;
    };

    const handleMouseLeaveLink = () => {
      smallDot.style.visibility = "visible";
      largeCircle.style.width = "40px";
      largeCircle.style.height = "40px";
      largeCircle.style.transition = "width 0.3s ease, height 0.3s ease";
    };

    const animateCircle = () => {
      circleX += (mouseX - circleX) * circleSpeed;
      circleY += (mouseY - circleY) * circleSpeed;
      largeCircle.style.left = `${circleX - 18}px`;
      largeCircle.style.top = `${circleY - 18}px`;
      requestAnimationFrame(animateCircle);
    };
    animateCircle();

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', () => {
      smallDot.style.opacity = "0";
      largeCircle.style.opacity = "0";
    });
    document.addEventListener('mouseenter', () => {
      smallDot.style.opacity = "0.8";
      largeCircle.style.opacity = "0.6";
    });

    const addListeners = () => {
      const links = document.querySelectorAll('button, a');
      links.forEach(link => {
        link.addEventListener('mouseenter', handleMouseEnterLink);
        link.addEventListener('mouseleave', handleMouseLeaveLink);
      });
    };

    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    addListeners();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeaveLink);
      document.removeEventListener('mouseenter', handleMouseEnterLink);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="hidden md:block">
      <div
        id="small-dot"
        className="absolute w-2 h-2 bg-gray-200 rounded-full pointer-events-none"
        style={{ position: 'fixed', top: 0, left: 0 }}
      ></div>

      <div
        id="large-circle"
        className="absolute w-10 h-10 bg-transparent border border-white rounded-full pointer-events-none"
        style={{ position: 'fixed', top: 0, left: 0 }}
      ></div>
    </div>
  );
};

export default MouseFollower;
