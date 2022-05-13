import { render } from '@testing-library/react';
import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import { CartContextProvider } from './utils/hooks/CartContext';

function AllTheProviders({ children }) {
  return (
    <CartContextProvider>
      <Router>{children}</Router>
    </CartContextProvider>
  );
}

AllTheProviders.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

// eslint-disable-next-line import/prefer-default-export
export const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return {
    ...render(ui, { wrapper: AllTheProviders }),
  };
};
