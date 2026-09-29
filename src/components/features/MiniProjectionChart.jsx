import React from 'react';

export const MiniProjectionChart = () => {
  return (
    <svg
      className="feature-visual-svg"
      viewBox="0 0 300 140"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="miniFillGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4A8A7A" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#4A8A7A" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Gradient fill under the curve */}
      <path
        d="M 10,112 C 70,106 110,92 150,74
           C 190,56 230,30 290,16
           L 290,130 L 10,130 Z"
        fill="url(#miniFillGrad)"
      />

      {/* Main projection line */}
      <path
        d="M 10,112 C 70,106 110,92 150,74
           C 190,56 230,30 290,16"
        fill="none"
        stroke="#4A8A7A"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Terminal dot */}
      <circle cx="290" cy="16" r="4" fill="#FFFFFF" stroke="#4A8A7A" strokeWidth="2" />
    </svg>
  );
};