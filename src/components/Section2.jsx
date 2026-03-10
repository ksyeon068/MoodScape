import React, { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause, FaChevronUp, FaChevronDown } from "react-icons/fa";
import { IoPlaySkipForward } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../style/section2.scss";
import { useApi } from "../context/ApiContext";
import { musicData } from "../data/musicData";

const weatherFolders = {
  sunny: "sunshine-scene",
  cloudy: "cloudy-mood",
  rainy: "rain-scene",
  stormy: "thunder-night",
  snowy: "snow-scene",
  misty: "foggy-dawn"
};

const weatherText = {
  sunny: "Sunny",
  cloudy: "Cloudy",
  rainy: "Rainy",
  stormy: "Stormy",
  snowy: "Snowy",
  misty: "Misty"
};

const weatherMood = {

  sunny:{
  tag:["Warm","Bright","Positive"],
  desc:"Warm sunshine mood playlist."
  },

  cloudy:{
  tag:["Calm","Soft","Lo-fi"],
  desc:"Soft cloudy day ambience."
  },

  rainy:{
  tag:["Rain","Focus","Chill"],
  desc:"Perfect for a rainy afternoon."
  },

  stormy:{
  tag:["Dark","Deep","Cinematic"],
  desc:"Thunder and dramatic atmosphere."
  },

  snowy:{
  tag:["Cold","Peaceful","Ambient"],
  desc:"Quiet snowy day atmosphere."
  },

  misty:{
  tag:["Dreamy","Fog","Ambient"],
  desc:"Early foggy morning mood."
  }

};

