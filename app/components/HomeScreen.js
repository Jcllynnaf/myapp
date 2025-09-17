// app/components/HomeScreen.js
import React from 'react';
import StatusBar from './StatusBar';
import AppIcon from './AppIcon';

const DockIcon = ({ label }) => (
  <div className="flex flex-col items-center gap-1">
    <div className="w-14 h-14 bg-gray-200 rounded-lg shadow-md"></div>
    <span className="text-white text-xs font-light">{label}</span>
  </div>
);

const apps = [
  { name: 'Messages', color: '#59CD46', initial: 'M' },
  { name: 'iTunes', color: '#E02553', initial: 'iT' },
  { name: 'Photos', color: '#257BE0', initial: 'P' },
  { name: 'YouTube', color: '#D62728', initial: 'Y' },
  { name: 'Notes', color: '#F8EEA9', initial: 'N' },
  { name: 'Calendar', color: '#D63830', initial: 'C' },
  { name: '2048', color: '#EDC22E', initial: '2' },
];

const HomeScreen = ({ onOpenApp }) => {
  return (
    <div 
      className="relative w-full h-full bg-cover bg-center"
      style={{ backgroundImage: 'url(/wallpaper.jpg)' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-10" />
      <StatusBar />
      
      <div className="grid grid-cols-4 gap-y-6 p-4 pt-10">
        {apps.map((app) => (
          <AppIcon
            key={app.name}
            name={app.name}
            color={app.color}
            initial={app.initial}
            onClick={() => onOpenApp(app.name)}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24">
        <div 
          className="absolute inset-x-0 bottom-0 h-full bg-black bg-opacity-30 backdrop-blur-sm"
          style={{
            maskImage: 'linear-gradient(to top, black 80%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to top, black 80%, transparent 100%)',
          }}
        />
        <div className="relative flex justify-around items-center h-full px-2">
          <DockIcon label="Phone" />
          <DockIcon label="Mail" />
          <DockIcon label="Safari" />
          <DockIcon label="Music" />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;