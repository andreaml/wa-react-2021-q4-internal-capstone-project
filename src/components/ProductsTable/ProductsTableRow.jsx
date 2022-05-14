import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyledTableProductInfo,
  StyledCategoryImage,
  StyledTableProductInfoDetails,
  StyledTrashButton,
} from './styled';
import { ReactComponent as TrashIcon } from '../../assets/icons/trash.svg';
import { StyledProductAddToCartInput } from '../../pages/ProductDetail/styled';
import { useCart } from '../../utils/hooks/CartContext';
import { StyledLink } from '../StyledLinks.styled';

function ProductsTableRow({ product, editable }) {
  const { removeProductFromCart, setProductCountToCart } = useCart();
  const [productCount, setProductCount] = useState(product.count);

  const handleProductCountChange = (e) => {
    const newProductCount = Number(e.target.value);
    if (newProductCount > product.data.stock) {
      setProductCount(product.data.stock);
    } else if (newProductCount <= 0) {
      setProductCount(1);
    } else {
      setProductCount(newProductCount);
    }
  };

  useEffect(() => {
    if (productCount !== product.count) {
      setProductCountToCart(product, productCount);
    }
  }, [productCount]);
  return (
    <tr key={product.id} data-testid="cartProductTableRow">
      <StyledTableProductInfo>
        <StyledTableProductInfoDetails>
          <StyledCategoryImage
            src={product.data.mainimage?.url}
            alt={product.data.mainimage?.alt}
          />
          <StyledLink to={`/product/${product.id}`}>
            {product.data.name}
          </StyledLink>
        </StyledTableProductInfoDetails>
      </StyledTableProductInfo>
      <StyledTableProductInfo>
        {editable && (
          <StyledProductAddToCartInput
            type="number"
            name="quantity"
            min={1}
            max={product.data.stock}
            inputmode="numeric"
            value={productCount}
            onChange={handleProductCountChange}
          />
        )}
        {!editable && productCount}
      </StyledTableProductInfo>
      <StyledTableProductInfo data-testid="productPrice" right>
        ${product.data.price}
      </StyledTableProductInfo>
      <StyledTableProductInfo data-testid="productSubtotal" right>
        ${(product.data.price * productCount).toFixed()}
      </StyledTableProductInfo>
      {editable && (
        <StyledTableProductInfo right>
          <StyledTrashButton
            type="button"
            onClick={() => {
              removeProductFromCart(product.id);
            }}
            title="Remove product"
          >
            <TrashIcon />
          </StyledTrashButton>
        </StyledTableProductInfo>
      )}
    </tr>
  );
}

ProductsTableRow.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    data: PropTypes.shape({
      name: PropTypes.string,
      mainimage: PropTypes.shape({
        alt: PropTypes.string,
        url: PropTypes.string,
      }),
      price: PropTypes.number,
      stock: PropTypes.number,
    }),
    count: PropTypes.number,
  }).isRequired,
  editable: PropTypes.bool,
};

ProductsTableRow.defaultProps = {
  editable: false,
};

export default ProductsTableRow;
