export interface Track {
  id: number;
  title: string;
  artist: string;
  audioUrl: string;
  coverUrl: string;
}

export const tracks: Track[] = [
  {
    id: 1,
    title: "Summer Breeze",
    artist: "Chill Vibes",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    coverUrl: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3"
  },
  {
    id: 2,
    title: "Mountain Echo",
    artist: "Nature Sounds",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    title: "Urban Night",
    artist: "City Lights",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    coverUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3"
  }
];