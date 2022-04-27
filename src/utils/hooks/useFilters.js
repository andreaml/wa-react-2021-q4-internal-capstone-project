import { useState, useEffect } from 'react';

function useFilters(filterValues, products) {
  const [filter, setFilter] = useState(filterValues);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filteredValuesTrackingArray, setFilteredValuesTrackingArray] =
    useState([]);

  const handleFilterChange = (selectedValue) => {
    const filteredValues = filter.map((filterItemValue) => {
      let filterValueIsActive = false;
      if (selectedValue === filterItemValue.id) {
        filterValueIsActive = true;
      }
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
      return { ...filterItemValue, active: filterValueIsActive };
    });
    setFilter(filteredValues);
  };

  useEffect(() => {
    if (filteredValuesTrackingArray.length) {
      const newFilteredProducts = products.filter((product) =>
        filteredValuesTrackingArray.includes(product.data?.category?.id)
      );
      setFilteredProducts(newFilteredProducts);
    } else {
      setFilteredProducts(products);
    }
  }, [filteredValuesTrackingArray]);

  return { filter, filteredProducts, handleFilterChange };
}

export default useFilters;
