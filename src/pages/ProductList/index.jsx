import React, { useState, useEffect } from 'react';
import products from '../../assets/data/products';
import productCategories from '../../assets/data/product-categories';
import Pagination from '../../components/Pagination';
import ProductsGrid from '../../components/ProductsGrid';
import Sidebar from '../../components/Sidebar';
import useFilters from '../../utils/hooks/useFilters';
import { StyledProductList, StyledTitle } from './styled';

function ProductList() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  const {
    filter: mappedCategories,
    filteredProducts,
    handleFilterChange: handleCategoriesFilterChange,
  } = useFilters(productCategories.results, products.results);

  return (
    <StyledProductList>
      <StyledTitle>Products catalog</StyledTitle>
      <Sidebar
        productCategories={mappedCategories}
        handleCategoriesFilterChange={handleCategoriesFilterChange}
      />
      <ProductsGrid isLoading={isLoading} products={filteredProducts} />
      {!isLoading && filteredProducts.length !== 0 && (
        <Pagination page={products.page} totalPages={products.total_pages} />
      )}
    </StyledProductList>
  );
}

export default ProductList;
