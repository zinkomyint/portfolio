import React from "react";
import "./Design.css";
import Uipng from "../../Images/ui.png";
const Design = () => {
    return (
        <div className="design-wrapper">
            <p className="ui-txt">UI DESIGN</p>
            <div className="ui-line"></div>
            <div className="content-layout">
                <p className="ui-txt2">
                The user interface (UI) is the point at which human users interact with a computer,
                website or application. The goal of effective UI is to make the user's experience 
                easy and intuitive, requiring minimum effort on the user's part to receive 
                maximum desired outcome.
                </p>
            </div>
            <hr></hr>
            <div className="ui-card">
                <div className="card1">
                    <p className="ui-1">UI Design - 1</p>
                </div>

                <div className="card1">
                    <p className="ui-2">UI Design - 2</p>
                </div>

                <div className="ui-image-layout">
                <img src={Uipng} style={{width: "43%"}}></img>
                </div>

            </div>
        </div>
    )
};

export default Design;