import React from "react";
import Announcement from "../components/Announcement";
import InfoCards from "../components/InfoCards";
import InfoDescription from "../components/InfoDescription";
import Navbar from "../components/Navbar";
import PhotoGallery from "../components/PhotoGallery";
import ProductBuy from "../components/ProductBuy";
import Footer from "../components/Footer";

const Product = () => {
	return (
		<div>
			<Announcement />
			<Navbar />
			<ProductBuy />
			<PhotoGallery />
			<InfoCards />
			<Footer />
		</div>
	);
};

export default Product;
