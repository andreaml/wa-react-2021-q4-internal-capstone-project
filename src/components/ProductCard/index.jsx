import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledCategoryImage,
  StyledProductCategoryName,
  StyledProductName,
  StyledProductPrice,
  StyledProductWrapper,
} from './styled';

function ProductCard({ data }) {
  return (
    <StyledProductWrapper href="#" title={data.name}>
      <StyledCategoryImage
        src={data.mainimage?.url}
        alt={data.mainimage?.alt}
      />
      <StyledProductName>{data.name}</StyledProductName>
      <StyledProductPrice>${data.price}</StyledProductPrice>
      <StyledProductCategoryName>
        {data.category?.slug}
      </StyledProductCategoryName>
    </StyledProductWrapper>
  );
}

ProductCard.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.shape({
      slug: PropTypes.string,
    }),
    name: PropTypes.string,
    mainimage: PropTypes.shape({
      alt: PropTypes.string,
      url: PropTypes.string,
    }),
    price: PropTypes.number,
  }).isRequired,
};

export default ProductCard;
