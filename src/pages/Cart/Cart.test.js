import React from 'react';
import { fireEvent, screen, within } from '@testing-library/react';
import { Route, Routes } from 'react-router-dom';
import Cart from './index';
import Header from '../../components/Header';
import { renderWithRouter } from '../../test.utils';
import * as cartInitialState from '../../../mocks/en-us/products-in-cart.json';

const setup = (cartCustomInitialState, route = '/cart') => {
  renderWithRouter(
    <Routes>
      <Route
        path="/cart"
        element={
          <>
            <Header />
            <Cart />
          </>
        }
      />
    </Routes>,
    { route, cartInitialState: cartCustomInitialState }
  );
};

describe('Cart', () => {
  it('should display an empty state when there are no items in the cart', async () => {
    setup();
    const cartTitleCount = await screen.findByTestId('cartTitleCount');
    expect(cartTitleCount).toBeInTheDocument();
    expect(cartTitleCount).toHaveTextContent('0 Items');
  });

  it('should show list of products when there are items in the cart', async () => {
    setup(cartInitialState);
    const cartProductRows = screen.getAllByTestId('cartProductTableRow');
    expect(cartProductRows).toHaveLength(3);
    cartInitialState.cart.items.forEach((cartProduct, index) => {
      const utils = within(cartProductRows[index]);
      const productImage = utils.getByText(cartProduct.data.mainimage?.alt);
      expect(productImage).toBeInTheDocument();

      const productName = utils.getByText(cartProduct.data.name);
      expect(productName).toBeInTheDocument();

      const productUnitPrice = utils.getByTestId('productPrice');
      expect(productUnitPrice).toBeInTheDocument();
      expect(productUnitPrice).toHaveTextContent(cartProduct.data.price);

      const productQuantitySelector = utils.getByRole('spinbutton');
      expect(productQuantitySelector).toBeInTheDocument();
      expect(productQuantitySelector).toHaveAttribute('name', 'quantity');

      const productSubtotal = utils.getByTestId('productSubtotal');
      expect(productSubtotal).toBeInTheDocument();
      expect(productSubtotal).toHaveTextContent(
        (cartProduct.data.price * cartProduct.count).toFixed()
      );

      const productRemoveButton = utils.getByRole('button');
      expect(productRemoveButton).toBeInTheDocument();
      expect(productRemoveButton).toHaveAttribute('title', 'Remove product');
    });
  });

  it('should display the Cart Total as the sum of the subtotals of all items in the cart', async () => {
    setup(cartInitialState);
    const cartProductRows = screen.getAllByTestId('cartProductTableRow');
    expect(cartProductRows).toHaveLength(3);
    const cartTotal = screen.getByTestId('cartTotal');
    expect(cartTotal).toHaveTextContent('$7483');
  });

  it('should allow update the quantity of items for a particular product in the cart', async () => {
    setup(cartInitialState);
    const cartProductQuantitySelectors = screen.getAllByRole('spinbutton');
    expect(cartProductQuantitySelectors).toHaveLength(3);

    const cartTotal = screen.getByTestId('cartTotal');
    expect(cartTotal).toHaveTextContent('$7483');

    const cartHeaderButton = screen.getByTitle('Cart');
    expect(cartHeaderButton).toHaveTextContent('4');

    const cartTitleCount = screen.getByTestId('cartTitleCount');
    expect(cartTitleCount).toHaveTextContent('4 Items');

    fireEvent.input(cartProductQuantitySelectors[0], {
      target: { value: 1 },
    });

    expect(cartTotal).toHaveTextContent('$5649');
    expect(cartHeaderButton).toHaveTextContent('3');
    expect(cartTitleCount).toHaveTextContent('3 Items');
  });

  it('should set max input for quantity selectors based on each product stock', async () => {
    setup(cartInitialState);
    const cartProductQuantitySelectors = screen.getAllByRole('spinbutton');
    expect(cartProductQuantitySelectors).toHaveLength(3);

    cartInitialState.cart.items.forEach((cartProduct, index) => {
      expect(cartProductQuantitySelectors[index]).toHaveAttribute(
        'max',
        cartProduct.data.stock.toString()
      );
    });
  });

  it('should remove a product from the cart after clicking on the “remove from cart icon”', async () => {
    setup(cartInitialState);
    const cartRemoveProductButtons = screen.getAllByTitle('Remove product');
    expect(cartRemoveProductButtons).toHaveLength(3);

    const cartTotal = screen.getByTestId('cartTotal');
    expect(cartTotal).toHaveTextContent('$7483');

    const cartHeaderButton = screen.getByTitle('Cart');
    expect(cartHeaderButton).toHaveTextContent('4');

    const cartTitleCount = screen.getByTestId('cartTitleCount');
    expect(cartTitleCount).toHaveTextContent('4 Items');

    fireEvent.click(cartRemoveProductButtons[0]);

    expect(cartTotal).toHaveTextContent('$3814');
    expect(cartHeaderButton).toHaveTextContent('2');
    expect(cartTitleCount).toHaveTextContent('2 Items');
  });
});
