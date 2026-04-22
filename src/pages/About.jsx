import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/navbar/Navbar';
import MobileNavbar from '../components/navbar/MobileNavbar';
import meImg from '../assets/Me/me.jpg';
import './About.css';

const About = () => {
    return (
        <div className="about-page-root">
            <Helmet>
                <title>About | Hiyan Jong Rai</title>
                <meta name="description" content="Discover the story behind the lens. Hiyan Jong Rai is a travel photographer and BCA student." />
            </Helmet>
            <Navbar />
            <MobileNavbar />
            
            <main className="container about-main">
                <div className="about-editorial-grid">
                    <div className="about-visual-column">
                        <div className="about-img-accent"></div>
                        <div className="about-image-wrapper">
                            <img src={meImg} alt="Hiyan Jong Rai" className="about-hero-img" />
                        </div>
                    </div>
                    
                    <div className="about-content-column">
                        <span className="about-greeting">HELLO, I'M</span>
                        <h1 className="about-title-large">Hiyan Jong Rai <span className="devanagari-name">(हियान जोंग राई)</span></h1>
                        
                        <div className="about-divider"></div>
                        
                        <p className="about-lead">
                            A BCA student from Gaighat, Udayapur, currently based in Kathmandu. 
                            I love to travel, collect memories, and be part of every journey—sharing my feelings through each image I capture.
                        </p>
                        
                        <div className="about-stats">
                            <div className="stat-item">
                                <h3>Photography</h3>
                                <span>Visual Storytelling</span>
                            </div>
                            <div className="stat-item">
                                <h3>Travel</h3>
                                <span>Exploring Nepal</span>
                            </div>
                            <div className="stat-item">
                                <h3>Web</h3>
                                <span>BCA Student</span>
                            </div>
                        </div>

                        <div className="about-social-box">
                            <span>CONNECT WITH ME</span>
                            <div className="about-social-icons">
                                <a href="https://www.facebook.com/hiyanjong.rai69" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://www.instagram.com/tilung.hiyanjongrai/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                                <a href="https://www.pinterest.com/HiyanjongRai/" target="_blank" rel="noopener noreferrer"><i className="fab fa-pinterest-p"></i></a>
                                <a href="https://www.youtube.com/channel/UCSw-l6BnDh2kRPH30Y6ugtw" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="travel-main-footer">
                <div className="container">
                    <p>&copy; 2026 HIYAN JONG RAI. All memories reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default About;
