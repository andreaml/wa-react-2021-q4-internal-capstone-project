import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledProductsHeader,
  StyledProductsWrapper,
  StyledWrapper,
} from './styled';
import ProductCard from '../ProductCard';
import StyledButtonLink from '../StyledButtonLink';
import { usePage } from '../../utils/hooks/PageContext';

function FeaturedProducts({ products }) {
  const { setCurrentPage } = usePage();
  return (
    <StyledWrapper>
      <StyledProductsHeader>Featured&nbsp;&nbsp;Products</StyledProductsHeader>
      <StyledProductsWrapper>
        {products.map(({ id, data }) => (
          <ProductCard key={id} data={data} />
        ))}
      </StyledProductsWrapper>
      <StyledButtonLink
        main
        onClick={() => {
          setCurrentPage('plp');
        }}
      >
        View all products
      </StyledButtonLink>
    </StyledWrapper>
  );
}

FeaturedProducts.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      mainimage: PropTypes.string,
      price: PropTypes.number,
      slug: PropTypes.string,
    })
  ).isRequired,
};

export default FeaturedProducts;