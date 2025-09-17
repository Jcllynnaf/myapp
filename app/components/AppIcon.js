// app/components/AppIcon.js
import React from 'react';

// Tambahkan prop 'onClick'
const AppIcon = ({ name, color, initial, onClick }) => {
  return (
    // Ubah div menjadi button agar bisa diklik
    <button onClick={onClick} className="flex flex-col items-center gap-1.5 focus:outline-none">
      {/* Wadah Ikon */}
      <div
        className="relative w-14 h-14 rounded-xl shadow-md flex items-center justify-center text-white text-3xl font-bold"
        style={{ backgroundColor: color }}
      >
        <span>{initial}</span>
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/50 to-transparent rounded-t-xl" />
      </div>

      {/* Nama Aplikasi */}
      <span className="text-white text-xs text-center font-light drop-shadow-sm">
        {name}
      </span>
    </button>
  );
};

export default AppIcon;