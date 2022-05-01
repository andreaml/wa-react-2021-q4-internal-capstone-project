import React from 'react';
import { useParams } from 'react-router-dom';
import ProductGalleryGrid from '../../components/ProductGalleryGrid';
import StyledButton from '../../components/StyledButton';
import useSearchProducts from '../../utils/hooks/useSearchProducts';
import { StyledWrapper, StyledTitle, StyledProductInfoWrapper } from './styled';

function ProductDetail() {
  const { productId } = useParams();
  const { data: product, isLoading: isLoadingProduct } = useSearchProducts({
    productId,
  });

  const { results: [productItem = {}] = [] } = product;

  return (
    <StyledWrapper>
      {!isLoadingProduct && (
        <>
          <StyledTitle>{productItem.data?.name}</StyledTitle>
          <ProductGalleryGrid
            images={productItem.data?.images || []}
            isLoading={isLoadingProduct}
          />
          <StyledProductInfoWrapper>
            <p>${productItem.data?.price}</p>
            <p>SKU: {productItem.data?.sku}</p>
            <p>Category: {productItem.data?.category.slug}</p>
            {productItem.tags?.map((tag) => (
              <span key={`${productId}-tag-${tag}`}>{tag}</span>
            ))}
            <p>{productItem.data?.description?.[0]?.text}</p>
            <div>
              <input
                type="number"
                name="quantity"
                min={0}
                max={productItem.data?.stock}
              />
              <StyledButton
                type="button"
                main
                onClick={() => {
                  console.log('add product to cart');
                }}
              >
                Add to Cart
              </StyledButton>
            </div>
            <table>
              <tr>
                <th colSpan={2}>Product specifications</th>
              </tr>
              {productItem.data?.specs?.map(
                ({ spec_name: specName, spec_value: specValue }) => (
                  <tr>
                    <td>{specName}</td>
                    <td>{specValue}</td>
                  </tr>
                )
              )}
            </table>
          </StyledProductInfoWrapper>
        </>
      )}
    </StyledWrapper>
  );
}

export default ProductDetail;
