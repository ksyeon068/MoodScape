import React, { useState, useEffect } from 'react';
import './Section1.scss';
import { musicData } from './musicData';

const Section1 = () => {
  const [isMusicList, setIsMusicList] = useState(false);
  const [isWeatherDetail, setIsWeatherDetail] = useState(false);
  const [weather, setWeather] = useState(null);

  const API_KEY = ''; // 여기에 키를 입력하세요

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${API_KEY}&units=metric`)
      .then(res => res.json())
      .then(data => setWeather(data))
      .catch(err => console.error("Weather Error:", err));
  }, []);

  return (
    <section className="hero-container">
      {/* 1. 중앙 메인 아이콘/로고 */}
      <div className="main-visual">
        <div className="placeholder-icon">🖼️</div>
      </div>

      {/* 2. 왼쪽 하단: 뮤직 위젯 */}
      <div className={`music-widget ${isMusicList ? 'expanded' : ''}`}>
        {!isMusicList ? (
          <div className="player-ui" onClick={() => setIsMusicList(true)}>
            <div className="progress-bar"><div className="fill" /></div>
            <div className="controls">
              <span>Shuffle</span> <span>Prev</span> <button className="play-btn">▶</button> <span>Next</span> <span>Repeat</span>
            </div>
            <div className="mini-info">
              <div className="album-art" />
              <div className="text">MUSIC TITLE</div>
              <button className="list-toggle">☰</button>
            </div>
          </div>
        ) : (
          <div className="playlist-ui">
            <div className="header">
              <h3>PLAYLIST: SUNNY DAY!</h3>
              <button onClick={() => setIsMusicList(false)}>✕</button>
            </div>
            <div className="scroll-area">
              {musicData.map(song => (
                <div key={song.id} className="song-item">
                  <div className="mini-art" />
                  <div className="song-detail">
                    <p>{song.title}</p>
                    <span>{song.artist}</span>
                  </div>
                  <span className="duration">{song.duration}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 3. 오른쪽 하단: 날씨 위젯 */}
      <div className={`weather-widget ${isWeatherDetail ? 'expanded' : ''}`} onClick={() => !isWeatherDetail && setIsWeatherDetail(true)}>
        {!isWeatherDetail ? (
          <div className="weather-summary">
            <div className="temp-box">
              <h2>{weather ? Math.round(weather.main.temp) : '03'}°</h2>
              <span className="icon">☀️</span>
            </div>
            <div className="city-box">
              <p>SEOUL</p>
              <span>2026 02 23</span>
              <button className="weather-list-btn">☰</button>
            </div>
          </div>
        ) : (
          <div className="weather-detail-ui">
            <div className="detail-header">
              <h2>{Math.round(weather?.main?.temp)}°</h2>
              <p>SEOUL <span>2026 02 23</span></p>
              <button className="close-btn" onClick={(e) => { e.stopPropagation(); setIsWeatherDetail(false); }}>✕</button>
            </div>
            <div className="forecast-placeholder">
              {/* 여기에 상세 예보 데이터 매핑 */}
              <p>상세 예보 영역 (디자인 시안 3번 참고)</p>
            </div>
          </div>
        )}
      </div>

      {/* 4. 하단 중앙 화살표 */}
      <div className="scroll-arrow">︾</div>
    </section>
  );
};

export default Section1;