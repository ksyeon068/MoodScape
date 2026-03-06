import { useContext } from "react";
import ApiContext from "../context/ApiContext";
import "../style/bg.scss";

function Bg() {

  const { weather } = useContext(ApiContext);

  let videoSrc = "/Project_Video/Rainy.mp4";

  if (weather === "Rain") videoSrc = "/Project_Video/Rainy.mp4";
  if (weather === "Rain") videoSrc = "/Project_Video/Rainy.mp4";
  if (weather === "Snow") videoSrc = "/Project_Video/Snow.mp4";
  if (weather === "Thunderstorm") videoSrc = "/Project_Video/Thunder.mp4";
  if (weather === "Clouds") videoSrc = "/Project_Video/Cloud.mp4";

  return (
    <div className="bg-video">
      <video autoPlay loop muted playsInline>
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
}

export default Bg;