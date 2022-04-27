import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledProductsWrapper,
  StyledWrapper,
  StyledNoResults,
  StyledNoResultsTitle,
} from './styled';
import ProductCard from '../ProductCard';
import { ReactComponent as PlantIcon } from '../../assets/icons/plant.svg';

function ProductsGrid({ isLoading, products }) {
  return (
    <StyledWrapper>
      <StyledProductsWrapper isLoading={isLoading}>
        {!isLoading && products.length === 0 && (
          <StyledNoResults>
            <PlantIcon />
            <StyledNoResultsTitle>Sorry</StyledNoResultsTitle>
            <p>No products found with the selected filters</p>
          </StyledNoResults>
        )}
        {!isLoading &&
          products.map(({ id, data }) => <ProductCard key={id} data={data} />)}
      </StyledProductsWrapper>
    </StyledWrapper>
  );
}

ProductsGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      mainimage: PropTypes.string,
      price: PropTypes.number,
      slug: PropTypes.string,
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default ProductsGrid;
