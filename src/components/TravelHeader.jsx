import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './TravelHeader.css';

// Importing your local banner media
import video1 from '/src/assets/Banner/IMG_9310.MOV';
import video2 from '/src/assets/Banner/IMG_9709.MOV';
import img1 from '/src/assets/Banner/banner1 (1).jpg';
import img2 from '/src/assets/Banner/banner2 (1).jpg';
import img3 from '/src/assets/Banner/banner3 (1).jpg';
import img4 from '/src/assets/Banner/banner4 (1).jpg';
import img5 from '/src/assets/Banner/banner7 (1).jpg';
import img6 from '/src/assets/Banner/banner8 (1).jpg';
import img7 from '/src/assets/Banner/banner9 (1).jpg';
import img8 from '/src/assets/Banner/banner10 (1).jpg';
import img9 from '/src/assets/Banner/banner11 (1).jpg';
import img10 from '/src/assets/Banner/banner56 (1).jpg';

const slides = [
  { type: 'image', src: img1 },
  { type: 'video', src: video1 },
  { type: 'image', src: img2 },
  { type: 'image', src: img3 },
  { type: 'video', src: video2 },
  { type: 'image', src: img4 },
  { type: 'image', src: img5 },
  { type: 'image', src: img6 },
  { type: 'image', src: img7 },
  { type: 'image', src: img8 },
  { type: 'image', src: img9 },
  { type: 'image', src: img10 },
];

const TravelHeader = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="travel-hero-section">
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentIndex}
          className="slide-media-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {slides[currentIndex].type === 'video' ? (
            <video 
              src={slides[currentIndex].src} 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="hero-background-media"
            />
          ) : (
            <img 
              src={slides[currentIndex].src} 
              alt="Travel memory" 
              className="hero-background-media"
            />
          )}
          <div className="media-gradient-overlay" />
        </motion.div>
      </AnimatePresence>

      <div className="travel-header-logo-card">
        <h1 className="travel-logo-text">HIYAN JONG RAI</h1>
        <p className="travel-logo-sub">OFFICIAL TRAVEL BLOG | COLLECTING MEMORIES</p>
      </div>

      <div className="slider-controls-centered">
        {slides.map((_, i) => (
          <button 
            key={i} 
            className={`slider-dot ${i === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="social-links-bar">
        <div className="container social-links-container">
          <div className="social-icons">
            <a href="https://www.facebook.com/hiyanjong.rai69" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/tilung.hiyanjongrai/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://www.pinterest.com/HiyanjongRai/" target="_blank" rel="noopener noreferrer"><i className="fab fa-pinterest-p"></i></a>
            <a href="https://www.youtube.com/channel/UCSw-l6BnDh2kRPH30Y6ugtw" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
          </div>
          <div className="header-search">
            <button className="search-toggle"><i className="fas fa-search"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelHeader;
