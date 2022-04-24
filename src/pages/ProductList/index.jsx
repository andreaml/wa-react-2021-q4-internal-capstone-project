import React, { useState, useEffect } from 'react';
import products from '../../assets/data/products';
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
    filter: categoriesFilter,
    handleFilterChange: handleCategoriesFilterChange,
  } = useFilters([]);

  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    if (!isLoading) {
      if (categoriesFilter.length) {
        const newFilteredProducts = products.results.filter((product) =>
          categoriesFilter.includes(product.data?.category?.id)
        );
        setFilteredProducts(newFilteredProducts);
      } else {
        setFilteredProducts(products.results);
      }
    }
  }, [categoriesFilter, isLoading]);

  return (
    <StyledProductList>
      <StyledTitle>Products catalog</StyledTitle>
      <Sidebar
        categoriesFilter={categoriesFilter}
        handleCategoriesFilterChange={handleCategoriesFilterChange}
      />
      <ProductsGrid isLoading={isLoading} products={filteredProducts} />
      {!isLoading && filteredProducts.length && (
        <Pagination page={products.page} totalPages={products.total_pages} />
      )}
    </StyledProductList>
  );
}

export default ProductList;
