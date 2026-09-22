import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPostBySlug, blogPosts } from '../data/blogPosts';
import { SEO } from '../components/SEO';

export const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="container">
        <div className="blog-page">
          <h1>Post not found</h1>
          <Link to="/blog">← Back to blog</Link>
        </div>
      </div>
    );
  }

  const currentIndex = blogPosts.findIndex(p => p.id === post.id);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  const canonicalUrl = `https://firephin.com/blog/${post.slug}`;
  const keywords = `${post.category}, financial planning, ${post.title.toLowerCase().split(' ').join(', ')}`;

  // Structured data for blog post
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "author": {
      "@type": "Organization",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Firephin",
      "logo": {
        "@type": "ImageObject",
        "url": "https://firephin.com/favicon.svg"
      }
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    }
  };

  return (
    <>
      <SEO 
        title={`${post.title} | Firephin Blog`}
        description={post.excerpt}
        keywords={keywords}
        ogImage={post.image}
        ogType="article"
        canonicalUrl={canonicalUrl}
        article={true}
      />
      
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <div className="container">
        <article className="blog-post">
          <Link to="/blog" className="back-link">← Back to blog</Link>
          
          <header className="post-header">
            {post.image && (
              <div className="post-hero-image">
                <img src={post.image} alt={post.title} />
              </div>
            )}
            <span className="post-category">{post.category}</span>
            <h1>{post.title}</h1>
            <div className="post-meta">
              <span className="post-author">{post.author}</span>
              <span className="post-date">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span className="post-read-time">{post.readTime}</span>
            </div>
          </header>

          <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />

          <footer className="post-footer">
            <div className="post-navigation">
              {prevPost && (
                <Link to={`/blog/${prevPost.slug}`} className="post-nav-link prev">
                  <span className="nav-label">Previous</span>
                  <span className="nav-title">{prevPost.title}</span>
                </Link>
              )}
              {nextPost && (
                <Link to={`/blog/${nextPost.slug}`} className="post-nav-link next">
                  <span className="nav-label">Next</span>
                  <span className="nav-title">{nextPost.title}</span>
                </Link>
              )}
            </div>
          </footer>
        </article>
      </div>
    </>
  );
};