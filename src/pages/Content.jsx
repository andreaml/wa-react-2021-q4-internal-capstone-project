import React from 'react';
import { useRoutes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Homepage from './Homepage';
import ProductList from './ProductList';

function Content() {
  const routes = useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { index: true, element: <Homepage /> },
        { path: 'home', element: <Homepage /> },
        { path: 'products', element: <ProductList /> },
      ],
    },
  ]);

  return routes;
}

export default Content;
