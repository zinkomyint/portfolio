import React from "react";
import emailjs from "emailjs-com";
import { useRef } from "react";
import "./Footer.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import Contactpng from "../../Images/contact.png";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";

const Footer = () => {
	const form = useRef();

	const sendEmail = (e) => {
		alertify.message("Mail Sending");
		e.preventDefault();

		emailjs
			.sendForm(
				"service_x37c8r6",
				"template_rxxi5wc",
				form.current,
				"M1TUASi0NYlQScdno"
			)
			.then(
				(result) => {
					console.log(result.text);
					alertify.success("Mail Success");
					document.getElementById("myForm").reset();
				},
				(error) => {
					console.log(error.text);
					alert("FAILED...", error);
				}
			);
	};
	const d = new Date();
	let year = d.getFullYear();
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
						<FaLocationArrow className="icon-pos" />
						<p className="f-txt"> Yangon, Myanmar</p>
					</div>

					<div className="contact-txt">
						<FaEnvelope
							className="icon-pos"
							style={{ marginTop: "6px" }}
						/>
						<p className="f-txt">zinkomyint.gamer@gmail.com</p>
					</div>

					<div>
						<img
							src={Contactpng}
							style={{ width: "44%", marginTop: "17px" }}
						></img>
					</div>
				</div>
				<div className="form-layout">
					<p className="q-txt">Quick Contact Form</p>
					{/* <form>
                        <input placeholder="name" className="row__input"></input>
                        <br></br>
                        
                        <input placeholder="email" className="row__input"></input>

                        <br></br>
                        
                        <input placeholder="subject" className="row__input"></input>
                        <br></br>
                        <p className="msg-txt">message</p>
                        <textarea className="txt-area"></textarea>
                    </form> */}
					<form ref={form} onSubmit={sendEmail} id="myForm">
						<div className="form-group">
							<input
								type="name"
								name="name"
								className="form-control row__input"
								id="name"
								placeholder="Name"
								required
							/>
						</div>

						{/* <!-- email --> */}
						<div className="form-group">
							<input
								type="email"
								name="email"
								className="form-control row__input"
								id="email"
								placeholder="Email"
								required
							/>
						</div>

						{/* <!-- subject --> */}
						<div className="form-group">
							<input
								type="text"
								name="subject"
								className="form-control row__input"
								id="subject"
								placeholder="Subject"
								required
							/>
						</div>
						{/* <!-- body --> */}
						<div className="form-group m-t-15">
							<label for="email_body" className="label-name">
								Message
							</label>
							<textarea
								name="message"
								className="form-control txt-area"
								id="email_body"
								rows="5"
							></textarea>
						</div>
						<div className="button-container-2 submit">
							{/* <span className="mas"> Submit</span>
							<button type="submit" name="Hover">
								{" "}
								Submit
							</button> */}
							<span className="mas">Submit</span>
							<button
								className="btn_ani"
								name="Hover"
								type="button"
							>
								<span></span>
								<span></span>
								Submit
								<span></span>
								<span></span>
							</button>
						</div>
						{/* <button type="submit" className="btn btn-primary">
                                Submit
                            </button> */}
					</form>
				</div>
			</div>

			<div className="footer">
				<p className="copy-txt">
					Copyright ©{year} All rights reserved | This template is
					made with by ZIN KO MYINT
				</p>
			</div>
		</div>
	);
};

export default Footer;
