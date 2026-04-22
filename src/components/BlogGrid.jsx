import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './BlogGrid.css';

const BlogGrid = ({ posts }) => {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = useMemo(
    () => ['ALL', ...new Set(posts.map((p) => p.category))],
    [posts]
  );

  const filtered = useMemo(
    () =>
      activeCategory === 'ALL'
        ? posts
        : posts.filter((p) => p.category === activeCategory),
    [posts, activeCategory]
  );

  const [featured, ...rest] = filtered;

  return (
    <div className="blog-grid-wrapper">

      {/* ── Category Filter Bar ── */}
      <div className="category-filter-bar" role="tablist" aria-label="Filter by category">
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={activeCategory === cat}
            className={`cat-filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
        <span className="cat-post-count">{filtered.length} {filtered.length === 1 ? 'story' : 'stories'}</span>
      </div>

      {/* ── Featured Editorial Card ── */}
      {featured && (
        <article className="featured-post-card" key={`feat-${activeCategory}-${featured.id}`}>
          <Link to={`/blog/${featured.blogId}`} className="featured-thumbnail-link">
            <div className="featured-thumbnail-box">
              <img
                src={featured.imageUrl}
                alt={featured.title}
                className="featured-thumbnail"
              />
              <div className="featured-img-overlay" />
            </div>
          </Link>

          <div className="featured-post-body">
            <span className="featured-eyebrow">FEATURED STORY</span>
            <span className="post-card-category featured-badge">{featured.category}</span>
            <h3 className="featured-post-title">
              <Link to={`/blog/${featured.blogId}`}>{featured.title}</Link>
            </h3>
            <div className="post-card-meta">
              <span className="post-meta-date">{featured.date}</span>
              <span className="post-meta-author">BY HIYAN JONG RAI</span>
            </div>
            <p className="featured-post-excerpt">
              {featured.story ? featured.story.substring(0, 260) + '…' : ''}
            </p>
            <Link to={`/blog/${featured.blogId}`} className="featured-read-more">
              EXPLORE STORY
            </Link>
          </div>
        </article>
      )}

      {/* ── Card Grid ── */}
      {rest.length > 0 && (
        <div className="blog-posts-feed">
          {rest.map((post, i) => (
            <article
              key={`${activeCategory}-${post.id}`}
              className="blog-post-card"
              style={{ '--card-index': i }}
            >
              <div className="post-thumbnail-box">
                <Link to={`/blog/${post.blogId}`}>
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="post-thumbnail"
                    loading="lazy"
                  />
                </Link>
                <span className="post-card-category">{post.category || 'TRAVEL'}</span>
              </div>

              <div className="post-card-content">
                <h3 className="post-card-title">
                  <Link to={`/blog/${post.blogId}`}>{post.title}</Link>
                </h3>
                <div className="post-card-meta">
                  <span className="post-meta-date">{post.date}</span>
                  <span className="post-meta-author">BY HIYAN JONG RAI</span>
                </div>
                <p className="post-card-excerpt">
                  {post.story ? post.story.substring(0, 150) + '…' : ''}
                </p>
                <Link to={`/blog/${post.blogId}`} className="post-read-more">
                  EXPLORE STORY
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* ── Empty State ── */}
      {filtered.length === 0 && (
        <div className="no-posts-state">
          <p>No stories in this category yet — check back soon.</p>
        </div>
      )}
    </div>
  );
};

export default BlogGrid;
