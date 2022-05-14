import { render } from '@testing-library/react';
import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import { CartContextProvider } from './utils/hooks/CartContext';

function AllTheProviders({ children, cartInitialState }) {
  return (
    <CartContextProvider cartCustomInitialState={cartInitialState}>
      <Router>{children}</Router>
    </CartContextProvider>
  );
}

AllTheProviders.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
  cartInitialState: PropTypes.shape({
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

AllTheProviders.defaultProps = {
  cartInitialState: null,
};

// eslint-disable-next-line import/prefer-default-export
export const renderWithRouter = (
  ui,
  { route = '/', cartInitialState = null } = {}
) => {
  window.history.pushState({}, 'Test page', route);

  return {
    ...render(ui, {
      wrapper: () => (
        <AllTheProviders cartInitialState={cartInitialState}>
          {ui}
        </AllTheProviders>
      ),
    }),
  };
};
