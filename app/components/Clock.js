// app/components/Clock.js
'use client'; 
import { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  // Kita gunakan `isClient` untuk menghindari hydration error
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Tidak render apapun di server atau saat hidrasi awal
  }

  const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  const formattedDate = time.toLocaleDateString([], { weekday: 'long', day: 'numeric', month: 'long' });

  return (
    <div className="text-white text-center">
      <h1 className="text-8xl font-thin tracking-tighter">{formattedTime}</h1>
      <h2 className="text-xl font-light mt-1">{formattedDate}</h2>
    </div>
  );
};

export default Clock;