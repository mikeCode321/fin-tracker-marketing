import React from 'react';
import { useReveal } from '../hooks/useReveal';

export const Philosophy = () => {
  const ref = useReveal();

  return (
    <section className="philosophy">
      <div className="container">
        <blockquote className="reveal" ref={ref}>
          "Most people don't lack motivation.<br />
          They lack a clear picture."
        </blockquote>
      </div>
    </section>
  );
};