import React, { useState } from 'react';
import './navbar.css';
import sparshalogo from './sparshalogo.svg';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <img src={sparshalogo} alt="" />
      </div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        &#9776;
      </button>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
