import React, { useState } from 'react';
import Logo from '../Logo';
import { StyledNavLink } from '../StyledLinks.styled';
import SearchInput from '../SearchInput';
import ShoppingCartButton from './ShoppingCartButton';
import HamburgerButton from './HamburgerButton';
import {
  StyledWrapper,
  StyledCategoriesList,
  StyledListItem,
  StyledList,
} from './styled';

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
          <StyledNavLink to="/products">Products</StyledNavLink>
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
