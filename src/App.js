import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Text from "./Components/Text/Text";
import Skill from "./Components/Skill/Skill";
import Project from "./Components/Projects/Project";
import Design from "./Components/UIpage/Design";
import Logopage from "./Components/Logopage/Logopage";
import Learn from "./Components/Learn/Learn";
import Footer from "./Components/Footer/Footer";
import { Triangle } from "react-loader-spinner";
import { useState, useEffect } from "react";
import BadgeScreen from "./Components/badage/badge";

const ShowLoading = () => {
	return (
		<div className="loading-sp">
			<Triangle color="#50dfdb" height={80} width={80} />
		</div>
	);
};

const App = () => {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1900);
	}, []);

	return (
		<div className="fix_scroll">
			{loading ? (
				<ShowLoading />
			) : (
				<main>
					<Navbar />
					<Home />
					<About />
					<BadgeScreen />
					<Text />
					<Skill />
					<Project />
					<Design />
					<Logopage />
					<Learn />
					<Footer />
				</main>
			)}
		</div>
	);
};

export default App;
