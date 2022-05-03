import React from 'react';
import Logo from '../Logo';
import { ReactComponent as PhoneIcon } from '../../assets/icons/phone.svg';
import { ReactComponent as EmailIcon } from '../../assets/icons/email.svg';
import {
  StyledCopyright,
  StyledInnerWrapper,
  StyledList,
  StyledListItem,
  StyledSection,
  StyledSectionTitle,
  StyledWrapper,
} from './styled';
import { StyledSimpleLink, StyledLink } from '../StyledLinks.styled';

function Footer() {
  return (
    <StyledWrapper>
      <StyledInnerWrapper>
        <StyledSection gridArea="brandInfo">
          <Logo footer />
          <p>
            Come discover Deco Choice with endless must-have styles at prices so
            low you won&apos;t believe it. And the best part? Our products are
            all backed by our Best Price Promise.
          </p>
        </StyledSection>
        <StyledSection gridArea="directory">
          <StyledSectionTitle>Directory</StyledSectionTitle>
          <StyledList>
            <StyledListItem>
              <StyledLink
                light="true"
                small="true"
                to="products"
                title="Categories"
              >
                Products
              </StyledLink>
            </StyledListItem>
          </StyledList>
        </StyledSection>
        <StyledSection gridArea="contact">
          <StyledSectionTitle>Contact</StyledSectionTitle>
          <StyledList>
            <StyledListItem>
              <span title="Contact number">
                <PhoneIcon />
                0740-22-28-66
              </span>
            </StyledListItem>
            <StyledListItem>
              <EmailIcon />
              <StyledSimpleLink
                light="true"
                small="true"
                href="mailto:contact@decochoice.com"
                title="Mail to contact@decochoice.com"
              >
                contact@decochoice.com
              </StyledSimpleLink>
            </StyledListItem>
          </StyledList>
        </StyledSection>
        <StyledCopyright>
          Ecommerce created during Wizeline&apos;s Academy React Bootcamp
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp; Icons by{' '}
          <StyledSimpleLink
            light="true"
            small="true"
            href="https://svgrepo.com"
            target="_blank"
            rel="noopener norreferer"
            title="Icons source svgrepo.com"
          >
            svgrepo.com
          </StyledSimpleLink>
        </StyledCopyright>
      </StyledInnerWrapper>
    </StyledWrapper>
  );
}

export default Footer;
