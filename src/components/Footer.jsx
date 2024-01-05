import { SearchOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";

const Container = styled.div`
	background-color: #212121;
	${tw`
    relative
    w-full
    h-52
    md:pb-0
  `};
`;

const Wrapper = styled.div`
	background-color: #212121;
	${tw`
    pt-4
    pr-10
    pl-10
    pb-16
    md:pt-8
    md:pl-32
    md:pr-24
  `};
`;

const Logo = styled.h1`
	color: #fcfcfc;
	${tw`
    font-semibold
    text-5xl
    leading-loose
    cursor-pointer
    text-center
    md:text-left
    2xl:text-5xl
    2xl:pb-4
  `};
`;

const NavContainer = styled.div`
	${tw`
    w-full
    flex
    flex-row
  `};
`;

const NavList = styled.ul`
	${tw`
    list-none
    pl-0
    align-middle
    flex
    flex-row
    flex-wrap
    justify-center
  `};
`;

const NavItem = styled.li`
	color: #fcfcfc;
	${tw`
    list-none
    px-2
    text-base
    font-medium
    cursor-pointer
    sm:pr-8
    sm:inline-block
    sm:text-base
    md:text-sm
    xl:text-base
    xl:pr-9
    2xl:text-lg
  `};
`;

const SearchContainer = styled.div`
	${tw`
    flex
    justify-center
    mt-6
    md:justify-start
    `};
`;

const Input = styled.input`
	font-family: futura-pt, sans-serif;
	color: #4f4f4f;
	${tw`
    text-base
    opacity-60
    font-medium
  `};
`;

const linkStyle = {
	textDecoration: "none",
	color: "#fcfcfc",
};

const Footer = () => {
	return (
		<Container>
			<Wrapper>
				<Logo>VŒX</Logo>
				<NavContainer>
					<NavList>
						<NavItem>
							<Link to="/Hoodies" style={linkStyle}>
								Clothing
							</Link>
						</NavItem>
						<NavItem>Accessories</NavItem>
						<NavItem>About</NavItem>
						<NavItem>
							<Link style={linkStyle}>Contact</Link>
						</NavItem>
						<NavItem>Follow Us</NavItem>
						<NavItem>Email Sign-Up</NavItem>
						<NavItem>FAQ</NavItem>
						<NavItem>Shipping</NavItem>
						<NavItem>Legal</NavItem>
					</NavList>
				</NavContainer>
				<SearchContainer>
					<SearchOutlined
						style={{
							color: "828282",
							fontSize: 30,
							paddingRight: 8,
							cursor: "pointer",
						}}
					/>
					<Input placeholder="Search" />
				</SearchContainer>
			</Wrapper>
		</Container>
	);
};

export default Footer;
