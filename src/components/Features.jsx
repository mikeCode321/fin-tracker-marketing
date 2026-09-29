import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { useCounter } from '../hooks/useCounter';
import { MiniProjectionChart } from './features/MiniProjectionChart';
import { MiniHealthPanel } from './features/MiniHealthPanel';
import { MiniScenarios } from './features/MiniScenarios';

export const Features = () => {
  const headingRef = useReveal();
  const feature1Ref = useReveal();
  const feature2Ref = useReveal();
  const feature3Ref = useReveal();

  const { count: count1, ref: countRef1 } = useCounter(40);
  const { count: count2, ref: countRef2 } = useCounter(6);
  const { count: count3, ref: countRef3 } = useCounter(5);

  return (
    <section className="features">
      <div className="container">
        <h2 className="features-heading reveal" ref={headingRef}>
          Everything you need.
          <br />
          All in one place.
        </h2>


        <div className="features-grid">
          <div className="feature reveal" ref={feature1Ref}>
            <div className="feature-stat">
              <span ref={countRef1}>{count1}</span>
              <span className="feature-stat-unit">yr</span>
            </div>
            <div className="feature-visual">
              <MiniProjectionChart />
            </div>
            <h3 className="feature-title">40-year projections</h3>
            <p className="feature-desc">
              Enter your income, contributions, and expected returns. Firephin
              models your Roth IRA, 401(k), brokerage, and cash year-by-year
              with salary growth and compound returns applied to every variable.
            </p>
          </div>

          <div className="feature reveal d1" ref={feature2Ref}>
            <div className="feature-stat">
              <span ref={countRef2}>{count2}</span>
            </div>
            <div className="feature-visual">
              <MiniHealthPanel />
            </div>
            <h3 className="feature-title">Financial health score</h3>
            <p className="feature-desc">
              Six ratios: housing burden, expense rate, investment rate, cash
              buffer, debt-to-income, and emergency fund coverage. Distilled into
              one number out of 100. Know where you stand, instantly.
            </p>
          </div>

          <div className="feature reveal d2" ref={feature3Ref}>
            <div className="feature-stat">
              <span ref={countRef3}>{count3}</span>
            </div>
            <div className="feature-visual">
              <MiniScenarios />
            </div>
            <h3 className="feature-title">Scenario comparison</h3>
            <p className="feature-desc">
              Run up to five parallel simulations side-by-side. Aggressive savings,
              career change, early retirement - see exactly how each path diverges
              on a shared chart over decades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};