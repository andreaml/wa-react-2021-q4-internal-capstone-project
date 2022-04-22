import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '.';

// Question: how to include screen in the eslint scope?
test('header logo image loads', () => {
  render(<Header />);

  const logoImage = screen.getByAltText('Deco Choice');
  expect(logoImage).toHaveAttribute('src', 'logo.png');
});
