import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Clock, MapPin } from 'lucide-react';
import { ALL_BLOGS } from '../data/blogData';
import Navbar from '../components/navbar/Navbar';
import MobileNavbar from '../components/navbar/MobileNavbar';
import MusicPlayer from '../components/MusicPlayer';
import './BlogDetail.css';

const BlogDetail = () => {
  const { blogId } = useParams(); 
  const blog = ALL_BLOGS[blogId];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blogId]);

  if (!blog) {
    return (
      <div className="error-page container">
        <h1>Story Not Found</h1>
        <Link to="/" className="home-cta">Go back to all stories</Link>
      </div>
    );
  }

  return (
    <div className="blog-detail-root">
      <Navbar />
      <MobileNavbar />
      
      {/* 1. Immersive Editorial Header */}
      <header className="story-hero-header" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url(${blog.heroImage})` }}>
        <div className="container header-inner">
          <Link to="/" className="back-link-modern"><ArrowLeft size={18} /> BACK TO JOURNEYS</Link>
          <motion.div 
            className="header-title-box"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="story-meta-location">{blog.subtitle.split('|')[0]}</span>
            <h1 className="story-main-title-large">{blog.title}</h1>
            <div className="story-meta-stats">
              <span>{blog.stories.length} MEMORIES COLLECTED</span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* 2. Natural Narrative Flow */}
      <main className="container story-content-flow">
        {blog.stories.map((item, index) => (
          <section key={item.id} className="memory-block">
             <div className="memory-visual-side">
                <motion.div 
                  className="memory-img-wrapper"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <img src={item.image} alt={item.title} />
                  <div className="memory-index">{index + 1}</div>
                </motion.div>
             </div>

             <div className="memory-text-side">
                <motion.div 
                   className="memory-text-content"
                   initial={{ opacity: 0, x: 30 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                >
                  <div className="memory-meta">
                     <span><Clock size={14} /> {item.date}</span>
                     <span><MapPin size={14} /> {item.location || 'Nepal'}</span>
                  </div>
                  <h2 className="memory-title">{item.title}</h2>
                  <p className="memory-desc">{item.description}</p>
                </motion.div>
             </div>
          </section>
        ))}
      </main>

      {/* 3. Editorial Footer */}
      <footer className="story-detail-footer">
        <div className="container">
          <h2>END OF THE TRAIL</h2>
          <p>Captured by Hiyan Jong Rai</p>
          <Link to="/" className="home-return-btn">DISCOVER MORE STORIES</Link>
        </div>
      </footer>
      {/* 4. Immersive Music (Floating) */}
      <MusicPlayer url={blog.musicUrl} />
    </div>
  );
};

export default BlogDetail;
