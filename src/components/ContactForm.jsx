import React from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw`
    w-full
    h-full
    mb-16
  `};
`;

const Wrapper = styled.div`
  ${tw`
    flex
    flex-col
    gap-4
    justify-center
    items-center
    align-middle
    sm:gap-24
    sm:flex-row
    md:gap-36
    md:mb-28
    md:mt-16
    md:mx-36
    3xl:gap-48
    3xl:mt-20
  `};
`;

const LeftSection = styled.div`
  ${tw`
    w-64
    lg:w-72
    2xl:w-80
    3xl:w-96
  `};
`;

const RightSection = styled.div`
  ${tw`
    md:m-0
  `};
`;

const Title = styled.h1`
  color: #4f4f4f;
  ${tw`
    w-full
    text-center
    text-2xl
    font-medium
    mt-16
    pb-12
    md:text-4xl
    md:pb-0
    md:mt-20
    3xl:text-[44px]
  `};
`;

const InfoHeader = styled.h3`
  font-family: futura-pt, sans-serif;
  color: #333333;
  ${tw`
    text-xl
    font-medium
    pb-2
    3xl:text-2xl
  `};
`;

const InfoContainer = styled.div`
  ${tw`
    text-center
  `};
`;

const DividedContainer = styled(InfoContainer)`
  border-color: #BDBDBD;
  ${tw`
    border-solid
    border
    border-r-0
    border-l-0
    py-9
    3xl:py-14
  `};
`;

const InfoText = styled.p`
  color: #4f4f4f;
  ${tw`
    text-base
    font-light
    pb-9
    3xl:text-lg
  `};
`;

const InputHeader = styled.p`
  color: #4f4f4f;
  ${tw`
    pb-2
    tracking-wide
    text-sm
    font-medium
  `};
`;

const TextBox = styled.input`
  border: 1px solid #BDBDBD !important;
  ${tw`
    text-sm
    w-64
    mb-6
    border-none
    lg:w-72
    2xl:w-80
    3xl:w-96
    3xl:mb-12
  `};
`;

const SubmitButton = styled.button`
  background-color: #F5F5F5;
  border: 1px solid #828282 !important;
  ${tw`
    tracking-wider
    rounded-md
    px-4
    py-2
    block
    border-none
    cursor-pointer
    md:mr-auto
    md:ml-auto
  `}
`

const ContactForm = () => {
  return (
    <Container>
      <Title>CONTACT US</Title>
      <Wrapper>
        <LeftSection>
          <InfoContainer>
            <InfoHeader>Support Email</InfoHeader>
            <InfoText>contactus@voexchicago.com</InfoText>
          </InfoContainer>
          <DividedContainer>
            <InfoHeader>Reach out to us on Instagram</InfoHeader>
            <InfoText style={{ "paddingBottom": '0px' }}>@voexchicago</InfoText>
          </DividedContainer>
          <InfoContainer>
            <InfoHeader style={{ "paddingTop": '36px' }}>For Business Inquiries</InfoHeader>
            <InfoText>contactus@voexchicago.com</InfoText>
          </InfoContainer>
        </LeftSection>
        <RightSection>
          <InputHeader>Name</InputHeader>
          <TextBox />
          <InputHeader>Email</InputHeader>
          <TextBox />
          <InputHeader>Message</InputHeader>
          <TextBox style={{ 'height': '125px' }} />
          <SubmitButton>SEND</SubmitButton>
        </RightSection>
      </Wrapper>
    </Container>
  )
}

export default ContactForm