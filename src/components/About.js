import React from 'react';
import '../css/About.css';
import Puppy from '../assets/puppy.jpg';
import Kitty from '../assets/kitty.png';

function About() {
  return (
    <section id="about" className="about-section">
      <h2>Our Products</h2>
      <div className="product-container">
        <div className="product">
          <img src={Puppy} alt="Puppy" className="product-image" />
          <p>웜웜퍼피</p>
        </div>
        <div className="product">
          <img src={Kitty} alt="Kitty" className="product-image" />
          <p>웜웜키티</p>
        </div>
      </div>
      <p>MEEUM is a forward-thinking company dedicated to innovation and excellence.</p>
    </section>
  );
}

export default About;
