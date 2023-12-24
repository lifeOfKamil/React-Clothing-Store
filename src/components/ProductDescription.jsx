import React from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw`
    w-full
    h-full
  `};
`;

const SectionContainer = styled.div`
  ${tw`
    px-6
    mt-6
    sm:px-12
    md:mt-10
    lg:px-20
    lg:mt-8
    xl:px-12
    3xl:px-20
    3xl:mt-12
  `};
`;

const SectionHeading = styled.h1`
    font-variant: small-caps;
    color: #333333;
  ${tw`
    text-2xl
    font-semibold
    md:text-4xl
    lg:text-[2.5em]
    3xl:text-5xl
  `};
`;

const SectionDescription = styled.p`
  color: #4F4F4F;
  ${tw`
    text-xs
    font-light
    w-full
    mt-4
    md:font-sans
    md:font-normal
    lg:text-sm
    lg:mt-4
    3xl:text-base
    3xl:tracking-wider
    3xl:mt-6
  `};
`;

const ProductDescription = () => {
  return (
    <Container>
      <SectionContainer>
        <SectionHeading>Hoodies</SectionHeading>
        <SectionDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sem donec morbi ipsum rhoncus. Neque proin sit egestas vestibulum habitasse. Mi sit neque dis morbi. Lacus pretium feugiat velit rhoncus. Senectus fusce quis accumsan vehicula tortor nibh lectus bibendum nam. Ullamcorper aliquam sed nisl mauris nullam et enim.
        </SectionDescription>
      </SectionContainer>
    </Container>
  )
}

export default ProductDescription