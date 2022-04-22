import React from "react";
import Robot from "../../Images/robot.png";
import "./Home.css";
import { FaFacebookSquare, FaInstagram, FaViber } from 'react-icons/fa';
const Home = () => {
    return (
        <div className="intro-warpper">
            <div className="left-social">
                <p className="social-txt">SOCIAL</p>
                <FaFacebookSquare className="fb-icons" />
                <FaInstagram className="insta-icons" />
                <FaViber className="viber-icons" />
            </div>
            <div className="text-center">
                <div className="line1"></div>
                <p className="name-txt">I AM ZIN KO MYINT</p><br></br>
                <p className="name-txt-2">CREATIVE DESIGNER AND DEVELOPER</p>
                <div className="contact-me">
                    CONTACT ME
                </div>
                <div className="line2"></div>
            </div>
            <div className="right-robot">
                <div className="line3"></div>
                <img src={Robot} style={{width:'400px',height:'400px'}}></img>
                <div className="line4"></div>
            </div>
        </div>
    )
};

export default Home;