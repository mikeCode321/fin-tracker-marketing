import React, { useEffect } from 'react';

export const SEO = ({ 
  title, 
  description, 
  keywords, 
  ogImage, 
  ogType = 'website',
  canonicalUrl,
  article = false
}) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update or create meta tags
    const updateMetaTag = (name, content, property = null) => {
      let meta;
      if (property) {
        meta = document.querySelector(`meta[property="${property}"]`);
      } else {
        meta = document.querySelector(`meta[name="${name}"]`);
      }
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', property);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      if (content) {
        meta.setAttribute('content', content);
      } else {
        meta.remove();
      }
    };

    // Basic SEO
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Firephin');
    updateMetaTag('robots', 'index, follow');

    // Open Graph
    updateMetaTag('og:type', ogType, 'og:type');
    updateMetaTag('og:title', title, 'og:title');
    updateMetaTag('og:description', description, 'og:description');
    updateMetaTag('og:image', ogImage, 'og:image');
    updateMetaTag('og:url', canonicalUrl, 'og:url');
    updateMetaTag('og:site_name', 'Firephin', 'og:site_name');

    // Twitter Card
    updateMetaTag('twitter:card', article ? 'summary_large_image' : 'summary_large_image');
    updateMetaTag('twitter:title', title, 'twitter:title');
    updateMetaTag('twitter:description', description, 'twitter:description');
    updateMetaTag('twitter:image', ogImage, 'twitter:image');
    updateMetaTag('twitter:url', canonicalUrl, 'twitter:url');

    // Canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', canonicalUrl);
    }

    // Cleanup function
    return () => {
      // Reset to default values when component unmounts
      if (title) {
        document.title = 'Firephin - Financial Planning, Clearly | 40-Year Projections & Financial Health Score';
      }
    };
  }, [title, description, keywords, ogImage, ogType, canonicalUrl, article]);

  return null; // This component doesn't render anything
};