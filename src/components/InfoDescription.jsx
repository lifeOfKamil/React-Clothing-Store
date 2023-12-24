import React from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`
box-shadow: 0px 4px 4px #00050033;
background-color: #F8F8F890;
border-top: 1px solid #E0E0E0;
  ${tw`
    w-full
    h-full
    pb-10
    pt-10
    md:pb-14
    md:bg-transparent
  `};
`;

const Wrapper = styled.div`
  ${tw`
    flex
    flex-col
    mx-8
    sm:mx-8
    sm:flex-row
    sm:gap-6
    md:mr-32
    md:ml-56
    lg:m-0
    lg:justify-around
    lg:px-16
    xl:gap-0
    xl:px-44
  `};
`;

const LeftContainer = styled.div`
  ${tw`
    flex
    flex-col
    sm:w-1/2
    lg:max-w-lg
    xl:max-w-xl
  `};
`;

const RightContainer = styled.div`
  ${tw`
    mt-10
    flex
    flex-col
    max-w-md
    sm:mt-0
  `};
`;

const Title = styled.h3`
  font-family: futura-pt, sans-serif;
  border-bottom: 2px solid #BDBDBD;
  ${tw`
    text-xl
    font-medium
    max-w-md
    mb-4
    md:max-w-lg
    lg:max-w-lg
    xl:max-w-xl
  `};
`;

const Text = styled.p`
  font-family: futura-pt, sans-serif;
  color: #333333;
  ${tw`
    font-normal
    text-sm
    md:max-w-lg
    md:text-lg
    lg:max-w-xl
    lg:leading-6
    xl:max-w-xl
  `};
`;

const ListItem = styled.li`
  font-family: futura-pt, sans-serif;
  line-height: 28px !important;
  color: #333333;
  ${tw`
    mb-1
    text-base
    md:mb-4
    md:text-lg
    lg:mb-2
  `};
`;

const InfoDescription = () => {
  return (
    <Container>
      <Wrapper>
        <LeftContainer>
          <Title>Product Description:</Title>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales pellentesque enim, dictum duis sit adipiscing vel arcu. Risus velit commodo vitae mattis purus ac. Urna, quis eleifend pellentesque aliquam vitae ornare nam suscipit lacus. Erat purus ut faucibus a, nunc, adipiscing. Tincidunt quis massa ac tellus. Eu enim, enim mauris nullam venenatis risus phasellus molestie.</Text>
        </LeftContainer>
        <RightContainer>
          <Title>Product Info:</Title>
          <ListItem>Model height 6’ 3” weight 160lbs and wearing size M</ListItem>
          <ListItem>Materials: 50% Cotton 50% Whatever</ListItem>
          <ListItem>Regular Fit</ListItem>
          <ListItem>Cursus massa ut est urna tortor tincidunt eget</ListItem>
        </RightContainer>
      </Wrapper>
    </Container>
  )
}

export default InfoDescription