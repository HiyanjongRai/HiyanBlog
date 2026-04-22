import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/navbar/Navbar';
import MobileNavbar from '../components/navbar/MobileNavbar';
import TravelHeader from '../components/TravelHeader';
import BlogGrid from '../components/BlogGrid';
import BentoBlogGrid from '../components/BentoBlogGrid';
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
        <title>Hiyan Jong Rai | Immersive Travel Blog &amp; Photography Nepal</title>
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
                "https://www.facebook.com/hiyanjong.rai69",
                "https://www.instagram.com/tilung.hiyanjongrai"
              ]
            }
          `}
        </script>
      </Helmet>

      {/* ── Navigation ── */}
      <Navbar />
      <MobileNavbar />

      {/* ── Hero Slideshow ── */}
      <TravelHeader />

      {/* ── Travel Stories Grid ── */}
      <div id="blog" className="container full-feed-section">
        <div id="work" className="feed-header-alt">
          <span className="feed-subtitle">COLLECTED WORKS</span>
          <h2 className="feed-title-alt">Travel Stories</h2>
        </div>
        <BlogGrid posts={images} />
      </div>

      <div className="container full-feed-section">
        <BentoBlogGrid posts={images} />
      </div>

      {/* ── Sidebar + About ── */}
      <div className="sidebar-footer-container container">
        <TravelSidebar />
        <div className="home-seo-about">
          <h3 className="seo-h3">About This Blog</h3>
          <p>
            Hiyan Jong Rai&apos;s Travel Blog is a personal journal of adventures across Nepal — from the
            wild off-road trails of Rauta Hill in Udayapur to the misty morning sheep farms of Nuwakot.
            Every journey is captured not just through a lens, but through genuine emotion and curiosity.
          </p>
          <p>
            Whether it&apos;s standing at Nepali Danda watching the Himalayas emerge from the clouds, or
            sitting quietly among the sheep at dusk — these stories are an invitation to slow down, look
            closer, and feel the magic of Nepal.
          </p>
        </div>
      </div>

      {/* ── Contact Section ── */}
      <section id="contact" className="contact-section">
        <div className="container contact-container">
          <span className="contact-eyebrow">GET IN TOUCH</span>
          <h2 className="contact-heading">Let&apos;s Connect</h2>
          <p className="contact-subtext">
            Have a story to share or a collaboration in mind? Find me across social platforms —
            every journey is better when shared.
          </p>

          <div className="contact-social-row">
            <a
              href="https://www.facebook.com/hiyanjong.rai69"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link"
            >
              <i className="fab fa-facebook-f"></i>
              <span>Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/tilung.hiyanjongrai/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link"
            >
              <i className="fab fa-instagram"></i>
              <span>Instagram</span>
            </a>
            <a
              href="https://www.pinterest.com/HiyanjongRai/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link"
            >
              <i className="fab fa-pinterest-p"></i>
              <span>Pinterest</span>
            </a>
            <a
              href="https://www.youtube.com/channel/UCSw-l6BnDh2kRPH30Y6ugtw"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link"
            >
              <i className="fab fa-youtube"></i>
              <span>YouTube</span>
            </a>
          </div>

          <a href="mailto:hiyanjongrai@gmail.com" className="contact-email-btn">
            Send an Email
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="travel-main-footer">
        <div className="container">
          <p>&copy; 2026 HIYAN JONG RAI. All memories reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
