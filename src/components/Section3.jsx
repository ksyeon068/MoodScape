import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

import "../style/section3.scss";
import { useRef, useEffect } from "react";

function Section3() {

  const swiperRef = useRef(null);

  useEffect(() => {
    const btn = document.querySelector(".youtube-btn");

    setTimeout(() => {
      btn.classList.add("show");
    }, 400);
  }, []);

  const weatherSlides = [
  { name: "SUNNY", img: "/img/thumbnail/Sunny_Final cut.jpg", youtube: "https://youtube.com", class: "sunny" },
  { name: "RAINY", img: "/img/thumbnail/Rainy_Final cut.jpg", youtube: "https://youtube.com", class: "rainy" },
  { name: "SNOWY", img: "/img/thumbnail/Snow_Final cut.jpg", youtube: "https://youtube.com", class: "snowy" },
  { name: "MISTY", img: "/img/thumbnail/Fog_Final cut.jpg", youtube: "https://youtube.com", class: "misty" },
  { name: "STORMY", img: "/img/thumbnail/Thunder_Final cut.jpg", youtube: "https://youtube.com", class: "stormy" },
  { name: "CLOUDY", img: "/img/thumbnail/Cloud_Final cut.jpg", youtube: "https://youtube.com", class: "cloudy" }
];

  const moveSlide = (index) => {
    swiperRef.current.swiper.slideToLoop(index);
  };

  return (
    <section className="weather-section" id="weather">

      <div className="section-head">

        <div className="left">
          <h2>날씨 별 플리</h2>
          <p>SECTION DESCRIPTION</p>
        </div>

        <div className="right">
          <a 
            href="https://youtube.com"
            target="_blank"
            className="youtube-btn"
          >
            유튜브 채널 가기
          </a>
        </div>

      </div>

      <div className="weather-filter">

        {weatherSlides.map((item, index) => (
            <button
                key={index}
                className={item.class}
                onClick={() => moveSlide(index)}
            >
                {item.name}
            </button>
            ))}

      </div>

      <div className="swiper-area">

        <Swiper
          ref={swiperRef}
          modules={[EffectCoverflow, Autoplay]}
          effect={"coverflow"}
          centeredSlides={true}
          loop={true}
          slidesPerView={3}
          grabCursor={true}

          autoplay={{
            delay: 4000,
            disableOnInteraction: false
          }}

          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false
          }}
        >

          {weatherSlides.map((item, index) => (
            <SwiperSlide key={index}>
              <a
                href={item.youtube}
                target="_blank"
              >
                <img src={item.img} />
              </a>
            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </section>
  );
}

export default Section3;