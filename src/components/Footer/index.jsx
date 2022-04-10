import styled from 'styled-components';
import SimpleLink from '../SimpleLink';
import logo from './../../logo.png';
import { ReactComponent as PhoneIcon } from '../../assets/icons/phone.svg';
import { ReactComponent as EmailIcon } from '../../assets/icons/email.svg';

const Wrapper = styled.footer`
  background-color: ${props => props.theme.darkGray};
  color: white;
  padding: 20px 0;
  width: 100%;
`

const InnerWrapper = styled.div`
  column-gap: 30px;
  display: grid;
  font-size: 12px;
  grid-template-columns: repeat(3, 1fr);
  // grid-auto-columns: 1fr 1fr 1fr 100%;
  // grid-auto-flow: column;
  margin: 0 auto;
  max-width: 1500px;
  width: 80vw;
`

const Section = styled.section`
  text-align: left;
  p {
    line-height: 16px;
  }
`

const SectionTitle = styled.h5`
  color: ${props => props.theme.main};
  font-size: 14px;
  font-weight: bold;
  margin: 0 0 10px 0;
`

const Logo = styled.img`
  display: block;
  -webkit-filter: invert(1);
  filter: invert(1);
  height: fit-content;
  margin-bottom: 25px;
  width: 150px;
`

const List = styled.ul`
  display: flex;
  flex-flow: column wrap;
  list-style: none;
  padding: 0;
`
const ListItem = styled.li`
  margin: 0 0 10px 0;

  * {
    vertical-align: text-top;
  }

  svg {
    height: 15px;
    margin-right: 10px;
    width: 15px;

    path {
      fill: ${props => props.theme.main} !important;
    }
  }
`

const Copyright = styled.p`
  grid-column-start: 1;
  grid-column-end: 4;
  text-align: left;
`

const Footer = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Section>
          <Logo src={logo} alt='Deco Choice' title='Deco Choice' />
          <p>Come discover Deco Choice with endless must-have styles at prices so low you won't believe it. And the best part? Our products are all backed by our Best Price Promise.</p>
        </Section>
        <Section>
          <SectionTitle>Directory</SectionTitle>
          <List>
            <ListItem><SimpleLink light small href='#' title='Categories'>Categories</SimpleLink></ListItem>
            <ListItem><SimpleLink light small href='#' title='Sale'>Sale</SimpleLink></ListItem>
          </List>
        </Section>
        <Section>
          <SectionTitle>Contact</SectionTitle>
          <List>
            <ListItem><span title='Contact number'><PhoneIcon />0740-22-28-66</span></ListItem>
            <ListItem><EmailIcon /><SimpleLink light small href='mailto:contact@decochoice.com' title='Mail to contact@decochoice.com'>contact@decochoice.com</SimpleLink></ListItem>
          </List>
        </Section>
        <Copyright>
          Ecommerce created during Wizeline's Academy React Bootcamp
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
          Icons by <SimpleLink light small href='https://svgrepo.com' target='_blank' rel='noopener norreferer' title='Mail to contact@decochoice.com'>svgrepo.com</SimpleLink>
        </Copyright>
      </InnerWrapper>
    </Wrapper>
  )
}

export default Footer;