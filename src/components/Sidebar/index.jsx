import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
import StyledButton from '../StyledButton';

function Sidebar({
  productCategories,
  isLoading,
  handleCategoriesFilterChange,
  filtersAreActive,
  handleClearFilters,
}) {
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
      <StyledContentWrapper
        expanded={mobileFilterIsExpanded}
        isLoading={isLoading}
      >
        <StyledFilterTitle>
          Categories
          <StyledCloseButton type="button" onClick={toggleMobileFilter}>
            <CloseIcon />
          </StyledCloseButton>
        </StyledFilterTitle>
        <StyledSidebarItemsWrapper>
          {productCategories.map(({ id, data, active, productCount }) => (
            <li key={id}>
              <StyledSidebarItemSelector checked={active}>
                <input
                  name="categoryFilters"
                  type="checkbox"
                  value={id}
                  checked={active}
                  onChange={() => {
                    handleCategoriesFilterChange(id);
                  }}
                />
                {data.name} ({productCount})
              </StyledSidebarItemSelector>
            </li>
          ))}
        </StyledSidebarItemsWrapper>
      </StyledContentWrapper>
      {filtersAreActive && (
        <StyledButton onClick={handleClearFilters}>Clear filters</StyledButton>
      )}
    </StyledWrapper>
  );
}

Sidebar.propTypes = {
  productCategories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      active: PropTypes.bool,
      productCount: PropTypes.number,
      data: PropTypes.shape({
        name: PropTypes.string,
      }),
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleCategoriesFilterChange: PropTypes.instanceOf(Function).isRequired,
  filtersAreActive: PropTypes.bool.isRequired,
  handleClearFilters: PropTypes.instanceOf(Function).isRequired,
};

export default Sidebar;
