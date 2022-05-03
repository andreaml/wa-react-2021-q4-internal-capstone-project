import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import useLatestAPI from './useLatestAPI';

function useProducts({ productTags = [], page = 1, pageSize = 16 }) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [products, setProducts] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  const productTagsQueryParams = productTags
    .map(
      (productTag) =>
        `&q=${encodeURIComponent(`[[at(document.tags, ["${productTag}"])]]`)}`
    )
    .join('');

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getProducts() {
      try {
        setProducts({ data: {}, isLoading: true });
        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.type, "product")]]'
          )}${productTagsQueryParams}&lang=en-us&page=${page}&pageSize=${pageSize}`,
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
  }, [apiRef, isApiMetadataLoading, page]);

  return products;
}

export default useProducts;
