import React, { useState, useEffect } from 'react';
import './Header.css';
import { GrClose } from "react-icons/gr";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setIsScrollingUp(false);
      } else {
        // Scrolling up
        setIsScrollingUp(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full p-4 z-50 transition-transform duration-300 text-white ${
        isScrollingUp ? 'transform translate-y-0' : 'transform -translate-y-full'
      }`}
      style={{
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))',
      }}
    >
      <div className="flex justify-between items-center">
        <div className="text-lg font-bold">Saravanan Seenivasan</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-[999]">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-gray-600 hover:text-blue-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`fixed top-0 left-0 h-full w-full bg-black text-white flex flex-col items-center justify-center space-y-4 transition-transform duration-300 ease-in-out ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Close button */}
          <button
            className="absolute top-8 right-8 text-2xl focus:outline-none"
            onClick={() => setMenuOpen(false)}
          >
            <GrClose />
          </button>

          <a href="#about" className="hover:text-blue-500 text-xl" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#projects" className="hover:text-blue-500 text-xl" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" className="hover:text-blue-500 text-xl" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
