'use client';

import { useState, useRef, useEffect } from 'react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.error("Playback error", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="audio-control">
      <audio ref={audioRef} loop src="/Awit.mp3" />
      <button 
        onClick={toggleMusic} 
        className={`audio-toggle ${isPlaying ? 'playing' : ''}`}
        aria-label={isPlaying ? 'Mute Music' : 'Play Music'}
      >
        {isPlaying ? '🔊' : '🔈'}
      </button>
    </div>
  );
}
