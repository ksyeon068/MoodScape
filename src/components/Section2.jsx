import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoPlaySkipForward } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../style/section2.scss";

const Section2 = () => {

  // 🔥 원본 슬라이드
  const slides = [1, 2, 3, 4, 5, 6];

  // 🔥 여러 번 복제해서 끊김 최소화
  const loopSlides = [...slides, ...slides, ...slides, ...slides];

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

              <button className="play-btn">
                <FaPlay />
              </button>

              <button className="next-btn">
                <IoPlaySkipForward />
              </button>
            </div>
          </div>
        </div>

        <h3 className="detail-subtitle">PLAYLIST DETAIL</h3>

        <Swiper
          spaceBetween={20}
          slidesPerView={"auto"}
          loop={true}
          loopAdditionalSlides={6}
          speed={700}
          grabCursor={true}
          className="detail-swiper"
        >
          {loopSlides.map((item, index) => (
            <SwiperSlide key={index} style={{ width: "160px" }}>
              <div className="detail-card">
                <div className="detail-thumb"></div>
                <p>SECTION DESCRIPTION</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Section2;