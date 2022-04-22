import profile from "../../Images/zkm2.png";
import "./About.css";
const About = () => {
    return (
        <div className="about-wrapper">
            <div>
                <p className="about-title">Developer & Designer</p>
                <p className="about-me">ABOUT ME</p>
                <div className="about-uline"></div>
                <div className="about-layout">
                    <div className="about-txt-border">
                        <p className="about-txt">I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences. Let's make something special.</p>
                        <div className="about-cv-post">
                        <p className="download-cv">DOWNLOAD CV</p>
                        </div>
                    </div>
                    <div className="about-image">
                        <img src={profile} style={{width: "77%"}}></img>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;