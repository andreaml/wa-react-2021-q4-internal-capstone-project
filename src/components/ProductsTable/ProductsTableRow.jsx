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

function ProductsTableRow({ product }) {
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
    <tr key={product.id}>
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
        <StyledProductAddToCartInput
          type="number"
          name="quantity"
          min={1}
          max={product.data.stock}
          inputmode="numeric"
          value={productCount}
          onChange={handleProductCountChange}
        />
      </StyledTableProductInfo>
      <StyledTableProductInfo right>
        ${product.data.price}
      </StyledTableProductInfo>
      <StyledTableProductInfo right>
        ${product.data.price * productCount}
      </StyledTableProductInfo>
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
};

export default ProductsTableRow;
