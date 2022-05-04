import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledTableProductInfo,
  StyledTable,
  StyledTableHead,
  StyledCategoryImage,
  StyledTableProductInfoDetails,
} from './styled';

function ProductsTable({ products }) {
  return (
    <StyledTable>
      <thead>
        <tr>
          <StyledTableHead>Product Details</StyledTableHead>
          <StyledTableHead>Quantity</StyledTableHead>
          <StyledTableHead>Unit Price</StyledTableHead>
          <StyledTableHead>Subtotal</StyledTableHead>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <StyledTableProductInfo>
              <StyledTableProductInfoDetails>
                <StyledCategoryImage
                  src={product.data.mainimage?.url}
                  alt={product.data.mainimage?.alt}
                />
                {product.data.name}
              </StyledTableProductInfoDetails>
            </StyledTableProductInfo>
            <StyledTableProductInfo>{product.count}</StyledTableProductInfo>
            <StyledTableProductInfo>
              ${product.data.price}
            </StyledTableProductInfo>
            <StyledTableProductInfo>
              ${product.data.price * product.count}
            </StyledTableProductInfo>
            <StyledTableProductInfo>Remove</StyledTableProductInfo>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
}

ProductsTable.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
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
      }),
    })
  ).isRequired,
};

export default ProductsTable;
