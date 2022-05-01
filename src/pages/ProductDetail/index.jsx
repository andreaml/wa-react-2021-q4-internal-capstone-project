import React from 'react';
import { useParams } from 'react-router-dom';
import useSearchProducts from '../../utils/hooks/useSearchProducts';

function ProductDetail() {
  const { productId } = useParams();
  const { data: product, isLoading: isLoadingProduct } = useSearchProducts({
    productId,
  });
  console.log(product, isLoadingProduct);
  return <h1>PDP</h1>;
}

export default ProductDetail;
