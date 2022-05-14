import React from 'react';
import { screen } from '@testing-library/react';
import Homepage from './Homepage';
import { renderWithRouter } from '../test.utils';

const setup = () => renderWithRouter(<Homepage />);

describe('Homepage', () => {
  it('should render the FeatureBanners Slider', async () => {
    setup();
    const slideTitle = await screen.findByTestId('slideTitle');
    expect(slideTitle).toHaveTextContent('AMAZING FINISHES - BEDROOM');
    const slidesCounter = await screen.findByTestId('slidesCounter');
    expect(slidesCounter).toHaveTextContent('1 / 3');
  });

  it('should render the Categories Grid', async () => {
    setup();
    const categoryCards = await screen.findAllByTestId('categoryName');
    expect(categoryCards).toHaveLength(5);
  });

  it('should render the Featured Products Grid', async () => {
    setup();
    const productCards = await screen.findAllByTestId('productCard');
    expect(productCards).toHaveLength(16);
  });
});
