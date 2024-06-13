import React from "react";
import "./Navbar.css";
import Logo from "../../Images/logo.jpg";
const Navbar = () => {
	return (
		<div className="nav-warpper">
			<div>
				{/* <p className="logo">Z K M</p> */}
				<img src={Logo} className="logo"></img>
			</div>
			<div>
				<p></p>
			</div>
		</div>
	);
};

export default Navbar;
