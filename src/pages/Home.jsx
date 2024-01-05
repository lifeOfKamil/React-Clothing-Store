import React from "react";
import Footer from "../components/Footer";
import LandingPage from "../components/LandingPage";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";

const Home = () => {
	return (
		<div>
			<Announcement />
			<Navbar />
			<LandingPage />
			<Footer />
		</div>
	);
};

export default Home;
