import React from 'react';
import { useCounter } from '../hooks/useCounter';
import { useReveal } from '../hooks/useReveal';

export const Stats = () => {
  const { count: count1, ref: ref1 } = useCounter(40);
  const { count: count2, ref: ref2 } = useCounter(6);
  const { count: count3, ref: ref3 } = useCounter(5);
  const revealRef = useReveal();

  return (
    <section className="stats reveal" ref={revealRef}>
      <div className="container">
        <div className="stats-inner">
          <div className="stat">
            <div className="stat-number">
              <span ref={ref1}>{count1}</span>
              <span className="stat-unit">yr</span>
            </div>
            <p className="stat-label">projection horizon</p>
          </div>
          <div className="stat">
            <div className="stat-number">
              <span ref={ref2}>{count2}</span>
            </div>
            <p className="stat-label">financial health ratios</p>
          </div>
          <div className="stat">
            <div className="stat-number">
              <span ref={ref3}>{count3}</span>
            </div>
            <p className="stat-label">parallel scenarios</p>
          </div>
        </div>
      </div>
    </section>
  );
};