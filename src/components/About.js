import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const textRef = useRef(null);
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
      {/* <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2> */}
      <p ref={textRef} className="text-2xl md:text-5xl text-white text-center anton-font">
        {text.split(' ').map((word, index) => ( // Split by space for words
          <span key={index} className="opacity-0 mx-1"> {/* Add margin between words */}
            {word}{' '}
          </span>
        ))}
      </p>
    </div>
  );
}
