import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';
import { GrClose } from "react-icons/gr";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isTop = currentScrollY <= 0;
      const isBottom = window.innerHeight + currentScrollY >= document.documentElement.scrollHeight;

      if (isTop || isBottom) {
        setShowHeader(true); // Show header when at top or bottom
      } else if (currentScrollY > lastScrollY) {
        setShowHeader(false); // Hide header on scroll down
      } else {
        setShowHeader(true); // Show header on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
    className={`fixed top-0 left-0 z-50 right-0 p-4 transition-transform duration-500 ${
      showHeader ? 'transform translate-y-0' : 'transform -translate-y-full'
    } text-white flex justify-between items-center bg-gradient-to-b from-black to-transparent`}
  >
      <div className="text-lg font-bold">
      <button onClick={() => handleNavigation('/')}> Saravanan Seenivasan </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="flex space-x-4">
        <button onClick={() => handleNavigation('/')} className={`button opacity-50 hover:opacity-100 transition-opacity duration-200 ${isActive('/')}`}>Home</button>
        <button onClick={() => handleNavigation('/about')} className={`button opacity-50 hover:opacity-100 transition-opacity duration-200 ${isActive('/about')}`}>About</button>
        
      </nav>
    </header>
  );
};

export default Header;
