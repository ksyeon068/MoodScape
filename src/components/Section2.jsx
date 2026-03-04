import React from "react";
import "../styles/section2.scss";

const Section2 = () => {
  return (
    <section className="section2">
      <div className="section2-inner">
        
        {/* ===== Left Side ===== */}
        <div className="playlist-list">
          <h2 className="section-title">오늘의 날씨 플리</h2>
          <p className="section-desc">SECTION DESCRIPTION</p>

          <div className="playlist-card">
            <div className="card-text">
              <h3>TITLE</h3>
              <p>DESCRIPTION</p>
            </div>
            <div className="card-thumb"></div>
          </div>

          <div className="playlist-card">
            <div className="card-text">
              <h3>TITLE</h3>
              <p>DESCRIPTION</p>
            </div>
            <div className="card-thumb"></div>
          </div>

          <div className="playlist-card">
            <div className="card-text">
              <h3>TITLE</h3>
              <p>DESCRIPTION</p>
            </div>
            <div className="card-thumb"></div>
          </div>
        </div>


        {/* ===== Right Side ===== */}
        <div className="playlist-detail">
          
          <div className="detail-top">
            <div className="album-cover"></div>

            <div className="detail-info">
              <h2>PLAYLIST TITLE</h2>
              <p>PLAYLIST DESCRIPTION</p>

              <div className="progress-bar">
                <div className="progress"></div>
              </div>

              <div className="player-controls">
                <button className="desc-btn">DESCRIPTION</button>
                <button className="play-btn">▶</button>
                <button className="next-btn">⏭</button>
              </div>
            </div>
          </div>

          <h3 className="detail-subtitle">PLAYLIST DETAIL</h3>

          <div className="detail-list">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div className="detail-card" key={item}>
                <div className="detail-thumb"></div>
                <p>SECTION DESCRIPTION</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Section2;