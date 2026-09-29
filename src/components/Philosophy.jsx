import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useReveal } from '../hooks/useReveal';

export const Philosophy = () => {
  const ref = useReveal();

  return (
    <section className="philosophy">
      <div className="container">
        <div className="philosophy-content">
          <blockquote className="reveal" ref={ref}>
            Most people lack motivation because they lack a clear picture.
          </blockquote>
          <div className="philosophy-animation reveal">
            <DotLottieReact
              src="/Revenue.json"
              loop
              autoplay
            />
          </div>
        </div>
      </div>
    </section>
  );
};