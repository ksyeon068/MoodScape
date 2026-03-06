import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { useRef, useEffect } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "../style/section3.scss";
import { FaPlayCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";



function Section3() {

  const swiperRef = useRef(null);

  useEffect(() => {
    const btn = document.querySelector(".youtube-btn");

    setTimeout(() => {
      btn.classList.add("show");
    }, 400);
  }, []);

  const weatherSlides = [
  { name: "SUNNY", img: "/img/thumbnail/Sunny_Final cut.jpg", youtube: "https://youtu.be/HlBBH6dFrq8?si=2Cahj1pEKJNWTXNg", class: "sunny" },
  { name: "RAINY", img: "/img/thumbnail/Rainy_Final cut.jpg", youtube: "https://youtu.be/XYvAUh71bY4?si=HUAWi_q8o-hBKqkY", class: "rainy" },
  { name: "SNOWY", img: "/img/thumbnail/Snow_Final cut.jpg", youtube: "https://youtu.be/wOmDGZbKDro?si=5a3YGMs6dXrbi0GI", class: "snowy" },
  { name: "MISTY", img: "/img/thumbnail/Fog_Final cut.jpg", youtube: "https://youtu.be/TASdXqczMbQ?si=GlqzUOuGDQCQIXeE", class: "misty" },
  { name: "STORMY", img: "/img/thumbnail/Thunder_Final cut.jpg", youtube: "https://youtu.be/rsJn8iwHPwo?si=uYXPW5N51oknsKLO", class: "stormy" },
  { name: "CLOUDY", img: "/img/thumbnail/Cloud_Final cut.jpg", youtube: "https://youtu.be/VPOGct31Wkk?si=RzSS_PUhoV7elxtK", class: "cloudy" }
];

  const moveSlide = (index) => {
    swiperRef.current.swiper.slideToLoop(index);
  };

  return (
    <section className="weather-section" id="weather">

      <div className="section-head">

        <div className="left">
          <h2>날씨 별 플레이리스트</h2>
          <p>Weather Playlist <br />
          Discover music that fits the mood of today's weather</p>
        </div>

        <div className="right">
          <a 
            href="https://www.youtube.com/@MoodScape_201"
            target="_blank"
            className="youtube-btn"
          >
            유튜브 채널 가기
          </a>
          <FaPlayCircle size={50} color="$text-color;"
          onClick={() => window.open("https://www.youtube.com/@MoodScape_201", "_blank")}/>
        </div>

      </div>

      <div className="pick-label">
        <span>pick your weather</span>
        <p>MOVE TO PLAYLIST <FaArrowRightLong /></p>
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
          slidesPerView={1.8} // 양옆 슬라이드가 살짝 보이게 조절
          spaceBetween={400}
          grabCursor={true}
          coverflowEffect={{
            rotate: 40,      // 이미지처럼 팍 꺾이게
            stretch: 0,    // 슬라이드들이 서로 겹치는 정도
            depth: 300,      // 뒤로 밀리는 깊이감
            modifier: 1,
            slideShadows: false,
          }}
          className="mySwiper"
        >
          {weatherSlides.map((item, index) => (
            <SwiperSlide key={index}>
              {/* a 태그로 감싸서 링크 연결 */}
              <a 
                href={item.youtube} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="slide-content"
                style={{ display: 'block' }} 
              >
                <img src={item.img} alt={item.name} />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  );
}

export default Section3;


