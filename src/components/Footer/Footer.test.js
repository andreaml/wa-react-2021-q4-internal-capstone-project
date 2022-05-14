import React from 'react';
import { screen } from '@testing-library/react';
import Footer from '.';
import { renderWithRouter } from '../../test.utils';

describe('Footer', () => {
  it('should load the logo image', () => {
    renderWithRouter(<Footer />);

    const logoImage = screen.getByAltText('Deco Choice');
    expect(logoImage).toHaveAttribute('src', 'logo.png');
  });
});
