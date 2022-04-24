import React, { useState } from 'react';
import PropTypes from 'prop-types';
import productCategories from '../../assets/data/product-categories';
import { ReactComponent as FilterIcon } from '../../assets/icons/filter.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import {
  StyledWrapper,
  StyledContentWrapper,
  StyledFilterTitle,
  StyledCloseButton,
  StyledSidebarItemsWrapper,
  StyledSidebarItemSelector,
  StyledFilterButton,
} from './styled';

function Sidebar({ categoriesFilter, handleCategoriesFilterChange }) {
  const [mobileFilterIsExpanded, setMobileFilterIsExpanded] = useState(false);

  const toggleMobileFilter = () => {
    setMobileFilterIsExpanded((currentExpandedValue) => !currentExpandedValue);
  };
  return (
    <StyledWrapper>
      <StyledFilterButton type="button" onClick={toggleMobileFilter}>
        <FilterIcon />
        <span>Filters</span>
      </StyledFilterButton>
      <StyledContentWrapper expanded={mobileFilterIsExpanded}>
        <StyledFilterTitle>
          Categories
          <StyledCloseButton type="button" onClick={toggleMobileFilter}>
            <CloseIcon />
          </StyledCloseButton>
        </StyledFilterTitle>
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
      </StyledContentWrapper>
    </StyledWrapper>
  );
}

Sidebar.propTypes = {
  categoriesFilter: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleCategoriesFilterChange: PropTypes.instanceOf(Function).isRequired,
};

export default Sidebar;
