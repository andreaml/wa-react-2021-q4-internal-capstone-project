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

function CategoriesGrid({ categories }) {
  return (
    <StyledWrapper>
      <StyledCategoriesHeader>Categories</StyledCategoriesHeader>
      <StyledCategoriesWrapper>
        {categories.map(({ id, data }) => (
          <StyledCategoryWrapper key={id} href="#" title={data.name}>
            <StyledCategoryName>{data.name}</StyledCategoryName>
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
};

export default CategoriesGrid;
