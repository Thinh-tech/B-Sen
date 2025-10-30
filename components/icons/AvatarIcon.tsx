
import React from 'react';

export const AvatarIcon: React.FC = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="lotusGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#f9a8d4' }} />
        <stop offset="100%" style={{ stopColor: '#ec4899' }} />
      </linearGradient>
      <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#softGlow)">
      <path d="M50 85 C 40 70, 20 60, 20 40 C 20 25, 35 15, 50 15 C 65 15, 80 25, 80 40 C 80 60, 60 70, 50 85 Z" fill="url(#lotusGradient)" opacity="0.4"/>
      <path d="M50 95 C 30 80, 10 65, 15 45 C 20 25, 40 20, 50 20 C 60 20, 80 25, 85 45 C 90 65, 70 80, 50 95 Z" fill="url(#lotusGradient)" opacity="0.6"/>
      <path d="M50 90 C 40 80, 30 65, 35 50 C 40 35, 45 30, 50 30 C 55 30, 60 35, 65 50 C 70 65, 60 80, 50 90 Z" fill="white"/>
      <circle cx="50" cy="55" r="5" fill="#fde047" />
    </g>
  </svg>
);
