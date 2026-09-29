import React from 'react';

// Display-only mock data — mirrors the shape of the real app's
// FloatingHealthPanel, not wired to any live calculation.
const MOCK_SCORE = 87;
const MOCK_TAG = 'Healthy';
const MOCK_METRICS = [
  { label: 'Housing', value: '24%', target: '< 30%', status: 'healthy' },
  { label: 'Investing', value: '18%', target: '\u2265 15%', status: 'healthy' },
];

export const MiniHealthPanel = () => {
  return (
    <div className="mini-health-panel" aria-hidden="true">
      <div className="mini-health-score-row status-healthy">
        <div>
          <div className="mini-health-score-label">Overall score</div>
          <div className="mini-health-score-value">
            {MOCK_SCORE}
            <span className="mini-health-score-suffix">/100</span>
          </div>
        </div>
        <div className="mini-health-score-tag">{MOCK_TAG}</div>
      </div>

      {MOCK_METRICS.map((m) => (
        <div className={`mini-health-metric status-${m.status}`} key={m.label}>
          <div className="mini-health-metric-info">
            <div className="mini-health-metric-label">{m.label}</div>
            <div className="mini-health-metric-target">Target {m.target}</div>
          </div>
          <div className="mini-health-metric-value">{m.value}</div>
        </div>
      ))}
    </div>
  );
};