import React, { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause, FaChevronUp, FaChevronDown } from "react-icons/fa";
import { IoPlaySkipForward } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../style/section2.scss";

const playlists = [
  { title: "Sunshine Scene", desc: "Bright and warm vibes", folder: "sunshine-scene" },
  { title: "Cloudy Mood", desc: "Soft cloudy atmosphere", folder: "cloudy-mood" },
  { title: "Rain Scene", desc: "Rainy emotional playlist", folder: "rain-scene" },
  { title: "Thunder Night", desc: "Dark thunder energy", folder: "thunder-night" },
  { title: "Snow Scene", desc: "Cold winter mood", folder: "snow-scene" },
  { title: "Foggy Dawn", desc: "Quiet foggy morning", folder: "foggy-dawn" },
];

const Section2 = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [activePlaylist, setActivePlaylist] = useState(playlists[0]);

  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const [progress, setProgress] = useState(0);

  const audioRef = useRef(new Audio());

  const visiblePlaylists = playlists.slice(startIndex, startIndex + 3);

  const tracks = [1,2,3,4,5,6].map(
    (i)=>`/music/${activePlaylist.folder}/track${i}.mp3`
  );

  /* 플레이리스트 바뀌면 첫곡 */
  useEffect(()=>{
    setTrackIndex(0);
    setIsPlaying(false);
  },[activePlaylist]);

  /* 음악 로드 */
  useEffect(()=>{

    audioRef.current.src = tracks[trackIndex];

    if(isPlaying){
      audioRef.current.play();
    }

  },[trackIndex,activePlaylist]);

  /* play / pause */
  const togglePlay = () => {

    if(isPlaying){
      audioRef.current.pause();
    }else{
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  /* 다음곡 */
  const nextTrack = () => {

    setTrackIndex((prev)=>(prev+1)%tracks.length);

  };

  /* 자동 다음곡 */
  useEffect(()=>{

    audioRef.current.onended = () => {
      nextTrack();
    };

  },[trackIndex]);

  /* progress bar */
  useEffect(()=>{

    const interval = setInterval(()=>{

      if(audioRef.current.duration){

        const percent =
          (audioRef.current.currentTime /
            audioRef.current.duration) * 100;

        setProgress(percent);

      }

    },500);

    return ()=>clearInterval(interval);

  },[]);

  const moveUp = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const moveDown = () => {
    if (startIndex < playlists.length - 3) setStartIndex(startIndex + 1);
  };

  return (
    <section className="section2">

      <div className="section2-inner">

        {/* LEFT */}
        <div className="playlist-list">

          <h2 className="section-title">오늘의 날씨 플리</h2>
          <p className="section-desc">Weather Playlist</p>

          <button className="playlist-nav up" onClick={moveUp}>
            <FaChevronUp />
          </button>

          {visiblePlaylists.map((item,index)=>(

            <div
              key={index}
              className="playlist-card"
              onClick={()=>setActivePlaylist(item)}
            >

              <div className="card-text">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>

              <div
                className="card-thumb"
                style={{
                  backgroundImage:`url(/music/${item.folder}/cover1.jpg)`
                }}
              />

            </div>

          ))}

          <button className="playlist-nav down" onClick={moveDown}>
            <FaChevronDown />
          </button>

        </div>

      </div>


      {/* RIGHT */}
      <div className="playlist-detail">

        <div className="detail-top">

          <div
            className="album-cover"
            style={{
              backgroundImage:`url(/music/${activePlaylist.folder}/cover${trackIndex+1}.jpg)`
            }}
          />

          <div className="detail-info">

            <h2>{activePlaylist.title}</h2>
            <p>Track {trackIndex+1}</p>

            {/* progress */}
            <div className="progress-bar">
              <div
                className="progress"
                style={{width:`${progress}%`}}
              />
            </div>

            <div className="player-controls">

              <button className="desc-btn">DESCRIPTION</button>

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

        <h3 className="detail-subtitle">PLAYLIST DETAIL</h3>

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
                className="detail-card"
                onClick={()=>setTrackIndex(item-1)}
              >

                <div
                  className="detail-thumb"
                  style={{
                    backgroundImage:`url(/music/${activePlaylist.folder}/cover${item}.jpg)`
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