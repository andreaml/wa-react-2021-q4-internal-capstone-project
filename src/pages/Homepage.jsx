import React from 'react';
import Slider from '../components/Slider';
import CategoriesGrid from '../components/CategoriesGrid';
import FeaturedProducts from '../components/FeaturedProducts';
import featuredProducts from '../assets/data/featured-products';
import useProductCategories from '../utils/hooks/useProductCategories';

function Homepage() {
  const { data: productCategories, isLoading: isProductCategoriesLoading } =
    useProductCategories();

  return (
    <div>
      <Slider />
      <CategoriesGrid
        categories={productCategories.results || []}
        isLoading={isProductCategoriesLoading}
      />
      <FeaturedProducts products={featuredProducts.results} />
    </div>
  );
}

export default Homepage;
