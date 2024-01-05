import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import hoodieimg from "../assets/images/hoodie_photos/hoodie_3_3.jpg";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Link, useParams, useLocation } from "react-router-dom";
import hoodieProductList from "./HoodieProductList";
import { useCart } from "../helpers/CartContext.js";

const Container = styled.div`
	background-color: #ffffff;
	${tw`
    w-full
    h-full
  `};
`;

const Wrapper = styled.div`
	${tw`
    flex
    flex-col
    items-center
    justify-center
    mx-auto
  `};
`;

const MainSection = styled.div`
	background-color: #f6f4f2;
	${tw`
    flex
    flex-col
    lg:flex-row
    lg:items-center
  `};
`;

const ContainerLeft = styled.div`
	${tw`  
    flex-1
    w-full
    text-center
  `};
`;

const ContainerRight = styled.div`
	${tw`
    w-full
    flex-1
    text-center
    pt-8
    pb-14
    px-8
  bg-white
    md:bg-transparent
    md:pt-0
    md:pb-0
  `};
`;

const InnerRightContainer = styled.div`
	${tw`
    w-full
    h-full
    lg:max-w-xs
    lg:mx-auto
    lg:pl-16
    xl:max-w-sm
    2xl:max-w-lg
    2xl:pl-28
  `};
`;

const ProductImageContainer = styled.div`
	${tw`
    w-full
    h-full
  `};
`;

const ProductImage = styled.img`
	min-height: 440px;
	${tw`
    w-full
    block
    object-cover
    px-8
    lg:ml-10
    lg:px-2
    2xl:px-0
    2xl:ml-20
    3xl:ml-0
    3xl:px-0
  `};
`;

const ProductTitle = styled.h1`
	font-family: futura-pt, sans-serif;
	${tw`
    uppercase
    max-w-[90%]
    font-medium
    text-3xl
    text-left
    mb-6
    lg:text-2xl
    xl:w-72
    xl:text-3xl
    2xl:w-96
    2xl:mb-8
  `};
`;

const Price = styled.p`
	font-family: futura-pt, sans-serif;
	${tw`
    font-medium
    text-left
    text-xs
    pt-6
    pb-5
    md:pt-2
    md:text-sm
    xl:pt-4
    2xl:pt-5
    2xl:pb-6
  `};
`;

const BtnContainer = styled.div`
	${tw`
    flex
    flex-col
    justify-start
  `};
`;

const LargeBtn = styled.button`
	font-family: futura-pt, sans-serif;
	background-color: #4f4f4f;
	border: none;
	box-shadow: 0px 2px 4px #00000025;
	${tw`
    w-full
  text-white
    py-1
    text-sm
    cursor-pointer
    sm:max-w-[25%]
    md:max-w-full
    md:w-64
    2xl:w-80
    2xl:py-2
    2xl:text-base
  `};
`;

const LargeBtn2 = styled(LargeBtn)`
	font-family: "Work Sans", sans-serif;
	color: #333333;
	line-height: 20px !important;
	${tw`
    mt-6
    text-xs
    bg-transparent
    uppercase
    font-semibold
  `};
`;

const ProductText = styled.p`
	font-size: 10px;
	line-height: 12px;
	${tw`
    hidden
    pt-14
    text-left
    font-light
    lg:text-right
    lg:pt-8
    xl:pr-0
    xl:text-center
    2xl:pr-56
    3xl:pr-[400px]
  `};
`;

const ProductDescription = styled.div`
	background-color: #ffffff;
	border-top: 1px solid #bdbdbd;
	${tw`
    w-full
    px-8
    pb-20
    sm:pb-16
    lg:py-20
    lg:px-12
    xl:py-24
    2xl:px-20
    3xl:px-72
  `};
`;

const DescriptionText = styled.p`
	font-family: karmina-sans, sans-serif;
	color: #4f4f4f;
	${tw`
    text-base
    font-light
    leading-5
    lg:text-lg
    lg:leading-6
  `};
`;

const DisplayImage = styled.div`
	background-color: #ffffff;
	${tw`
    w-full
    block
    px-8
  `};
`;

const DisplayImageContainer = styled.div`
	background-color: #f3f1f0;
	${tw`
    w-full
    lg:max-w-xl
    lg:mx-auto
    2xl:max-w-2xl
    3xl:max-w-4xl
  `};
`;

const DisplayImg = styled.img`
	${tw`
    w-full
    h-full
    p-14
    lg:p-16
    2xl:p-20
  `};
`;

const Details = styled.div`
	background-color: #ffffff;
	${tw`
    w-full
    px-8
    py-16
    flex
    flex-col
    lg:flex-row
    lg:text-center
    lg:py-20
    xl:pt-24
  `};
`;

const DetailsContainer = styled.div`
	background-color: #ffffff;
	${tw`
    w-full
    flex
    flex-col
    lg:justify-between
    lg:w-1/3
    lg:items-center
  `};
`;

const DetailsText = styled.p`
	color: #333333;
	${tw`
    font-light
    text-sm
    pb-4
    lg:text-left
    lg:pb-6
    xl:pb-8
  `};
`;

