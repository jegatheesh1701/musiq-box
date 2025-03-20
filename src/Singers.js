import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Store from './Store';
import { useRef } from 'react';



const Singers = ({selectedArtist,song, onSongSelect}) => {
  const { id } = useParams();
  const artist = selectedArtist || Store.artists.find((a) => a.id === parseInt(id)); 


 
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    if (artist) {
      setSongs(Store.newSongs.filter((song) => song.singers.includes(artist.fname)));
    }
  }, [artist]);


  const audioRef = useRef(null); 


  const handleSongClick = (newSong) => {
    onSongSelect(newSong)
};

  return (
    
      
    <div className='justify-center items-center h-full container bg-gray-400'>
     
      
        <div className=''>
          <img className='w-full h-[35vh] mt-5' src={artist?.bg} alt='background'></img>
      
        </div>
        <div className=' flex left-[3] ' style={{ transform: 'translateY(-30px)'}}>
          <img className='rounded-circle w-50 h-40 ml-4' src={artist?.image} alt='singer'  onClick={() => handleSongClick()}></img>
          <p className='mt-10 p-3 font-medium'>{artist?.bio}</p>
        </div>


      <div className='text-center justify-center text-4xl text-red-700'>
        <h2>{artist?.fname}</h2>
      </div>


      <div className=' mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  justify-center items-center'>
        
                {songs.map((newSong) => (
                    <div key={newSong.id} className="flex flex-col items-center justify-center p-4">
                        <img
                            src={newSong.image}
                            className="w-40 h-40 object-cover rounded-lg"
                            alt={newSong.songName}
                            onClick={() => handleSongClick(newSong)}
                        />
                        <h3 className="mt-2 font-bold text-lg">{newSong.songName}</h3>
                        <p className='text-center' >{newSong.singers}</p>
                    </div>
                ))}
            </div>
  

             <audio ref={audioRef} src={song?.song}  /> 
    </div>

  )
}

export default Singers