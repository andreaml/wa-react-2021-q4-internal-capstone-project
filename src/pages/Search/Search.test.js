import React from 'react';
import { screen } from '@testing-library/react';
import { Route, Routes } from 'react-router-dom';
import Header from '../../components/Header';
import Search from './index';
import { renderWithRouter } from '../../test.utils';

const setup = (route = '/search') => {
  renderWithRouter(
    <Routes>
      <Route
        path="/search"
        element={
          <>
            <Header />
            <Search />
          </>
        }
      />
    </Routes>,
    { route }
  );
};

describe('Product Search', () => {
  it('should list results according to the “searchTerm” provided', async () => {
    setup('/search?q="tallulah"');
    const searchResults = await screen.findAllByTestId('productCard');
    expect(searchResults).toHaveLength(1);
    expect(searchResults[0]).toHaveTextContent('Tallulah Sofa Gray');

    const descriptionTitle = screen.getByTestId('searchDescription');
    expect(descriptionTitle).toHaveTextContent(
      'Results found with the terms ""tallulah""'
    );
    expect(descriptionTitle).toBeInTheDocument();
  });
  it('should list results according to the “searchTerm” provided', async () => {
    setup('/search?q="pot"');
    const searchResults = screen.queryAllByTestId('productCard');
    expect(searchResults).toHaveLength(0);
    const message404 = await screen.findByText('Sorry');
    expect(message404).toBeInTheDocument();
  });
});
