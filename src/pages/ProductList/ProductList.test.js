import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ProductList from './index';

const setup = () =>
  render(
    <Router>
      <ProductList />
    </Router>
  );

describe('Product List', () => {
  it('should render the Product Categories Sidebar', async () => {
    setup();
    const categoryItems = await screen.findAllByTestId('categoryItem');
    expect(categoryItems).toHaveLength(5);
    expect(categoryItems[0]).toHaveTextContent('Bed & Bath');
  });

  it('should filter Products when clicking a Category input', async () => {
    setup();
    let productCards = await screen.findAllByTestId('productCard');
    expect(productCards).toHaveLength(12);

    const categoryItemFilters = await screen.findByLabelText('Lighting (0)');
    fireEvent.click(categoryItemFilters);

    productCards = screen.queryAllByTestId('productCard');
    expect(productCards).toHaveLength(0);
  });

  it('should fit the Pagination accordingly to the results', async () => {
    setup();
    const productCards = await screen.findAllByTestId('productCard');
    expect(productCards).toHaveLength(12);
    const paginationButtonNumbers = screen.getAllByTestId(
      'paginationButtonNumber'
    );
    expect(paginationButtonNumbers).toHaveLength(3);
  });

  it('should disable Prev button in Pagination on page 1', async () => {
    setup();
    const productCards = await screen.findAllByTestId('productCard');
    expect(productCards).toHaveLength(12);
    const paginationButtonNumbers = await screen.findAllByTestId(
      'paginationButtonNumber'
    );
    expect(paginationButtonNumbers).toHaveLength(3);
    const paginationButtonPrev = screen.getByTestId('paginationButtonPrev');
    expect(paginationButtonPrev).toBeDisabled();
  });

  it('should navigate to prev page with Prev button in Pagination', async () => {
    setup();
    const productCards = await screen.findAllByTestId('productCard');
    expect(productCards).toHaveLength(12);
    const paginationButtonNumbers = await screen.findAllByTestId(
      'paginationButtonNumber'
    );
    expect(paginationButtonNumbers).toHaveLength(3);
    expect(paginationButtonNumbers[0]).toHaveClass('active');

    const paginationButtonNext = screen.getByTestId('paginationButtonNext');
    expect(paginationButtonNext).toBeEnabled();
    fireEvent.click(paginationButtonNext);

    expect(paginationButtonNumbers[0].className).toEqual(
      expect.not.stringContaining('active')
    );
    expect(paginationButtonNumbers[1]).toHaveClass('active');

    const paginationButtonPrev = screen.getByTestId('paginationButtonPrev');
    expect(paginationButtonPrev).toBeEnabled();
    fireEvent.click(paginationButtonPrev);

    expect(paginationButtonNumbers[0]).toHaveClass('active');
    expect(paginationButtonNumbers[1].className).toEqual(
      expect.not.stringContaining('active')
    );
  });

  it('should navigate to next page with Next button in Pagination', async () => {
    setup();
    const productCards = await screen.findAllByTestId('productCard');
    expect(productCards).toHaveLength(12);
    const paginationButtonNumbers = await screen.findAllByTestId(
      'paginationButtonNumber'
    );
    expect(paginationButtonNumbers).toHaveLength(3);
    expect(paginationButtonNumbers[0]).toHaveClass('active');

    const paginationButtonNext = screen.getByTestId('paginationButtonNext');
    expect(paginationButtonNext).toBeEnabled();
    fireEvent.click(paginationButtonNext);

    expect(productCards).toHaveLength(12);
    expect(paginationButtonNumbers[0].className).toEqual(
      expect.not.stringContaining('active')
    );
    expect(paginationButtonNumbers[1]).toHaveClass('active');
  });

  it('should disable Next button in Pagination on last page', async () => {
    setup();
    const productCards = await screen.findAllByTestId('productCard');
    expect(productCards).toHaveLength(12);
    const paginationButtonNumbers = await screen.findAllByTestId(
      'paginationButtonNumber'
    );
    expect(paginationButtonNumbers).toHaveLength(3);
    expect(paginationButtonNumbers[0]).toHaveClass('active');

    fireEvent.click(paginationButtonNumbers[2]);
    expect(paginationButtonNumbers[2]).toHaveClass('active');

    const paginationButtonNext = screen.getByTestId('paginationButtonNext');
    expect(paginationButtonNext).toBeDisabled();
  });
});
