import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReactComponent as PlantIcon } from '../../assets/icons/plant.svg';
import ProductGalleryGrid from '../../components/ProductGalleryGrid';
import StyledButton from '../../components/StyledButton';
import { useCart } from '../../utils/hooks/CartContext';
import StyledButtonLink from '../../components/StyledButtonLink';
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
  StyledNoResults,
  StyledNoResultsTitle,
} from './styled';

function ProductDetail() {
  const { productId } = useParams();
  const { data: product, isLoading } = useSearchProducts({
    productId,
  });
  const { cart, setProductCountToCart } = useCart();
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

  const { results: [productItem = {}] = [] } = product;

  const handleProductCountChange = (e) => {
    const newProductCount = Number(e.target.value);
    if (newProductCount > productItem.data?.stock) {
      setProductCount(productItem.data?.stock);
    } else if (newProductCount <= 0) {
      setProductCount(1);
    } else {
      setProductCount(newProductCount);
    }
  };

  return (
    <StyledWrapper isLoading={isLoading}>
      {!isLoading && product?.results?.length === 0 && (
        <StyledNoResults>
          <PlantIcon />
          <StyledNoResultsTitle>Sorry</StyledNoResultsTitle>
          <p>No product found with id &quot;{productId}&quot;</p>
          <StyledButtonLink main center to="/products">
            Go to Products
          </StyledButtonLink>
        </StyledNoResults>
      )}
      {!isLoading && product?.results?.length > 0 && (
        <>
          <StyledTitle>{productItem.data?.name}</StyledTitle>
          <ProductGalleryGrid
            images={productItem.data?.images || []}
            isLoading={isLoading}
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
                min={1}
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
                  setProductCountToCart(productItem, productCount);
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
