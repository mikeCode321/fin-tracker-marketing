import React from 'react';

export const MiniScenarios = () => {
  return (
    <svg
      className="feature-visual-svg"
      viewBox="0 0 300 140"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Aggressive savings */}
      <path
        d="M 10,110 C 70,98 110,68 150,44 C 190,22 230,12 290,8"
        fill="none"
        stroke="#4A8A7A"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="290" cy="8" r="3.5" fill="#FFFFFF" stroke="#4A8A7A" strokeWidth="2" />

      {/* Base case */}
      <path
        d="M 10,110 C 70,104 110,88 150,72 C 190,58 230,46 290,38"
        fill="none"
        stroke="#9B9590"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="290" cy="38" r="3.5" fill="#FFFFFF" stroke="#9B9590" strokeWidth="1.8" />

      {/* Conservative */}
      <path
        d="M 10,110 C 70,108 110,102 150,96 C 190,90 230,84 290,76"
        fill="none"
        stroke="#B0ABA5"
        strokeWidth="1.6"
        strokeDasharray="4 4"
      />
      <circle cx="290" cy="76" r="3" fill="#FFFFFF" stroke="#B0ABA5" strokeWidth="1.6" />
    </svg>
  );
};