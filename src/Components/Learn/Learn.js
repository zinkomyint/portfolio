import React from "react";
import "./Learn.css";
import Stack from "../../Images/stack.jpg";
import W3 from "../../Images/w3.jpg";
import Code from "../../Images/code.jpg";
import Udemy from "../../Images/ac.jpg";

const Learn = () => {
    return (
        <div className="learn-wrapper">
            <p className="learn-title">HOW TO LEARN</p>
            <div className="learn-line"></div>
            <div className="learn-layout">
                <div className="learn-card">
                    <img src={Stack} style={{width: "100%"}}></img>
                    <div className="learn-txt">
                        <p>you already know HTML and you want to design Web sites using the Web standard CSS, this is the place to start...</p>
                    </div>
                    <div className="learn-btn">
                        <p className="learn-btn-txt">Learn</p>
                    </div>
                </div>

                <div className="learn-card">
                    <img src={W3} style={{width: "100%"}}></img>
                    <div className="learn-txt">
                        <p>A public platform building the definitive collection of coding questions & answers ... A community-based ...</p>
                    </div>
                    <div className="learn-btn">
                        <p className="learn-btn-txt">Learn</p>
                    </div>
                </div>

                <div className="learn-card">
                    <img src={Code} style={{width: "100%"}}></img>
                    <div className="learn-txt">
                        <p>Learn the technical skills to get the job you want. Join over 50 million people choosing Codecademy ....</p>
                    </div>
                    <div className="learn-btn">
                        <p className="learn-btn-txt">Learn</p>
                    </div>
                </div>

                <div className="learn-card">
                    <img src={Udemy} style={{width: "100%"}}></img>
                    <div className="learn-txt">
                        <p>Free courses on Udemy offer students a simplified learning experience. This simplified experience ..</p>
                    </div>
                    <div className="learn-btn">
                        <p className="learn-btn-txt">Learn</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Learn;