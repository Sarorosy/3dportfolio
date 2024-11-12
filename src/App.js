import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import { ThemeProvider } from './components/ThemeContext';
import MouseFollower from './components/MouseFollower';
import Loader from './components/Loader';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import { motion, AnimatePresence } from 'framer-motion'; // Import framer-motion components

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="App px-1 lg:px-12 overflow-x-hidden">
          <Loader />
          
          <Header /> {/* You can add your Header here */}

          {/* Wrap Routes with AnimatePresence to enable transitions */}
          <AnimatePresence mode='wait'>
            <Routes>
              <Route 
                path="/" 
                element={
                  <motion.div
                    key="home"
                    initial={{ opacity: 0 }} // Start with opacity 0
                    animate={{ opacity: 1 }} // Fade in to full opacity
                    exit={{ opacity: 0 }} // Fade out when exiting
                    transition={{ duration: 0.5 }} // Transition duration
                  >
                    <HeroSection />
                  </motion.div>
                } 
              />
              <Route 
                path="/about" 
                element={
                  <motion.div
                    key="about"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <AboutPage />
                  </motion.div>
                } 
              />
            </Routes>
          </AnimatePresence>
          
          <MouseFollower />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
