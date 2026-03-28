import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
            <li style={{ '--index': 1 }} onClick={closeMenu}><Link to="/">HOME</Link></li>
            <li style={{ '--index': 2 }} onClick={closeMenu}><Link to="/about">ABOUT</Link></li>
            <li style={{ '--index': 3 }} onClick={closeMenu}><Link to="/#work">WORK</Link></li>
            <li style={{ '--index': 4 }} onClick={closeMenu}><Link to="/#blog">BLOG</Link></li>
            <li style={{ '--index': 5 }} onClick={closeMenu}><Link to="/#contact">CONTACT</Link></li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
