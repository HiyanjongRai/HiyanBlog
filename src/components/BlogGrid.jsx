import React from 'react';
import { Link } from 'react-router-dom';
import './BlogGrid.css';

const BlogGrid = ({ posts }) => {
  return (
    <div className="blog-posts-feed">
      {posts.map((post) => (
        <article key={post.id} className="blog-post-card">
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
            <h2 className="post-card-title">
              <Link to={`/blog/${post.blogId}`}>{post.title}</Link>
            </h2>
            
            <div className="post-card-meta">
               <span className="post-meta-date">{post.date}</span>
               <span className="post-meta-author">BY HIYAN JONG RAI</span>
            </div>

            <p className="post-card-excerpt">
              {post.story ? post.story.substring(0, 150) + '...' : ''}
            </p>

            <Link to={`/blog/${post.blogId}`} className="post-read-more">
              EXPLORE STORY
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};

export default BlogGrid;
