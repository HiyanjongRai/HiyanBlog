import React from 'react';
import './FeaturedGrid.css';

const FeaturedGrid = ({ posts }) => {
  // Take the first 3 posts as featured
  const featured = posts.slice(0, 3);

  return (
    <div className="container featured-grid-section">
      <div className="travel-grid-layout">
        {featured.map((post, index) => (
          <div key={post.id} className="featured-grid-item">
            <div className="featured-image-box">
              <img src={post.imageUrl} alt={post.title} />
              <div className="featured-item-overlay">
                <span className="featured-category">TRAVEL TIPS</span>
                <h3 className="featured-item-title">{post.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedGrid;
