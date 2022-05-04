import React, { createContext, useContext, useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';
import {
  ADD_ITEM,
  cartInitialState,
  cartReducer,
  EMPTY_CART,
  REMOVE_ITEM,
} from '../reducers/cartReducer';

const CartContext = createContext({
  cart: {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
});

export function CartContextProvider({ children }) {
  const [cartState, dispatch] = useReducer(cartReducer, cartInitialState);

  const addProductToCart = (product, quantity) => {
    dispatch({ type: ADD_ITEM, product, quantity });
  };

  const removeProductFromCart = (productId) => {
    dispatch({ type: REMOVE_ITEM, productId });
  };

  const emptyCart = () => {
    dispatch({ type: EMPTY_CART });
  };

  const cartContextValue = useMemo(
    () => ({
      cart: cartState.cart,
      addProductToCart,
      removeProductFromCart,
      emptyCart,
    }),
    [cartState.cart]
  );

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
}

CartContextProvider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export const useCart = () => {
  const value = useContext(CartContext);
  return value;
};
