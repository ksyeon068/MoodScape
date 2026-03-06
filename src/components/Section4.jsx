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
						<p>날씨는 <br />우리 일상에 <br />꾸준히 영향을 미치는 요소입니다.</p>
					</div>

					{/* right text 1 */}
					<div className="right-content text2">
						<p>
							하루의 기분, <br />활동 방식, <br />집중과 휴식의 흐름까지 <br />
							날씨는 자연스럽게 삶의 리듬을 만들어 냅니다.
						</p>
					</div>

					{/* left text 2 */}
					<div className="left-content text3">
						<p>
							이처럼 날씨는 단순한 자연 현상을 넘어 <br />
							우리의 감정과 분위기에 깊게 연결되어 있습니다.
						</p>
					</div>

					{/* left text 3 */}
					<div className="right-content text4">
						<p>
							<span>MoodScape</span>는 <br />
							날씨의 변화를 바탕으로<br />
							순간의 분위기에 어울리는 음악을 추천합니다.
						</p>
					</div>

					{/* right text 2 */}
					<div className="right-content text5">
						<p>
							단순히 음악을 나열하는 것이 아닌, <br />
							하루의 분위기를 결정하는 공간입니다.
						</p>
					</div>

					{/* right text 2 */}
					<div className="left-content text6">
						<p>
							날씨가 만들어 내는 분위기와 음악이 만나<br />
							일상 속 작은 순간들을 <br />
							더욱 풍부하게 만들어 줍니다.
						</p>
					</div>

					<div className="bottom-text text7">
						<p>당신의 환경에 가장 어울리는 <br />음악을 발견하고, 경험해 보세요.</p>
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
