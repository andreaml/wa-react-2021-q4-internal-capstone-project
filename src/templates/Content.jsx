import React from 'react';
import Homepage from './Homepage';
import ProductList from './ProductList';
import { usePage } from '../utils/hooks/PageContext';

const contentComponents = {
  homepage: Homepage,
  plp: ProductList,
};

function Content() {
  const { page } = usePage();
  console.log(page);
  const ContentToRender = contentComponents[page];

  return <ContentToRender />;
}

export default Content;
