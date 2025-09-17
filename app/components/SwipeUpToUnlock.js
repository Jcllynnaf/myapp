// app/components/SwipeUpToUnlock.js
import React from 'react';

// Ikon panah ke atas
const ChevronUpIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
);

const SwipeUpToUnlock = () => {
  return (
    <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center gap-1 text-white animate-pulse">
      <ChevronUpIcon />
      <span className="font-medium">Swipe up to unlock</span>
    </div>
  );
};

export default SwipeUpToUnlock;