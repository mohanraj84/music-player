import React from 'react';

interface TrackInfoProps {
  title: string;
  artist: string;
  coverUrl: string;
}

export const TrackInfo: React.FC<TrackInfoProps> = ({ title, artist, coverUrl }) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <img
        src={coverUrl}
        alt={`${title} by ${artist}`}
        className="w-64 h-64 rounded-lg shadow-lg object-cover"
      />
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600">{artist}</p>
      </div>
    </div>
  );
};