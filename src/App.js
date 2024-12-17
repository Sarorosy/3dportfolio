import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import { ThemeProvider } from './components/ThemeContext';
import MouseFollower from './components/MouseFollower';
import Loader from './components/Loader';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import { motion, AnimatePresence } from 'framer-motion'; // Import framer-motion components

function App() {
  const location = useLocation(); // Get current route location

  return (
    <ThemeProvider>
      <div className="App px-1 lg:px-12 overflow-x-hidden">
        <Loader />
        <Header />
        <MouseFollower />

        {/* Add AnimatePresence for transitions */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageWrapper title="Home">
                  <HeroSection />
                </PageWrapper>
              }
            />
            <Route
              path="/about"
              element={
                <PageWrapper title="About">
                  <AboutPage />
                </PageWrapper>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

// PageWrapper adds the full-screen transition effect
const PageWrapper = ({ children, title }) => {
  return (
    <>
      {/* Full-screen cover div for transition */}
      <motion.div
        className="screen-cover"
        initial={{ y: 0 }}
        animate={{ y: '100%' }}
        exit={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          transform: "translate(-50%, 50%)",
          width: '100%',
          height: '100%',
          backgroundColor: '#000', // Set the desired cover color
          transformOrigin: 'top', // Make it shrink from the top
          zIndex: 999,
        }}
      >
        {/* Title animation during transition */}
        <motion.h1
          initial={{ opacity: 0 }} // Title fades in and moves up
          animate={{ opacity: 1}} // Final position
          exit={{ opacity: 0}} // Exit animation
          transition={{ duration: 0.2, ease: "easeOut" }}

        >
          <span
            style={{
              display: 'flex',
              justifyContent: 'center', // Horizontally center
              alignItems: 'center', // Vertically center
              position: 'absolute',
              top: '50%',
              left: '50%',
              color: '#fff',
              fontSize: '2.5rem',
              transform: 'translate(-50%, 0%)',
              fontWeight: 'bold',
              textAlign: 'center',
              zIndex: 1000,
            }}
          >
            {title}
          </span>
        </motion.h1>

      </motion.div>

      {/* Content animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}
