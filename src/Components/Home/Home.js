import React from "react";
import Robot from "../../Images/Robot2.png";
import "./Home.css";
import "../../App.css";
import { FaFacebookSquare, FaInstagram, FaViber } from "react-icons/fa";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from "../Footer/Footer";
const Home = () => {
	return (
		<div className="intro-warpper intro-warpper-resp">
			<div className="left-social">
				<p className="social-txt">SOCIAL</p>
				<FaFacebookSquare className="fb-icons" />
				<FaInstagram className="insta-icons" />
				<FaViber className="viber-icons" />
			</div>
			<div className="text-center text-center-resp">
				<div className="line1"></div>
				<p className="name-txt">I AM ZIN KO MYINT</p>
				<br></br>
				<p className="name-txt-2">CREATIVE DESIGNER AND DEVELOPER</p>
				{/* <div className="contact-me">
                    CONTACT ME
                </div> */}
				<div className="button-container-2">
					<span className="mas"> SEND MAIL</span>
					<button className="btn_ani" name="Hover" type="button">
						<span></span>
						<span></span>
						CONTACT ME
						<span></span>
						<span></span>
					</button>
					{/* <span className="mas"> SEND MAIL</span>
					<button type="button" name="Hover">
						{" "}
						CONTACT ME
					</button> */}
				</div>
				<div className="line2"></div>
			</div>
			<div className="right-robot">
				<div className="line3"></div>
				<img
					src={Robot}
					style={{ width: "400px", height: "400px" }}
					className="m-t-58"
				></img>
				<div className="line4"></div>
			</div>
		</div>
	);
};

export default Home;
