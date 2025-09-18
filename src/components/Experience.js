import React, { useEffect, useRef } from "react";
import { CheckCircle2, GitMerge, Star } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
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
    <div ref={containerRef} className="p-6 max-w-2xl relative border rounded-lg shadow-md bg-white mx-auto mt-8">
      <div className="absolute top-3 left-3 flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <h1 className="text-3xl font-bold mb-8 text-center text-black">Work Experience</h1>
      <h2 className="text-2xl font-bold mb-6 mt-4 text-black">Experience</h2>
      <div className="space-y-8">

        {/* Experience 1 */}
        <div className="relative">
          <div className="flex items-start">
            <div className="relative mr-4">
              <div className="bg-blue-600 rounded-full p-2 w-9 h-9 flex items-center justify-center">
                <span className="text-white font-medium">E</span>
              </div>
              <div className="absolute top-full left-1/2 w-8 h-8 border-l-2 border-b-2 border-emerald-500 rounded-bl-xl -translate-x-1/2"></div>
            </div>
            <div className="space-y-1 pt-1">
              <div className="font-medium text-black flex items-center">
                ELK Education Consultants Pvt. Ltd
                {/* <span className="ml-2 bg-blue-100 text-blue-500 rounded-xl py-1 px-2 flex items-center w-24">
                  Present <GitMerge width={18} height={18} className="ml-2" />
                </span> */}
              </div>

              <div className="flex items-center gap-2">
                <h3 className="font-bold text-black">PHP, React Full Stack Developer</h3>
                <CheckCircle2 className="w-5 h-5 text-green-500" />
              </div>
              <p className="text-xsm text-gray-500 font-semibold">
                May 2024 - Sept 2025 (1 yr, 5 m) • Chennai Urban, India • Full-Time
              </p>
            </div>
          </div>
        </div>

        {/* Experience 2 */}
        <div className="relative">
          <div className="flex items-start">
            <div className="relative mr-4">
              <div className="bg-orange-500 rounded-full p-2 w-9 h-9 flex items-center justify-center">
                <span className="text-white font-medium">F</span>
              </div>
              <div className="absolute top-full left-1/2 w-8 h-8 border-l-2 border-b-2 border-emerald-500 rounded-bl-xl -translate-x-1/2"></div>
            </div>
            <div className="space-y-1 pt-1">
              <div className="font-medium text-black">Freelance</div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-black">Web Developer</h3>
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <Star className="w-5 h-5 text-orange-400 fill-orange-400" />
              </div>
              <p className="text-xsm text-gray-500 font-semibold">
                Feb 2022 - May 2024 (1 yr, 3 m) • Chennai, India • Part-Time
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
