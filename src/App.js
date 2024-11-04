// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import { ThemeProvider } from './components/ThemeContext';
import MouseFollower from './components/MouseFollower';
import About from './components/About';
import Loader from './components/Loader';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="App px-1 lg:px-12">
          <Loader />
          <Header />
          <HeroSection />
          <About />
          <MouseFollower />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
