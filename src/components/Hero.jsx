import React from 'react';

export const Hero = () => {
  return (
    <div className="container">
      <div className="hero">
        <h1 className="hero-headline">
          Your financial future,<br />finally clear.
        </h1>
        <div className="hero-actions">
          <a href="https://app.firephin.com" className="btn-primary">Start planning</a>
          <span className="hero-note">No account required. Data stays in your browser.</span>
        </div>
      </div>
    </div>
  );
};