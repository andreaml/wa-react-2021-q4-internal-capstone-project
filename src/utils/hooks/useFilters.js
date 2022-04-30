import { useState, useEffect } from 'react';

function useFilters(filterValues, products, defaultCategory) {
  const [filter, setFilter] = useState(() =>
    filterValues.map((filterValueItem) => ({
      ...filterValueItem,
      active: filterValueItem.data.name === defaultCategory,
    }))
  );
  const [filteredProducts, setFilteredProducts] = useState(products);
  // lazy - initialization
  const [filteredValuesTrackingArray, setFilteredValuesTrackingArray] =
    useState(() =>
      filterValues
        .filter(
          (filterItemValue) => filterItemValue.data.name === defaultCategory
        )
        .map(({ id }) => id)
    );

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

  useEffect(() => {
    const filteredValues = filter.map((filterItemValue) => {
      const isActive = filteredValuesTrackingArray.includes(filterItemValue.id);
      return {
        ...filterItemValue,
        active: isActive,
      };
    });
    setFilter(filteredValues);

    const newFilteredProducts = products.filter(
      (product) =>
        filteredValuesTrackingArray.includes(product.data?.category?.id) ||
        filteredValuesTrackingArray.length === 0
    );
    setFilteredProducts(newFilteredProducts);
  }, [filteredValuesTrackingArray]);

  return { filter, filteredProducts, handleFilterChange };
}

export default useFilters;
