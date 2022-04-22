import React from 'react';
import { render } from '@testing-library/react';
import Footer from '.';

test('footer logo image loads', () => {
  render(<Footer />);
  // eslint-disable-next-line no-restricted-globals
  const logoImage = screen.getByAltText('Deco Choice');
  expect(logoImage).toHaveAttribute('src', 'logo.png');
});
