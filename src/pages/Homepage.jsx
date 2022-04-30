import React from 'react';
import Slider from '../components/Slider';
import CategoriesGrid from '../components/CategoriesGrid';
import FeaturedProducts from '../components/FeaturedProducts';
import useProductCategories from '../utils/hooks/useProductCategories';
import useProducts from '../utils/hooks/useProducts';

function Homepage() {
  const { data: productCategories, isLoading: isProductCategoriesLoading } =
    useProductCategories();
  const { data: featuredProducts, isLoading: isLoadingFeaturedProducts } =
    useProducts(['Featured']);

  return (
    <div>
      <Slider />
      <CategoriesGrid
        categories={productCategories.results || []}
        isLoading={isProductCategoriesLoading}
      />
      <FeaturedProducts
        products={featuredProducts.results}
        isLoading={isLoadingFeaturedProducts}
      />
    </div>
  );
}

export default Homepage;
