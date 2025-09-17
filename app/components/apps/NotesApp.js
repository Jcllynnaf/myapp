// app/components/apps/NotesApp.js
'use client';
import React, { useState } from 'react';
import NoteItem from './NoteItem';

const NotesApp = ({ onClose }) => {
  const [notes, setNotes] = useState([
    { id: 1, title: 'Selamat Datang!', content: 'Ini adalah catatan pertamamu.' },
  ]);
  const [activeView, setActiveView] = useState('list');
  const [selectedNote, setSelectedNote] = useState(null);
  const [currentText, setCurrentText] = useState('');

  const handleNewNote = () => {
    setSelectedNote(null);
    setCurrentText('');
    setActiveView('edit');
  };

  const handleSaveNote = () => {
    if (currentText.trim() === '') return;

    const title = currentText.split('\n')[0];
    const newNote = { id: Date.now(), title, content: currentText };
    setNotes([newNote, ...notes]);
    setActiveView('list');
  };
  
  const handleSelectNote = (note) => {
    setSelectedNote(note);
    setCurrentText(note.content);
    setActiveView('edit');
  };

  if (activeView === 'list') {
    return (
      <div className="w-full h-full bg-[#fdf4b8] text-black font-sans flex flex-col">
        <div className="h-11 bg-gray-200 border-b border-gray-400 shadow-sm flex items-center justify-between px-2 flex-shrink-0">
          <button onClick={onClose} className="px-3 py-1 text-sm font-bold text-gray-800 bg-gradient-to-b from-gray-300 to-gray-200 border border-gray-400 rounded-md shadow-sm">
            {'<'} Home
          </button>
          <h1 className="font-bold text-lg text-gray-700">Notes</h1>
          <button onClick={handleNewNote} className="px-3 py-1 text-lg font-bold text-gray-800 bg-gradient-to-b from-gray-300 to-gray-200 border border-gray-400 rounded-md shadow-sm">
            +
          </button>
        </div>
        <div className="flex-grow overflow-y-auto">
          {notes.map(note => (
            <NoteItem
              key={note.id}
              title={note.title}
              content={note.content}
              onClick={() => handleSelectNote(note)}
            />
          ))}
        </div>
      </div>
    );
  }

  if (activeView === 'edit') {
    return (
      <div className="w-full h-full bg-[#fdf4b8] text-black font-sans flex flex-col">
        <div className="h-11 bg-gray-200 border-b border-gray-400 shadow-sm flex items-center justify-between px-2 flex-shrink-0">
          <button onClick={() => setActiveView('list')} className="px-3 py-1 text-sm font-bold text-gray-800 bg-gradient-to-b from-gray-300 to-gray-200 border border-gray-400 rounded-md shadow-sm">
            {'<'} Notes
          </button>
          <h1 className="font-bold text-lg text-gray-700"></h1>
          <button onClick={handleSaveNote} className="px-3 py-1 text-sm font-bold text-blue-600 bg-gradient-to-b from-gray-300 to-gray-200 border border-gray-400 rounded-md shadow-sm">
            Done
          </button>
        </div>
        <textarea
          value={currentText}
          onChange={(e) => setCurrentText(e.target.value)}
          className="w-full h-full p-3 bg-transparent focus:outline-none resize-none text-lg leading-relaxed"
          autoFocus
        />
      </div>
    );
  }

  return null;
};

export default NotesApp;