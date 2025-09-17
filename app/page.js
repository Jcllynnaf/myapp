// app/page.js
'use client';
import { useState } from 'react';

// Impor semua komponen
import StatusBar from "./components/StatusBar";
import Clock from "./components/Clock";
import HomeScreen from './components/HomeScreen';
import SwipeUpToUnlock from './components/SwipeUpToUnlock';
import NotesApp from './components/apps/NotesApp';

const renderApp = (appName, handleCloseApp) => {
  switch (appName) {
    case 'Notes':
      return <NotesApp onClose={handleCloseApp} />;
    default:
      return null;
  }
};

export default function Phone() {
  const [isLocked, setIsLocked] = useState(true);
  const [openApp, setOpenApp] = useState(null);
  
  const [swipeY, setSwipeY] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [startSwipeY, setStartSwipeY] = useState(0);

  const handleSwipeStart = (e) => {
    if (!isLocked) return;
    setIsSwiping(true);
    const y = e.touches ? e.touches[0].clientY : e.clientY;
    setStartSwipeY(y);
  };

  const handleSwipeMove = (e) => {
    if (!isSwiping || !isLocked) return;
    const y = e.touches ? e.touches[0].clientY : e.clientY;
    let deltaY = y - startSwipeY;

    if (deltaY > 0) deltaY = 0; 
    setSwipeY(deltaY);
  };

  const handleSwipeEnd = () => {
    if (!isSwiping || !isLocked) return;
    setIsSwiping(false);
    if (swipeY < -100) {
      setIsLocked(false);
    }
    setSwipeY(0);
  };

  const handleOpenApp = (appName) => setOpenApp(appName);
  const handleCloseApp = () => setOpenApp(null);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900">
      <div 
        className="relative w-full max-w-sm aspect-[9/18] bg-black rounded-[40px] border-[10px] border-gray-700 shadow-2xl overflow-hidden"
        onMouseDown={handleSwipeStart}
        onMouseMove={handleSwipeMove}
        onMouseUp={handleSwipeEnd}
        onMouseLeave={handleSwipeEnd}
        onTouchStart={handleSwipeStart}
        onTouchMove={handleSwipeMove}
        onTouchEnd={handleSwipeEnd}
      >
        
        {/* Konten Home Screen & Aplikasi */}
        <div className="w-full h-full">
            {openApp ? renderApp(openApp, handleCloseApp) : <HomeScreen onOpenApp={handleOpenApp} />}
        </div>

        {/* --- LOCK SCREEN (sebagai overlay) --- */}
        {isLocked && (
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-200 ease-out"
            style={{ 
              backgroundImage: 'url(/wallpaper.jpg)',
              transform: `translateY(${swipeY}px)`
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <StatusBar />
            <div className="absolute top-24 left-0 right-0">
              <Clock />
            </div>
            <div className="absolute bottom-6 left-0 right-0">
              <SwipeUpToUnlock />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}