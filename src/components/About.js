import React from 'react';
import '../css/About.css';
import photo3 from '../assets/photo3.jpg';
import photo4 from '../assets/photo4.jpg';
import photo5 from '../assets/photo5.jpg';

function About() {
  return (
    <section id="about" className="about-section">
      <h2>Our Products</h2>
      <div className="product-container">
        <div className="product">
          <img src={photo3} alt="Product 1" className="product-image" />
          <h3>프로비바</h3>
          <h4>PROVIVA</h4>
          <p>
          "Enjoy a daily boost of wholesome protein with the natural taste of grains."
          </p>
        </div>
        <div className="product">
          <img src={photo4} alt="Product 2" className="product-image" />
          <h3>웜웜키티</h3>
          <h4>WORMWORMKITTY</h4>
          <p>
          "Mix into your cat's food for an added touch of nutrition and care."
          </p>
        </div>
        <div className="product">
          <img src={photo5} alt="Product 3" className="product-image" />
          <h3>웜웜퍼피</h3>
          <h4>WORMWORMPUPPY</h4>
          <p>
          "Sprinkle on your dog's meals for a nutritious and tasty enhancement."
          </p>
        </div>
      </div>
      <p className="about-description">
        
      </p>
    </section>
  );
}

export default About;
