import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Homepage from './Homepage';

const setup = () =>
  render(
    <Router>
      <Homepage />
    </Router>
  );

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
