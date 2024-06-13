import React from "react";
import "./Learn.css";
import "../../App.css";
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
                        <p>you already know HTML and you want to design Web sites using the Web standard CSS, this is the place to...</p>
                    </div>
                   
                    <a href="https://stackoverflow.com/" className="learn-btn" target="blank">Learn</a>
                        {/* <p className="learn-btn-txt">Learn</p> */}
                    
                </div>

                <div className="learn-card learn-layout2">
                    <img src={W3} style={{width: "100%"}}></img>
                    <div className="learn-txt">
                        <p>A public platform building the definitive collection of coding questions & answers ... A community-based ...</p>
                    </div>
                  
                        {/* <p className="learn-btn-txt">Learn</p> */}
                        <a href="https://www.w3schools.com/default.asp" className="learn-btn" target="blank">Learn</a>
                  
                </div>

                <div className="learn-card learn-layout2">
                    <img src={Code} style={{width: "100%"}}></img>
                    <div className="learn-txt">
                        <p>Learn the technical skills to get the job you want. Join over 50 million people choosing Codecademy ....</p>
                    </div>
                  
                    <a href="https://www.codecademy.com/catalog/all" className="learn-btn" target="blank">Learn</a>
                        {/* <p className="learn-btn-txt">Learn</p> */}
                  
                </div>

                <div className="learn-card learn-layout2">
                    <img src={Udemy} style={{width: "100%"}}></img>
                    <div className="learn-txt">
                        <p>Free courses on Udemy offer students a simplified learning experience. This simplified experience Codecademy.</p>
                    </div>
                   
                    <a href="https://www.udemy.com/" className="learn-btn" target="blank">Learn</a>
                        {/* <p className="learn-btn-txt">Learn</p> */}
                  
                </div>
            </div>
        </div>
    )
};

export default Learn;