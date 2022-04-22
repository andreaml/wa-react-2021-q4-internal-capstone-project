import React from 'react';
import { ReactComponent as ShoppingCartIcon } from '../../../assets/icons/shopping-cart.svg';
import { StyledButton } from '../HamburgerButton/styled';

function ShoppingCartButton() {
  return (
    <StyledButton type="button">
      <ShoppingCartIcon />
    </StyledButton>
  );
}

export default ShoppingCartButton;
