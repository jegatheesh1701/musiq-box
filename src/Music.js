import React from 'react';
import { useEffect, useState, useRef } from 'react';


const Music = ({ song, onNext, onPrevious }) => {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0); 
  const [duration, setDuration] = useState(0); 

  useEffect(() => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]); 

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime); 
    }
  };

  
  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev); 
  };

  
  useEffect(() => {
    if (song && audioRef.current) {
      audioRef.current.load(); 
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
      setIsPlaying(true); 
    }
  }, [song]); 

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" + secs : secs}`;
  };

  const progressBar = (currentTime / duration) * 100;
  return (
    <div className= "w-full">
      <div className='w-full bg-gray-800 h-full flex flex-col sm:flex-row items-center gap-x-9 '>
   
        <div className='text-white text-center items-center justify-center mt-5'>
       <h2 className='font-medium'>When you listen to music, you can feel the soul of the artist</h2>
      
        </div>
     
        <div className='mt-3'>
          <img className='h-32 w-40 mr-5' src={song?.image} alt='song'></img>
        </div>
   
        <div className=' flex flex-col text-white text-center justify-center items-center mr-5 mt-2' >
          <h4>{song?.songName}</h4>
          <h5>{song?.singers}</h5>
        </div>


        <div className=' justify-center'>
          <div className='flex gap-4 justify-center items-center mt-4'>
            {/* previous logo svg  */}
            <button onClick={onPrevious}>
              <svg fill="#000000" width="35px" height="32px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,1A11,11,0,1,0,23,12,11.013,11.013,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9.01,9.01,0,0,1,12,21Zm-2-9,6-4v8ZM7,8H9v8H7Z" /></svg>
            </button>
            {/*  play logo */}

            <button onClick={handlePlayPause}>
       

  {/* Pause SVG */}
  {isPlaying && (
          <svg
            fill="#000000"
            version="1.1"
            id="Layer_1"
            width="38px"
            height="29px"
            viewBox="0 0 512 512"
            enableBackground="new 0 0 512 512"
          >
            <g>
              <path
                d="M256,0C114.609,0,0,114.609,0,256s114.609,256,256,256s256-114.609,256-256S397.391,0,256,0z M256,472 c-119.297,0-216-96.703-216-216S136.703,40,256,40s216,96.703,216,216S375.297,472,256,472z"
              />
              <g>
                <polygon points="271.5,336.5 335.5,336.5 335.5,211.5 335.5,176.5 271.5,176.5" />
                <rect x="175.5" y="176.5" width="64" height="160" />
              </g>
            </g>
          </svg>
        )}
{/* play svg */}
        {!isPlaying && (
          <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Media / Play_Circle">
              <g id="Vector">
                <path
                  d="M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 15V9L15 12L10 15Z"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </g>
          </svg>
        )}

      
      </button>

            {/* <svg onClick={handlePlayPause} fill={isPlaying ? "red" : "#000000"} width="35px" height="35px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g id="Media / Play_Circle">
                <g id="Vector">
                  <path d="M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 15V9L15 12L10 15Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </g>
            </svg> */}

            {/* next */}
            <button onClick={onNext} >
              <svg fill="#000000" width="35px" height="32px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,23A11,11,0,1,0,1,12,11.013,11.013,0,0,0,12,23ZM12,3a9,9,0,1,1-9,9A9.01,9.01,0,0,1,12,3Zm2,9L8,16V8Zm3,4H15V8h2Z" /></svg>
            </button>
          </div>
          
          <div className='flex items-center mb-2 '>
            <h5 className='text-white'>{formatTime(currentTime)}</h5>
            <div className='flex-grow mx-2'>
            <hr style={{
                  width: `${progressBar}%`,
                  height: '5px',
                  backgroundColor: 'white',
                  border: 'none',
                }} 
                className=' border-red-500 gap-2' ></hr>
            </div>
            <h5 className='text-white'>{song?.duration}</h5>
          </div>
        </div>
      </div>
      <audio ref={audioRef} src={song?.song} onTimeUpdate={handleTimeUpdate}
       onError={() => console.error("Failed to load audio.")} />
    </div>
  )
}

export default Music