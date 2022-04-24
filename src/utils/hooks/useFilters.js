import { useState } from 'react';

function useFilters(initialValue = []) {
  const [filter, setFilter] = useState(initialValue);
  const handleFilterChange = (selectedValue) => {
    if (filter.includes(selectedValue)) {
      setFilter(filter.filter((category) => category !== selectedValue));
    } else {
      setFilter((currentCategoriesFilterValue) => [
        ...currentCategoriesFilterValue,
        selectedValue,
      ]);
    }
  };
  return { filter, handleFilterChange };
}

export default useFilters;
