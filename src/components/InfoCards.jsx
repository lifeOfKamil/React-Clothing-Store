import React from 'react'
import { CurrencyExchange, MarkEmailRead } from '@mui/icons-material';
import styled from 'styled-components';
import tw from 'twin.macro';
import { LockOutlined } from '@material-ui/icons';


const Container = styled.div`
background-color: #a1a1a1;
box-shadow: 0px -4px 6px #00000025;
  ${tw`
    w-full
    h-full
    rounded-t-3xl
    md:rounded-none
    md:shadow-none
  `};
`;

const Wrapper = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
    px-14
    py-6
    justify-center
    md:py-6
    md:items-center
    md:gap-10
    md:flex-row
    2xl:py-8
  `};
`;

const Section = styled.div`
  ${tw`
    text-center
    py-6
    lg:py-3
    xl:py-4
  `};
`;

const DividedSection = styled(Section)`
  border-color: #BDBDBD;
  ${tw`
    border-solid
    border
    border-r-0
    border-l-0
    md:px-10
    md:border-l
    md:border-r
    md:border-t-0
    md:border-b-0
  `};
`;

const Title = styled.h4`
  font-family: futura-pt, sans-serif;
  ${tw`
    text-lg
    font-medium
  text-white
    mt-4
    3xl:text-xl
  `};
`;

const Text = styled.p`
font-family: futura-pt, sans-serif;
color: #F2F2F2;
  ${tw` 
    mt-2
    max-w-sm
    mx-auto
    text-xs
    font-thin
    leading-3
    tracking-wider
    lg:tracking-widest
    3xl:text-sm
    3xl:leading-none
  `};
`;

const InfoCards = () => {
  return (
    <Container>
      <Wrapper>
        <Section>
          <MarkEmailRead style={{
            fontSize: '36px', color: 'white', marginLeft: 'auto', marginRight: 'auto'
          }} />
          <Title>Reliable Customer Service</Title>
          <Text>
            Reach-out to us in the contact section or send an email to contactus@voexchicago.com. Our support team will get back to you within 24 hours of receiving your message.
          </Text>
        </Section>
        <DividedSection>
          <LockOutlined style={{
            fontSize: '36px', color: 'white', marginLeft: 'auto', marginRight: 'auto'
          }} />
          <Title>Fully Secure Payments</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus ornare at scelerisque condimentum mi. Sed eget rhoncus, eu pulvinar.
          </Text>
        </DividedSection>
        <Section>
          <CurrencyExchange style={{
            fontSize: '36px', color: 'white', marginLeft: 'auto', marginRight: 'auto'
          }} />
          <Title>Refunds & Exchanges</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet lectus elit, ac vitae. At consectetur ultrices etiam in arcu. Consectetur suspendisse ridiculus nulla.
          </Text>
        </Section>
      </Wrapper>
    </Container>
  )
}

export default InfoCards