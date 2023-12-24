import React from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';
import ImageSrc1 from '../assets/images/hoodie_1_1.jpg';
import ImageSrc2 from '../assets/images/hoodie_1_2.jpg';
import ImageSrc3 from '../assets/images/hoodie_1_3.jpg';
import { useParams, useLocation } from 'react-router-dom';
import hoodieProductList from './HoodieProductList';

const Container = styled.div`
  ${tw`
    w-full
    h-full
  bg-white
    md:mt-16
    md:mb-24
    lg:my-0
  `};
`;

const Wrapper = styled.div`
  ${tw`
    flex
    flex-col-reverse
    justify-center
    md:flex-row
    md:mr-32
    md:ml-36
    lg:mx-0
  `};
`;

const ImgContainer = styled.div`
  ${tw`
    bg-cover
    bg-center
    md:w-1/4
    lg:w-full
    
  `};
`;

const Photo = styled.img`
  ${tw`
    block
    w-full
    bg-cover
    bg-center
  `}
`

const PhotoGallery = (props) => {
  const location = useLocation();
  const state = location.state;
  console.log(state);

  return (
    <Container>
      <Wrapper>
        <ImgContainer><Photo src={state.detailImg2}/></ImgContainer>
        <ImgContainer><Photo src={state.detailImg1}/></ImgContainer>
      </Wrapper>
    </Container>
  )
}

export default PhotoGallery