import React, { useState } from 'react';
import './MobileNavbar.css';

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Control scroll when menu is open on mobile
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="mobile-nav-container">
      {/* Top Red Bar */}
      <div className="top-red-bar"></div>

      {/* Hamburger Trigger (Always Visible when closed) */}
      <div className="hamburger-box" onClick={toggleMenu} aria-label="Open Navigation">
        <div className="hamburger-lines">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Full screen Overlay for Mobile */}
      <div className={`curved-overlay ${isOpen ? 'open' : ''}`}>
        <div className="overlay-header-mobile">
          <button className="close-circle-mobile" onClick={closeMenu} aria-label="Close Navigation">
            <div className="x-mark-mobile"></div>
          </button>
        </div>
        
        <nav className="mobile-menu-items">
          <ul>
            <li onClick={closeMenu}><a href="#home">HOME</a></li>
            <li onClick={closeMenu}><a href="#about">ABOUT</a></li>
            <li onClick={closeMenu}><a href="#contact">CONTACT</a></li>
            <li onClick={closeMenu}><a href="#blog">BLOG</a></li>
          </ul>
        </nav>
      </div>

      {/* Dark backdrop only for mobile when open */}
      {isOpen && <div className="mobile-backdrop" onClick={closeMenu}></div>}
    </div>
  );
};

export default MobileNavbar;
