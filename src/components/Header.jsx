import { useEffect, useState } from 'react';
import { useApi } from "../context/ApiContext";
import '../style/header.scss';

function Header() {
  const { WEATHER_API_KEY } = useApi();
  const [isFixed, setIsFixed] = useState(false);
  const [weather, setWeather] = useState(null);

  //날씨 API연동
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {

      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
        .then((res) => res.json())
        .then((data) => {
          const weatherMain = data.weather[0].main.toLowerCase();
          setWeather(weatherMain);
        });

    });
  }, []);

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 메뉴 클릭시 스크롤 이동
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <header className={`header ${isFixed ? "fixed" : ""} ${weather || ""}`}>
      <div className="header-inner">
        <div className="logo">
          MoodScape
        </div>
        <nav className="menu">
          <button onClick={() => scrollToSection("home")}>HOME</button>
          <button onClick={() => scrollToSection("today")}>TODAYPLI</button>
          <button onClick={() => scrollToSection("weather")}>WEATHERPLI</button>
          <button onClick={() => scrollToSection("about")}>ABOUT</button>
        </nav>

      </div>
    </header>
  );
}

export default Header;