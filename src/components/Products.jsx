import React , { useState } from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';
import hoodieProductList from './HoodieProductList';
import { Link } from "react-router-dom";

const Container = styled.div`
border-bottom: solid 1px #BDBDBD;
  ${tw`
    w-full
    h-full
    flex
    flex-row
    flex-wrap
    justify-between
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
    
  `};
`;

const Product = styled.div`
  ${tw`
    max-w-[42vw]
    pb-6
    md:pb-8
    lg:max-w-[27vw]
    lg:pb-12
    xl:max-w-[30vw]
    xl:pb-16
  `};
`;

const ProductImage = styled.img`
  background-color: #F1F1F2;
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



const Products = (props) => {
  return (
    <Container style={{display: 'flex', flex: 'row'}}>
      {hoodieProductList.map((hoodies) => {
        return (
    <Wrapper key={hoodies.id}>
      <Product>
      <Link style={{textDecoration: 'none'}} to={"/Product/" + hoodies.id} state={hoodies}>
        <ProductImage src={hoodies.img}/>
          <ProductTitle>{hoodies.name}</ProductTitle>
        <ProductPrice>{hoodies.price}</ProductPrice>
        </Link>
      </Product>
      </Wrapper>
    );
  })}
    </Container>
  )
}

export default Products;



