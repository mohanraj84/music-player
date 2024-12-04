import React, { useState, useRef, useEffect } from 'react';
import { Track } from '../../data/tracks';
import { AudioControls } from './AudioControls';
import { ProgressBar } from './ProgressBar';
import { TrackInfo } from './TrackInfo';

interface MusicPlayerProps {
  tracks: Track[];
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ tracks }) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef<HTMLAudioElement>(null);
  const currentTrack = tracks[currentTrackIndex];

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrackIndex]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePrevTrack = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === 0 ? tracks.length - 1 : prevIndex - 1
    );
  };

  const handleNextTrack = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex < tracks.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (value: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value;
      setCurrentTime(value);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 space-y-6">
      <audio
        ref={audioRef}
        src={currentTrack.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleNextTrack}
        onLoadedMetadata={handleTimeUpdate}
      />

      <TrackInfo
        title={currentTrack.title}
        artist={currentTrack.artist}
        coverUrl={currentTrack.coverUrl}
      />

      <ProgressBar
        currentTime={currentTime}
        duration={duration}
        onSeek={handleSeek}
      />

      <AudioControls
        isPlaying={isPlaying}
        onPlayPauseClick={handlePlayPause}
        onPrevClick={handlePrevTrack}
        onNextClick={handleNextTrack}
      />
    </div>
  );
};