import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import useLatestAPI from './useLatestAPI';

function useProductCategories() {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [productCategories, setProductCategories] = useState(() => ({
    data: {},
    isLoading: true,
  }));
  let isMounted = true;

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getProductCategories() {
      try {
        setProductCategories({ data: {}, isLoading: true });
        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.type, "category")]]'
          )}&lang=en-us&pageSize=30`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();

        if (isMounted) {
          setProductCategories({ data, isLoading: false });
        }
      } catch (err) {
        if (isMounted) {
          setProductCategories({ data: {}, isLoading: false });
        }
        // eslint-disable-next-line no-console
        console.error(err);
      }
    }

    getProductCategories();

    return () => {
      controller.abort();
      isMounted = false;
    };
  }, [apiRef, isApiMetadataLoading]);

  return productCategories;
}

export default useProductCategories;
