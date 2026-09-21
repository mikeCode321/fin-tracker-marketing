import React from 'react';

export const ProjectionChart = () => {
  return (
    <div className="chart-section">
      <div className="container">
        <div className="chart-outer">
          <svg className="chart-svg" viewBox="0 0 980 290" xmlns="http://www.w3.org/2000/svg" aria-label="30-year net worth projection chart">
            <defs>
              <linearGradient id="fillGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stopColor="#4A8A7A" stopOpacity="0.15"/>
                <stop offset="100%" stopColor="#4A8A7A" stopOpacity="0"/>
              </linearGradient>
            </defs>

            {/* Horizontal grid rules */}
            <line x1="30" y1="245" x2="970" y2="245" stroke="#E5E0D8" strokeWidth="0.8"/>
            <line x1="30" y1="183" x2="970" y2="183" stroke="#E5E0D8" strokeWidth="0.5" strokeDasharray="4 6"/>
            <line x1="30" y1="121" x2="970" y2="121" stroke="#E5E0D8" strokeWidth="0.5" strokeDasharray="4 6"/>
            <line x1="30" y1="59"  x2="970" y2="59"  stroke="#E5E0D8" strokeWidth="0.5" strokeDasharray="4 6"/>

            {/* Y-axis labels */}
            <text x="2" y="249" fill="#6B6560" fontSize="10" fontFamily="Inter,sans-serif">$0</text>
            <text x="2" y="187" fill="#6B6560" fontSize="10" fontFamily="Inter,sans-serif">$500K</text>
            <text x="2" y="125" fill="#6B6560" fontSize="10" fontFamily="Inter,sans-serif">$1M</text>
            <text x="2" y="63"  fill="#6B6560" fontSize="10" fontFamily="Inter,sans-serif">$1.5M</text>

            {/* Conservative scenario */}
            <path className="c-alt"
              d="M 60,236 C 200,228 310,218 430,207
                 C 550,196 650,184 750,174
                 C 850,164 915,158 955,154"
              stroke="#6B6560"/>

            {/* Gradient fill under main curve */}
            <path className="c-fill"
              d="M 60,236 C 200,224 310,208 430,188
                 C 550,168 650,140 750,112
                 C 850,84  915,66  955,50
                 L 955,245 L 60,245 Z"
              fill="url(#fillGrad)"/>

            {/* Main projection line */}
            <path className="c-main"
              pathLength="1"
              stroke="#4A8A7A"
              d="M 60,236 C 200,224 310,208 430,188
                 C 550,168 650,140 750,112
                 C 850,84  915,66  955,50"/>

            {/* $500K milestone */}
            <g className="c-mile c-mile-1" style={{transformOrigin: '418px 190px'}}>
              <circle cx="418" cy="190" r="4.5" fill="#FFFFFF" stroke="#4A8A7A" strokeWidth="1.8"/>
              <rect x="393" y="165" width="54" height="18" rx="4" fill="#FFFFFF" stroke="#E5E0D8" strokeWidth="0.8"/>
              <text x="420" y="178" textAnchor="middle" fill="#5A9A8A"
                    fontSize="9" fontFamily="Inter,sans-serif" fontWeight="600">$500K ✓</text>
            </g>

            {/* $1M milestone */}
            <g className="c-mile c-mile-2" style={{transformOrigin: '688px 131px'}}>
              <circle cx="688" cy="131" r="4.5" fill="#FFFFFF" stroke="#4A8A7A" strokeWidth="1.8"/>
              <rect x="664" y="106" width="50" height="18" rx="4" fill="#FFFFFF" stroke="#E5E0D8" strokeWidth="0.8"/>
              <text x="689" y="119" textAnchor="middle" fill="#5A9A8A"
                    fontSize="9" fontFamily="Inter,sans-serif" fontWeight="600">$1M ✓</text>
            </g>

            {/* Pulsing ring */}
            <circle className="c-pulse" cx="955" cy="50" r="6"
                    fill="none" stroke="#4A8A7A" strokeWidth="1.2"/>

            {/* Terminal dot */}
            <g className="c-end">
              <circle cx="955" cy="50" r="5.5" fill="#FFFFFF" stroke="#4A8A7A" strokeWidth="2"/>
            </g>
          </svg>

          {/* Floating stat card - desktop only */}
          <div className="chart-stat" aria-hidden="true">
            <div className="cs-label">Projected net worth · 30 yr</div>
            <div className="cs-value">$1.47<span className="cs-value-unit">M</span></div>
            <div className="cs-sub">↑ 94% above today's position</div>
          </div>
        </div>

        {/* Inline stat card - mobile only */}
        <div className="chart-stat-mobile">
          <div className="cs-label">Projected net worth · 30 yr</div>
          <div className="cs-value">$1.47<span className="cs-value-unit">M</span></div>
          <div className="cs-sub">↑ 94% above today's position</div>
        </div>

        {/* X-axis year labels */}
        <div className="chart-footer">
          <span>Today</span>
          <span>Year 5</span>
          <span>Year 10</span>
          <span>Year 15</span>
          <span>Year 20</span>
          <span>Year 25</span>
          <span>Year 30</span>
        </div>

        {/* Legend */}
        <div className="chart-legend">
          <div className="legend-item">
            <span className="legend-line legend-line--main"></span>
            Projected scenario
          </div>
          <div className="legend-item">
            <span className="legend-line legend-line--alt"></span>
            Conservative scenario
          </div>
        </div>
      </div>
    </div>
  );
};