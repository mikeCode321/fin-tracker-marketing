import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { FinalCTA } from './FinalCTA'

export const Philosophy = () => {

  return (
    <section className="philosophy">
      <div className="container">
        <div className="philosophy-content">
          < FinalCTA/>
          <div className="philosophy-animation">
            <DotLottieReact
              src="/Revenue.json"
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