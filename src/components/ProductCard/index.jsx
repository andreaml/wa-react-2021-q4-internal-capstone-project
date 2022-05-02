import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  StyledCategoryImage,
  StyledProductCategoryName,
  StyledProductName,
  StyledProductPrice,
  StyledProductWrapper,
  StyledProductInfoWrapper,
  StyledProductDescription,
} from './styled';
import StyledButton from '../StyledButton';

function ProductCard({ productId, data, showDescription }) {
  const {
    name,
    mainimage,
    price,
    category,
    short_description: shortDescription,
  } = data;
  return (
    <StyledProductWrapper title={name}>
      <Link to={`/product/${productId}`} className="link-image">
        <StyledCategoryImage src={mainimage?.url} alt={mainimage?.alt} />
        <StyledProductName>{name}</StyledProductName>
      </Link>
      <StyledProductInfoWrapper>
        <StyledProductPrice>${price}</StyledProductPrice>
        <StyledProductCategoryName>
          {category?.name || category?.slug}
        </StyledProductCategoryName>
        {showDescription && (
          <StyledProductDescription>
            {shortDescription}
          </StyledProductDescription>
        )}
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
      </StyledProductInfoWrapper>
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
    short_description: PropTypes.string,
  }).isRequired,
  showDescription: PropTypes.bool,
};

ProductCard.defaultProps = {
  showDescription: false,
};

export default ProductCard;
