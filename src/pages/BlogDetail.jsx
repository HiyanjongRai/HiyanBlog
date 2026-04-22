import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, MapPin } from 'lucide-react';
import { ALL_BLOGS } from '../data/blogData';
import Navbar from '../components/navbar/Navbar';
import MobileNavbar from '../components/navbar/MobileNavbar';
import MusicPlayer from '../components/MusicPlayer';
import Lightbox from '../components/Lightbox';
import './BlogDetail.css';

/* ── Reading Progress Bar ── */
const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return <div className="reading-progress-bar" style={{ width: `${progress}%` }} />;
};

const BlogDetail = () => {
  const { blogId } = useParams();
  const blog = ALL_BLOGS[blogId];
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blogId]);

  if (!blog) {
    return (
      <div className="error-page container">
        <h1>Story Not Found</h1>
        <Link to="/" className="home-cta">← Back to all stories</Link>
      </div>
    );
  }

  const readingTime = Math.max(1, Math.ceil(blog.stories.length * 0.5));
  const locationLabel = blog.subtitle.split('|')[0].trim();
  const taglineLabel  = blog.subtitle.split('|')[1]?.trim() || blog.subtitle;

  return (
    <div className="blog-detail-root">

      {/* ── Reading Progress ── */}
      <ReadingProgress />

      <Helmet>
        <title>{blog.title} | Hiyan Jong Rai</title>
        <meta name="description" content={`Explore ${blog.title} - ${blog.subtitle}. A cinematic travel story and photography by Hiyan Jong Rai.`} />
        <link rel="canonical" href={`https://hiyan-travel-blog.vercel.app/blog/${blogId}`} />
        <meta property="og:type"        content="article" />
        <meta property="og:title"       content={`${blog.title} | Travel Story`} />
        <meta property="og:description" content={blog.subtitle} />
        <meta property="og:image"       content={blog.heroImage} />
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content={blog.title} />
        <meta name="twitter:description" content={blog.subtitle} />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "${blog.title}",
            "alternativeHeadline": "${blog.subtitle}",
            "image": "${blog.heroImage}",
            "author": { "@type": "Person", "name": "Hiyan Jong Rai" },
            "publisher": { "@id": "HiyanJongRai" },
            "url": "https://hiyan-travel-blog.vercel.app/blog/${blogId}"
          }
        `}</script>
      </Helmet>

      <Navbar />
      <MobileNavbar />

      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <header className="story-hero-header" style={{ backgroundImage: `url(${blog.heroImage})` }}>
        <div className="hero-gradient-wash" />

        <div className="container header-inner">
          <Link to="/" className="back-link-modern">
            <ArrowLeft size={15} />
            BACK TO JOURNEYS
          </Link>

          <motion.div
            className="header-title-box"
            initial={{ opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="story-meta-location">
              <MapPin size={13} style={{ marginRight: 6 }} />
              {locationLabel}
            </span>
            <h1 className="story-main-title-large">{blog.title}</h1>
            <div className="story-meta-stats">
              <span>{blog.stories.length} MEMORIES</span>
              <span className="stat-sep">·</span>
              <span>~{readingTime} MIN READ</span>
              <span className="stat-sep">·</span>
              <span>BY HIYAN JONG RAI</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <div className="scroll-cue" aria-hidden="true">
          <div className="scroll-cue-line" />
        </div>
      </header>

      {/* ── Subtitle Strip ── */}
      <div className="story-subtitle-strip">
        <div className="container subtitle-strip-inner">
          <span className="strip-tag">THE STORY</span>
          <span className="strip-divider" />
          <p className="strip-tagline">{taglineLabel}</p>
        </div>
      </div>

      {/* ══════════════════════════════
          MEMORY BLOCKS
      ══════════════════════════════ */}
      <main className="story-content-flow">
        {blog.stories.map((item, index) => (
          <section
            key={item.id}
            className={`memory-block container ${index % 2 === 1 ? 'reversed' : ''}`}
          >
            {/* Visual side */}
            <div className="memory-visual-side">
              <motion.div
                className="memory-img-wrapper"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setLightboxIndex(index)}
                style={{ cursor: 'zoom-in' }}
              >
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="memory-img-shadow" />
              </motion.div>
            </div>

            {/* Text side */}
            <div className="memory-text-side">
              <motion.div
                className="memory-text-content"
                initial={{ opacity: 0, x: index % 2 === 0 ? 35 : -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="memory-chapter-num">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="memory-meta">
                  <MapPin size={12} />
                  <span>{locationLabel}</span>
                </div>
                <h2 className="memory-title">{item.title}</h2>
                <p className="memory-desc">{item.description}</p>
              </motion.div>
            </div>
          </section>
        ))}
      </main>

      {/* ══════════════════════════════
          STORY FOOTER
      ══════════════════════════════ */}
      <footer className="story-detail-footer">
        <div className="container">
          <div className="footer-ornament">
            <span className="ornament-line" />
            <span className="ornament-diamond" />
            <span className="ornament-line" />
          </div>
          <h2>End of the Trail</h2>
          <p>Captured &amp; written by <strong>Hiyan Jong Rai</strong></p>
          <Link to="/" className="home-return-btn">
            DISCOVER MORE STORIES
          </Link>
        </div>
      </footer>

      {/* ── Floating Music Player ── */}
      <MusicPlayer url={blog.musicUrl} />

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <Lightbox
          images={blog.stories}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((prev) => (prev > 0 ? prev - 1 : blog.stories.length - 1))}
          onNext={() => setLightboxIndex((prev) => (prev < blog.stories.length - 1 ? prev + 1 : 0))}
          onSelect={(i) => setLightboxIndex(i)}
        />
      )}
    </div>
  );
};

export default BlogDetail;
