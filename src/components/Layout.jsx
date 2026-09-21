import React from 'react';

export const Layout = ({ children }) => {
  return (
    <>
      <nav>
        <span className="logo">Firephin</span>
        <a href="https://app.firephin.com" className="nav-cta">Open app</a>
      </nav>

      {children}

      <div className="footer-inner">
        <span className="footer-logo">Firephin</span>
        <span className="footer-copy">© 2025 Firephin</span>
        <a href="https://app.firephin.com" className="footer-link">app.firephin.com</a>
      </div>
    </>
  );
};