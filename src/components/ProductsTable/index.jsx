import React from 'react';
import PropTypes from 'prop-types';
import { StyledTableProductInfo, StyledTable, StyledTableHead } from './styled';
import ProductsTableRow from './ProductsTableRow';
import StyledButtonLink from '../StyledButtonLink';

function ProductsTable({ products, editable }) {
  let total = 0;
  return (
    <StyledTable display={editable ? 'table' : 'block'}>
      <thead>
        <tr>
          <StyledTableHead>Product Details</StyledTableHead>
          <StyledTableHead>Quantity</StyledTableHead>
          <StyledTableHead right>Unit Price</StyledTableHead>
          <StyledTableHead right>Subtotal</StyledTableHead>
          {editable && <StyledTableHead right>Actions</StyledTableHead>}
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          total += product.data.price * product.count;
          return (
            <ProductsTableRow
              key={product.id}
              product={product}
              editable={editable}
            />
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <StyledTableProductInfo colSpan={3} right bold>
            Total
          </StyledTableProductInfo>
          <StyledTableProductInfo data-testid="cartTotal" right bold>
            ${total.toFixed()}
          </StyledTableProductInfo>
        </tr>
        {editable && (
          <tr>
            <StyledTableProductInfo colSpan={4} right>
              <StyledButtonLink to="/checkout" right="true">
                Proceed to checkout
              </StyledButtonLink>
            </StyledTableProductInfo>
          </tr>
        )}
      </tfoot>
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
  editable: PropTypes.bool,
};

ProductsTable.defaultProps = {
  editable: false,
};

export default ProductsTable;
