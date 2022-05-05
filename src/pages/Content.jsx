import React from 'react';
import { useRoutes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Cart from './Cart';
import Page404 from './404';
import Homepage from './Homepage';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';
import Search from './Search';

function Content() {
  const routes = useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { index: true, element: <Homepage /> },
        { path: 'home', element: <Homepage /> },
        { path: 'products', element: <ProductList /> },
        {
          path: 'product/:productId',
          element: <ProductDetail />,
        },
        { path: 'search', element: <Search /> },
        { path: 'cart', element: <Cart /> },
        { path: '*', element: <Page404 /> },
      ],
    },
  ]);

  return routes;
}

export default Content;
