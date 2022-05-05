import React from 'react';
import ProductsTable from '../../components/ProductsTable';
import { useCart } from '../../utils/hooks/CartContext';
import { StyledWrapper, StyledTitle } from './styled';

function Cart() {
  const { cart } = useCart();
  return (
    <StyledWrapper>
      <StyledTitle>
        Shopping Cart
        <span>{cart.count} Items</span>
      </StyledTitle>
      <ProductsTable products={cart.items} editable />
    </StyledWrapper>
  );
}

export default Cart;
