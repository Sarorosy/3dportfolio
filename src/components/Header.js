import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation
import './Header.css';
import { GrClose } from "react-icons/gr";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate
  const location = useLocation(); // Get the current location

  const handleNavigation = (path) => {
    setMenuOpen(false); // Close menu on navigation
    navigate(path); // Navigate to the specified path
  };

  // Function to check if the link is active
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="flex justify-between items-center p-4 transition-colors duration-300 text-white">
      <div className="text-lg font-bold">Saravanan Seenivasan</div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-4">
        <button onClick={() => handleNavigation('/')} className={`opacity-50 ${isActive('/')}`}>Home</button>
        <button onClick={() => handleNavigation('/about')} className={`opacity-50 ${isActive('/about')}`}>About</button>
        <button onClick={() => handleNavigation('/projects')} className={`opacity-50 ${isActive('/projects')}`}>Projects</button>
        <button onClick={() => handleNavigation('/contact')} className={`opacity-50 ${isActive('/contact')}`}>Contact</button>
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
        className={`z-[9999] fixed top-0 left-0 h-full w-full bg-black text-white flex flex-col items-center justify-center space-y-4 transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        {/* Close button */}
        <button
          className="absolute top-8 right-8 text-2xl focus:outline-none"
          onClick={() => setMenuOpen(false)}
        >
          <GrClose />
        </button>

        <button onClick={() => handleNavigation('/')} className={`opacity-50 text-xl ${isActive('/')}`}>Home</button>
        <button onClick={() => handleNavigation('/about')} className={`opacity-50 text-xl ${isActive('/about')}`}>About</button>
        <button onClick={() => handleNavigation('/projects')} className={`opacity-50 text-xl ${isActive('/projects')}`}>Projects</button>
        <button onClick={() => handleNavigation('/contact')} className={`opacity-50 text-xl ${isActive('/contact')}`}>Contact</button>
      </nav>
    </header>
  );
};

export default Header;
