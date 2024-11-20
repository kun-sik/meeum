import React from 'react';
import '../css/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo"><a href='/'>MEEUM</a></div>
      <nav className="nav">
        <ul>
          <li><a href="#main">Company</a></li>
          <li><a href="#about">Product</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
