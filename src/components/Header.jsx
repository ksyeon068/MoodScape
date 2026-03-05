import { useEffect, useState } from 'react';
import '../style/header.scss';

function Header() {

  const [isFixed, setIsFixed] = useState(false);
  const [weather, setWeather] = useState("clear");

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
    <header className={`header ${isFixed ? "fixed" : ""} ${weather}`}>
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