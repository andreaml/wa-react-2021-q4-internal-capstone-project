import React, { useState } from 'react';
import Logo from '../Logo';
import SearchInput from '../SearchInput';
import ShoppingCartButton from './ShoppingCartButton';
import HamburgerButton from './HamburgerButton';
import {
  StyledWrapper,
  StyledCategoriesList,
  StyledListItem,
  StyledList,
} from './styled';
import StyledSimpleLink from '../SimpleLink.styled';

function Header() {
  const [mobileNavbarIsExpanded, setMobileNavbarIsExpanded] = useState(false);

  const toggleMobileNavbar = () => {
    setMobileNavbarIsExpanded((currentExpandedValue) => !currentExpandedValue);
  };
  return (
    <StyledWrapper>
      <Logo />
      <StyledCategoriesList expanded={mobileNavbarIsExpanded}>
        <StyledListItem>
          <StyledSimpleLink uppercase href="#" title="Categories">
            Categories
          </StyledSimpleLink>
        </StyledListItem>
        <StyledListItem>
          <StyledSimpleLink uppercase href="#" title="Sale">
            Sale
          </StyledSimpleLink>
        </StyledListItem>
      </StyledCategoriesList>
      <StyledList>
        <StyledListItem>
          <SearchInput />
        </StyledListItem>
        <StyledListItem>
          <ShoppingCartButton />
        </StyledListItem>
      </StyledList>
      <HamburgerButton
        onClick={toggleMobileNavbar}
        mobileNavbarIsExpanded={mobileNavbarIsExpanded}
      />
    </StyledWrapper>
  );
}

export default Header;
