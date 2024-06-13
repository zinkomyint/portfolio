import React from "react";
import "./badge.css";
import js from "../../Images/prg/js.png";
import html from "../../Images/prg/html.png";
import node from "../../Images/prg/node.png";
import react from "../../Images/prg/react.png";
import vs from "../../Images/prg/vs.png";
import sql from "../../Images/prg/sql.png";
import fig from "../../Images/prg/fig.png";
import lara from "../../Images/prg/lara.png";
import php from "../../Images/prg/php.png";
const BadgeScreen = () => {
	return (
		<div className="badge_logo">
			<div className="badge_wrapper">
				{/* <p className="main_title">Success and</p>
				<p className="main_title">Achievement</p> */}
			</div>
			<div className="badge_logo_wrapper badge_logo_rsp">
				<img src={html} className="badge_width badge_width_rsp"></img>
				<img src={js} className="badge_width badge_width_rsp"></img>
				<img src={php} className="badge_width badge_width_rsp"></img>
				<img src={lara} className="badge_width badge_width_rsp"></img>
				<img src={react} className="badge_width badge_width_rsp"></img>
				<img src={node} className="badge_width badge_width_rsp"></img>
				<img src={vs} className="badge_width badge_width_rsp"></img>
			</div>
		</div>
	);
};

export default BadgeScreen;
