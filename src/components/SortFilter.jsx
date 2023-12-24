import { FilterList, Menu } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`
  border-bottom: solid 1px #E0E0E0;
  ${tw`
    w-full
    h-12
    2xl:h-16
  `};
`;

const Wrapper = styled.div`
  ${tw`
    w-full
    h-full
    flex
    justify-start
    pl-6
    sm:pl-12
    lg:pl-20
    xl:pl-12
    3xl:pl-20
  `};
`;

const TextContainer = styled.div`
  ${tw`
    flex
    items-center
  `};
`;

const TextContainer2 = styled(TextContainer)`
  margin-left: 1.25rem;
  ${tw`
    2xl:ml-10
  `}
`;

const Text = styled.p`
  font-family: futura-pt, sans-serif;
  ${tw`
    text-sm
    font-medium
    2xl:text-base
    2xl:font-normal
    3xl:text-lg
  `};
`;

const SortFilter = () => {
  return (
    <Container>
      <Wrapper>
        <TextContainer>
          <Text>SORT BY</Text>
          <Menu style={{ marginLeft: '0.5rem', maxWidth: '20px', maxHeight: '20px' }} />
        </TextContainer>
        <TextContainer2>
          <Text>FILTER BY</Text>
          <FilterList style={{ marginLeft: '0.5rem', maxWidth: '20px', maxHeight: '20px' }} />
        </TextContainer2>
      </Wrapper>
    </Container>
  )
}

export default SortFilter