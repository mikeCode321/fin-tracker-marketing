import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Layout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/blog', label: 'Blog' },
  ];

  return (
    <>
      <nav>
        <Link to="/" className="logo">Firephin</Link>
        
        {/* Desktop Navigation */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <a href="https://app.firephin.com" className="nav-cta">Open app</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-sidebar-content">
          <button 
            className="close-button"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
          
          <div className="mobile-nav-links">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a 
              href="https://app.firephin.com" 
              className="mobile-nav-cta"
              onClick={() => setMobileMenuOpen(false)}
            >
              Open app
            </a>
          </div>
        </div>
        
        {/* Overlay */}
        <div 
          className="mobile-sidebar-overlay"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      </div>

      {children}

      <div className="footer-inner">
        <Link to="/" className="footer-logo">Firephin</Link>
        <span className="footer-copy">© 2026 Firephin</span>
        <a href="https://app.firephin.com" className="footer-link">app.firephin.com</a>
      </div>
    </>
  );
};