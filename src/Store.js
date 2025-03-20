import shreya1 from "../src/Images/shreya1.jpg";
import bgsg from "../src/Images/bgsg.jpg"
import rahman1 from "../src/Images/rahman1.jpg";
import bgar from "../src/Images/bgar.jpg";
import arijit5 from "../src/Images/arijit5.jpeg";
import bgari from "../src/Images/bgari.jpg";
import suni1 from "../src/Images/suni1.jpg";
import suni2 from "../src/Images/suni2.jpg";
import harris1 from "../src/Images/harris1.jpg";
import harris2 from "../src/Images/harris2.jpg";
import karthik1 from "../src/Images/karthik2.jpg";
import karthik2 from "../src/Images/karthik2.jpg"
import chinmayi1 from "../src/Images/chinmayi1.jpg";
import chinmayi2 from "../src/Images/chinmayi2.jpg";
import sid1 from "../src/Images/sid1.jpg";
import bgsid from "../src/Images/bgsid.jpg";
import ani1 from "../src/Images/ani1.jpg";
import ani2 from "../src/Images/ani2.jpg";
import joni1 from "../src/Images/joni1.jpg";
import bgjoni from "../src/Images/bgjoni.jpg";

import neethane from "../src/Images/neethane.jpg";
import anbe from "../src/Images/anbe.jpg";
import soodana1 from "../src/Images/soodana1.jpg";
import whatjhumka from "../src/Images/whatjhumka.jpg";
import omgponnu from "../src/Images/omgponnu.jpg";

import Neethane_Neethane from "../src/Neethane_Neethane.mp3";
import Anbe_Peranbe from "../src/Anbe_Peranbe.mp3";
import Soodaana from "../src/Soodaana.mp3";
import  What_Jhumka from "../src/What_Jhumka.mp3";
import Omg_Ponnu from "../src/Omg_Ponnu.mp3"


const Store = {
    artists: [
        {
            id: 1,
            fname: "Shreya Ghoshal",
            art: "Singer",
            image: shreya1,
            bg : bgsg,
            bio:"Shreya Ghoshal, is an Indian singer. Noted for her wide vocal range and versatility, she is one of the most prolific and influential singers of India.Praised for her remarkable vocal expressions she is often described as 'the queen of dynamics'."
        },
        {
            id: 2,
            fname: "AR Rahman",
            art: "Musician, Singer",
            image: rahman1,
            bg: bgar,
            bio: "ARR is an Indian music composer, record producer, singer, songwriter, musician, multi-instrumentalist, and philanthropist known for his works in Indian cinema; predominantly in Tamil and Hindi films, with occasional forays in international cinema."
        },
        {
            id : 3,
            fname: "Arijit Singh",
            art : "Singer",
            image: arijit5,
            bg:bgari,
            bio: "Arijit Singh is an Indian playback singer. A leading figure in contemporary Hindi film music, he is the recipient of several accolades including two National Film Awards and seven Filmfare Awards. He was conferred upon the Padma Shri by the Government of India in 2025."

        },
        {
            id:4,
            fname: "Sid Sriram",
            art: "Singer",
            image: sid1,
            bg: bgsid,
            bio: "Sidharth Sriram is an Indian Carnatic musician, music producer, playback singer. He is an R&B songwriter and has been working in the Tamil, Telugu, Kannada, Malayalam, Hindi, Marathi and English music industry."
        },
        {
            id:5,
            fname:"Jonita Gandhi",
            art: "Singer",
            image: joni1,
            bg: bgjoni,
            bio: `Jonita Gandhi is a Canadian singer known for her work in the Indian film and music industries. She has recorded songs predominantly in Hindi, Tamil, Telugu languages with few in Punjabi, Marathi, Gujarati, Bengali. Some of her most acclaimed songs include "The Breakup Song", "Mental Manadhil".`
        },
        {
            id:6,
            fname:"Karthik",
            art: "Singer",
            image: karthik1,
            bg: karthik2,
            bio: "Karthik is an Indian playback singer and composer. Karthik started his professional singing career as a backing vocalist and has since been working as a playback singer. He has sung more than 8000 songs in 10 Indian languages including Tamil, Telugu, Malayalam, Kannada, Odia, Bengali, Marathi and Hindi. "
        },
        {
            id:7,
            fname: "Chinmayi",
            art: "Singer",
            image: chinmayi1,
            bg: chinmayi2,
            bio: "Chinmayi Sripada, known mononymously as Chinmayi, is an Indian singer and voice actress who predominantly works in Tamil and Telugu films."
        },
        {
            id:8,
            fname:"Anirudh",
            art: "Musician, Singer",
            image: ani1,
            bg: ani2,
            bio: "Anirudh Ravichander, also credited mononymously as Anirudh, is an Indian composer and playback singer who works primarily in Tamil cinema, in addition to Telugu and Hindi films. He has won two Filmfare Awards South, ten SIIMA Awards, six Edison Awards and five Vijay awards."
        },
       
        {
            id:9,
            fname: "Sunidhi",
            art: "Singer",
            image: suni1,
            bg:suni2,
            bio: "Sunidhi Chauhan is an Indian playback singer. Known for her vocal range and versatility, she has recorded songs for films in several Indian languages and received accolades including three Filmfare Awards and a Filmfare Award South ."
        },
        {
            id:10,
            fname: "Harris Jayaraj",
            art: "Musician, Composer",
            image: harris1,
            bg:harris2,
            bio: 'J. Harris Jayaraj is an Indian composer from Chennai, Tamil Nadu. He composes soundtracks predominantly for Tamil films, while also having composed for a few films in Telugu and two films in Hindi.'
        },
       

    ], 
    newSongs:[
{
    id:1,
    image: neethane,
    songName: "Neethane",
    singers: "AR Rahman, Shreya Ghoshal",
    song:Neethane_Neethane,
    duration: "04.32"
    
},
{
    id:2,
    image: anbe,
    songName:"Anbe Peranbe",
    singers: "Sid Sriram, Shreya Ghoshal",
    song: Anbe_Peranbe,
    duration: "4.29"
},
{
    id:3,
    image:soodana1,
    songName:"Soodana",
    singers: "Shreya Ghoshal",
    song: Soodaana,
    duration:"4.20"
},
{
    id:4,
    image:whatjhumka,
    songName:"What Jhumka",
    singers: "Arijit Singh, Jonita Gandhi",
    song: What_Jhumka,
    duration: "3.34"
},
{
    id:5,
    image:omgponnu,
    songName:"OMG Ponnu",
    singers: "Sid Sriram, Jonita Gandhi, AR Rahman",
    song: Omg_Ponnu,
    duration: "4.44"
},
    ],
    
}




export default Store