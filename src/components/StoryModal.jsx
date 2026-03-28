import React, { useEffect } from 'react';

const StoryModal = ({ image, onClose }) => {
  useEffect(() => {
    // Disable body scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!image) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <div className="modal-image-container">
          <img src={image.imageUrl} alt={image.title} />
        </div>
        <div className="modal-details">
          <h2>{image.title}</h2>
          <p>{image.story}</p>
        </div>
      </div>
    </div>
  );
};

export default StoryModal;
