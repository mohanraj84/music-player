import React from 'react';
import { MusicPlayer } from './components/Player/MusicPlayer';
import { tracks } from './data/tracks';
import { Music } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white">
      <header className="py-6 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <Music className="text-purple-600 w-8 h-8" />
          <h1 className="text-3xl font-bold text-gray-800 ml-2">Melody Stream</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <MusicPlayer tracks={tracks} />
        </div>
      </main>

      <footer className="py-6 text-center text-gray-600">
        <p>© 2024 Melody Stream. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;