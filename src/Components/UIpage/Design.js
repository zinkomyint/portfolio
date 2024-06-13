import React from "react";
import "./Design.css";
import "../../App.css";
import Uipng from "../../Images/ui.png";
import Uipng1 from "../../Images/ui_one.jpg";
import Uipng2 from "../../Images/ui_two.jpg";
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
                    {/* <p className="ui-1">UI Design - 1</p> */}
                    <a href="https://zinkomyintprofile.000webhostapp.com/zinkomyint/admin.html" target="blank">
                    <img src={Uipng1} style={{width: "100%"}}></img>
                    </a>
                </div>

                <div className="card1 ui-img-top">
                    {/* <p className="ui-2">UI Design - 2</p> */}
                    <a href="https://zinkomyintprofile.000webhostapp.com/zinkomyint/game.html" target="blank">
                    <img src={Uipng2} style={{width: "100%"}}></img>
                    </a>
                </div>

                <div className="ui-image-layout">
                    <img src={Uipng} style={{width: "43%"}}></img>
                </div>

            </div>
        </div>
    )
};

export default Design;