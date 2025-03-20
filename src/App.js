
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import Nav from './Nav';
//import Sidebar from './Sidebar';
import Music from './Music'
import Store from './Store';
import { useState, useRef } from 'react';
import Singers from './Singers';

function App() {


  const [selectedSong, setSelectedSong] = useState(null);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);


  const handleArtistSelection = (artist) => {
    setSelectedArtist(artist);
  };

  const handleSongSelection = (song) => {
    setSelectedSong(song);
  };

  const handleNextSong = () => {
    const currentIndex = Store.newSongs.indexOf(selectedSong);
    const nextIndex = (currentIndex + 1) % Store.newSongs.length;
    setSelectedSong(Store.newSongs[nextIndex]);
  };

  const handlePreviousSong = () => {
    const currentIndex = Store.newSongs.indexOf(selectedSong);
    const prevIndex = (currentIndex - 1 + Store.newSongs.length) % Store.newSongs.length;
    setSelectedSong(Store.newSongs[prevIndex]);
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        // Pause the audio
        audioRef.current.pause();
        setIsPlaying(false);
      }
    } else {
      
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
      setIsPlaying(true);
    }
  };


  return (
    <Router>
      <div className=' sticky'>
        <Nav />
      </div>

      <Routes>
       
        <Route path='/' element={<Menu onSongSelect={handleSongSelection} onArtistSelect={handleArtistSelection} />} />
       
        <Route path='/singer/:id' element={<Singers song={selectedSong} selectedArtist={selectedArtist}
          onNext={handleNextSong}
          onPrevious={handlePreviousSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          audioRef={audioRef}
          handlePlayPause={handlePlayPause}
          onSongSelect={handleSongSelection} />} />
      </Routes>


      {selectedSong && (
        <div className=' sticky  bg-gray-800'>
          <Music

            song={selectedSong}
            onNext={handleNextSong}
            onPrevious={handlePreviousSong}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            audioRef={audioRef}
            handlePlayPause={handlePlayPause} />
        </div>
      )}

    </Router>
  );
}

export default App;
