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

function Sidebar({
  productCategories,
  isLoading,
  handleCategoriesFilterChange,
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
          {productCategories.map(({ id, data, active }) => (
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
                {data.name}
              </StyledSidebarItemSelector>
            </li>
          ))}
        </StyledSidebarItemsWrapper>
      </StyledContentWrapper>
    </StyledWrapper>
  );
}

Sidebar.propTypes = {
  productCategories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      data: PropTypes.shape({
        active: PropTypes.bool,
        name: PropTypes.string,
      }),
    })
  ).isRequired,
  handleCategoriesFilterChange: PropTypes.instanceOf(Function).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Sidebar;
