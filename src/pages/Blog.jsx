import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts, getFeaturedPosts } from '../data/blogPosts';

export const Blog = () => {
  const featuredPosts = getFeaturedPosts();
  const recentPosts = blogPosts.filter(post => !post.featured);
  const mainFeatured = featuredPosts[0];
  const otherFeatured = featuredPosts.slice(1);

  return (
    <div className="container">
      <div className="blog-page">
        {/* Featured Posts Section */}
        {featuredPosts.length > 0 && (
          <section className="featured-section">
            <div className="featured-layout">
              {/* Main Featured Story */}
              {mainFeatured && (
                <Link to={`/blog/${mainFeatured.slug}`} className="main-featured">
                  <div className="main-featured-image">
                    <img src={mainFeatured.image} alt={mainFeatured.title} />
                  </div>
                  <div className="main-featured-content">
                    <span className="post-category">{mainFeatured.category}</span>
                    <h2>{mainFeatured.title}</h2>
                    <p className="post-excerpt">{mainFeatured.excerpt}</p>
                    <div className="post-meta">
                      <span className="post-date">{new Date(mainFeatured.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      <span className="post-read-time">{mainFeatured.readTime}</span>
                    </div>
                  </div>
                </Link>
              )}

              {/* Other Featured Stories List */}
              {otherFeatured.length > 0 && (
                <div className="other-featured">
                  <h3>More Featured</h3>
                  <div className="other-featured-list">
                    {otherFeatured.map(post => (
                      <Link key={post.id} to={`/blog/${post.slug}`} className="other-featured-item">
                        <div className="other-featured-image">
                          <img src={post.image} alt={post.title} />
                        </div>
                        <div className="other-featured-content">
                          <span className="post-category">{post.category}</span>
                          <h4>{post.title}</h4>
                          <span className="post-date">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Recent Posts Section */}
        <section className="recent-section">
          <h2>Recent Posts</h2>
          <div className="posts-list">
            {recentPosts.map(post => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="post-card">
                <div className="post-card-content">
                  <span className="post-category">{post.category}</span>
                  <h3>{post.title}</h3>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <div className="post-meta">
                    <span className="post-date">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <span className="post-read-time">{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};