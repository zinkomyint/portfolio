import React from "react";
import "./Logopage.css";
import logo1 from "../../Images/s1.jpg";
import logo2 from "../../Images/bf.jpg";
const Logopage = () => {
    return (
        <div className="logopage-wrapper">
            <p className="logo-title">" Imagination is creation , I can create premium logo for your company "</p>
            <div className="ui-line"></div>

            <div className="logo-layout">
                <div style={{marginRight: "20px"}}>
                    <img src={logo1} style={{width: "95%"}}></img>
                </div>
                <div>
                    <img src={logo2} style={{width: "19%"}}></img>
                </div>
            </div>
        </div>
    )
};

export default Logopage;