const ProductBuy = (props) => {
	const location = useLocation();
	const state = location.state;
	const { addToCart } = useCart();
	//console.log(state);

	const [size, setSize] = React.useState([""]);
	const [color, setColor] = React.useState([""]);

	const handleChange = (event) => {
		setSize(event.target.value);
	};

	const handleChange1 = (event) => {
		setColor(event.target.value);
	};

	const handleAddToCart = () => {
		if (size) {
			// Pass both product information and selected size to addToCart
			addToCart({ ...state, size });
		} else {
			// Handle case where size is not selected
			console.error("Please select a size before adding to cart");
		}
	};

	return (
		<Container>
			<Wrapper>
				<MainSection>
					<ContainerLeft>
						<ProductImageContainer>
							<ProductImage src={hoodieimg} />
						</ProductImageContainer>
					</ContainerLeft>
					<ContainerRight>
						<InnerRightContainer>
							<ProductTitle>{state.name}</ProductTitle>
							<BtnContainer>
								<Box
									sx={{
										width: 128,
										textAlign: "left",
										backgroundColor: "#ffffff",
										"& .MuiSelect-select": {
											padding: "8px 6px 8px 14px",
										},
									}}
								>
									<FormControl style={{ width: "128px" }}>
										<InputLabel
											id="demo-simple-select-label"
											style={{ color: "#333333" }}
										>
											Size
										</InputLabel>
										<Select
											labelId="demo-simple-select-label"
											style={{ fontSize: "14px" }}
											id="demo-simple-select"
											style={{ fontSize: "16px", fontWeight: "500" }}
											value={size}
											label="Size"
											onChange={handleChange}
										>
											<MenuItem
												value={""}
												style={{ userSelect: "none", color: "transparent" }}
											>
												-
											</MenuItem>
											<MenuItem value={"X-Small"}>XS</MenuItem>
											<MenuItem value={"Small"}>S</MenuItem>
											<MenuItem value={"Medium"}>M</MenuItem>
											<MenuItem value={"Large"}>L</MenuItem>
											<MenuItem value={"X-Large"}>XL</MenuItem>
										</Select>
									</FormControl>
								</Box>
								<Box
									sx={{
										width: 128,
										marginTop: 3,
										textAlign: "left",
										backgroundColor: "#ffffff",
										"& .MuiSelect-select": {
											padding: "8px 6px 8px 14px",
										},
									}}
								>
									<FormControl style={{ width: "128px" }}>
										<InputLabel
											id="demo-simple-select-label"
											style={{ color: "#333333" }}
										>
											Color
										</InputLabel>
										<Select
											labelId="demo-simple-select-label"
											style={{ fontSize: "14px" }}
											id="demo-simple-select"
											style={{ fontSize: "16px", fontWeight: "normal" }}
											value={color}
											label="Color"
											onChange={handleChange1}
										>
											<MenuItem
												value={""}
												style={{ userSelect: "none", color: "transparent" }}
											>
												-
											</MenuItem>
											<MenuItem value={"Black"}>Black</MenuItem>
											<MenuItem value={"White"}>White</MenuItem>
											<MenuItem value={"Gray"}>Gray</MenuItem>
										</Select>
									</FormControl>
								</Box>
							</BtnContainer>
							<Price>{state.price}</Price>
							<BtnContainer>
								<Link
									style={{ textDecoration: "none", textAlign: "left" }}
									to={{
										pathname: "/Cart",
										state: {
											product: { ...state, size }, // Pass both product and size to Cart
										},
									}}
								>
									<LargeBtn onClick={handleAddToCart}>Add to Cart</LargeBtn>
									<LargeBtn2>Checkout Now</LargeBtn2>
								</Link>
							</BtnContainer>
							<ProductText>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
								massa ut est urna tortor tincidunt eget quam pellentesque.
							</ProductText>
						</InnerRightContainer>
					</ContainerRight>
				</MainSection>
				<ProductDescription>
					<DescriptionText>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
						malesuada habitasse enim dui, massa facilisi non. Mus turpis quam
						sagittis quis scelerisque ut. Ultricies ipsum pellentesque elementum
						etiam proin fringilla interdum. Pellentesque rhoncus purus purus
						elementum enim massa proin felis egestas. Aenean quisque duis
						volutpat suspendisse.
					</DescriptionText>
				</ProductDescription>
				<DisplayImage>
					<DisplayImageContainer>
						<DisplayImg src={state.img} />
					</DisplayImageContainer>
				</DisplayImage>
				<Details>
					<DetailsContainer>
						<DetailsText>Model: 6’ 3” 160lbs, wearing size large</DetailsText>
						<DetailsText>Materials: 50% Cotton 50% Whatever</DetailsText>
					</DetailsContainer>
					<DetailsContainer>
						<DetailsText>Made in the United States</DetailsText>
						<DetailsText>Relaxed fit, front pocket</DetailsText>
					</DetailsContainer>
					<DetailsContainer>
						<DetailsText
							style={{ textDecoration: "underline", cursor: "pointer" }}
						>
							Size Chart Here
						</DetailsText>
					</DetailsContainer>
				</Details>
			</Wrapper>
		</Container>
	);
};

export default ProductBuy;
