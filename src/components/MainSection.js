import React from 'react';
import '../css/MainSection.css';
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo6 from '../assets/photo6.jpg';


function MainSection() {
  return (
    <section class="main-section">
  <h1>Welcome to MEEUM</h1>
  <p>"Elevating nutrition, naturally and sustainably."</p>
  <div class="image-container">
    <img src={photo1} alt="" />
    <img src={photo2} alt="" />
    <img src={photo6} alt="" />
    
    


  </div>
</section>
  );
}

export default MainSection;
