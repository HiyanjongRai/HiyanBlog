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

      <div id="about" className="home-seo-about container">
          <h3 className="seo-h3">The Journey of Hiyan Jong Rai</h3>
          <p>
            Based in the vibrant capital of Kathmandu and hailing from the peaceful green hills of Gaighat, Udayapur, my journey as a storyteller is fueled by the raw, natural beauty of Nepal. Through this immersive travel blog, I aim to transcend traditional visual galleries by providing deep, narrative contexts for each memory captured. My photography and videography reflect a personal quest to find the 'feeling' in every destination, whether it's the spiritual silence at the summit of Rauta Hill or the mist-covered pastures of Nuwakot Bheda Farm.
          </p>
          <p>
            Over the years, I have realized that travel isn't just about the distance covered, but the memories collected along the way. My first definitive trip in 2078 B.S. changed my perspective on discovery. It taught me that every off-road trail, every early 5:30 AM start with friends like Nishan Kiran Chauhan, and every golden sunrise over the Himalayas is a story waiting to be told. From the smooth roads of Gaighat to the challenging dirt tracks of the Mahabharat range, each bump and turn is a testament to the adventurous spirit.
          </p>
          <p>
            This platform serves as a sanctuary for those who seek peace, refreshment, and a genuine connection with nature. Whether you're planning a religious visit to the temples of Udayapur or a scenic picnic at the sheep farms of Nuwakot, these stories offer a glimpse into the magical landscapes that define our motherland. Explore the 'Collected Works' feed and join me on a journey above the clouds, where the world is quiet and nature's symphony is the only sound. 🌿
          </p>
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
