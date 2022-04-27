import React from 'react';
import StyledSimpleLink from '../SimpleLink.styled';
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

function Footer() {
  return (
    // Question: is it ok to name every styled component with the prefix "Styled"?
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
              <StyledSimpleLink light small href="#" title="Categories">
                Categories
              </StyledSimpleLink>
            </StyledListItem>
            <StyledListItem>
              <StyledSimpleLink light small href="#" title="Sale">
                Sale
              </StyledSimpleLink>
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
                light
                small
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
            light
            small
            href="https://svgrepo.com"
            target="_blank"
            rel="noopener norreferer"
            title="Mail to contact@decochoice.com"
          >
            svgrepo.com
          </StyledSimpleLink>
        </StyledCopyright>
      </StyledInnerWrapper>
    </StyledWrapper>
  );
}

export default Footer;
