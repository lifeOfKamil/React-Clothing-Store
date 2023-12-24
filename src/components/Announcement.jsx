import React from 'react'
import { AddCircle } from '@material-ui/icons';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`
  background-color: #828282;
  ${tw`
    w-full
    h-5
  `};
`;

const Wrapper = styled.div`
  ${tw`
    h-full
    w-full
    flex
    justify-center
    items-center
  `};
`;

const Text = styled.h6`
  font-family: karmina-sans, sans-serif;
  font-size: 10px;
  ${tw`
  text-white
    font-normal
    lg:text-xs
  `};
`;

const CircleStyle = {
  fontSize: 12,
  color: '#ffffff',
  position: 'absolute',
  right: '0',
  marginRight: '8rem',
  transform: 'rotate(45deg)',
  cursor: 'pointer'
  
};

const Announcement = () => {
  return (
    <Container>
      <Wrapper>
        <Text>
          FREE SHIPPING ON ALL ORDERS OVER $50!
        </Text>
        <AddCircle style={CircleStyle} />
      </Wrapper>
    </Container>
  )
}

export default Announcement