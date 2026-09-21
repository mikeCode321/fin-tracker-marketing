import React from 'react';
import { useReveal } from '../hooks/useReveal';

export const Features = () => {
  const headingRef = useReveal();
  const feature1Ref = useReveal();
  const feature2Ref = useReveal();
  const feature3Ref = useReveal();

  return (
    <section className="features">
      <div className="container">
        <h2 className="features-heading reveal" ref={headingRef}>
          Built for clarity,<br />not complexity.
        </h2>

        <div className="features-grid">
          <div className="feature reveal" ref={feature1Ref}>
            <div className="feature-icon">
              <svg viewBox="0 0 36 36">
                <polyline points="3 28 11 20 19 24 33 8"/>
                <circle cx="11" cy="20" r="2" fill="#4A8A7A" stroke="none"/>
                <circle cx="19" cy="24" r="2" fill="#4A8A7A" stroke="none"/>
                <circle cx="33" cy="8"  r="2" fill="#4A8A7A" stroke="none"/>
              </svg>
            </div>
            <h3 className="feature-title">40-year projections</h3>
            <p className="feature-desc">
              Enter your income, contributions, and expected returns. Firephin
              models your Roth IRA, 401(k), brokerage, and cash year-by-year 
              with salary growth and compound returns applied to every variable.
            </p>
          </div>

          <div className="feature reveal d1" ref={feature2Ref}>
            <div className="feature-icon">
              <svg viewBox="0 0 36 36">
                <path d="M 5 28 A 14 14 0 1 1 31 28" strokeLinecap="round"/>
                <path d="M 5 28 A 14 14 0 1 1 31 28" stroke="#E5E0D8" strokeWidth="1.4"
                      fill="none" strokeDasharray="1 0" opacity="0.25"/>
                <line x1="18" y1="18" x2="11" y2="10" strokeLinecap="round"/>
                <circle cx="18" cy="18" r="2" fill="#4A8A7A" stroke="none"/>
              </svg>
            </div>
            <h3 className="feature-title">Financial health score</h3>
            <p className="feature-desc">
              Six ratios  housing burden, expense rate, investment rate, cash
              buffer, debt-to-income, and emergency fund coverage  distilled into
              one number out of 100. Know where you stand, instantly.
            </p>
          </div>

          <div className="feature reveal d2" ref={feature3Ref}>
            <div className="feature-icon">
              <svg viewBox="0 0 36 36">
                <path d="M 4 30 C 10 24 16 18 26 10"/>
                <path d="M 4 30 C 10 26 18 24 30 22"
                      stroke="#B0ABA5" strokeDasharray="3 3"/>
                <circle cx="26" cy="10" r="2.2" fill="#4A8A7A" stroke="none"/>
                <circle cx="30" cy="22" r="2.2" fill="#9B9590" stroke="none"/>
              </svg>
            </div>
            <h3 className="feature-title">Scenario comparison</h3>
            <p className="feature-desc">
              Run up to five parallel simulations side-by-side. Aggressive savings,
              career change, early retirement  see exactly how each path diverges
              on a shared chart over decades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};