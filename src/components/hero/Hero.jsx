import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Hero.css';

// Importing Hero Images
import rautaHero from '../../assets/hero-image.jpg';
import bhedaHero from '../../assets/Nuwakot Bhedafarm/bheda0.JPG';

const slides = [
  {
    id: 'rauta',
    image: rautaHero,
    tagline: "NEPAL'S HIDDEN GEM",
    title: "The Highest Peak",
    highlight: "Rauta, Udayapur",
    description: "Experience the breathtaking view from Rauta, Udayapur – one of the highest hills in Nepal. Journey through clouds and capture the essence of pure tranquility.",
    link: "/blog/rauta"
  },
  {
    id: 'bhedafarm',
    image: bhedaHero,
    tagline: "NATURE'S MEADOW",
    title: "Mist of the Hills",
    highlight: "Bheda Farm, Nuwakot",
    description: "Discover the rolling green landscapes of Nuwakot. A paradise for nature lovers, where misty mornings meet the serene gaze of the mountain sheep.",
    link: "/blog/bhedafarm"
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section">
      <AnimatePresence mode='wait'>
        <motion.div 
          key={slides[current].id}
          className="hero-slide-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Background Layer */}
          <div className="hero-background">
            <img src={slides[current].image} alt={slides[current].highlight} className="hero-bg-img" />
            <div className="hero-overlay-dark"></div>
          </div>
          
          {/* Content Layer */}
          <div className="hero-container-full">
            <div className="hero-content-centered">
              <motion.span 
                className="hero-tagline-white"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 0.8 }}
                transition={{ delay: 0.2 }}
              >
                {slides[current].tagline}
              </motion.span>
              
              <motion.h1 
                className="hero-title-white"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {slides[current].title}<br />
                <span className="highlight-white">{slides[current].highlight}</span>
              </motion.h1>
              
              <motion.p 
                className="hero-description-white"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 0.9 }}
                transition={{ delay: 0.6 }}
              >
                {slides[current].description}
              </motion.p>
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <Link to={slides[current].link} className="hero-btn-primary">Read More</Link>
              </motion.div>
              
              {/* Slider Dots */}
              <div className="slider-dots">
                {slides.map((_, i) => (
                  <div 
                    key={i} 
                    className={`dot ${i === current ? 'active' : ''}`}
                    onClick={() => setCurrent(i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Footer Fixed */}
      <div className="hero-footer-absolute">
        <a href="https://www.yoursite.com" className="hero-url-white">www.yoursite.com</a>
        <div className="social-links-white">
          <a href="#" className="social-icon-white"><i className="fab fa-instagram"></i></a>
          <a href="#" className="social-icon-white"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="social-icon-white"><i className="fab fa-twitter"></i></a>
          <a href="#" className="social-icon-white"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
