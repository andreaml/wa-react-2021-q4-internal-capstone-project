import React from 'react';
import Slider from '../components/Slider';
import CategoriesGrid from '../components/CategoriesGrid';
import FeaturedProducts from '../components/FeaturedProducts';
import productCategories from '../assets/data/product-categories';
import featuredProducts from '../assets/data/featured-products';

function Homepage() {
  return (
    <div>
      <Slider />
      <CategoriesGrid categories={productCategories.results} />
      <FeaturedProducts products={featuredProducts.results} />
    </div>
  );
}

export default Homepage;
