import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../../App';

test('View all products button renders PLP', () => {
  const textToMatch = 'Products catalog';
  render(<App />);
  expect(screen.queryByText(textToMatch)).not.toBeInTheDocument();
  const viewAllProductsButton = screen.getByText('View all products');
  fireEvent.click(viewAllProductsButton);
  expect(screen.getByText(textToMatch)).toBeInTheDocument();
});
