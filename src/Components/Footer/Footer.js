import React from "react";
import "./Footer.css";
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationArrow } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import Contactpng from "../../Images/contact.png";
const Footer = () => {
    return (
        <div className="footer-wrapper">
           
            <div className="footer-layout">
                <div>
                <p className="q-txt2">CONTACT</p>
                    <div className="contact-txt">
                        <FaPhoneAlt className="icon-pos" />
                        <p className="f-txt">+09 420313181</p>
                    </div>
                    
                    <div className="contact-txt">
                        <FaLocationArrow className="icon-pos"  />
                        <p className="f-txt">Shwepyithar, Yangon, Myanmar</p>
                    </div>

                    <div className="contact-txt">
                        <FaEnvelope className="icon-pos" style={{marginTop:"6px"}} />
                        <p className="f-txt">zinkomyint.gamer@gmail.com</p>
                    </div>

                    <div>
                        <img src={Contactpng} style={{width: "44%",marginTop:"17px"}}></img>
                    </div>

                </div>
                <div className="form-layout">
                    <p className="q-txt">Quick Contact Form</p>
                    <from>
                        <input placeholder="name" className="row__input"></input>
                        <br></br>
                        
                        <input placeholder="email" className="row__input"></input>

                        <br></br>
                        
                        <input placeholder="subject" className="row__input"></input>
                        <br></br>
                        <p className="msg-txt">message</p>
                        <textarea className="txt-area"></textarea>
                        {/* <input placeholder="name"></input>

                        <input placeholder="name"></input>

                        <input placeholder="name"></input> */}
                    </from>
                </div>
            </div>
            
            <div className="footer">
                <p className="copy-txt">Copyright ©2022All rights reserved | This template is made with by ZIN KO MYINT</p>
            </div>

        </div>
    )
};

export default Footer;