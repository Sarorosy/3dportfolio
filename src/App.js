import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import { ThemeProvider } from './components/ThemeContext';


function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      
    </div>
  );
}

export default App;
