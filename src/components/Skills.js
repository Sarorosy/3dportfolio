import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

function Skills() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Animate each skill category
    const items = containerRef.current.querySelectorAll('.skill-category');
    gsap.fromTo(
      items,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }
    );
  }, []);

  return (
    <div ref={containerRef} className="skills-container mt-24 p-6 mx-auto max-w-4xl">
      <h2 className="flex items-center justify-center text-4xl font-bold text-center mb-12">
        <span className="flex-1 h-[1px] bg-gray-800 mr-4"></span>
        Skills
        <span className="flex-1 h-[1px] bg-gray-800 ml-4"></span>
      </h2>


      {/* Skill Categories */}
      <div className="skill-category mb-8">
        <h3 className="text-2xl font-semibold text-gray-300 mb-4">Web Development</h3>
        <p className="text-lg text-gray-400">
          JAVA, JavaScript, PHP, Spring Boot, CI/CD, TypeScript, jQuery, AJAX, React, Node.js, Express, MySQL, MongoDB, REST APIs, Postman, HTML5, CSS3
        </p>
      </div>

      <div className="skill-category mb-8">
        <h3 className="text-2xl font-semibold text-gray-300 mb-4">UI Design</h3>
        <p className="text-lg text-gray-400">
          Tailwind CSS, Bootstrap, UI Animations, Optimizations, Prototyping, Frontend Frameworks (CodeIgniter, Laravel)
        </p>
      </div>

      <div className="skill-category mb-8">
        <h3 className="text-2xl font-semibold text-gray-300 mb-4">Tools & Platforms</h3>
        <p className="text-lg text-gray-400">
          Docker, cPanel, Jenkins, Git, Firebase, SEO, WordPress, API Integrations, Postman
        </p>
      </div>

      <div className="skill-category mb-8">
        <h3 className="text-2xl font-semibold text-gray-300 mb-4">Motion & Animations</h3>
        <p className="text-lg text-gray-400">
          UI Animations, Logo Animations, Prototyping, GSAP, React Transition Groups
        </p>
      </div>
    </div>
  );
}

export default Skills;
