import React, { useState } from "react";
import { SearchOutlined, ShoppingCartOutlined, Menu } from "@material-ui/icons";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";

const Container = styled.div`
	border-bottom: solid 1px #e0e0e0;
	//box-shadow: 0px 4px 6px #00050025;
	${tw`
    relative
    items-center
    w-full
    max-h-36
    pt-2
    pb-3
    md:pb-0
  `};
`;

const Wrapper = styled.div`
	padding: 10px 20px;
	${tw`
    flex
    items-center
    justify-between
  `};
`;

const Left = styled.div`
	${tw`
    flex-1
    flex
    items-center
  `};
`;

const SearchContainer = styled.div`
	${tw`
    flex
    items-center
    lg:ml-32
    `};
`;

const Input = styled.input`
	font-family: futura-pt, sans-serif;
	color: #828282;
	${tw`
    hidden
    text-sm
    border-none
    opacity-60
    sm:block
  `};
`;

const Center = styled.div`
	${tw`
    flex-1
    items-center
  `};
`;

const Logo = styled.h1`
	${tw`
    text-center
    font-semibold
    text-6xl
    cursor-pointer
    3xl:text-7xl
    no-underline
  `};
`;

const Right = styled.div`
	${tw`
    flex-1
    flex
    justify-end
    items-stretch
  `};
`;

const Cart = styled.div`
	${tw`
		flex
		mr-4
    lg:mr-32
    cursor-pointer
  `};
`;

const NavContainer = styled.div`
	${tw`
    flex
    justify-center
  `};
`;

const NavList = styled.ul`
	max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
	transition: max-height 0.3s ease-in;
	z-index: 1;
	padding-inline-start: 0;
	${tw`
  bg-white
    list-none
    flex
    flex-col
		justify-center
		text-center
    overflow-hidden
		w-full
    md:flex-row
    md:max-h-full
    md:bg-transparent
  `};
`;

const NavItem = styled.li`
	color: #333333;
	${tw`
    list-none
    inline-block
    px-4
    pt-2
    pb-8
    font-medium
    text-sm
    cursor-pointer
    3xl:text-base
    3xl:px-6
  `};
`;

const StyledLink = styled(Link)`
	${tw`
		text-black
		no-underline
		p-1
		rounded-md
	`}
	&:hover {
		${tw`
			bg-black
			bg-opacity-10
		`};
	}
`;

const LineThrough = styled.span`
	${tw`
    line-through
  `};
`;

const BurgerMenu = styled.div`
	${tw`
    flex
    flex-col
    justify-around
    w-8
    h-7
    p-0
    border-none
    bg-transparent
    lg:hidden
  `};
`;
const BurgerLine = styled.div`
	${tw`
    w-full
    h-0.5
    bg-black
    transition
    duration-300
    ease-in
  `};
`;

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Container>
			<Wrapper>
				<Left>
					<SearchContainer>
						<SearchOutlined
							style={{
								color: "#828282",
								fontSize: 32,
								paddingRight: 4,
								cursor: "pointer",
							}}
						/>
						<Input placeholder="Search" />
					</SearchContainer>
				</Left>
				<Center>
					<Logo>
						<Link to="/" style={{ textDecoration: "none", color: "#000000" }}>
							VŒX
						</Link>
					</Logo>
				</Center>
				<Right>
					<Cart>
						<Link to="/Cart">
							<ShoppingCartOutlined style={{ color: "4f4f4f", fontSize: 28 }} />
						</Link>
					</Cart>
					<BurgerMenu onClick={handleToggle}>
						<BurgerLine
							style={{
								transform: isOpen
									? "rotate(-45deg) translate(-6px, 6px)"
									: "none",
							}}
						/>
						<BurgerLine
							style={{
								opacity: isOpen ? "0" : "1",
							}}
						/>
						<BurgerLine
							style={{
								transform: isOpen
									? "rotate(45deg) translate(-6px, -6px)"
									: "none",
							}}
						/>
					</BurgerMenu>
				</Right>
			</Wrapper>
			<NavContainer>
				<NavList isOpen={isOpen}>
					<NavItem>
						<StyledLink to="/Hoodies">CLOTHING</StyledLink>
					</NavItem>
					<NavItem>
						<StyledLink>ACCESSORIES</StyledLink>
					</NavItem>
					<NavItem>
						<StyledLink>ABOUT</StyledLink>
					</NavItem>
					<NavItem>
						<StyledLink to="/Contact">CONTACT US</StyledLink>
					</NavItem>
					<NavItem>
						<StyledLink style={{ textDecorationLine: "line-through" }}>
							BEHIND THE DESIGN
						</StyledLink>
					</NavItem>
				</NavList>
			</NavContainer>
		</Container>
	);
};

export default Navbar;
