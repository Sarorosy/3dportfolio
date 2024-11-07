// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import { ThemeProvider } from './components/ThemeContext';
import MouseFollower from './components/MouseFollower';
import Loader from './components/Loader';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="App px-1 lg:px-12">
          <Loader />
          
          
          <Routes>
            <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<AboutPage />} />
            {/* You can add more routes here */}
          </Routes>
          <MouseFollower />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
