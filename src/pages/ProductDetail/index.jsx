import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductGalleryGrid from '../../components/ProductGalleryGrid';
import StyledButton from '../../components/StyledButton';
import { useCart } from '../../utils/hooks/CartContext';
import useSearchProducts from '../../utils/hooks/useSearchProducts';
import {
  StyledWrapper,
  StyledTitle,
  StyledProductInfoWrapper,
  StyledProductInfo,
  StyledProductInfoTag,
  StyledProductInfoTable,
  StyledProductAddToCartWrapper,
  StyledProductAddToCartInput,
  StyledProductInfoSecondary,
} from './styled';

function ProductDetail() {
  const { productId } = useParams();
  const { data: product, isLoading: isLoadingProduct } = useSearchProducts({
    productId,
  });
  const { cart, addProductToCart } = useCart();
  const currentProductInCart = cart.items.filter(
    (item) => item.id === productId
  )[0];

  const [productCount, setProductCount] = useState(() => {
    let productInCartCount = 1;
    if (currentProductInCart && currentProductInCart.count > 0) {
      productInCartCount = currentProductInCart.count;
    }
    return productInCartCount;
  });

  const handleProductCountChange = (e) => {
    setProductCount(Number(e.target.value));
  };

  const { results: [productItem = {}] = [] } = product;

  return (
    <StyledWrapper isLoading={isLoadingProduct}>
      {!isLoadingProduct && (
        <>
          <StyledTitle>{productItem.data?.name}</StyledTitle>
          <ProductGalleryGrid
            images={productItem.data?.images || []}
            isLoading={isLoadingProduct}
          />
          <StyledProductInfoWrapper>
            <StyledProductInfo>SKU: {productItem.data?.sku}</StyledProductInfo>
            <StyledProductInfo bold>
              ${productItem.data?.price}
              <StyledProductInfoSecondary>
                {productItem.data?.stock > 0 ? 'On stock' : 'Sold out'}
              </StyledProductInfoSecondary>
            </StyledProductInfo>
            <StyledProductInfo>
              Category: {productItem.data?.category.slug}
            </StyledProductInfo>
            <StyledProductInfo>
              {productItem.data?.description?.[0]?.text}
            </StyledProductInfo>
            <StyledProductInfo>
              Tags:
              {productItem.tags?.map((tag) => (
                <StyledProductInfoTag key={`${productId}-tag-${tag}`}>
                  {tag}
                </StyledProductInfoTag>
              ))}
            </StyledProductInfo>
            <StyledProductAddToCartWrapper>
              <StyledProductAddToCartInput
                type="number"
                name="quantity"
                min={0}
                max={productItem.data?.stock}
                inputmode="numeric"
                value={productCount}
                onChange={handleProductCountChange}
                disabled={productItem.data?.stock === 0}
              />
              <StyledButton
                type="button"
                main
                left
                onClick={() => {
                  addProductToCart(productItem, productCount);
                }}
                disabled={productItem.data?.stock === 0}
              >
                {currentProductInCart ? 'Update Cart' : 'Add to Cart'}
              </StyledButton>
            </StyledProductAddToCartWrapper>
            <StyledProductInfoTable>
              <tbody>
                <tr>
                  <th colSpan={2}>Product specifications</th>
                </tr>
                {productItem.data?.specs?.map(
                  ({ spec_name: specName, spec_value: specValue }) => (
                    <tr key={`${productItem.data?.sku}-${specName}`}>
                      <td>{specName}</td>
                      <td>{specValue}</td>
                    </tr>
                  )
                )}
              </tbody>
            </StyledProductInfoTable>
          </StyledProductInfoWrapper>
        </>
      )}
    </StyledWrapper>
  );
}

export default ProductDetail;
