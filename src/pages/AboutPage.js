import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import profile from '../assets/profile.webp';
import Skills from '../components/Skills';
import Experience from '../components/Experience';

function AboutPage() {
  const h1Ref = useRef(null);
  const imgRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    // Animate h1 (fade in and slide from top)
    gsap.fromTo(
      h1Ref.current,
      { y: -50, opacity: 0 }, // Starting values
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' } // Ending values
    );

    // Animate image (slide in from left)
    gsap.fromTo(
      imgRef.current,
      { x: -100, opacity: 0 }, // Starting values
      { x: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.5 } // Ending values
    );

    // Animate about text (slide in from right)
    gsap.fromTo(
      aboutRef.current,
      { x: 100, opacity: 0 }, // Starting values
      { x: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.5 } // Ending values
    );
  }, []);


  return (
    <>
      <Header />
      <div className="mt-24 px-6 lg:px-20">
        <h1 ref={h1Ref} className="text-5xl font-bold text-center mb-12">
          Full-Stack Web Developer
        </h1>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div ref={imgRef} className="flex-1">
            <img
              src={profile}
              alt="Saravanan, Full Stack Developer"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          {/* About Section */}
          <div ref={aboutRef} className="flex-1">
            {/* Slogan */}
            <div className="mb-8">
              <h2 className="text-4xl font-bold leading-tight text-gray-600 hover:text-gray-400 duration-300">
                Building the future,<br />
                one pixel, one<br />
                interaction, and<br />
                one solution at a time.
              </h2>
            </div>

            {/* About Me */}
            <h2 className="text-3xl font-semibold mb-4">About Me</h2>
            <p className="text-lg text-gray-700 leading-7">
              I am a passionate full-stack web developer with over 2 years of
              experience in building and maintaining scalable, user-friendly
              web applications. My expertise lies in both frontend and backend
              technologies, including React, Node.js, Express, PHP, and MySQL. I
              enjoy transforming ideas into functional digital solutions while
              focusing on clean, maintainable code and delivering exceptional
              user experiences.
            </p>
            <p className="text-lg text-gray-700 leading-7 mt-4">
              Beyond coding, I am always eager to learn new tools and
              frameworks to enhance my development workflow and bring
              innovation to every project I undertake.
            </p>
          </div>

        </div>
        <Skills />
        <Experience />
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
