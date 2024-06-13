import React from "react";
import "../../App.css";
import "./Skill.css";
import ProgressBar from "@ramonak/react-progress-bar";
import SKillpng from "../../Images/skill.png";
const Skill = () => {
	return (
		<div className="skill-wrapper">
			<div className="skill-layout">
				<div className="right-skill">
					<div className="bg-image">
						<div className="bar-txt">
							<p className="lang-txt">html</p>
							<p className="lang-txt">90%</p>
						</div>
						<ProgressBar
							completed=""
							className="prgress-bar"
							barContainerClassName="container"
							completedClassName="barCompleted-html"
						></ProgressBar>

						<div className="bar-txt">
							<p className="lang-txt">css</p>
							<p className="lang-txt">90%</p>
						</div>
						<ProgressBar
							completed=""
							className="prgress-bar"
							barContainerClassName="container"
							completedClassName="barCompleted-html"
						></ProgressBar>

						<div className="bar-txt">
							<p className="lang-txt">javascript</p>
							<p className="lang-txt">72%</p>
						</div>
						<ProgressBar
							completed=""
							className="prgress-bar"
							barContainerClassName="container"
							completedClassName="barCompleted-js"
						></ProgressBar>

						<div className="bar-txt">
							<p className="lang-txt">Vue</p>
							<p className="lang-txt">65%</p>
						</div>
						<ProgressBar
							completed=""
							className="prgress-bar"
							barContainerClassName="container"
							completedClassName="barCompleted-vue"
						></ProgressBar>

						<div className="bar-txt">
							<p className="lang-txt">React ( NextJS )</p>
							<p className="lang-txt">55%</p>
						</div>
						<ProgressBar
							completed=""
							className="prgress-bar"
							barContainerClassName="container"
							completedClassName="barCompleted-react"
						></ProgressBar>

						<div className="bar-txt">
							<p className="lang-txt">NodeJs ( NestJs )</p>
							<p className="lang-txt">40%</p>
						</div>
						<ProgressBar
							completed=""
							className="prgress-bar"
							barContainerClassName="container"
							completedClassName="barCompleted-nest"
						></ProgressBar>

						<div className="bar-txt">
							<p className="lang-txt">php - laravel</p>
							<p className="lang-txt">78%</p>
						</div>
						<ProgressBar
							completed=""
							className="prgress-bar"
							barContainerClassName="container"
							completedClassName="barCompleted-php"
						></ProgressBar>

						<div className="bar-txt">
							<p className="lang-txt">Flutter</p>
							<p className="lang-txt">68%</p>
						</div>
						<ProgressBar
							completed=""
							className="prgress-bar"
							barContainerClassName="container"
							completedClassName="barCompleted-flutter"
						></ProgressBar>

						<div className="bar-txt">
							<p className="lang-txt">photoshop</p>
							<p className="lang-txt">70%</p>
						</div>
						<ProgressBar
							completed=""
							className="prgress-bar"
							barContainerClassName="container"
							completedClassName="barCompleted-photo"
						></ProgressBar>

						<div className="bar-txt">
							<p className="lang-txt">UI Design</p>
							<p className="lang-txt">70%</p>
						</div>
						<ProgressBar
							completed=""
							className="prgress-bar"
							barContainerClassName="container"
							completedClassName="barCompleted-photo"
						></ProgressBar>
					</div>
				</div>
				<div className="skill-image">
					<img src={SKillpng} style={{ width: "65%" }}></img>
				</div>
			</div>
		</div>
	);
};

export default Skill;
