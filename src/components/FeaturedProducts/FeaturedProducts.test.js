import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../../pages/Homepage';
import { renderWithRouter } from '../../test.utils';
import ProductList from '../../pages/ProductList';

const setup = (cartCustomInitialState, route = '/') => {
  renderWithRouter(
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/products" element={<ProductList />} />
    </Routes>,
    { route, cartInitialState: cartCustomInitialState }
  );
};

describe('Featured Products in Homepage', () => {
  it('should display a "View all products" button that renders the PLP', () => {
    setup();
    expect(screen.queryByTestId('productListTitle')).not.toBeInTheDocument();
    const viewAllProductsButton = screen.getByText('View all products');
    fireEvent.click(viewAllProductsButton);
    expect(screen.getByTestId('productListTitle')).toBeInTheDocument();
  });
});
