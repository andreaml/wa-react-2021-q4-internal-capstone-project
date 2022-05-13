import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Pagination from '../../components/Pagination';
import ProductsGrid from '../../components/ProductsGrid';
import useSearchProducts from '../../utils/hooks/useSearchProducts';
import { StyledSearch, StyledTitle, StyledHeadline } from './styled';

function Search() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(page);
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('q');

  const { data: products, isLoading: isLoadingProducts } = useSearchProducts({
    searchTerm,
    page,
    pageSize: 20,
  });

  useEffect(() => {
    if (products.total_pages) {
      setTotalPages(products.total_pages);
    }
  }, [products]);

  return (
    <StyledSearch>
      <StyledTitle>Products search</StyledTitle>
      {!isLoadingProducts && (
        <StyledHeadline data-testid="searchDescription">
          Results found with the terms &quot;{searchTerm}&quot;
        </StyledHeadline>
      )}
      <ProductsGrid
        isLoading={isLoadingProducts}
        products={products.results || []}
        notFoundMessage={`No products found with the terms "${searchTerm}"`}
        cardsTemplateColumns="repeat(auto-fit, minmax(144px, 300px))"
        showDescription
      />
      {products.results?.length !== 0 && (
        <Pagination
          page={products.page || page}
          totalPages={totalPages}
          setPage={setPage}
        />
      )}
    </StyledSearch>
  );
}

export default Search;
