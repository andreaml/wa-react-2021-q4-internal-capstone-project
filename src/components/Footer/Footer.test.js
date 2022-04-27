import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '.';

test('footer logo image loads', () => {
  render(<Footer />);
  const logoImage = screen.getByAltText('Deco Choice');
  expect(logoImage).toHaveAttribute('src', 'logo.png');
});
