import React from 'react';
import PropTypes from 'prop-types';
import productCategories from '../../assets/data/product-categories';
import {
  StyledWrapper,
  StyledFilterTitle,
  StyledSidebarItemsWrapper,
  StyledSidebarItemSelector,
} from './styled';

function Sidebar({ categoriesFilter, handleCategoriesFilterChange }) {
  return (
    <StyledWrapper>
      <StyledFilterTitle>Categories</StyledFilterTitle>
      <StyledSidebarItemsWrapper>
        {productCategories.results.map(({ id, data }) => {
          const checked = categoriesFilter.includes(id);
          return (
            <li key={id}>
              <StyledSidebarItemSelector checked={checked}>
                <input
                  type="checkbox"
                  value={id}
                  checked={checked}
                  onChange={() => {
                    handleCategoriesFilterChange(id);
                  }}
                />
                {data.name}
              </StyledSidebarItemSelector>
            </li>
          );
        })}
      </StyledSidebarItemsWrapper>
    </StyledWrapper>
  );
}

Sidebar.propTypes = {
  categoriesFilter: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleCategoriesFilterChange: PropTypes.instanceOf(Function).isRequired,
};

export default Sidebar;
