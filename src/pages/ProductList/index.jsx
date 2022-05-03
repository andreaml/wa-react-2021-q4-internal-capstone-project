import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Pagination from '../../components/Pagination';
import ProductsGrid from '../../components/ProductsGrid';
import Sidebar from '../../components/Sidebar';
import useFilters from '../../utils/hooks/useFilters';
import useProductCategories from '../../utils/hooks/useProductCategories';
import useProducts from '../../utils/hooks/useProducts';
import { StyledProductList, StyledTitle } from './styled';

function ProductList() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(page);
  const { data: productCategories, isLoading: isLoadingProductCategories } =
    useProductCategories();
  const { data: products, isLoading: isLoadingProducts } = useProducts({
    page,
    pageSize: 12,
  });
  const [searchParams] = useSearchParams();
  const defaultCategory = searchParams.get('category');

  useEffect(() => {
    if (products.total_pages) {
      setTotalPages(products.total_pages);
    }
  }, [products]);

  const {
    filter: mappedCategories,
    filteredProducts,
    handleFilterChange: handleCategoriesFilterChange,
    filtersAreActive,
    handleClearFilters,
  } = useFilters(productCategories.results, products.results, defaultCategory);

  return (
    <StyledProductList>
      <StyledTitle>Products catalog</StyledTitle>
      <Sidebar
        productCategories={mappedCategories}
        isLoading={isLoadingProductCategories}
        handleCategoriesFilterChange={handleCategoriesFilterChange}
        filtersAreActive={filtersAreActive}
        handleClearFilters={handleClearFilters}
      />
      <ProductsGrid isLoading={isLoadingProducts} products={filteredProducts} />
      {products.results?.length !== 0 && (
        <Pagination
          page={products.page || page}
          totalPages={totalPages}
          setPage={setPage}
        />
      )}
    </StyledProductList>
  );
}

export default ProductList;
