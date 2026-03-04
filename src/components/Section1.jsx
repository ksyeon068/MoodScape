import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Section1.scss';
import { musicData } from './musicData';

// 아이콘 추가 (날씨 관련 디테일 아이콘)
import { BiShuffle, BiSkipPrevious, BiPlay, BiSkipNext, BiRepeat, BiListUl, BiX, BiMenu } from "react-icons/bi";
import { FiMapPin, FiSun, FiImage, FiChevronDown, FiWind, FiDroplet, FiEye, FiActivity } from "react-icons/fi";
import { MdOutlineEqualizer, MdGrain, MdWaves } from "react-icons/md";
import { WiDaySunny, WiCloudy, WiRain, WiDayCloudy } from "react-icons/wi"; // 날씨 전용 아이콘

const Section1 = () => {
  const [isMusicList, setIsMusicList] = useState(false);
  const [isWeatherDetail, setIsWeatherDetail] = useState(false);
  const [weather, setWeather] = useState(null);

  const API_KEY = VITE_WEATHER_API_KEY; // API Key 유지

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
          params: { q: 'Seoul', appid: API_KEY, units: 'metric' }
        });
        setWeather(response.data);
      } catch (error) {
        console.error("Weather Error:", error);
      }
    };
    fetchWeather();
  }, []);

  const today = new Date();
  const dateString = `${today.getFullYear()} ${(today.getMonth() + 1).toString().padStart(2, '0')} ${today.getDate().toString().padStart(2, '0')}`;

  // --- [디자인 구현용 가짜 데이터] ---
  // 1. 시간별 예보 데이터
  const hourlyData = [
    { time: '현재', icon: <WiDaySunny size={24}/>, temp: '2°' },
    { time: '4 P.M.', icon: <WiDaySunny size={24}/>, temp: '2°' },
    { time: '5 P.M.', icon: <WiDaySunny size={24}/>, temp: '2°' },
    { time: '6 P.M.', icon: <WiDaySunny size={24}/>, temp: '2°' },
    { time: '7 P.M.', icon: <WiDaySunny size={24}/>, temp: '2°' },
    { time: '8 P.M.', icon: <WiDaySunny size={24}/>, temp: '2°' },
    { time: '9 P.M.', icon: <WiDayCloudy size={24}/>, temp: '2°' },
  ];

  // 2. 주간 예보 데이터
  const dailyData = [
    { day: '오늘', icon: <WiDaySunny size={20}/>, min: '-3°', max: '2°' },
    { day: '목', icon: <WiRain size={20}/>, min: '-3°', max: '2°' },
    { day: '금', icon: <WiDaySunny size={20}/>, min: '-3°', max: '2°' },
    { day: '토', icon: <WiWind size={20}/>, min: '-3°', max: '2°' },
    { day: '일', icon: <WiDaySunny size={20}/>, min: '-3°', max: '2°' },
    { day: '월', icon: <WiCloudy size={20}/>, min: '-3°', max: '2°' },
  ];

  // 3. 상세 정보 데이터 (아이콘 매칭)
  const detailData = [
    { label: '미세먼지', value: '좋음(13µg/m³)', icon: null },
    { label: '초미세먼지', value: '좋음(4µg/m³)', icon: null },
    { label: '자외선지수', value: '낮음', icon: <WiDaySunny /> },
    { label: '습도', value: '36%', icon: <FiDroplet /> },
    { label: '바람', value: '가벼운 바람(2m/s)', icon: <FiWind /> },
    { label: '기압', value: '하락 중?(1014.4hPa)', icon: <MdWaves /> },
    { label: '가시거리', value: '매우 좋음(42.90km)', icon: <FiEye /> },
  ];

  return (
    <section className="hero-container">
      {/* 1. 중앙 아트워크 */}
      <div className="center-art">
        <div className="icon-box"><FiImage size={60} color="white" /></div>
      </div>

      {/* 2. 뮤직 위젯 (기존 유지) */}
      <div className={`music-widget ${isMusicList ? 'expanded' : ''}`}>
        {!isMusicList ? (
          <div className="player-view">
            <div className="progress-area">
              <span className="time">1:13</span>
              <div className="progress-bar"><div className="fill"></div><div className="knob"></div></div>
              <span className="time">3:23</span>
            </div>
            <div className="controls">
              <button className="icon-btn"><BiShuffle size={20} /></button>
              <button className="icon-btn"><BiSkipPrevious size={28} /></button>
              <button className="play-btn"><BiPlay size={32} color="white" style={{marginLeft:'2px'}} /></button>
              <button className="icon-btn"><BiSkipNext size={28} /></button>
              <button className="icon-btn"><BiRepeat size={20} /></button>
            </div>
            <div className="footer-info">
              <div className="album-mini"><FiImage size={20} color="white" /></div>
              <div className="track-info"><MdOutlineEqualizer size={20} className="eq-icon"/><span className="title">MUSIC TITLE</span></div>
              <button className="list-btn" onClick={(e)=>{e.stopPropagation(); setIsMusicList(true)}}><BiListUl size={26}/></button>
            </div>
          </div>
        ) : (
          <div className="playlist-view">
             <div className="list-header">
                <div className="text-group"><h3>PLAYLIST: SUNNY DAY!</h3><span>플레이리스트 한 줄 소개</span></div>
                <button className="close-btn" onClick={(e)=>{e.stopPropagation(); setIsMusicList(false)}}><BiX size={28}/></button>
             </div>
             <div className="list-content">
               <span className="label">TRACKLIST</span>
               <div className="scroll-area">
                  {musicData.map((song)=>(
                    <div key={song.id} className="song-item">
                      <div className="left"><div className="mini-art"><FiImage size={16} color="#999"/></div><div className="info"><p className="song-title">{song.title}</p><span className="artist">{song.artist}</span></div></div>
                      <span className="duration">{song.duration}</span>
                    </div>
                  ))}
               </div>
             </div>
          </div>
        )}
      </div>

      {/* 3. 날씨 위젯 (상세 뷰 대폭 수정) */}
      <div 
        className={`weather-widget ${isWeatherDetail ? 'expanded' : ''}`}
        onClick={() => !isWeatherDetail && setIsWeatherDetail(true)}
      >
        {!isWeatherDetail ? (
          /* 기본 뷰 (요약) */
          <div className="weather-summary-view">
            <div className="top-row">
              <div className="temp-wrap"><span className="temp">{weather?.main ? Math.round(weather.main.temp) : '03'}°</span><WiDaySunny size={36} className="weather-icon" /></div>
              <FiMapPin size={20} className="loc-icon" />
            </div>
            <div className="bottom-row">
              <div className="date-info"><p className="city">SEOUL</p><span className="date">{dateString}</span></div>
              <button className="menu-btn"><BiListUl size={24} /></button>
            </div>
          </div>
        ) : (
          /* 상세 뷰 (확장됨 - 시안 적용) */
          <div className="weather-detail-view">
             {/* 상단 헤더: 온도, 위치, 날짜 */}
             <div className="detail-header">
                <div className="header-left">
                  <span className="big-temp">{weather?.main ? Math.round(weather.main.temp) : '03'}°</span>
                  <WiDaySunny size={40} color="#fff"/>
                </div>
                <div className="header-right">
                  <div className="loc-row"><FiMapPin size={16}/> SEOUL</div>
                  <span className="date-text">{dateString}</span>
                </div>
             </div>

             {/* 컨텐츠 그리드 */}
             <div className="detail-content">
                
                {/* 1. 시간별 예보 카드 */}
                <div className="glass-card hourly-card">
                  <p className="summary-text">맑은 날씨가 이어지겠습니다 등 일기 예보 관련 한 줄</p>
                  <div className="divider"></div>
                  <div className="hourly-list">
                    {hourlyData.map((item, idx) => (
                      <div key={idx} className="hour-item">
                        <span className="h-time">{item.time}</span>
                        <div className="h-icon">{item.icon}</div>
                        <span className="h-temp">{item.temp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 하단 2개 카드 영역 */}
                <div className="bottom-cards">
                   {/* 2. 주간 예보 */}
                   <div className="glass-card daily-card">
                      <div className="card-title">일기예보</div>
                      <div className="divider"></div>
                      <div className="daily-list">
                        {dailyData.map((day, idx) => (
                          <div key={idx} className="day-row">
                            <span className="d-day">{day.day}</span>
                            <div className="d-icons">{day.icon}</div>
                            <div className="d-temp">
                              <span className="max">{day.max}</span>
                              <span className="min">{day.min}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                   </div>

                   {/* 3. 상세 날씨 */}
                   <div className="glass-card detail-info-card">
                      <div className="card-title">상세 날씨</div>
                      <div className="divider"></div>
                      <div className="info-list">
                        {detailData.map((info, idx) => (
                          <div key={idx} className="info-row">
                            <div className="info-label">
                              {info.icon && <span className="i-icon">{info.icon}</span>}
                              <span>{info.label}</span>
                            </div>
                            <span className="info-value">{info.value}</span>
                          </div>
                        ))}
                      </div>
                   </div>
                </div>
             </div>

             {/* 닫기 버튼 */}
             <button className="close-btn" onClick={(e) => { e.stopPropagation(); setIsWeatherDetail(false); }}>
                <BiX size={28} />
             </button>
          </div>
        )}
      </div>

      <div className="scroll-indicator">
        <FiChevronDown size={40} className="arrow first" /><FiChevronDown size={40} className="arrow second" />
      </div>
    </section>
  );
};

export default Section1;