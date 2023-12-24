import React, { useState } from 'react';
import { SearchOutlined, ShoppingCartOutlined, Menu } from '@material-ui/icons';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Link } from "react-router-dom";

const Container = styled.div`
  border-bottom: solid 1px #E0E0E0;
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
  `};
`;

const Right = styled.div`
  ${tw`
    flex-1
    flex
    justify-end
    items-center
  `};
`;

const Cart = styled.div`
  ${tw`
    hidden
    sm:flex
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
  ${tw`
  bg-white
    list-none
    flex
    flex-col
    overflow-hidden
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

const linkStyle = {
  textDecoration: "none",
  color: "#333333"
}

const LineThrough = styled.span`
  ${tw`
    line-through
  `};
`;

const BurgerMenu = styled.button`
  ${tw`
    p-0
    border-none
    bg-transparent
    sm:hidden
  `};
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <SearchOutlined style={{
              color: "828282", fontSize: 32, paddingRight: 4, cursor: 'pointer'
            }} />
            <Input placeholder='Search' />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>VŒX</Logo>
        </Center>
        <Right>
          <Cart>
            <ShoppingCartOutlined style={{ color: "4f4f4f", fontSize: 24 }} />
          </Cart>
          <BurgerMenu onClick={() => setIsOpen(!isOpen)}>
            <Menu
              style={{ color: "333333", fontSize: 28, cursor: 'pointer' }}
            />
          </BurgerMenu>
        </Right>
      </Wrapper>
      <NavContainer>
        <NavList isOpen={isOpen}>
          <NavItem>
            <Link to="/Hoodies" style={linkStyle}>CLOTHING</Link>
          </NavItem>
          <NavItem>ACCESSORIES</NavItem>
          <NavItem>ABOUT</NavItem>
          <NavItem>
          <Link to="/Contact" style={linkStyle}>CONTACT US</Link>
          </NavItem>
          <NavItem><LineThrough>BEHIND THE DESIGN</LineThrough></NavItem>
        </NavList>
      </NavContainer>
    </Container>
  )
}

export default Navbar