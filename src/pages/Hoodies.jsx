import React, { useState } from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import ProductDescription from "../components/ProductDescription";
import Products from "../components/Products";
import SortFilter from "../components/SortFilter";
import Footer from "../components/Footer";

const Hoodies = () => {
	const [sortOption, setSortOption] = useState(null);
	const [filterOption, setFilterOption] = useState("");

	const handleSortChange = (option) => {
		setSortOption(option);
	};

	const handleFilterChange = (color) => {
		setFilterOption(color);
	};

	return (
		<div>
			<Announcement />
			<Navbar />
			<SortFilter
				onSortChange={handleSortChange}
				onFilterChange={handleFilterChange}
			/>
			<ProductDescription />
			<Products sortOption={sortOption} filterOption={filterOption} />
			<Footer />
		</div>
	);
};

export default Hoodies;
