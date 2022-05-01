import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import useLatestAPI from './useLatestAPI';

function useSearchProducts({
  productId = '',
  searchTerm = '',
  page = 1,
  pageSize = 20,
}) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [products, setProducts] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  const productIdQueryParam = productId
    ? `&q=${encodeURIComponent(`[[:d=at(document.id, "${productId}") ]]`)}`
    : '';

  const searchTermQueryParam = searchTerm
    ? `&q=${encodeURIComponent(
        '[[at(document.type, "product")]]'
      )}&q=${encodeURIComponent(`[[fulltext(document, '${searchTerm}')]]`)}`
    : '';

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getProducts() {
      try {
        setProducts({ data: {}, isLoading: true });
        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}${productIdQueryParam}${searchTermQueryParam}&lang=en-us&page=${page}&pageSize=${pageSize}`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();

        setProducts({ data, isLoading: false });
      } catch (err) {
        setProducts({ data: {}, isLoading: false });
        // eslint-disable-next-line no-console
        console.error(err);
      }
    }

    getProducts();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading, searchTerm, page]);

  return products;
}

export default useSearchProducts;
