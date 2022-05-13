import React from 'react';
import Slider from '../components/Slider';
import CategoriesGrid from '../components/CategoriesGrid';
import FeaturedProducts from '../components/FeaturedProducts';
import useProductCategories from '../utils/hooks/useProductCategories';
import useProducts from '../utils/hooks/useProducts';
import useFeaturedBanners from '../utils/hooks/useFeaturedBanners';

function Homepage() {
  const { data: featuredBanners, isLoading: isLoadingFeaturedBanners } =
    useFeaturedBanners();
  const { data: productCategories, isLoading: isLoadingProductCategories } =
    useProductCategories();
  const { data: featuredProducts, isLoading: isLoadingFeaturedProducts } =
    useProducts({ productTags: ['Featured'] });

  return (
    <div>
      <Slider
        featuredBanners={featuredBanners?.results || []}
        isLoading={isLoadingFeaturedBanners}
      />
      <CategoriesGrid
        categories={productCategories?.results || []}
        isLoading={isLoadingProductCategories}
      />
      <FeaturedProducts
        products={featuredProducts?.results || []}
        isLoading={isLoadingFeaturedProducts}
      />
    </div>
  );
}

export default Homepage;
