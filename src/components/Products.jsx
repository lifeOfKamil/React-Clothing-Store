import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import hoodieProductList from "./HoodieProductList";
import { Link } from "react-router-dom";

const Container = styled.div`
	border-bottom: solid 1px #bdbdbd;
	${tw`
    flex
    flex-wrap
    w-full
    mt-10
    px-6
    sm:px-12
    lg:px-20
    xl:px-12
    3xl:px-20
    3xl:mt-16
  `};
`;

const Wrapper = styled.div`
	${tw`
    p-2
		w-1/2
    sm:w-1/2
    md:w-1/2
    lg:w-1/3
    xl:w-1/4
    3xl:w-1/4
  `};
`;

const Product = styled.div`
	${tw`
    w-full
    pb-6
    md:max-w-[42vw]
    md:pb-8
    lg:max-w-[27vw]
    lg:pb-12
    xl:max-w-[30vw]
    xl:pb-16
  `};
`;

const ProductImage = styled.img`
	background-color: #f1f1f2;
	${tw`
    w-full
    p-4
    lg:p-10
    xl:p-16
    3xl:p-24
  `};
`;

const ProductTitle = styled.h3`
	font-family: karmina-sans, sans-serif;
	color: #333333;
	${tw`
    w-full
    text-[0.7rem]
    leading-4
    font-normal
    cursor-pointer
    mt-1
    sm:text-xs
    md:text-sm
    md:tracking-wider
    md:mt-2
    xl:text-base
    xl:font-medium
    xl:mt-4
    3xl:text-sm
    3xl:mt-2
  `};
`;

const ProductPrice = styled.p`
	color: #333333;
	${tw`
    text-xs
    mt-1
    font-light
    tracking-wide
    md:text-sm
    lg:text-sm
  `};
`;

const Products = ({ sortOption, filterOption }) => {
	const sortedAndFilteredProducts = hoodieProductList
		.sort((a, b) => {
			if (sortOption === "price-low-to-high") {
				return (
					parseFloat(b.price.replace("$", "")) -
					parseFloat(a.price.replace("$", ""))
				);
			} else if (sortOption === "price-high-to-low") {
				return (
					parseFloat(a.price.replace("$", "")) -
					parseFloat(b.price.replace("$", ""))
				);
			}
			return 0;
		})
		.filter((product) => {
			if (filterOption !== "" && filterOption !== "all") {
				return product.color === filterOption;
			}
			return true;
		});
	return (
		<Container style={{ display: "flex", flex: "row" }}>
			{/* Display all products by default */}
			{!sortOption &&
				!filterOption &&
				hoodieProductList.map((hoodies) => (
					<Wrapper key={hoodies.id}>
						<Product>
							<Link
								style={{ textDecoration: "none" }}
								to={"/Product/" + hoodies.id}
								state={hoodies}
							>
								<ProductImage src={hoodies.img} />
								<ProductTitle>{hoodies.name}</ProductTitle>
								<ProductPrice>{hoodies.price}</ProductPrice>
							</Link>
						</Product>
					</Wrapper>
				))}

			{/* Display sorted and filtered products if options are selected */}
			{(sortOption || filterOption) &&
				sortedAndFilteredProducts.map((hoodies) => (
					<Wrapper key={hoodies.id}>
						<Product>
							<Link
								style={{ textDecoration: "none" }}
								to={"/Product/" + hoodies.id}
								state={hoodies}
							>
								<ProductImage src={hoodies.img} />
								<ProductTitle>{hoodies.name}</ProductTitle>
								<ProductPrice>{hoodies.price}</ProductPrice>
							</Link>
						</Product>
					</Wrapper>
				))}
		</Container>
	);
};

export default Products;
