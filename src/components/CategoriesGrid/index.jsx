import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledCategoriesHeader,
  StyledCategoriesWrapper,
  StyledCategoryImage,
  StyledCategoryLinkText,
  StyledCategoryName,
  StyledCategoryWrapper,
  StyledWrapper,
} from './styled';

function CategoriesGrid({ categories, isLoading }) {
  return (
    <StyledWrapper>
      <StyledCategoriesHeader>Categories</StyledCategoriesHeader>
      <StyledCategoriesWrapper isLoading={isLoading}>
        {!isLoading &&
          categories.map(({ id, data }) => (
            <StyledCategoryWrapper
              key={id}
              to={`/products?category=${encodeURIComponent(data.name)}`}
              title={data.name}
            >
              <StyledCategoryName data-testid="categoryName">
                {data.name}
              </StyledCategoryName>
              <StyledCategoryImage
                src={data.main_image?.url}
                alt={data.main_image?.alt}
              />
              <StyledCategoryLinkText>Watch more &rarr;</StyledCategoryLinkText>
            </StyledCategoryWrapper>
          ))}
      </StyledCategoriesWrapper>
    </StyledWrapper>
  );
}

CategoriesGrid.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      data: PropTypes.shape({
        name: PropTypes.string,
        main_image: PropTypes.shape({
          alt: PropTypes.string,
          url: PropTypes.string,
        }),
      }),
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default CategoriesGrid;
