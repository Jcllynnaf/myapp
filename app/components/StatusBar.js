// app/components/StatusBar.js
'use client';
import React, { useState, useEffect } from 'react';

// --- Icons ---
const WifiIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
    <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
    <line x1="12" y1="20" x2="12.01" y2="20"></line>
  </svg>
);

const BatteryIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="6" width="18" height="12" rx="2" ry="2" fill="white"></rect>
        <line x1="20" y1="10" x2="20" y2="14"></line>
    </svg>
);

const StatusBar = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
      setTime(formattedTime);
    };
    
    updateClock();
    const timerId = setInterval(updateClock, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 h-6 text-white flex items-center justify-between px-3 text-xs font-sans font-semibold z-10">
      
      {/* Kiri: Provider & WiFi */}
      <div className="flex items-center gap-1.5">
        <span>Telkomsel</span>
        <WifiIcon />
      </div>

      {/* Tengah: Jam */}
      <div className="absolute left-1/2 -translate-x-1/2">
        <span>{time}</span>
      </div>

      {/* Kanan: Baterai */}
      <div className="flex items-center gap-1">
        <span>87%</span>
        <BatteryIcon />
      </div>

    </div>
  );
};

export default StatusBar;