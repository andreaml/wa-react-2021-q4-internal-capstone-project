import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  StyledCategoryImage,
  StyledProductCategoryName,
  StyledProductName,
  StyledProductPrice,
  StyledProductWrapper,
} from './styled';
import StyledButton from '../StyledButton';

function ProductCard({ productId, data }) {
  return (
    <StyledProductWrapper title={data.name}>
      <Link to={`/product/${productId}`}>
        <StyledCategoryImage
          src={data.mainimage?.url}
          alt={data.mainimage?.alt}
        />
        <StyledProductName>{data.name}</StyledProductName>
      </Link>
      <StyledProductPrice>${data.price}</StyledProductPrice>
      <StyledProductCategoryName>
        {data.category?.name || data.category?.slug}
      </StyledProductCategoryName>
      <br />
      <StyledButton
        type="button"
        main
        onClick={() => {
          console.log('add product to cart');
        }}
      >
        Add to Cart
      </StyledButton>
    </StyledProductWrapper>
  );
}

ProductCard.propTypes = {
  productId: PropTypes.string.isRequired,
  data: PropTypes.shape({
    sku: PropTypes.string,
    category: PropTypes.shape({
      name: PropTypes.string,
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
