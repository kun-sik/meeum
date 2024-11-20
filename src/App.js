import React from 'react';
import './App.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
