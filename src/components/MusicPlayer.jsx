import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import './MusicPlayer.css';

const MusicPlayer = ({ url }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Auto-play might be blocked by browsers, so we start muted or on first click
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Auto-play blocked", e));
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    // If the URL changes, reset player
    if (audioRef.current) {
      audioRef.current.load();
      setIsPlaying(false);
    }
  }, [url]);

  if (!url) return null;

  return (
    <div className="music-player-fixed">
      <audio ref={audioRef} src={url} loop />
      <button 
        className={`audio-toggle-btn ${isPlaying ? 'playing' : ''}`} 
        onClick={togglePlay}
        title={isPlaying ? "Pause Music" : "Play Music"}
      >
        {isPlaying ? (
          <div className="audio-icon-wrap">
             <Volume2 size={20} />
             <div className="playing-bars">
                <span></span><span></span><span></span>
             </div>
          </div>
        ) : (
          <VolumeX size={20} />
        )}
        <span className="btn-label">{isPlaying ? "NOW PLAYING" : "PLAY SOUNDTRACK"}</span>
      </button>
    </div>
  );
};

export default MusicPlayer;
