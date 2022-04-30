import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Pagination from '../../components/Pagination';
import ProductsGrid from '../../components/ProductsGrid';
import Sidebar from '../../components/Sidebar';
import useFilters from '../../utils/hooks/useFilters';
import useProductCategories from '../../utils/hooks/useProductCategories';
import useProducts from '../../utils/hooks/useProducts';
import { StyledProductList, StyledTitle } from './styled';

function ProductList() {
  const { data: productCategories, isLoading: isLoadingProductCategories } =
    useProductCategories();
  const { data: products, isLoading: isLoadingProducts } = useProducts();
  const [searchParams] = useSearchParams();
  const defaultCategory = searchParams.get('category');

  const {
    filter: mappedCategories,
    filteredProducts,
    handleFilterChange: handleCategoriesFilterChange,
  } = useFilters(
    productCategories.results || [],
    products.results || [],
    defaultCategory
  );

  return (
    <StyledProductList>
      <StyledTitle>Products catalog</StyledTitle>
      <Sidebar
        productCategories={mappedCategories}
        isLoading={isLoadingProductCategories}
        handleCategoriesFilterChange={handleCategoriesFilterChange}
      />
      <ProductsGrid isLoading={isLoadingProducts} products={filteredProducts} />
      {!isLoadingProducts && filteredProducts.length !== 0 && (
        <Pagination page={products.page} totalPages={products.total_pages} />
      )}
    </StyledProductList>
  );
}

export default ProductList;
