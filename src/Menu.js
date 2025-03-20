import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Store from './Store';

const Menu = ({ onArtistSelect, onSongSelect ,song}) => {

    const [showSinger, setShowSinger] = useState(false);


    const audioRef = useRef(null); 

    const handleSeeMore = () => {
        setShowSinger(true);
    };

    const firstSetArtists = Store.artists.slice(0, 5);
    const lastSetArtists = Store.artists.slice(-5);

    const newSongs = Store.newSongs;

    const handleSongClick = (newSong) => {
        onSongSelect(newSong)
    };

    return (
        <div className=' bg-gray-500  mt-12  overflow-y-auto justify-center items-center h-screen'>

            <div className='mt-2'>
                <button className='rounded-full bg-gray-200 px-2 py-1 ml-3 mt-2'>
                    All
                </button>
                <button className='rounded-full bg-gray-200 px-2 py-1 ml-3 mt-2'>
                    Artists

                </button>
                <button className='rounded-full bg-gray-200 px-2 py-1 ml-3 mt-2'>
                    Music
                </button>
            </div>


            <div className='mt-5 ml-5 justify-between flex'>
                <span className='text-4xl font-bold'>To Get Started</span>
                <button
                    onClick={handleSeeMore} className='mr-5 font-medium'> See More
                </button>
            </div>
            <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>

                {firstSetArtists.map((artist) => (
                    <div key={artist.id} className="flex flex-col items-center p-4 rounded-lg">
                         <Link to={`/singer/${artist.id}`} onClick={() => onArtistSelect(artist)}>
              <img
                src={artist.image}
                alt={artist.fname}
                className="w-40 h-40 object-cover rounded-full"
              />
            </Link>
                        <h3 className="mt-2 font-bold text-lg">{artist.fname}</h3>
                        <p className="text-sm">{artist.art}</p>
                    </div>
                ))}
            </div>
            {showSinger && (
                <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
                    {lastSetArtists.map((artist) => (
                        <div key={artist.id} className="flex flex-col items-center p-4 rounded-lg">
                             <Link to={`/singer/${artist.id}`} onClick={() => onArtistSelect(artist)}>
                            <img
                                src={artist.image}
                                alt={artist.fname}
                                className="w-40 h-40 object-cover rounded-full"
                            />
                            </Link>
                            <h3 className="mt-2 font-bold text-lg">{artist.fname}</h3>
                            <p className="text-sm">{artist.art}</p>
                        </div>
                    ))}
                </div>
            )}

            <div className='mt-5 ml-5 justify-between flex'>
                <span className='text-4xl font-bold'>To Get Started</span>
            </div>

            <div className='bg-gray-500 mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
                {newSongs.map((newSong) => (
                    <div key={newSong.id} className="flex flex-col items-center p-4 rounded-lg" >
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

            <audio ref={audioRef}  />
        </div>
    )
}

export default Menu;