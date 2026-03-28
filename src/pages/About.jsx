import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/navbar/Navbar';
import MobileNavbar from '../components/navbar/MobileNavbar';
import TravelSidebar from '../components/TravelSidebar';
import './About.css';

const About = () => {
    return (
        <div className="about-page-root">
            <Helmet>
                <title>About | Hiyan Jong Rai</title>
                <meta name="description" content="Discover the story behind the lens. Hiyan Jong Rai's journey as a travel photographer and storyteller in Nepal." />
            </Helmet>
            <Navbar />
            <MobileNavbar />
            
            <main className="container about-main">
                <header className="about-header">
                    <span className="about-subtitle">THE STORY BEHIND THE LENS</span>
                    <h1 className="about-title">About Me</h1>
                </header>

                <div className="about-content-layout">
                    <article className="about-text-narrative">
                        <section className="narrative-section">
                            <p>
                                Based in the vibrant capital of Kathmandu and hailing from the peaceful green hills of Gaighat, Udayapur, my journey as a storyteller is fueled by the raw, natural beauty of Nepal. Through this immersive travel blog, I aim to transcend traditional visual galleries by providing deep, narrative contexts for each memory captured. My photography and videography reflect a personal quest to find the 'feeling' in every destination, whether it's the spiritual silence at the summit of Rauta Hill or the mist-covered pastures of Nuwakot Bheda Farm.
                            </p>
                        </section>

                        <section className="narrative-section">
                            <p>
                                Over the years, I have realized that travel isn't just about the distance covered, but the memories collected along the way. My first definitive trip in 2078 B.S. changed my perspective on discovery. It taught me that every off-road trail, every early 5:30 AM start with friends like Nishan Kiran Chauhan, and every golden sunrise over the Himalayas is a story waiting to be told. From the smooth roads of Gaighat to the challenging dirt tracks of the Mahabharat range, each bump and turn is a testament to the adventurous spirit.
                            </p>
                        </section>

                        <section className="narrative-section">
                            <p>
                                This platform serves as a sanctuary for those who seek peace, refreshment, and a genuine connection with nature. Whether you're planning a religious visit to the temples of Udayapur or a scenic picnic at the sheep farms of Nuwakot, these stories offer a glimpse into the magical landscapes that define our motherland. Explore the 'Collected Works' feed and join me on a journey above the clouds, where the world is quiet and nature's symphony is the only sound. 🌿
                            </p>
                        </section>
                    </article>

                    <aside className="about-sidebar-aside">
                        <TravelSidebar />
                    </aside>
                </div>
            </main>

            <footer className="about-footer">
                <div className="container">
                    <p>&copy; 2026 HIYAN JONG RAI. All memories reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default About;
