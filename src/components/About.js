import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import { MdArrowOutward } from 'react-icons/md';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const textRef = useRef(null);
  const navigate = useNavigate(); // Initialize the navigate hook

  const text = "I'm a 23-year-old full stack web developer currently working in a company while exploring the world of Flutter and mobile app development. With a solid foundation in web technologies, I've built numerous websites and applications using various stacks, including MERN, PHP, and MySQL.";

  useEffect(() => {
    const textElements = textRef.current.children;

    // Create a timeline for the word animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: "top bottom",
        end: "top middle",
        scrub: 1,
      },
    });

    // Add animations for each word
    Array.from(textElements).forEach((word, index) => {
      tl.to(word, {
        opacity: 1,
        duration: 0.5,
        delay: index * 0.2, // Staggering effect for each word
      }, 0); // Start all at the same time
    });

    // Set initial opacity to 0.4
    gsap.set(textElements, { opacity: 0.3 });

    return () => {
      tl.kill(); // Cleanup the timeline on component unmount
    };
  }, []);

  return (
    <div className="relative w-full p-6 flex flex-col justify-center items-start md:w-5/6 mx-auto" id='about'>
      <p ref={textRef} className="text-2xl md:text-5xl text-white text-center anton-font">
        {text.split(' ').map((word, index) => (
          <span key={index} className="opacity-0 mx-1">
            {word}{' '}
          </span>
        ))}
      </p>
      
      {/* "Read More" Button */}
      <button 
        onClick={() => navigate('/about')} 
        className="mt-6 flex items-center gap-2 text-white  px-6 py-2 rounded-full relative group mx-auto"
        
      >
        <div className="absolute left-[-20px] flex items-center justify-center rounded-full bg-white h-2 w-2 group-hover:h-9 group-hover:w-9 transition-all duration-300">
          <span className="text-[#f179ef] group-hover:inline-block hidden transition-opacity duration-300 font-bold"> <MdArrowOutward /> </span>
        </div>
        <span className="transition-colors duration-300 group-hover:text-[#f179ef]">Read More</span>
      </button>
    </div>
  );
}
