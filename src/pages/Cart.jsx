import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AddToCart from "../components/AddToCart";
import InfoCards from "../components/InfoCards";

const Cart = () => {
	return (
		<div>
			<Navbar />
			<AddToCart />
			<Footer />
		</div>
	);
};

export default Cart;
