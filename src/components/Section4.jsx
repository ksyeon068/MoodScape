import React from "react";
import "../style/section4.scss";
/* import centerImage from "../assets/center.jpg"; */

const Section4 = () => {
  return (
    <section className="about">

      <div className="center-wrapper">
        <div className="sticky-circle">
          {/* <img src={centerImage} alt="mood weather" /> */}
        </div>
      </div>

      <div className="scroll-content">
        <div className="left-content">
          <h2>변화하는 환경 속에서</h2>
          <p>
            하루의 분위기, 활동 방식 <br />
            집중도와 휴식의 흐름까지 —
          </p>
        </div>

        <div className="right-content">
          <p>
            날씨는 우리 일상에 <br />
            꾸준히 영향을 미치는 요소입니다.
          </p>
        </div>

        <div className="bottom-text">
          <p>
            이 웹사이트는 오늘의 날씨 정보를 기반으로 <br />
            그 순간의 분위기에 어울리는 음악을 추천합니다.
          </p>
        </div>
      </div>

    </section>
  );
};

export default Section4;
