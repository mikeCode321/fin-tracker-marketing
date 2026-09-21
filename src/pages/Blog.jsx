import React from 'react';

export const Blog = () => {
  return (
    <div className="container">
      <div style={{ padding: '120px 0', textAlign: 'center' }}>
        <h1 style={{ 
          fontFamily: '"Fraunces", serif', 
          fontSize: 'clamp(34px, 5vw, 64px)', 
          fontWeight: 300, 
          fontStyle: 'italic',
          marginBottom: '24px' 
        }}>
          Blog
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '16px' }}>
          Coming soon...
        </p>
      </div>
    </div>
  );
};