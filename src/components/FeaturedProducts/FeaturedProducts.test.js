import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../../App';

test('View all products button renders PLP', () => {
  render(<App />);
  const viewAllProductsButton = screen.getByText('View all products');
  fireEvent.click(viewAllProductsButton);
  expect(screen.getByText('This is the product list page')).toBeInTheDocument();
});