const Section2 = () => {

  const { weather } = useApi();
  /* const [weather, setWeater] = useState("stormy") */
  const weatherFolder = weatherFolders[weather] || "sunshine-scene";

  const playlists = [1,2,3,4];

  const [activeIndex,setActiveIndex] = useState(0);

  const [trackIndex,setTrackIndex] = useState(0);
  const [isPlaying,setIsPlaying] = useState(false);
  const [progress,setProgress] = useState(0);

  /* NEW */
  const [showDesc,setShowDesc] = useState(false);

  const audioRef = useRef(new Audio());

  const activePlaylist = playlists[activeIndex];
    const trackData =
    musicData?.[weather]?.[`playlist${activePlaylist}`]?.[trackIndex];

  const getVisiblePlaylists = () => {

    const prev = (activeIndex - 1 + playlists.length) % playlists.length;
    const next = (activeIndex + 1) % playlists.length;

    return [playlists[prev],playlists[activeIndex],playlists[next]];

  };

  const visiblePlaylists = getVisiblePlaylists();

  const tracks = [1,2,3,4,5,6].map(
    (i)=>`/music/${weatherFolder}/playlist${activePlaylist}/track${i}.mp3`
  );

  useEffect(()=>{

    setTrackIndex(0);
    setIsPlaying(false);
    setShowDesc(false);

  },[activeIndex]);

  useEffect(()=>{

    audioRef.current.src = tracks[trackIndex];

    if(isPlaying){
      audioRef.current.play();
    }

  },[trackIndex,activeIndex,weatherFolder]);

  const togglePlay = ()=>{

    if(isPlaying){
      audioRef.current.pause();
    }else{
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);

  };

  const nextTrack = ()=>{
    setTrackIndex((prev)=>(prev+1)%tracks.length);
  };

  useEffect(()=>{
    audioRef.current.onended = ()=>{
      nextTrack();
    };
  },[trackIndex]);

  useEffect(()=>{

    const interval = setInterval(()=>{

      if(audioRef.current.duration){

        const percent =
        (audioRef.current.currentTime /
        audioRef.current.duration) * 100;

        setProgress(percent);

      }

    },400);

    return ()=>clearInterval(interval);

  },[]);

  const handleCardClick = (index)=>{

    if(index === 0){
      setActiveIndex((prev)=>
        (prev - 1 + playlists.length) % playlists.length
      );
    }

    if(index === 2){
      setActiveIndex((prev)=>
        (prev + 1) % playlists.length
      );
    }

  };

  const moveUp = ()=>{
    setActiveIndex((prev)=>
      (prev - 1 + playlists.length) % playlists.length
    );
  };

  const moveDown = ()=>{
    setActiveIndex((prev)=>
      (prev + 1) % playlists.length
    );
  };

  const toggleDesc = ()=>{
    setShowDesc(!showDesc);
  };

  return(

<section className="section2">

<div className="section2-inner">

{/* LEFT */}

<div className="playlist-list">

<h2 className="section-title">오늘의 날씨 플리</h2>
<p className="section-desc">Weather Playlist</p>

<button className="playlist-nav up" onClick={moveUp}>
<FaChevronUp/>
</button>

<div className="playlist-wrapper">

{visiblePlaylists.map((item,index)=>{

const isActive = index === 1;

return(

<div
key={index}
className={`playlist-card ${isActive ? "active":"small"}`}
onClick={()=>handleCardClick(index)}
>

<div className="card-text">
<h3>Playlist {item}</h3>
<p>{weatherText[weather]} Mood Music</p>
</div>

<div
className="card-thumb"
style={{
backgroundImage:`url(/music/${weatherFolder}/playlist${item}/cover1.jpg)`
}}
/>

</div>

)

})}

</div>

<button className="playlist-nav down" onClick={moveDown}>
<FaChevronDown/>
</button>

</div>

</div>

{/* RIGHT */}

<div className="playlist-detail">

<div className="detail-top">

<div
className="album-cover"
style={{
backgroundImage:`url(/music/${weatherFolder}/playlist${activePlaylist}/cover${trackIndex+1}.jpg)`
}}
/>

<div className="detail-info">

<h2>{trackData?.title || "Track Title"}</h2>

<div className="waveform">

{[...Array(20)].map((_,i)=>(

<span
key={i}
className={`wave ${isPlaying ? "play":""}`}
/>

))}

</div>

<p>Track {trackIndex+1}</p>

{/* NEW DESCRIPTION PANEL */}

<div className={`desc-panel ${showDesc ? "open" : ""}`}>

<div className="desc-divider"/>

<p className="desc-artist">
{trackData?.artist || "Artist Name"}
</p>

<p className="desc-text">
{weatherMood[weather]?.desc}
</p>

<div className="desc-tags">

{weatherMood[weather]?.tag.map((tag,i)=>(
<span key={i} className="tag">
#{tag}
</span>
))}

</div>

</div>

<div className="progress-bar">
<div className="progress" style={{width:`${progress}%`}}/>
</div>

<div className="player-controls">

<button
className="desc-btn"
onClick={toggleDesc}
>
DESCRIPTION
</button>

<button
className="play-btn"
onClick={togglePlay}
>
{isPlaying ? <FaPause/> : <FaPlay/>}
</button>

<button
className="next-btn"
onClick={nextTrack}
>
<IoPlaySkipForward/>
</button>

</div>

</div>

</div>

<h3 className="detail-subtitle">
PLAYLIST DETAIL
</h3>

<Swiper
spaceBetween={20}
slidesPerView={"auto"}
loop={true}
grabCursor={true}
className="detail-swiper"
>

{[1,2,3,4,5,6].map((item)=>(

<SwiperSlide key={item} style={{width:"160px"}}>

<div
className={`detail-card ${trackIndex === item-1 ? "active" : ""}`}
onClick={()=>setTrackIndex(item-1)}
>

<div
className="detail-thumb"
style={{
backgroundImage:`url(/music/${weatherFolder}/playlist${activePlaylist}/cover${item}.jpg)`
}}
/>

<p>Track {item}</p>

</div>

</SwiperSlide>

))}

</Swiper>

</div>

</section>

);

};

export default Section2;