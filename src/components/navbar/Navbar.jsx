import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="navbar-header">
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle Navigation">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </header>

      <div className={`overlay-menu ${isOpen ? 'show' : ''}`}>
        <div className="overlay-header">
          <button className="close-circle-desktop" onClick={closeMenu} aria-label="Close Navigation">
            <div className="x-mark-desktop"></div>
          </button>
        </div>
        
        <nav className="overlay-content">
          <ul className="menu-list">
            <li style={{ '--index': 1 }} onClick={closeMenu}><a href="#home">HOME</a></li>
            <li style={{ '--index': 2 }} onClick={closeMenu}><a href="#about">ABOUT</a></li>
            <li style={{ '--index': 3 }} onClick={closeMenu}><a href="#work">WORK</a></li>
            <li style={{ '--index': 4 }} onClick={closeMenu}><a href="#blog">BLOG</a></li>
            <li style={{ '--index': 5 }} onClick={closeMenu}><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
