/* eslint-disable jsx-a11y/alt-text */
import profile from "../../Images/zkm2.png";
import "./About.css";
import "../../App.css";
import ReactDOM from "react-dom/client";
import MyPDF from "./sample.pdf";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";

const About = () => {
	const filedownload = () => {
		// var password = prompt('Enter the password to download the file:');
		alertify
			.prompt("", "", function (evt, value) {
				if (value.toLowerCase() === "chelsea") {
					window.open(MyPDF);
				} else {
					alertify.alert(
						"Error",
						"incorrect password!! please try again!",
						function () {
							<p>error</p>;
						}
					);
				}
			})
			.set({ title: "Please Fill Password" });
	};
	return (
		<div className="about-wrapper">
			<div>
				<p className="about-title">Developer & Designer</p>
				<p className="about-me">ABOUT ME</p>
				<div className="about-uline"></div>
				<div className="about-layout">
					<div className="about-txt-border">
						<p className="about-txt">
							I have serious passion for UI effects, animations
							and creating intuitive, dynamic user experiences.
							Let's make something special.
						</p>
						<div className="about-cv-post about-cv-post-resp">
							<div className="animate">
								<span></span>
								<span></span>
								{/* <a href={MyPDF} download="zinkomyint.pdf" className="download-cv"> Download Here </a> */}
								<button
									className="download-cv"
									onClick={filedownload}
								>
									DOWNLOAD CV
								</button>
							</div>
						</div>
					</div>
					<div className="about-image img_none">
						<img src={profile} className={"img_size"}></img>
					</div>
				</div>
			</div>
		</div>
	);
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<About />);
export default About;
