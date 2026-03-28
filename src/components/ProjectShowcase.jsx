import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ProjectShowcase.css';

const ProjectSection = ({ project, index, total, scrollYProgress }) => {
  // Start and end points for this specific section in the overall scroll
  const start = index / total;
  const end = (index + 1) / total;

  // Layering effect: Images scale and fade in/out
  const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [start, start + 0.1, end], [0.8, 1, 0.9]);
  
  // Parallax for the internal image
  const yImage = useTransform(scrollYProgress, [start, end], ["-10%", "10%"]);

  return (
    <motion.div 
      className="project-slide-item"
      style={{ opacity }}
    >
      <div className="project-grid-container">
        {/* Left Side: Large Visual */}
        <div className="project-visual-side">
          <motion.div className="project-image-wrapper" style={{ scale }}>
            <motion.img 
              src={project.imageUrl} 
              alt={project.title} 
              style={{ y: yImage }}
              className="project-img"
            />
            <div className="project-image-overlay"></div>
          </motion.div>
        </div>

        {/* Right Side: Info */}
        <div className="project-info-side">
          <div className="project-number-bg">
            {index < 9 ? `0${index + 1}` : index + 1}
          </div>
          
          <div className="project-details-content">
            <span className="project-category">NEPAL &bull; EXPLORATION</span>
            <h2 className="project-title-large">{project.title}</h2>
            <p className="project-description-short">{project.story}</p>
            
            <div className="project-actions">
              {project.blogId ? (
                <Link to={`/blog/${project.blogId}`} className="project-view-btn">
                  View Story
                </Link>
              ) : (
                <button className="project-view-btn disabled">Coming Soon</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectShowcase = ({ projects }) => {
  const containerRef = useRef(null);
  
  // Track continuous scroll through the entire container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth out the scroll for a GSAP-like "scrub" feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section 
      className="showcase-scroll-wrapper" 
      ref={containerRef}
      style={{ height: `${projects.length * 100}vh` }}
    >
      {/* The background sticky container that provides the "Pin" effect */}
      <div className="showcase-sticky-frame">
        {projects.map((project, i) => (
          <ProjectSection 
            key={project.id} 
            project={project} 
            index={i} 
            total={projects.length}
            scrollYProgress={smoothProgress}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;
