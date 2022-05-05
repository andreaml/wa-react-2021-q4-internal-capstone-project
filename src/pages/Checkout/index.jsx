import React from 'react';
import CheckoutForm from '../../components/CheckoutForm';
import ProductsTable from '../../components/ProductsTable';
import { useCart } from '../../utils/hooks/CartContext';
import { StyledWrapper, StyledTitle } from './styled';

function Checkout() {
  const { cart } = useCart();
  return (
    <StyledWrapper>
      <StyledTitle>Checkout</StyledTitle>
      <ProductsTable products={cart.items} />
      <CheckoutForm />
    </StyledWrapper>
  );
}

export default Checkout;
