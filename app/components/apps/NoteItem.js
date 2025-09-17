// app/components/apps/NoteItem.js
import React from 'react';

const NoteItem = ({ title, content, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full text-left p-3 border-b border-gray-300"
    >
      <h3 className="font-bold truncate">{title}</h3>
      <p className="text-sm text-gray-500 truncate">{content}</p>
    </button>
  );
};

export default NoteItem;