
import React from 'react';

interface IconProps {
    className?: string;
}

export const MicIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m12 0v-1.5a6 6 0 0 0-12 0v1.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 15.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm.032 0h.001" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.125 15.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm.032 0h.001" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75Zm-.032 0h.001" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 5.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6A.75.75 0 0 1 12 5.25Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6.75 6.75 0 0 0 6.75-6.75V9.75a6.75 6.75 0 0 0-13.5 0v2.25A6.75 6.75 0 0 0 12 18.75Z" />
  </svg>
);
