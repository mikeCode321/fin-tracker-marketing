import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useReveal } from '../hooks/useReveal';

export const Philosophy = () => {
  const ref = useReveal();
  const headingRef = useReveal();
  const buttonRef = useReveal();

  return (
    <section className="philosophy">
      <div className="container">
        <div className="philosophy-content">
          <div className="philosophy-cta">
            <h2 className="reveal" ref={headingRef}>Start planning today.</h2>
            <div className="reveal d1" ref={buttonRef}>
              <a href="https://app.firephin.com" className="btn-primary">Open Firephin</a>
            </div>
          </div>
          <div className="philosophy-animation reveal">
            <DotLottieReact
              src="/Revenue.lottie"
              loop
              autoplay
              renderConfig={{ renderer: 'canvas2d' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};