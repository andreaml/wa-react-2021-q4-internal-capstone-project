import React from 'react';
import { screen } from '@testing-library/react';
import Header from '.';
import { renderWithRouter } from '../../test.utils';

describe('Header', () => {
  it('should load the logo image', () => {
    renderWithRouter(<Header />);

    const logoImage = screen.getByAltText('Deco Choice');
    expect(logoImage).toHaveAttribute('src', 'logo.png');
  });
});
