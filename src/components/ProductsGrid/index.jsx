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

function ProductsGrid({
  isLoading,
  products,
  notFoundMessage,
  cardsTemplateColumns,
  showDescription,
}) {
  return (
    <StyledWrapper>
      <StyledProductsWrapper
        isLoading={isLoading}
        cardsTemplateColumns={cardsTemplateColumns}
      >
        {!isLoading && products.length === 0 && (
          <StyledNoResults>
            <PlantIcon />
            <StyledNoResultsTitle>Sorry</StyledNoResultsTitle>
            <p>{notFoundMessage}</p>
          </StyledNoResults>
        )}
        {!isLoading &&
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              showDescription={showDescription}
            />
          ))}
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
  notFoundMessage: PropTypes.string,
  cardsTemplateColumns: PropTypes.string,
  showDescription: PropTypes.bool,
};

ProductsGrid.defaultProps = {
  notFoundMessage: 'No products found with the selected filters',
  cardsTemplateColumns: '',
  showDescription: false,
};

export default ProductsGrid;
