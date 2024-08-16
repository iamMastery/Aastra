import React from 'react';

const HexagonSVG = () => {
  return (
    <svg viewBox="-50 -50 100 100" width="30" height="30">
      <defs>
        <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#FFB800', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#F8367C', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      {/* Hexagon */}
      <polygon
        points="0,-50 43.3,-25 43.3,25 0,50 -43.3,25 -43.3,-25"
        fill="none"
        stroke="url(#hexGradient)"
        strokeWidth="10"
      />
      {/* Central Circle */}
      <circle cx="0" cy="0" r="5" fill="url(#hexGradient)" />
      {/* Connecting Lines */}
      <line x1="0" y1="0" x2="0" y2="-50" stroke="#FFB800" strokeWidth="10" />
      <line x1="0" y1="0" x2="43.3" y2="-25" stroke="#FFB800" strokeWidth="10" />
      <line x1="0" y1="0" x2="43.3" y2="25" stroke="#FFB800" strokeWidth="10" />
      <line x1="0" y1="0" x2="0" y2="50" stroke="#FFB800" strokeWidth="10" />
      <line x1="0" y1="0" x2="-43.3" y2="25" stroke="#FFB800" strokeWidth="10" />
      <line x1="0" y1="0" x2="-43.3" y2="-25" stroke="#FFB800" strokeWidth="10" />
    </svg>
  );
};

export default HexagonSVG;
