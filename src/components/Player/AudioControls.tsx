import React from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';

interface AudioControlsProps {
  isPlaying: boolean;
  onPlayPauseClick: () => void;
  onPrevClick: () => void;
  onNextClick: () => void;
}

export const AudioControls: React.FC<AudioControlsProps> = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
}) => {
  return (
    <div className="flex items-center justify-center gap-4">
      <button
        type="button"
        className="p-2 hover:text-purple-600 transition-colors"
        aria-label="Previous"
        onClick={onPrevClick}
      >
        <SkipBack size={24} />
      </button>
      <button
        type="button"
        className="p-3 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors text-white"
        aria-label={isPlaying ? 'Pause' : 'Play'}
        onClick={onPlayPauseClick}
      >
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </button>
      <button
        type="button"
        className="p-2 hover:text-purple-600 transition-colors"
        aria-label="Next"
        onClick={onNextClick}
      >
        <SkipForward size={24} />
      </button>
    </div>
  );
};