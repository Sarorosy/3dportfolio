// src/components/Loader.js
import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const Loader = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Increment the count up to 100
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev === 100) {
          clearInterval(interval);
          // After reaching 100, animate loader out
          animateLoaderOut();
          return prev;
        }
        return prev + 1;
      });
    }, 15); // Adjust timing as necessary

    return () => clearInterval(interval);
  }, []);

  const animateLoaderOut = () => {
    // Animate each letter to disappear one by one
    const textElement = document.querySelector('.loader-count');
    const letters = textElement.textContent.split('');
    textElement.innerHTML = letters.map(letter => `<span class="letter">${letter}</span>`).join('');

    const letterElements = document.querySelectorAll('.letter');
    
    letterElements.forEach((letter, index) => {
      gsap.to(letter, {
        opacity: 0,
        y: -20,
        delay: index * 0.1, // Delay for each letter
        onComplete: () => {
          if (index === letterElements.length - 1) {
            // After the last letter fades out, hide the loader
            gsap.to('.loader', {
              y: '-100%',
              opacity: 0,
              duration: 1.5,
              ease: 'power4.out',
              onComplete: () => {
                document.querySelector('.loader').style.display = 'none';
              }
            });
          }
        }
      });
    });
  };

  return (
    <div className="loader flex flex-col items-center justify-center">
      <span className="loader-count text-4xl font-bold">{count}%</span>
      {/* Progress Bar */}
      <div className="progress-bar-container w-1/3 mt-4">
        <div
          className="progress-bar"
          style={{ width: `${count}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Loader;
