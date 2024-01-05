import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import VideoSrc1 from "../assets/images/video.mp4";
import ImageSrc2 from "../assets/images/home_image_2.jpg";
import ImageSrc3 from "../assets/images/home_image_3.jpg";
import ImageSrc4 from "../assets/images/home_image_4.jpg";

const Container = styled.div`
	${tw`
    relative
    w-full
    text-center
  `};
`;

// const Wrapper = styled.div`
//   ${tw`

//   `};
// `;

const FullImgContainer = styled.div`
	${tw`
    w-full
    flex
    justify-center
    items-center
  `};
`;

const videoStyle = {
	maxWidth: "100vw",
	width: "100%",
	objectFit: "cover",
	minHeight: "50vh",
};

const ImgContainer = styled.div`
	height: 75vh;
	${tw`
    flex
    justify-center
    items-center
    bg-cover
    flex-col
    relative
  `};
`;

const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const ImgContainer2 = styled(ImgContainer)`
	background-image: url(${ImageSrc2});
`;

const ImgContainer3 = styled(ImgContainer)`
	background-image: url(${ImageSrc3});
`;

const ImgContainer4 = styled(ImgContainer)`
	background-image: url(${ImageSrc4});
`;

const TitleContainer = styled.div`
	transform: translate(-50%, -50%);
	${tw`
    mt-auto
  text-white
  absolute
  left-1/2
  top-1/2
  lg:bottom-0
  lg:top-auto
  `};
`;

const Title = styled.h3`
	font-family: futura-pt, sans-serif;
	${tw`
    text-4xl
    uppercase
    font-medium
    pb-4
  `};
`;

const Button = styled.button`
	${tw`
    w-52
    p-2
  bg-white
    text-base
    text-black
    cursor-pointer
    border-none
    rounded-md
  `};
`;

const LandingPage = () => {
	return (
		<Container>
			<FullImgContainer>
				<video style={videoStyle} autoPlay loop muted>
					<source src={VideoSrc1} type="video/mp4" />
				</video>
			</FullImgContainer>
			<ImgContainer>
				<Img src={ImageSrc2} />
				<TitleContainer>
					<Title>Popular Summer Fits</Title>
					<Button>See Popular Styles</Button>
				</TitleContainer>
			</ImgContainer>
			<ImgContainer>
				<Img src={ImageSrc3} />
				<TitleContainer>
					<Title>Men's Fashion 2022 Release</Title>
					<Button>Shop the Collection</Button>
				</TitleContainer>
			</ImgContainer>
			<ImgContainer>
				<Img src={ImageSrc4} />
				<TitleContainer>
					<Title>Check Out Our Items on Sale</Title>
					<Button>Check Out Sales</Button>
				</TitleContainer>
			</ImgContainer>
		</Container>
	);
};

export default LandingPage;
