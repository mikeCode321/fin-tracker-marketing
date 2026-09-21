import React from 'react';
import { useReveal } from '../hooks/useReveal';

export const FinalCTA = () => {
  const headingRef = useReveal();
  const buttonRef = useReveal();
  const textRef = useReveal();

  return (
    <section className="final-cta">
      <div className="container">
        <h2 className="reveal" ref={headingRef}>Start planning today.</h2>
        <div className="reveal d1" ref={buttonRef}>
          <a href="https://app.firephin.com" className="btn-primary">Open Firephin</a>
        </div>
        <p className="reveal d2" ref={textRef}>Free. No sign-up. Your data never leaves your device.</p>
      </div>
    </section>
  );
};