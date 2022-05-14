import React, { createContext, useContext, useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';
import {
  ADD_ITEM,
  cartInitialState,
  cartReducer,
  EMPTY_CART,
  REMOVE_ITEM,
  SET_ITEM_QUANTITY,
} from '../reducers/cartReducer';

const CartContext = createContext({
  cart: {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
});

export function CartContextProvider({ children, cartCustomInitialState }) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    cartCustomInitialState || cartInitialState
  );

  const addProductToCart = (product, quantity) => {
    dispatch({ type: ADD_ITEM, product, quantity });
  };

  const setProductCountToCart = (product, quantity) => {
    dispatch({ type: SET_ITEM_QUANTITY, product, quantity });
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
      setProductCountToCart,
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
  cartCustomInitialState: PropTypes.shape({
    cart: PropTypes.shape({
      items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          data: PropTypes.shape({
            sku: PropTypes.string,
            category: PropTypes.shape({
              name: PropTypes.string,
              slug: PropTypes.string,
            }),
            name: PropTypes.string,
            mainimage: PropTypes.shape({
              alt: PropTypes.string,
              url: PropTypes.string,
            }),
            price: PropTypes.number,
            short_description: PropTypes.string,
          }),
        })
      ),
      count: PropTypes.number,
    }),
  }),
};

CartContextProvider.defaultProps = {
  cartCustomInitialState: null,
};

export const useCart = () => {
  const value = useContext(CartContext);
  return value;
};
