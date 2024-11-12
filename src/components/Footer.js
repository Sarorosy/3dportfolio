import React, { useRef,useEffect } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import Online from './Online';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function Footer() {

  const containerRef = useRef(null);

  useEffect(() => {
    // GSAP animation for sliding in from the bottom
    gsap.fromTo(
      containerRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6, // Slightly shorter duration for smoother effect
        ease: "power3.out", // Power3 is smoother than Power4 for subtle animations
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", // Trigger when the top of the element hits 80% of the viewport height
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
}, []);

  return (
    <footer className="bg-black text-white pb-8 px-4 md:px-8 pt-24 h-screen mx-auto flex flex-col justify-between">
      <div className="container mx-auto max-w-5xl flex-1 flex" id="footer" style={{ margin: "auto auto" }}>
        <div ref={containerRef}  className="flex flex-col items-center justify-center space-y-8 mb-16 border-2 border-gray-800 px-4 py-24 md:px-12 md:py-12 rounded-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-light text-center">Looking for a new talent?</h2>
          <a
            href="mailto:codersaro@gmail.com"
            className="text-3xl md:text-8xl font-light hover:text-rose-500 transition duration-300"
          >
            codersaro@gmail.com
          </a>
          <div className="flex items-center space-x-8 mt-8 md:my-1">
            <div className="group flex items-center relative">
              <a
                href="https://linkedin.com/in/saro-dev"
                target="_blank"
                className="text-white/75 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <div className="absolute left-[-25px] flex items-center justify-center rounded-full bg-rose-500 h-2 w-2 group-hover:h-5 group-hover:w-5 transition-all duration-300">
                <span className="text-rose-100 group-hover:inline-block hidden transition-opacity duration-300 font-bold">
                  <MdArrowOutward />
                </span>
              </div>
            </div>
            <div className="group flex items-center relative">
              <a
                href="https://linkedin.com/in/saro-dev"
                target="_blank"
                className="text-white/75 hover:text-white transition-colors ml-12"
              >
                Download CV
              </a>
              <div className="absolute left-[20px] flex items-center justify-center rounded-full bg-rose-500 h-2 w-2 group-hover:h-5 group-hover:w-5 transition-all duration-300">
                <span className="text-rose-100 group-hover:inline-block hidden transition-opacity duration-300 font-bold">
                  <MdArrowOutward />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center md:items-start justify-between text-sm text-white/50 space-y-4 md:space-y-0">
        <p>©2024 Saravanan.</p>
        <div className="flex items-center space-x-2">
          <Online />
        </div>
        <p>Made by Saravanan</p>
      </div>
    </footer>
  );
}
