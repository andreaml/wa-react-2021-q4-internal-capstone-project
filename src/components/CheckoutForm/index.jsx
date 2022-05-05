/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  StyledForm,
  StyledInputsWrapper,
  StyledInput,
  StyledTextarea,
  StyledActionsWrapper,
} from './styled';
import StyledButton from '../StyledButton';
import StyledButtonLink from '../StyledButtonLink';

function CheckoutForm() {
  return (
    <StyledForm>
      <h3>Customer information</h3>
      <StyledInputsWrapper>
        <label htmlFor="name">
          Name:
          <StyledInput id="name" type="text" />
        </label>
        <label htmlFor="email">
          Email:
          <StyledInput id="email" type="text" />
        </label>
        <label htmlFor="zipcode">
          Zipcode:
          <StyledInput id="zipcode" type="text" />
        </label>
      </StyledInputsWrapper>
      <label htmlFor="orderNotes">
        Order notes:
        <StyledTextarea rows={5} id="orderNotes" type="text" />
      </label>
      <StyledActionsWrapper>
        <StyledButtonLink left="true" to="/cart">
          Go back to Cart
        </StyledButtonLink>
        <StyledButton right main type="button">
          Place order
        </StyledButton>
      </StyledActionsWrapper>
    </StyledForm>
  );
}

export default CheckoutForm;
