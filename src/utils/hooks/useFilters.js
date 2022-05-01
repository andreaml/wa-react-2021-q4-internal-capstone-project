import { useState, useEffect } from 'react';

function useFilters(filterValues = [], products = [], defaultCategory = '') {
  const initializeFilterArray = () =>
    filterValues.map((filterValueItem) => {
      const productsLengthInCategory = products.filter(
        (product) => product.data.category.id === filterValueItem.id
      ).length;
      return {
        ...filterValueItem,
        active: filterValueItem.data.name === defaultCategory,
        productCount: productsLengthInCategory,
      };
    });

  const initializeFilteredValuesTrackingArray = () =>
    filterValues
      .filter(
        (filterItemValue) => filterItemValue.data.name === defaultCategory
      )
      .map(({ id }) => id);

  const [filter, setFilter] = useState(initializeFilterArray);
  const [filteredValuesTrackingArray, setFilteredValuesTrackingArray] =
    useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (filterValues.length > 0) {
      setFilter(initializeFilterArray);
      setFilteredValuesTrackingArray(initializeFilteredValuesTrackingArray);
    }
  }, [filterValues]);

  const handleFilterChange = (selectedValue) => {
    if (filteredValuesTrackingArray.includes(selectedValue)) {
      setFilteredValuesTrackingArray(
        filteredValuesTrackingArray.filter(
          (filterValueId) => filterValueId !== selectedValue
        )
      );
    } else {
      setFilteredValuesTrackingArray((currentFilteredValuesTrackingArray) => [
        ...currentFilteredValuesTrackingArray,
        selectedValue,
      ]);
    }
  };

  const handleClearFilters = () => {
    setFilteredValuesTrackingArray([]);
  };

  useEffect(() => {
    if (products.length > 0) {
      const filteredValues = filter.map((filterItemValue) => {
        const isActive = filteredValuesTrackingArray.includes(
          filterItemValue.id
        );
        const productsLengthInCategory = products.filter(
          (product) => product.data.category.id === filterItemValue.id
        ).length;
        return {
          ...filterItemValue,
          active: isActive,
          productCount: productsLengthInCategory,
        };
      });
      setFilter(filteredValues);

      const newFilteredProducts = products.filter(
        (product) =>
          filteredValuesTrackingArray.includes(product.data?.category?.id) ||
          filteredValuesTrackingArray.length === 0
      );
      setFilteredProducts(newFilteredProducts);
    }
  }, [filteredValuesTrackingArray, products]);

  return {
    filter,
    filteredProducts,
    handleFilterChange,
    handleClearFilters,
    filtersAreActive: filteredValuesTrackingArray.length > 0,
  };
}

export default useFilters;
