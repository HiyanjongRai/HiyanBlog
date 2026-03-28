import React from 'react';
import './TravelSidebar.css';
import meImg from '../assets/Me/me.jpg';

const TravelSidebar = () => {
  return (
    <aside className="travel-sidebar">
      <div className="sidebar-widget about-widget">
        <h3 className="widget-title">HIYAN JONG RAI</h3>
        <p className="nepali-name">हियान जोंग राई</p>
        <div className="about-image-box">
          <img src={meImg} alt="Hiyan Jong Rai" />
        </div>
        <p className="about-text">
          A BCA student from Gaighat, Udayapur, currently based in Kathmandu. I love to travel, collect memories, and be part of every journey—sharing my feelings through each image I capture.
        </p>
        <div className="about-social-links">
          <a href="https://www.facebook.com/hiyanjong.rai69" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/tilung.hiyanjongrai/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://www.pinterest.com/HiyanjongRai/" target="_blank" rel="noopener noreferrer"><i className="fab fa-pinterest-p"></i></a>
          <a href="https://www.youtube.com/channel/UCSw-l6BnDh2kRPH30Y6ugtw" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </aside>
  );
};

export default TravelSidebar;
