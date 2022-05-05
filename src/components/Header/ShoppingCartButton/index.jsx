import React from 'react';
import { ReactComponent as ShoppingCartIcon } from '../../../assets/icons/shopping-cart.svg';
import { useCart } from '../../../utils/hooks/CartContext';
import { StyledButton, StyledCartItemsBadge } from './styled';

function ShoppingCartButton() {
  const {
    cart: { count },
  } = useCart();

  return (
    <StyledButton to="cart" title="Cart">
      <ShoppingCartIcon />
      {count > 0 && <StyledCartItemsBadge>{count}</StyledCartItemsBadge>}
    </StyledButton>
  );
}

export default ShoppingCartButton;
