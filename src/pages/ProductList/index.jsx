import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import products from '../../assets/data/products';
import Pagination from '../../components/Pagination';
import ProductsGrid from '../../components/ProductsGrid';
import Sidebar from '../../components/Sidebar';
import useFilters from '../../utils/hooks/useFilters';
import useProductCategories from '../../utils/hooks/useProductCategories';
import { StyledProductList, StyledTitle } from './styled';

function ProductList() {
  const { data: productCategories, isLoading: isProductCategoriesLoading } =
    useProductCategories();
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const defaultCategory = searchParams.get('category');

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
  } = useFilters(
    productCategories.results || [],
    products.results,
    defaultCategory
  );

  return (
    <StyledProductList>
      <StyledTitle>Products catalog</StyledTitle>
      <Sidebar
        productCategories={mappedCategories}
        isLoading={isProductCategoriesLoading}
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
