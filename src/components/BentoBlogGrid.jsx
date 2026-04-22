import React from 'react';
import { Link } from 'react-router-dom';
import './BentoBlogGrid.css';

const BentoBlogGrid = ({ posts }) => {
  return (
    <div className="bento-blog-wrapper">
      <div className="bento-header">
        <span className="bento-subtitle">GALLERY VIEW</span>
        <h2 className="bento-title">The Mosaic Collection</h2>
        <p className="bento-desc">An immersive full-image grid layout for showcasing your photography.</p>
      </div>
      
      <div className="bento-grid-container">
        {posts.map((post, index) => {
          // Dynamic classes to create the "Bento/Mosaic" mixed sizes layout
          let bentoClass = "bento-card-standard";
          if (index === 0) bentoClass = "bento-card-large";        // Top Left - Huge (2x2)
          else if (index === 3) bentoClass = "bento-card-wide";         // Middle Wide (2x1)
          else if (index === 4) bentoClass = "bento-card-tall";         // Vertical (1x2)
          
          return (
            <Link 
              to={`/blog/${post.blogId}`} 
              key={`bento-${post.id}`} 
              className={`bento-card ${bentoClass}`}
            >
              <div className="bento-img-wrap">
                <img src={post.imageUrl} alt={post.title} loading="lazy" />
              </div>
              <div className="bento-overlay">
                <div className="bento-cats">
                  <span className="bento-category">{post.category || 'TRAVEL'}</span>
                </div>
                <div className="bento-content">
                  <h3 className="bento-post-title">{post.title}</h3>
                  <div className="bento-meta-row">
                    <span className="bento-date">{post.date}</span>
                    <span className="bento-read-btn">Explore <i className="fas fa-arrow-right"></i></span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BentoBlogGrid;
