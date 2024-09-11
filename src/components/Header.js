import React, { useState, useEffect } from 'react';
import './Header.css'; // Make sure to import your CSS file

const Header = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true); // Default to dark theme
  const [menuOpen, setMenuOpen] = useState(false);

  // Set the dark class on initial render
  useEffect(() => {
    document.body.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    if (isDarkTheme) {
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
    }
  };

  return (
    <header className={`flex justify-between items-center p-4 transition-colors duration-300 ${isDarkTheme ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="text-lg font-bold">My Portfolio</div>
      <nav className={`md:flex space-x-4 ${menuOpen ? 'block' : 'hidden'} md:block`}>
        <a href="#about" className="hover:text-blue-500">About</a>
        <a href="#projects" className="hover:text-blue-500">Projects</a>
        <a href="#contact" className="hover:text-blue-500">Contact</a>
      </nav>
      <div>
        <label className="switch" htmlFor="switch">
          <input id="switch" type="checkbox" className="circle" onChange={toggleTheme}  />
          <svg viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg" className="moon svg">
            <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
          </svg>
          <div className="sun svg">
            <span className="dot"></span>
          </div>
        </label>
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 text-gray-600 hover:text-blue-500"
        >
          {/* Hamburger Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
