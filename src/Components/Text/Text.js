import React from "react";
import Contentpng from "../../Images/content.png";
import "./Text.css";

const Text = () => {
    return (
        <div className="content-wrapper">
            <div className="content-txt">
                <div className="content-txt2">
                    <div className="content-line1"></div>
                        <p className="content-txt3">As a professional, I am highly motivated and skilful person with strong attitude and working experiences would be advantage for your need. Additionally, I am able to work under pressure. Please kindly see the recommendation, skill and education qualification. </p>
                    <div className="content-line2"></div>
                </div>
                <div className="content-image">
                <img src={Contentpng} style={{width: "65%"}}></img>
                </div>
            </div>
        </div>
    )
};

export default Text;