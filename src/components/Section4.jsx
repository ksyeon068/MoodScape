import React from "react";
import "../style/section4.scss";

const Section4 = () => {

  return (
		<section className="about">

			<div className="top_des">
				<h2 className="left_des">An atmosphere shaped</h2>
				<h2 className="right_des">by mood or feeling.</h2>
			</div>

			<div className="inner">

				<div className="center-wrapper">
					<div className="sticky-circle">
						<img src="../img/source/Rainy_Source file.png" alt="centerImg" />
					</div>
				</div>

				<div className="scroll-content">

					{/* left text 1 */}
					<div className="left-content text1">
						<h3>변화하는 환경 속에서</h3>
					</div>

					{/* right text 1 */}
					<div className="right-content text2">
						<p>
							날씨는 <br />
							우리의 일상에 <br />
							꾸준히 영향을 미치는 요소입니다.
						</p>
					</div>

					{/* left text 2 */}
					<div className="left-content text3">
						<p>
							하루의 분위기, 활동 방식 <br />
							집중도와 휴식의 흐름까지 —
						</p>
					</div>

					{/* left text 3 */}
					<div className="left-content text4">
						<p>
							날씨는 생활의 리듬을 <br />
							자연스럽게 만들어냅니다.
						</p>
					</div>

					{/* right text 2 */}
					<div className="right-content text5">
						<p>
							<span>MoodScape</span>는 오늘의 날씨 정보를 기반으로 <br />
							그 순간의 분위기에 어울리는 음악을 추천합니다.
						</p>
					</div>

					<div className="bottom-text text6">
						<p>당신의 환경에 가장 어울리는 소리를 경험해 보세요.</p>
					</div>

				</div>

				{/* image circles */}
				<div className="circle circle1">
					<img src="../img/source/Weather_Pic 1.jpg" alt="" />
				</div>

				<div className="circle circle2">
					<img src="../img/source//Weather_Pic 3.jpg" alt="" />
				</div>

				<div className="circle circle3">
					<img src="../img/source//Weather_Pic 5.jpg" alt="" />
				</div>

				<div className="circle circle4">
					<img src="../img/source//Weather_Pic 7.jpg" alt="" />
				</div>

				{/* decorative circles */}
				<div className="circle deco1"></div>
				<div className="circle deco2"></div>
				<div className="circle deco3"></div>

		</div>

		</section>
 	 );
};

export default Section4;
