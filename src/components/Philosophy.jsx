import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useReveal } from '../hooks/useReveal';
import { FinalCTA } from './FinalCTA'

export const Philosophy = () => {
  const ref = useReveal();

  return (
    <section className="philosophy">
      <div className="container">
        <div className="philosophy-content">
          < FinalCTA/>
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