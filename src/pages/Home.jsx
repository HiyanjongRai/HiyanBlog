import React from 'react';
import Navbar from '../components/navbar/Navbar';
import MobileNavbar from '../components/navbar/MobileNavbar';
import TravelHeader from '../components/TravelHeader';
import FeaturedGrid from '../components/FeaturedGrid';
import BlogGrid from '../components/BlogGrid';
import TravelSidebar from '../components/TravelSidebar';
import { images } from '../data/images';
import './Home.css';

const Home = () => {
  return (
    <div className="home-travel-root">
      {/* Immersive Header */}
      <Navbar />
      <MobileNavbar />
      <TravelHeader />

      {/* Modern 3-Column Masonry Feed */}
      <div className="container full-feed-section">
        <div className="feed-header-alt">
          <span className="feed-subtitle">COLLECTED WORKS</span>
          <h2 className="feed-title-alt">Travel Stories</h2>
        </div>
        <BlogGrid posts={images} />
      </div>

      <div className="sidebar-footer-container container">
         <TravelSidebar />
      </div>

      <footer className="travel-main-footer">
        <div className="container">
          <p>&copy; 2026 HIYAN JONG RAI. All memories reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
