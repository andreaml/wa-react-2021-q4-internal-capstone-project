import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { Route, Routes } from 'react-router-dom';
import ProductDetail from './index';
import Header from '../../components/Header';
import { renderWithRouter } from '../../test.utils';

const setup = (route = '/product/YWL8XBIAAC0AzuPZ') => {
  renderWithRouter(
    <Routes>
      <Route
        path="/product/:productId"
        element={
          <>
            <Header />
            <ProductDetail />
          </>
        }
      />
    </Routes>,
    { route }
  );
};

describe('Product Detail', () => {
  it('should fetch and render data from the API for a particular product', async () => {
    setup();
    const productName = await screen.findByText('Tallulah Sofa Gray');
    expect(productName).toBeInTheDocument();
  });

  it('should contain the name of the selected product', async () => {
    setup();
    const productName = await screen.findByText('Tallulah Sofa Gray');
    expect(productName).toBeInTheDocument();
  });

  it('should contain the current price of the selected product', async () => {
    setup();
    const productPrice = await screen.findByText('$1834.57');
    expect(productPrice).toBeInTheDocument();
  });

  it('should contain the SKU of the selected product', async () => {
    setup();
    const productSKU = await screen.findByText('SKU: 1080681271');
    expect(productSKU).toBeInTheDocument();
  });

  it('should contain the category name of the selected product', async () => {
    setup();
    const productCategory = await screen.findByTestId('productCategory');
    expect(productCategory).toHaveTextContent('Category: furniture');
  });

  it('should contain a list of tags of the selected product', async () => {
    setup();
    const livingRoomTag = await screen.findByText(
      (content, element) =>
        element.tagName.toLowerCase() === 'span' &&
        content.startsWith('Living Room')
    );
    expect(livingRoomTag).toBeInTheDocument();

    const sofaTag = await screen.findByText(
      (content, element) =>
        element.tagName.toLowerCase() === 'span' && content.startsWith('Sofa')
    );
    expect(sofaTag).toBeInTheDocument();
  });

  it('should contain a description the selected product', async () => {
    setup();
    const productDescription = await screen.findByText(
      (content, element) =>
        element.tagName.toLowerCase() === 'p' &&
        content.startsWith('A low profile sets')
    );
    expect(productDescription).toBeInTheDocument();
  });

  it('should contain a quantity selector and an “Add to Cart” button', async () => {
    setup();
    const productQuantityInput = await screen.findByDisplayValue('1');
    expect(productQuantityInput).toBeInTheDocument();
    expect(productQuantityInput).toHaveAttribute('type', 'number');

    const addToCartButton = await screen.findByText('Add to Cart');
    expect(addToCartButton).toBeInTheDocument();
  });

  it('should increase the Cart items number when clicking the “Add to Cart” button', async () => {
    setup();
    const productQuantityInput = await screen.findByDisplayValue('1');
    expect(productQuantityInput).toBeInTheDocument();
    expect(productQuantityInput).toHaveAttribute('type', 'number');

    const addToCartButton = await screen.findByText('Add to Cart');
    expect(addToCartButton).toBeInTheDocument();

    fireEvent.click(addToCartButton);
    const cartHeaderButton = screen.getByTitle('Cart');
    expect(cartHeaderButton).toHaveTextContent('1');
  });

  it('should disable the quantity selector and the “Add to Cart” button', async () => {
    setup('/product/YWL8XBIAAC0AzuP0');
    const productQuantityInput = await screen.findByDisplayValue('1');
    expect(productQuantityInput).toBeInTheDocument();
    expect(productQuantityInput).toHaveAttribute('type', 'number');
    expect(productQuantityInput).toBeDisabled();

    const addToCartButton = await screen.findByText('Add to Cart');
    expect(addToCartButton).toBeInTheDocument();
    expect(addToCartButton).toBeDisabled();
  });
});
