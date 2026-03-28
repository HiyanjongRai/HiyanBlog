import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/navbar/Navbar';
import MobileNavbar from '../components/navbar/MobileNavbar';
import TravelHeader from '../components/TravelHeader';
import FeaturedGrid from '../components/FeaturedGrid';
import BlogGrid from '../components/BlogGrid';
import TravelSidebar from '../components/TravelSidebar';
import { images } from '../data/images';
import './Home.css';

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div className="home-travel-root">
      <Helmet>
        <title>Hiyan Jong Rai | Immersive Travel Blog & Photography Nepal</title>
        <meta name="description" content="Explore the cinematic landscapes of Nepal through the lens of Hiyan Jong Rai. Travel stories from Rauta Hill, Nuwakot Bheda Farm, and beyond—captured in professional detail." />
        <link rel="canonical" href="https://hiyan-travel-blog.vercel.app/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hiyan-travel-blog.vercel.app/" />
        <meta property="og:title" content="Hiyan Jong Rai | Immersive Travel Blog" />
        <meta property="og:description" content="Cinematic travel stories and professional photography from the heart of Nepal. Explore Rauta Hill, Nuwakot, and more." />
        <meta property="og:image" content="https://hiyan-travel-blog.vercel.app/og-home.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hiyan Jong Rai | Travel Blog" />
        <meta name="twitter:description" content="Discover the hidden gems of Nepal with Hiyan Jong Rai." />
        
        {/* Schema.org JSON-LD Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Hiyan Jong Rai",
              "url": "https://hiyan-travel-blog.vercel.app/",
              "jobTitle": "Travel Photographer & Storyteller",
              "description": "Nepal-based travel photographer sharing cinematic stories from Udayapur, Kathmandu, and Nuwakot.",
              "sameAs": [
                "https://www.facebook.com/HiyanJongRai",
                "https://www.instagram.com/hiyan_rai"
              ]
            }
          `}
        </script>
      </Helmet>
      {/* Immersive Header */}
      <Navbar />
      <MobileNavbar />
      <TravelHeader />

      {/* Modern 3-Column Masonry Feed */}
      <div id="blog" className="container full-feed-section">
        <div id="work" className="feed-header-alt">
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
