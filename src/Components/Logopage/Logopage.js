import React from "react";
import "./Logopage.css";
import "../../App.css";
import logo1 from "../../Images/s1.jpg";
import logo2 from "../../Images/bf.jpg";
import logo3 from "../../Images/sun_tech.jpg";
const Logopage = () => {
	return (
		<div className="logopage-wrapper logo-h">
			<p className="logo-title">
				" Imagination is creation , I can create premium logo for your
				company "
			</p>
			<div className="ui-line"></div>

			<div className="logo-layout">
				<div className="img_wrap">
					<img src={logo1} className="logo-layout-img1"></img>
				</div>
				<div className="img_wrap">
					<img src={logo2} className="logo-layout-img2"></img>
				</div>
				<div className="img_wrap">
					<img src={logo3} className="logo-layout-img3"></img>
				</div>
			</div>
		</div>
	);
};

export default Logopage;
