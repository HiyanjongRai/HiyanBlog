import React from 'react';
import { Link } from 'react-router-dom';

const ImageCard = ({ image, onClick }) => {
  return (
    <div className="image-card">
      <div className="card-main-click" onClick={() => onClick(image)}>
        <img src={image.imageUrl} alt={image.title} loading="lazy" />
        <div className="card-overlay">
          <h3>{image.title}</h3>
        </div>
      </div>
      
      {image.blogId && (
        <div className="card-footer-action">
          <Link to={`/blog/${image.blogId}`} className="view-story-btn">
            View Full Story &rarr;
          </Link>
        </div>
      )}
    </div>
  );
};

export default ImageCard;
